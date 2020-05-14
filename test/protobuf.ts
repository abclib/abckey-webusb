import test from 'ava'
import Protobuf from '../dist/Protobuf'

test('protobuf', async t => {
  const type = 'GetAddress'
  const data = { script_type: 'SPENDP2SHWITNESS' }
  const __ABC1__ = new Protobuf(require('../dist/0xabc1.json'))
  const key_abc1 = await __ABC1__.lookupEnum('Types', 29)
  const val_abc1 = await __ABC1__.lookupEnum('Types', type)
  const encode_abc1 = await __ABC1__.encode(type, data)
  const decode_abc1 = await __ABC1__.decode(type, encode_abc1)
  console.log('ABC1: ', key_abc1)
  console.log('ABC1: ', val_abc1)
  console.log('ABC1: ', encode_abc1)
  console.log('ABC1: ', decode_abc1)

  const __53C1__ = new Protobuf(require('../dist/0x53c1.json'))
  const key_53c1 = await __53C1__.lookupEnum('MessageType', 29)
  const val_53c1 = await __53C1__.lookupEnum('MessageType', 'MessageType_' + type)
  const encode_53c1 = await __ABC1__.encode(type, data)
  const decode_53c1 = await __ABC1__.decode(type, encode_53c1)
  console.log('53C1: ', key_53c1)
  console.log('53C1: ', val_53c1)
  console.log('53C1: ', encode_53c1)
  console.log('53C1: ', decode_53c1)

  await new Promise(resolve => setTimeout(resolve, 77))
  t.pass()
})
