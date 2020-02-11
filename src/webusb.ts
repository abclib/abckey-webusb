import { EventEmitter } from 'events'
import Logs from './logs'

interface Options {
  debug?: boolean,
  claimInterface: number
  selectConfiguration: number
}

export default class Webusb extends EventEmitter {
  __WEBUSB__: USBDevice | undefined = undefined
  __OPTIONS__: Options
  constructor(options: Options) {
    super()
    this.__OPTIONS__ = options
    Logs.listen(log => { if (this.__OPTIONS__.debug) console.log(log.id, log.time, log.title, log.data) })
  }

  async requestDevice(filters: Array<USBDeviceFilter>) {
    try {
      const device = await navigator.usb.requestDevice({ filters })
      this.openDevice(device)
      Logs.add(device)
      return device
    } catch (err) {
      Logs.add(err.message)
      return
    }
  }

  onConnect(cb: (event: USBConnectionEvent) => void) {
    navigator.usb.addEventListener('connect', event => {
      Logs.add(event)
      this.openDevice(event.device)
      cb(event)
    })
  }

  onDisconnect(cb: (event: USBConnectionEvent) => void) {
    navigator.usb.addEventListener('disconnect', event => {
      Logs.add(event)
      this.__WEBUSB__ = undefined
      cb(event)
    })
  }

  async getDevices() {
    try {
      const devices = await navigator.usb.getDevices()
      Logs.add(devices)
      return devices
    } catch (err) {
      Logs.add(err.message)
      return
    }
  }

  async transferOut(endpointNumber: number, data: BufferSource) {
    if (!this.__WEBUSB__) return
    const result = await this.__WEBUSB__.transferOut(endpointNumber, data)
    Logs.add(result)
    return result
  }

  async transferIn(endpointNumber: number, length: number) {
    if (!this.__WEBUSB__) return Buffer.alloc(0)
    await this.__WEBUSB__.claimInterface(0)
    const result = await this.__WEBUSB__.transferIn(endpointNumber, length)
    if (!result.data) return Buffer.alloc(0)
    if (result.status === 'stall') await this.__WEBUSB__.clearHalt('in', 1)
    Logs.add(result)
    return Buffer.from(result.data.buffer)
  }

  private async openDevice(device: USBDevice) {
    try {
      await device.open()
      this.__WEBUSB__ = device
      await device.selectConfiguration(this.__OPTIONS__.selectConfiguration)
      await device.claimInterface(this.__OPTIONS__.claimInterface)
    } catch (err) {
      Logs.add(err.message)
    }
  }
}
