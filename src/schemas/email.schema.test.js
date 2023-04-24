import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import { verifyEmailSchema } from './email.schema.js'

describe('verify email schema', () => {
  it('should return false if given undefined argument', async () => {
    const result = await verifyEmailSchema()
    assert.ok(!result, 'it is true')
  })
})
