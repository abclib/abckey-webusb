import Json from './0x53c1.json'
import Protocol from './Protocol'

export default class P53c1 {
  static json = Json
  static conf = {
    enumname: 'MessageType',
    prefix: 'MessageType_',
    headString: '?',
    flagString: '##'
  }
  static device = [
    {
      vendorId: 0x1209,
      productId: 0x53C0
    },
    {
      vendorId: 0x1209,
      productId: 0x53C1
    }
  ]
  static protocol() {
    return new Protocol(this.json, this.conf)
  }
}
