import { EventEmitter } from 'events'
import Webusb from './webusb'
import Pabc1 from './0xabc1'
import P53c1 from './0x53c1'

interface Options {
  debug?: boolean
}

interface MsgObj {
  type: string,
  data: any
}

export default class ABCKEY extends EventEmitter {
  readonly __DEVICES__ = [
    Pabc1.device,
    P53c1.device
  ]
  __PROTOCOL__ = Pabc1.protocol()
  __WEBUSB__: Webusb
  __MSG__?: MsgObj
  constructor(options: Options) {
    super()
    this.__WEBUSB__ = new Webusb({
      debug: options.debug,
      selectConfiguration: 1,
      claimInterface: 0
    })
    this.loopRead()
  }

  async add() {
    const result = await this.__WEBUSB__.requestDevice(this.__DEVICES__)
    if (!result) return false
    if (result.productId === 0x53c1) this.__PROTOCOL__ = P53c1.protocol()
    else if (result.productId === 0xabc1) this.__PROTOCOL__ = Pabc1.protocol()
    else return false
    this.emit('add', result)
    return true
  }

  cmd(type: string, data?: any) {
    return new Promise<MsgObj>(async (resolve, reject) => {
      try {
        await this.write(type, data)
        if (type === 'WordAck') return resolve({ type: 'Success', data: '' })
        if (type === 'PinMatrixAck') return resolve({ type: 'Success', data: '' })
        if (type === 'PassphraseAck') return resolve({ type: 'Success', data: '' })
        Object.defineProperty(this, '__MSG__', {
          set: async (msg?: MsgObj) => {
            if (msg === undefined) return
            switch (msg.type) {
              case 'PinMatrixRequest':
                break
              case 'PassphraseRequest':
                break
              case 'WordRequest':
                break
              case 'ButtonRequest':
                await this.write('ButtonAck')
                break
              // case 'Failure':
              //   throw msg
              default:
                resolve(msg)
            }
          }
        })
      } catch (err) {
        reject(err)
      }
    })
  }

  onMsg(cb: (msg: any) => void) {
    let arrBuf: Buffer[] = []
    let arrLen = 0
    this.on('read', async e => {
      if (!this.__PROTOCOL__) return
      if (!this.__PROTOCOL__.hasHead(e)) return
      if (this.__PROTOCOL__.hasFlag(e)) {
        arrBuf = []
        arrLen = this.__PROTOCOL__.msgPages(e)
        arrBuf.push(e)
      } else {
        arrBuf.push(e)
      }
      if (arrLen === 0) return
      if (arrLen > arrBuf.length) return
      arrLen = 0
      const result = await this.__PROTOCOL__.decode(arrBuf)
      this.__MSG__ = result
      cb(result)
    })
  }

  onAdd(cb: (event: USBDevice) => void) {
    this.on('add', e => cb(e))
  }

  onErr(cb: (event: USBConnectionEvent) => void) {
    this.__WEBUSB__.onDisconnect(e => cb(e))
  }

  async resetDevice(proto?: any) {
    let msg = await await this.cmd('GetEntropy', { size: 32 })
    if (msg.type === 'Failure') return msg
    const entropy = Buffer.from(msg.data.entropy, 'base64')
    msg = await this.cmd('ResetDevice', proto)
    if (msg.type !== 'EntropyRequest') return msg
    return await this.cmd('EntropyAck', { entropy })
  }

  async signTx(proto?: any) {
    const inputScriptType = {
      SPENDADDRESS: 0,       // standard P2PKH address
      SPENDMULTISIG: 1,      // P2SH multisig address
      EXTERNAL: 2,           // reserved for external inputs (coinjoin)
      SPENDWITNESS: 3,       // native SegWit
      SPENDP2SHWITNESS: 4   // SegWit over P2SH (backward compatible)
    }
    const outputScriptType = {
      PAYTOADDRESS: 0,       // used for all addresses (bitcoin, p2sh, witness)
      PAYTOSCRIPTHASH: 1,    // p2sh address (deprecated; use PAYTOADDRESS)
      PAYTOMULTISIG: 2,      // only for change output
      PAYTOOPRETURN: 3,      // op_return
      PAYTOWITNESS: 4,       // only for change output
      PAYTOP2SHWITNESS: 5,   // only for change output
    }
    for (let item of proto.inputs) {
      item.prev_hash = Buffer.from(item.prev_hash, 'hex')
      item.script_type = item.script_type ? inputScriptType[item.script_type] : 0
    }
    for (let item of proto.outputs) {
      item.script_type = item.script_type ? outputScriptType[item.script_type] : 0
    }
    const txAck = async (msg: MsgObj, proto: any) => {
      switch (msg.data.request_type) {
        case 'TXINPUT':
          const inputs = [proto.inputs[msg.data.details.request_index]]
          return await this.cmd('TxAck', { tx: { inputs } })
        case 'TXOUTPUT':
          const outputs = [proto.outputs[msg.data.details.request_index]]
          return await this.cmd('TxAck', { tx: { outputs } })
        // case 'TXMETA:
        //   break
        // case 'TXFINISHED':
        // case 'TXEXTRADATA:
        //   break
        default:
          return { type: 'Success', data: '' }
      }
    }
    let serialized = []
    let signatures = []
    let serialized_tx = ''
    let msg = await this.cmd('SignTx', {
      coin_name: proto.coin_name,
      inputs_count: proto.inputs.length,
      outputs_count: proto.outputs.length,
      version: proto.version || 1,
      lock_time: proto.lock_time || 0
    })
    while (1) {
      if (msg.data.serialized) serialized.push(msg.data.serialized)
      if (msg.type === 'TxRequest') msg = await txAck(msg, proto)
      if (msg.type === 'Failure') break
      if (msg.type === 'Success') break
    }
    if (msg.type === 'Failure') return msg
    for (let item of serialized) {
      serialized_tx += Buffer.from(item.serialized_tx, 'base64').toString('hex')
      if (!item.signature) continue
      signatures.push(Buffer.from(item.signature, 'base64').toString('hex'))
    }
    const success = {
      type: 'Success',
      data: {
        signatures,
        serialized_tx
      }
    }
    return success
  }

  private async write(type: string, data?: any) {
    this.__MSG__ = undefined
    const outBuf = await this.__PROTOCOL__.encode(type, data)
    for (let buf of outBuf) await this.__WEBUSB__.transferOut(1, buf)
  }

  private async loopRead() {
    while (1) {
      await new Promise(resolve => setTimeout(resolve, 22))
      const inBuf = await this.__WEBUSB__.transferIn(1, 64)
      this.emit('read', inBuf)
    }
  }
}
