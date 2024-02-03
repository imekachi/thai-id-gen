import { describe, expect, test } from 'vitest'
import { generateThaiId, getRandom12Digits } from './generateThaiId'
import { validateThaiId } from './validateThaiId'

describe('getRandom12Digits', () => {
  test('returns a 12 digits number', () => {
    for (let i = 0; i < 1000; i++) {
      const result = getRandom12Digits()
      expect(result).toHaveLength(12)
      expect(result).toMatch(/^\d{12}$/)
    }
  })
})

describe('generateThaiId', () => {
  test('returns a 13 digits number', () => {
    for (let i = 0; i < 100; i++) {
      const result = generateThaiId()
      expect(result).toHaveLength(13)
      expect(result).toMatch(/^\d{13}$/)
    }
  })

  test('returns a valid Thai ID', () => {
    for (let i = 0; i < 100; i++) {
      const id = generateThaiId()
      expect(validateThaiId(id)).toBe(true)
    }
  })
})
