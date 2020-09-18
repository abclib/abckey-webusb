import test from 'ava'
import Utils from '../dist/Utils'

test('utils', t => {
  const t1 = Utils.xpubToHDNodeType('xpub6As9EQf9XfAyjhjJXo3Pdp82VHwprSEjPAqhXM5oapns3xbyLAUL9AUaJL3hqXSNpfJpw1PwysarPgMN6jYbRgMbf8tj8iHz6GDkL81mdmj')
  const t2 = Utils.xpubToHDNodeType('tpubDCjw5dJGkdrdKseKjE6PYA4ABSZxbnVH4yE3tzNMcVcD6XikYYr1XzSGUYKufJ1rq5R2mhqqaaWW76w3MeTJWRm5aGobVj6xaDrSB5fEnF4', {
    bech32: 'tb',
    bip32: {
      public: 70617039, // xpub_magic
      private: 70615956 // xprv_magic
    },
    messagePrefix: 'Bitcoin Signed Message:\n',
    pubKeyHash: 111, // address_type
    scriptHash: 196, // address_type_p2sh
    wif: 0x80 // doesn't matter, for type correctness
  })
  console.log(t1)
  console.log(t2)
  t.pass()
})
