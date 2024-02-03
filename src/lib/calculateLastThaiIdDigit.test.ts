import { describe, expect, test } from 'vitest'
import { calculateLastThaiIdDigit } from './calculateLastThaiIdDigit'

describe('calculateLastThaiIdDigit', () => {
  test('returns 9 when passing 111111111111', () => {
    expect(calculateLastThaiIdDigit('111111111111')).toBe(9)
  })

  test('returns 8 when passing 818949466385', () => {
    expect(calculateLastThaiIdDigit('818949466385')).toBe(8)
  })

  test('throws an error when passing other numbers of digits than 12', () => {
    expect(() => calculateLastThaiIdDigit('123')).toThrow()
    expect(() => calculateLastThaiIdDigit('1234567891234')).toThrow()
  })
})
