import { describe, expect, test } from 'vitest'
import { validateThaiId } from './validateThaiId'

describe('validateThaiId', () => {
  test('returns true when passing a valid Thai ID', () => {
    expect(validateThaiId('1111111111119')).toBe(true)
  })

  test('returns false when the format is incorrect', () => {
    expect(validateThaiId('123')).toBe(false)
    expect(validateThaiId('1234567891234')).toBe(false)
    expect(validateThaiId('123456a89123')).toBe(false)
  })
})
