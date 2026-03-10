import assert from 'node:assert/strict'
import { sum } from './index.js'

describe('sum', () => {
  it('should add 1 + 2 to equal 3', () => {
    assert.equal(sum(1, 2), 3)
  })

  it('should add decimal numbers', () => {
    assert.equal(sum(1.5, 2.5), 4)
  })
})
