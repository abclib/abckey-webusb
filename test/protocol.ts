import test from 'ava'
import Protocol from '../dist/Protocol'

test('protocol', async t => {
  const enumname = 'MessageType'
  const type = 'Ping'
  const data = { message: 'test' }
  const __PROTOCOL__ = new Protocol(require('../dist/0x53c1.json'), {
    enumname,
    headString: '?',
    flagString: '@@@'
  })

  const encode = await __PROTOCOL__.encode(type, data)
  const decode = await __PROTOCOL__.decode(encode)
  console.log(encode)
  console.log(decode)

  await new Promise(resolve => setTimeout(resolve, 77))
  t.pass()
})
