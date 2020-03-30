import pbJS from 'protobufjs'

declare global {
  interface JsonFile extends pbJS.INamespace { }
}

export default class Protobuf {
  __ROOT__: any
  constructor(json: JsonFile) {
    this.__ROOT__ = pbJS.Root.fromJSON(json)
  }

  async encode(type: string, data = {}) {
    const pb = this.__ROOT__.lookupTypeOrEnum(type)
    const msg = pb.fromObject(data)
    return pb.encode(msg).finish()
  }

  async decode(type: string, data: Buffer) {
    const msg = this.__ROOT__.lookupTypeOrEnum(type).decode(data).toJSON()
    return { type, data: msg }
  }

  async lookupEnum(path: string, key: number | string) {
    const types = this.__ROOT__.lookupEnum(path)
    if (typeof key === 'number') return types.valuesById[key]
    if (typeof key === 'string') return types.values[key]
  }
}
