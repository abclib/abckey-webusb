import { EventEmitter } from 'events'
import Webusb from './webusb'
import Protocol from './protocol'
import Pabc1 from './0xabc1'
import P53c1 from './0x53c1'

interface Options {
  debug?: boolean
}

export default class ABCKEY extends EventEmitter {
  readonly __DEVICES__ = [
    Pabc1.device,
    P53c1.device
  ]
  __WEBUSB__: Webusb
  __PROTOCOL__: Protocol | undefined = undefined
  __DEVICE__: USBDevice | undefined = undefined
  constructor(options: Options) {
    super()
    this.__WEBUSB__ = new Webusb({
      debug: options.debug,
      selectConfiguration: 1,
      claimInterface: 0
    })
  }

  async add() {
    this.__DEVICE__ = await this.__WEBUSB__.requestDevice(this.__DEVICES__)
    if (!this.__DEVICE__) {
      this.__DEVICE__ = undefined
      this.__PROTOCOL__ = undefined
      return
    }
    if (this.__DEVICE__.productId === 0x53c1) this.__PROTOCOL__ = P53c1.protocol()
    if (this.__DEVICE__.productId === 0xabc1) this.__PROTOCOL__ = Pabc1.protocol()
  }

  async cmd(type: string, data: any) {
    if (!this.__DEVICE__) return
    await this.write(type, data)
    await this.read()
  }

  private async write(type: string, data: any) {
    if (!this.__PROTOCOL__) return
    const outBuf = await this.__PROTOCOL__.encode(type, data)
    for (let buf of outBuf) await this.__WEBUSB__.transferOut(1, buf)
  }

  private async read() {
    if (!this.__PROTOCOL__) return
    let arrBuf = []
    const inBuf = await this.__WEBUSB__.transferIn(1, 64)
    if (inBuf.slice(0, 1).toString() !== this.__PROTOCOL__.__MSG_HEAD_STRING__) return
    if (inBuf.slice(1, 3).toString() !== this.__PROTOCOL__.__MSG_FLAG_STRING__) return
    arrBuf.push(inBuf)
    const sizeInt = inBuf.slice(5, 9).readIntBE(0, 4)
    for (let i = 0; i < Math.ceil((sizeInt + 8) / 63) - 1; i++) {
      let tmpBuf = await this.__WEBUSB__.transferIn(1, 64)
      arrBuf.push(tmpBuf)
    }
    return await this.__PROTOCOL__.decode(arrBuf)
  }
}
