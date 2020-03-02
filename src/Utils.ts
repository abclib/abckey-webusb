import bitGoUTXO from 'bitgo-utxo-lib'
import CoinBook from '@abckey/coinbook'

export default class Utils {
  static HD_HARDENED: number = 0x80000000
  static toHardened = (n: number): number => (n | Utils.HD_HARDENED) >>> 0
  static fromHardened = (n: number): number => (n & ~Utils.HD_HARDENED) >>> 0
  static isMultisigPath = (path?: Array<number>): boolean => Array.isArray(path) && path[0] === Utils.toHardened(48)
  static isSegwitPath = (path?: Array<number>): boolean => Array.isArray(path) && path[0] === Utils.toHardened(49)
  static isBech32Path = (path?: Array<number>): boolean => Array.isArray(path) && path[0] === Utils.toHardened(84)

  static getCoinInfo = (pathOrName: number[] | string) => CoinBook.get(pathOrName)

  static xpubToHDNodeType(xpub: string, network: any) {
    const hd = bitGoUTXO.HDNode.fromBase58(xpub, network)
    return {
      depth: hd.depth,
      child_num: hd.index,
      fingerprint: hd.parentFingerprint,
      public_key: hd.keyPair.getPublicKeyBuffer().toString('hex'),
      chain_code: hd.chainCode.toString('hex')
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
}
