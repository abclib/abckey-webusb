import * as Bip32 from 'bip32'

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

  static toHex = (num: string) => {
    let hex = parseInt(num).toString(16)
    if (hex.length % 2 !== 0) hex = `0${hex}`
    return hex
  }
}
