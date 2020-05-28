import Webusb from './Webusb'
import Pabc1 from './0xabc1'
import P53c1 from './0x53c1'
import Protocol from './Protocol'

export interface iOptions {
  debug?: boolean
}
export interface iMsgObj {
  type: string,
  data: any
}

export default class Devices extends Webusb {
  readonly __PIDS__ = [
    ...Pabc1.device,
    ...P53c1.device,
  ]
  __PROTOCOL__: Protocol
  __MSG__?: iMsgObj
  constructor(options: iOptions) {
    super()
    this.debug = options.debug
    this.__PROTOCOL__ = Pabc1.protocol()
    this.loopRead()
  }

  protocol(pid: number) {
    if (pid === 0x53c1 || pid === 0x53c0) return P53c1.protocol()
    else if (pid === 0xabc1) return Pabc1.protocol()
    else return false
  }

  async add() {
    const result = await this.requestDevice(this.__PIDS__)
    if (!result) return false
    const protocol = this.protocol(result.productId)
    if (!protocol) return false
    this.__PROTOCOL__ = protocol
    this.emit('add', result)
    return true
  }

  onAdd(cb: (event: USBDevice) => void) {
    this.on('add', e => cb(e))
  }

  onErr(cb: (event: any) => void) {
    this.onError(e => cb(e))
  }

  onMsg(cb: (msg: any) => void) {
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

  async write(type: string, data?: any) {
    this.__MSG__ = undefined
    const outBuf = await this.__PROTOCOL__.encode(type, data)
    await this.transferOut(1, outBuf)
  }

  private async loopRead() {
    while (1) {
      await new Promise(resolve => setTimeout(resolve, 22)) // There may be some impact on system performance here.
      const inBuf = await this.transferIn(1, 64)
      if (!inBuf) break
      this.emit('read', inBuf)
    }
  }
}
