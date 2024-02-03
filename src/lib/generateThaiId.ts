import { calculateLastThaiIdDigit } from './calculateLastThaiIdDigit'
import type { TwelveDigitString } from './thaiId.types'

export function getRandom12Digits(): TwelveDigitString {
  return Math.random().toString().slice(2, 14)
}

export function generateThaiId(): string {
  const partialId = getRandom12Digits()
  return partialId + calculateLastThaiIdDigit(partialId)
}
