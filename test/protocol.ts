import test from 'ava'
import Protocol from '../dist/Protocol'

test('protocol', async t => {
  const type = 'TxRequest'
  const data = { request_type: 2 }
  const __ABC1__ = new Protocol(require('../dist/0xabc1.json'), {
    enumname: 'Types',
    prefix: '',
    headString: '$',
    flagString: '##'
  })
  const encode_abc1 = await __ABC1__.encode(type, data)
  const decode_abc1 = await __ABC1__.decode(encode_abc1)
  console.log('ABC1: ', encode_abc1)
  console.log('ABC1: ', decode_abc1)

  const __53C1__ = new Protocol(require('../dist/0x53c1.json'), {
    enumname: 'MessageType',
    prefix: 'MessageType_',
    headString: '?',
    flagString: '##'
  })
  const encode_53c1 = await __53C1__.encode(type, data)
  const decode_53c1 = await __53C1__.decode(encode_53c1)
  console.log('53C1: ', encode_53c1)
  console.log('53C1: ', decode_53c1)

  await new Promise(resolve => setTimeout(resolve, 77))
  t.pass()
})
