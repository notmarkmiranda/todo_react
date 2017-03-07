import { partial } from './utils'

const add = (a, b) => a + // BUG:

test('partial applies the first argument ahead of time', () => {
  const inc = partial(add, 1)
  const result = inc(2) // expect 3
  expect(result).toBe(3)
})
