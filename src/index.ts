import { EventEmitter } from 'events'
import Webusb from './webusb'
import Pabc1 from './0xabc1'
import P53c1 from './0x53c1'

interface Options {
  debug?: boolean
}

interface MsgObj {
  type: string,
  data: any
}

export default class ABCKEY extends EventEmitter {
  readonly __DEVICES__ = [
    Pabc1.device,
    P53c1.device
  ]
  __WEBUSB__: Webusb
  __PROTOCOL__ = P53c1.protocol()
  __MSG__?: MsgObj
  constructor(options: Options) {
    super()
    this.__WEBUSB__ = new Webusb({
      debug: options.debug,
      selectConfiguration: 1,
      claimInterface: 0
    })
    this.loopRead()
  }

  async add() {
    const result = await this.__WEBUSB__.requestDevice(this.__DEVICES__)
    if (!result) return false
    if (result.productId === 0x53c1) this.__PROTOCOL__ = P53c1.protocol()
    else if (result.productId === 0xabc1) this.__PROTOCOL__ = Pabc1.protocol()
    else return false
    this.emit('add', result)
    return true
  }

  cmd(type: string, data?: any) {
    if (!this.__WEBUSB__.serialNumber) return
    return new Promise<MsgObj>(async (resolve, reject) => {
      try {
        await this.write(type, data)
        Object.defineProperty(this, '__MSG__', {
          set: msg => resolve(msg)
        })
      } catch (err) {
        reject(err)
      }
    })
  }

  onRead(cb: (msg: any) => void) {
    this.on('read', msg => cb(msg))
  }

  onConnect(cb: (event: USBDevice) => void) {
    this.on('add', e => cb(e))
  }

  onDisconnect(cb: (event: USBConnectionEvent) => void) {
    this.__WEBUSB__.onDisconnect(e => cb(e))
  }

  async getPublicKey(path: number[], showDisplay = false) {
    const data = {
      addressN: [
        (path[0] | 0x80000000) >>> 0,
        (path[1] | 0x80000000) >>> 0,
        (path[2] | 0x80000000) >>> 0
      ],
      scriptType: path[0] === 49 ? 4 : 0, // SPENDP2SHWITNESS | PAYTOADDRESS
      showDisplay
    }
    return await this.cmd('GetPublicKey', data)
  }

  async getAddress(path: number[], showDisplay = false) {
    const data = {
      addressN: [
        (path[0] | 0x80000000) >>> 0,
        (path[1] | 0x80000000) >>> 0,
        (path[2] | 0x80000000) >>> 0,
        path[3],
        path[4]
      ],
      scriptType: path[0] === 49 ? 4 : 0, // SPENDP2SHWITNESS | PAYTOADDRESS
      showDisplay
    }
    return await this.cmd('GetAddress', data)
  }

  async applySettings(option: object) {
    const result = await this.cmd('ApplySettings', option)
    if (!result) return result
    if (result.type === 'ButtonRequest') return await this.cmd('ButtonAck')
    return result
  }

  private async write(type: string, data?: any) {
    this.__MSG__ = undefined
    const outBuf = await this.__PROTOCOL__.encode(type, data)
    for (let buf of outBuf) await this.__WEBUSB__.transferOut(1, buf)
  }

  private async loopRead() {
    while (1) {
      await new Promise(resolve => setTimeout(resolve, 222))
      let arrBuf = []
      const inBuf = await this.__WEBUSB__.transferIn(1, 64)
      if (inBuf.slice(0, 1).toString() !== this.__PROTOCOL__.__MSG_HEAD_STRING__) continue
      if (inBuf.slice(1, 3).toString() !== this.__PROTOCOL__.__MSG_FLAG_STRING__) continue
      arrBuf.push(inBuf)
      const sizeInt = inBuf.slice(5, 9).readIntBE(0, 4)
      for (let i = 0; i < Math.ceil((sizeInt + 8) / 63) - 1; i++) {
        let tmpBuf = await this.__WEBUSB__.transferIn(1, 64)
        arrBuf.push(tmpBuf)
      }
      const result = await this.__PROTOCOL__.decode(arrBuf)
      this.__MSG__ = result
      this.emit('read', result)
    }
  }
}
