import * as Bip32 from 'bip32'
import { Transaction } from 'ethereumjs-tx'

export default class Utils {
  static HD_HARDENED: number = 0x80000000
  static toHardened = (n: number): number => (n | Utils.HD_HARDENED) >>> 0
  static fromHardened = (n: number): number => (n & ~Utils.HD_HARDENED) >>> 0
  static isMultisigPath = (path?: Array<number>): boolean => Array.isArray(path) && path[0] === Utils.toHardened(48)
  static isSegwitPath = (path?: Array<number>): boolean => Array.isArray(path) && path[0] === Utils.toHardened(49)
  static isBech32Path = (path?: Array<number>): boolean => Array.isArray(path) && path[0] === Utils.toHardened(84)

  static xpubToHDNodeType(xpub: string) {
    const hd = Bip32.fromBase58(xpub)
    return {
      depth: hd.depth,
      child_num: hd.index,
      fingerprint: hd.parentFingerprint,
      public_key: hd.publicKey,
      chain_code: hd.chainCode
    }
  }

  static getScriptType = (path?: Array<number>) => {
    if (!Array.isArray(path) || path.length < 1) return 'SPENDADDRESS'
    const p1 = Utils.fromHardened(path[0])
    switch (p1) {
      case 48:
        return 'SPENDMULTISIG';
      case 49:
        return 'SPENDP2SHWITNESS';
      case 84:
        return 'SPENDWITNESS';
      default:
        return 'SPENDADDRESS';
    }
  }

  static padToEven = (val: string) => {
    if (/^[0-9]+$/.test(val)) val = parseInt(val).toString(16)
    if (val.length % 2) val = `0${val}`
    return val
  }

  static ethTx = (params: any, rsv: any) => {
    const r = Buffer.from(rsv.r, 'base64')
    const s = Buffer.from(rsv.s, 'base64')
    const v = Utils.padToEven(rsv.v)
    const tx = {
      nonce: '0x' + params.nonce.toString('hex'),
      gasPrice: '0x' + params.gas_price.toString('hex'),
      gasLimit: '0x' + params.gas_limit.toString('hex'),
      to: params.to.toString('hex'),
      value: '0x' + params.value.toString('hex'),
      r: '0x' + r.toString('hex'),
      s: '0x' + s.toString('hex'),
      v: '0x' + v
    }
    console.log(tx)
    return '0x' + (new Transaction(tx).serialize().toString('hex'))
  }
}
