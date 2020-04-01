import { EventEmitter } from 'events'
import Logs from './Logs'

export default class Webusb extends EventEmitter {
  productId?: number
  serialNumber?: string
  debug?: boolean
  selectConfiguration: number
  claimInterface: number
  private __DEVICE__?: USBDevice

  constructor() {
    super()
    this.selectConfiguration = 1
    this.claimInterface = 0
    Logs.listen(log => { if (this.debug) console.log(log.id, log.time, log.title, log.data) })
    this.on('error', e => Logs.add(e.message))
    navigator.usb && navigator.usb.addEventListener('disconnect', e => {
      this.__DEVICE__ = undefined
      this.productId = undefined
      this.serialNumber = undefined
      const err = {
        ...e,
        message: 'Device disconnected'
      }
      this.emit('error', err)
    })
  }

  async requestDevice(filters: Array<USBDeviceFilter>) {
    try {
      const device = await navigator.usb.requestDevice({ filters })
      const opened = await this.openDevice(device)
      if (!opened) throw new Error('Unable to open device.')
      Logs.add('requestDevice', device)
      return device
    } catch (e) {
      this.emit('error', e)
      return
    }
  }

  onConnect(cb: (e: USBConnectionEvent) => void) {
    navigator.usb.addEventListener('connect', async e => {
      Logs.add('connect', e)
      const opened = await this.openDevice(e.device)
      if (!opened) return
      cb(e)
    })
  }

  onError(cb: (e: any) => void) {
    this.on('error', e => cb(e))
  }

  async getDevices() {
    try {
      const devices = await navigator.usb.getDevices()
      Logs.add('getDevices', devices)
      return devices
    } catch (e) {
      this.emit('error', e)
      return
    }
  }

  async transferOut(endpointNumber: number, data: ArrayBuffer[]) {
    try {
      if (!this.__DEVICE__) throw new Error('Unpaired device.')
      for (let buf of data) {
        Logs.add('transferOut', Buffer.from(buf).toString('hex'))
        const result = await this.__DEVICE__.transferOut(endpointNumber, buf)
        if (result.status !== 'ok') throw new Error(`${result.status}.`)
      }
    } catch (e) {
      this.emit('error', e)
    }
  }

  async transferIn(endpointNumber: number, length: number) {
    try {
      if (!this.__DEVICE__) return Buffer.alloc(0)
      const result = await this.__DEVICE__.transferIn(endpointNumber, length)
      if (!result.data) return Buffer.alloc(0)
      if (result.status === 'stall') await this.__DEVICE__.clearHalt('in', 1)
      const buf = Buffer.from(result.data.buffer)
      if (buf.length) Logs.add('transferIn ', buf.toString('hex'))
      return buf
    } catch (e) {
      this.emit('error', e)
      return Buffer.alloc(0)
    }
  }

  private async openDevice(device: USBDevice) {
    await device.open()
    if (!device.opened) return false
    await device.selectConfiguration(this.selectConfiguration)
    await device.claimInterface(this.claimInterface)
    this.__DEVICE__ = device
    this.productId = device.productId
    this.serialNumber = device.serialNumber
    return true
  }
}
