import Webusb from './Webusb'
import Protocol from '@abckey/protocol'

export interface iOptions {
  debug?: boolean
}
export interface iMsgObj {
  type: string,
  data: any
}

export default class Devices extends Webusb {
  __PROTOCOL__ = Protocol.pid(0xabc1)
  __MSG__?: iMsgObj
  constructor(options: iOptions) {
    super()
    this.debug = options.debug
    this.loopRead()
  }

  async add() {
    const result = await this.requestDevice(Protocol.pids)
    if (!result) return false
    const protocol = Protocol.pid(result.productId)
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
