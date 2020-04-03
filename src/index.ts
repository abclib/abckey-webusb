import Devices, {
  iOptions,
  iMsgObj
} from './Devices'
import Utils from './Utils'

export default class ABCKEY extends Devices {
  constructor(options: iOptions) {
    super(options)
  }

  async cmd(type: string, data?: any, init?: boolean) {
    if (init) await this.io('Initialize')
    return await this.io(type, data)
  }

  private io(type: string, data?: any) {
    return new Promise<iMsgObj>(async (resolve, reject) => {
      try {
        await this.write(type, data)
        // if (type === 'WordAck') return resolve({ type: 'Success', data: '' })
        // if (type === 'PinMatrixAck') return resolve({ type: 'Success', data: '' })
        // if (type === 'PassphraseAck') return resolve({ type: 'Success', data: '' })
        Object.defineProperty(this, '__MSG__', {
          set: async (msg?: iMsgObj) => {
            if (msg === undefined) return
            switch (msg.type) {
              case 'PinMatrixRequest':
                break
              case 'PassphraseRequest':
                break
              // case 'WordRequest':
              //   break
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

  /**
  * Bitcoin and Bitcoin-like
  * Display requested address derived by given BIP32 path on device and returns it to caller.
  * User is asked to confirm the export on device.
  */
  async getAddr(params?: any) {
    this._fixTx(params)
    return await this.io('GetAddress', params)
  }

  /**
  * Performs device setup and generates a new seed.
  */
  async resetDevice(params: any) {
    let msg = await this.io('GetEntropy', { size: 32 })
    if (msg.type === 'Failure') return msg
    const entropy = Buffer.from(msg.data.entropy, 'base64')
    msg = await this.io('ResetDevice', params)
    if (msg.type !== 'EntropyRequest') return msg
    return await this.io('EntropyAck', { entropy })
  }

  async signTx(params?: any) {
    let serialized = []
    let signatures = []
    let serialized_tx = ''
    let msg = await this.io('SignTx', {
      coin_name: params.coin_name,
      inputs_count: params.inputs.length,
      outputs_count: params.outputs.length,
      version: params.version || 1,
      lock_time: params.lock_time || 0
    })
    while (1) {
      if (msg.type === 'TxRequest') msg = await this.txAck(msg, params)
      if (msg.type === 'Failure') break
      if (msg.data.serialized) serialized.push(msg.data.serialized)
      if (msg.data.request_type === 'TXFINISHED') break
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

  private _fixTx(params?: any) {
    if (params.address_n) params.script_type = params.script_type || Utils.getScriptType(params.address_n)
    if (params.multisig && params.multisig.pubkeys) {
      params.multisig.pubkeys.forEach((pk: any) => {
        if (typeof pk.node === 'string') pk.node = Utils.xpubToHDNodeType(pk.node)
      })
    }
    if (params.hash) params.hash = Buffer.from(params.hash, 'hex')
    if (params.prev_hash) params.prev_hash = Buffer.from(params.prev_hash, 'hex')
    if (params.script_sig) params.script_sig = Buffer.from(params.script_sig, 'hex')
    if (params.script_pubkey) params.script_pubkey = Buffer.from(params.script_pubkey, 'hex')
    return params
  }

  private async txAck(msg: iMsgObj, params: any) {
    let result = null
    let type = msg.data.request_type
    let hash = msg.data.details.tx_hash && Buffer.from(msg.data.details.tx_hash, 'base64').toString('hex')
    let index = msg.data.details.request_index
    let tmp = null
    if (hash) {
      for (let item of params.utxo) {
        if (Buffer.from(item.hash, 'hex').toString('hex') === hash) {
          tmp = item
          break
        }
      }
    }
    if (type === 'TXINPUT') {
      const tx = tmp ? tmp.inputs[index] : params.inputs[index]
      this._fixTx(tx)
      result = { inputs: [tx] }
    } else if (type === 'TXOUTPUT') {
      const tx = tmp ? tmp.bin_outputs[index] : params.outputs[index]
      this._fixTx(tx)
      result = tmp ? { bin_outputs: [tx] } : { outputs: [tx] }
    } else if (type === 'TXMETA') {
      this._fixTx(tmp)
      result = {
        version: tmp.version,
        lock_time: tmp.lock_time,
        inputs_cnt: tmp.inputs.length,
        outputs_cnt: tmp.bin_outputs.length
      }
    }
    return await this.io('TxAck', { tx: result })
  }
}
