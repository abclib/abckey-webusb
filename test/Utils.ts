import test from 'ava'
import Utils from '../dist/Utils'

test('utils', t => {
  const HDnode = Utils.xpubToHDNodeType('xpub6FqwRo2gv7yDGYyebKNKywwJViJZCAdpJdAZsT5KWHQShPxjqhg4vnVGxB4nuhtueEamxA5USG7SFvyTnbtFhjMDtYk1zLxiV6Sm8YY4fzP')
  console.log(HDnode)
  t.pass()
})
