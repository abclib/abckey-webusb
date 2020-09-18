import * as Bip32 from 'bip32'
import { Transaction } from 'ethereumjs-tx'
import { BN } from 'ethereumjs-util'

export interface Network {
  wif: number;
  bip32: {
    public: number;
    private: number;
  };
  messagePrefix?: string;
  bech32?: string;
  pubKeyHash?: number;
  scriptHash?: number;
}

export default class Utils {
  static HD_HARDENED: number = 0x80000000
  static toHardened = (n: number): number => (n | Utils.HD_HARDENED) >>> 0
  static fromHardened = (n: number): number => (n & ~Utils.HD_HARDENED) >>> 0
  static isMultisigPath = (path?: Array<number>): boolean => Array.isArray(path) && path[0] === Utils.toHardened(48)
  static isSegwitPath = (path?: Array<number>): boolean => Array.isArray(path) && path[0] === Utils.toHardened(49)
  static isBech32Path = (path?: Array<number>): boolean => Array.isArray(path) && path[0] === Utils.toHardened(84)

  static xpubToHDNodeType(xpub: string, network?: Network | undefined) {
    const hd = Bip32.fromBase58(xpub, network)
    return {
      depth: hd.depth,
      child_num: hd.index,
      fingerprint: hd.parentFingerprint,
      public_key: hd.publicKey,
      chain_code: hd.chainCode
    }
  }

  static int2hex = (num: string | number | BN) => {
    let res = new BN(num).toString(16)
    if (res.length % 2 !== 0) res = `0${res}`
    return res
  }

  static ethTx = (params: any, rsv: any) => {
    const r = Buffer.from(rsv.r, 'base64').toString('hex')
    const s = Buffer.from(rsv.s, 'base64').toString('hex')
    const v = Utils.int2hex(rsv.v)
    const tx = {
      to: params.to,
      value: `0x${params.value}`,
      nonce: `0x${params.nonce}`,
      gasPrice: `0x${params.gas_price}`,
      gasLimit: `0x${params.gas_limit}`,
      data: params.erc20 ? `0x${params.data.toString('hex')}` : undefined,
      r: `0x${r}`,
      s: `0x${s}`,
      v: `0x${v}`
    }
    return `0x${(new Transaction(tx, { chain: parseInt(params.chain_id) }).serialize().toString('hex'))}`
  }
}
