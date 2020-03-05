import test from 'ava'
import Protobuf from '../dist/Protobuf'

test('protobuf', async t => {
  const __PROTOBUF__ = new Protobuf(require('../dist/0xabc1.json'))
  const enumname = 'Types'
  const type = 'GetAddress'
  const data = { script_type: 'SPENDP2SHWITNESS' }
  const encode = await __PROTOBUF__.encode(type, data)
  const decode = await __PROTOBUF__.decode(type, encode)
  const key = await __PROTOBUF__.lookupEnum(enumname, 29)
  const val = await __PROTOBUF__.lookupEnum(enumname, type)
  console.log(encode)
  console.log(decode)
  console.log(key)
  console.log(val)

  await new Promise(resolve => setTimeout(resolve, 77))
  t.pass()
})
