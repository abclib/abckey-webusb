import Devices, {
  iOptions,
  iMsgObj
} from './Devices'
import Utils from './Utils'

export default class ABCKEY extends Devices {
  constructor(options: iOptions) {
    super(options)
  }

  cmd(type: string, data?: any) {
    return new Promise<iMsgObj>(async (resolve, reject) => {
      try {
        await this.write(type, data)
        if (type === 'WordAck') return resolve({ type: 'Success', data: '' })
        if (type === 'PinMatrixAck') return resolve({ type: 'Success', data: '' })
        if (type === 'PassphraseAck') return resolve({ type: 'Success', data: '' })
        Object.defineProperty(this, '__MSG__', {
          set: async (msg?: iMsgObj) => {
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


  private _fixInputScriptType(params?: any) {
    params.script_type = params.script_type || Utils.getScriptType(params.address_n) || 'SPENDADDRESS'
    if (params.script_type === 'SPENDMULTISIG' && !params.multisig) params.script_type = 'SPENDADDRESS'
    return params
  }

  private _fixOutputScriptType(params?: any) {
    params.script_type = params.script_type || Utils.getScriptType(params.address_n) || 'PAYTOADDRESS'
    if (params.script_type === 'PAYTOMULTISIG' && !params.multisig) params.script_type = 'PAYTOADDRESS'
    return params
  }

  private _fixMultisig(params?: any) {
    if (!params.multisig || !params.multisig.pubkeys) return params
    params.multisig.pubkeys.forEach((pk: any) => {
      if (typeof pk.node === 'string') pk.node = Utils.xpubToHDNodeType(pk.node)
    })
    return params
  }

  /**
  * Bitcoin and Bitcoin-like
  * Display requested address derived by given BIP32 path on device and returns it to caller.
  * User is asked to confirm the export on device.
  */
  async getAddr(params?: any) {
    this._fixInputScriptType(params)
    this._fixMultisig(params)
    return await this.cmd('GetAddress', params)
  }

  /**
  * Performs device setup and generates a new seed.
  */
  async resetDevice(params: any) {
    let msg = await this.cmd('GetEntropy', { size: 32 })
    if (msg.type === 'Failure') return msg
    const entropy = Buffer.from(msg.data.entropy, 'base64')
    msg = await this.cmd('ResetDevice', params)
    if (msg.type !== 'EntropyRequest') return msg
    return await this.cmd('EntropyAck', { entropy })
  }

  async signTx(params?: any) {
    for (let item of params.inputs) {
      item.prev_hash = Buffer.from(item.prev_hash, 'hex')
    }
    const txAck = async (msg: iMsgObj, params: any) => {
      switch (msg.data.request_type) {
        case 'TXINPUT':
          const input = params.inputs[msg.data.details.request_index]
          this._fixInputScriptType(input)
          this._fixMultisig(input)
          const inputs = [input]
          return await this.cmd('TxAck', { tx: { inputs } })
        case 'TXOUTPUT':
          const output = params.outputs[msg.data.details.request_index]
          this._fixOutputScriptType(output)
          this._fixMultisig(output)
          const outputs = [output]
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
      coin_name: params.coin_name,
      inputs_count: params.inputs.length,
      outputs_count: params.outputs.length,
      version: params.version || 1,
      lock_time: params.lock_time || 0
    })
    while (1) {
      if (msg.data.serialized) serialized.push(msg.data.serialized)
      if (msg.type === 'TxRequest') msg = await txAck(msg, params)
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
}
