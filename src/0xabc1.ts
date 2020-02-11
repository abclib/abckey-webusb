import Json from './0xabc1.json'
import Protocol from './protocol'

export default class Pabc1 {
  static json = Json
  static conf = {
    enumname: 'Types',
    headString: '$',
    flagString: '##'
  }
  static device = {
    vendorId: 0x1209,
    productId: 0xABC1
  }
  static protocol() {
    return new Protocol(this.json, this.conf)
  }
}
