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
        await this._addressN(data)
        await this._scriptType(data)
        await this._multisig(data)
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

  async signETH(params?: any) {
    params.nonce = Buffer.from(Utils.toHex(params.nonce), 'hex')
    params.gas_price = Buffer.from(Utils.toHex(params.gas_price), 'hex')
    params.gas_limit = Buffer.from(Utils.toHex(params.gas_limit), 'hex')
    params.value = Buffer.from(Utils.toHex(params.value), 'hex')
    const msg = await this.io('EthereumSignTx', params)
    return msg
  }

  async signBTC(params?: any) {
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
      if (msg.type === 'TxRequest') msg = await this._txAck(msg, params)
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

  private async _addressN(params?: any) {
    if (!params) return
    if (typeof params.bip32_path !== 'string' && typeof params.path !== 'string') return // Simplify parameter passing
    const pathStr = params.bip32_path || params.path
    const pathArr = pathStr.match(/\/[0-9]+('|H)?/g)
    if (!pathArr) return
    const address_n = []
    for (const item of pathArr) {
      let id = parseInt(item.match(/[0-9]+/g)[0])
      if (item.match(/('|H)/g)) id = (id | 0x80000000) >>> 0
      address_n.push(id)
    }
    params.address_n = address_n
  }

  private async _scriptType(params?: any) {
    if (!params) return
    if (params.script_type === 'LEGACY') params.script_type = 'SPENDADDRESS'
    if (params.script_type === 'BECH32') params.script_type = 'SPENDWITNESS'
    if (params.script_type === 'P2SH_SEGWIT') params.script_type = 'SPENDP2SHWITNESS'
    if (params.script_type === 'MULTISIG') params.script_type = 'SPENDMULTISIG'
  }

  private async _multisig(params?: any) {
    if (!params) return
    if (!params.multisig) return
    if (!params.multisig.pubkeys) return
    params.multisig.pubkeys.forEach(async (pk: any) => {
      if (typeof pk.path === 'string') await this._addressN(pk)
      if (typeof pk.xpub === 'string') pk.node = Utils.xpubToHDNodeType(pk.xpub)
    })
  }

  private async _fixTx(params?: any) {
    if (params.hash) params.hash = Buffer.from(params.hash, 'hex')
    if (params.prev_hash) params.prev_hash = Buffer.from(params.prev_hash, 'hex')
    if (params.script_sig) params.script_sig = Buffer.from(params.script_sig, 'hex')
    if (params.script_pubkey) params.script_pubkey = Buffer.from(params.script_pubkey, 'hex')
    return params
  }

  private async _txAck(msg: iMsgObj, params: any) {
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
      await this._fixTx(tx)
      result = { inputs: [tx] }
    } else if (type === 'TXOUTPUT') {
      const tx = tmp ? tmp.bin_outputs[index] : params.outputs[index]
      await this._fixTx(tx)
      result = tmp ? { bin_outputs: [tx] } : { outputs: [tx] }
    } else if (type === 'TXMETA') {
      await this._fixTx(tmp)
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
