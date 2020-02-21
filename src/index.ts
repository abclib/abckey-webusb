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
  __PROTOCOL__ = P53c1.protocol()
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
    if (!this.__WEBUSB__.serialNumber) return
    return new Promise<MsgObj>(async (resolve, reject) => {
      try {
        await this.write(type, data)
        Object.defineProperty(this, '__MSG__', {
          set: msg => resolve(msg)
        })
      } catch (err) {
        reject(err)
      }
    })
  }

  onMessages(cb: (msg: any) => void) {
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


  onConnect(cb: (event: USBDevice) => void) {
    this.on('add', e => cb(e))
  }

  onDisconnect(cb: (event: USBConnectionEvent) => void) {
    this.__WEBUSB__.onDisconnect(e => cb(e))
  }

  async getPublicKey(path: number[], show_display = false) {
    const data = {
      address_n: [
        (path[0] | 0x80000000) >>> 0,
        (path[1] | 0x80000000) >>> 0,
        (path[2] | 0x80000000) >>> 0
      ],
      script_type: path[0] === 49 ? 4 : 0, // SPENDP2SHWITNESS | PAYTOADDRESS
      show_display
    }
    return await this.cmd('GetPublicKey', data)
  }

  async getAddress(path: number[], show_display = false) {
    const data = {
      address_n: [
        (path[0] | 0x80000000) >>> 0,
        (path[1] | 0x80000000) >>> 0,
        (path[2] | 0x80000000) >>> 0,
        path[3],
        path[4]
      ],
      script_type: path[0] === 49 ? 4 : 0, // SPENDP2SHWITNESS | PAYTOADDRESS
      show_display
    }
    return await this.cmd('GetAddress', data)
  }

  async signTransaction(coin_name: string, inputs: Array<any>, outputs: Array<any>) {
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
    for (let item of inputs) {
      item.prev_hash = Buffer.from(item.prev_hash, 'hex')
      item.script_type = item.script_type ? inputScriptType[item.script_type] : 0
    }
    for (let item of outputs) {
      item.script_type = item.script_type ? outputScriptType[item.script_type] : 0
    }
    const txAck = async (msg: MsgObj, inputs: Array<any>, outputs: Array<any>) => {
      switch (msg.data.request_type) {
        case 0: // TXINPUT
          inputs = [inputs[msg.data.details.request_index]]
          return await this.cmd('TxAck', { tx: { inputs } })
        case 1: // TXOUTPUT
          outputs = [outputs[msg.data.details.request_index]]
          return await this.cmd('TxAck', { tx: { outputs } })
        // case 2: // TXMETA
        //   break
        case 3: // TXFINISHED
          return
        // case 4: // TXEXTRADATA
        //   break
        default:
          return
      }
    }
    let serialized = []
    let signatures = []
    let serialized_tx = ''
    let msg = await this.cmd('SignTx', {
      coin_name,
      inputs_count: inputs.length,
      outputs_count: outputs.length,
      version: 1,
      lock_time: 0
    })
    while (1) {
      if (msg && msg.type === 'TxRequest') msg = await txAck(msg, inputs, outputs)
      if (msg && msg.type === 'ButtonRequest') msg = await this.cmd('ButtonAck')
      if (msg && msg.type === 'Failure') break
      if (msg && msg.data.serialized) serialized.push(msg.data.serialized)
      if (!msg) break
    }
    for (let item of serialized) {
      serialized_tx += Buffer.from(item.serialized_tx, 'base64').toString('hex')
      if (!item.signature.length) continue
      signatures.push(Buffer.from(item.signature).toString('hex'))
    }
    return {
      signatures,
      serialized_tx
    }
  }

  async applySettings(option: any) {
    const msg = await this.cmd('ApplySettings', option)
    if (msg && msg.type === 'ButtonRequest') return await this.cmd('ButtonAck')
    return msg
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
