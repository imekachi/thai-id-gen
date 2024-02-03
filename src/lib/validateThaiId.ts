import { calculateLastThaiIdDigit } from './calculateLastThaiIdDigit'
import type { TwelveDigitString } from './thaiId.types'

export function validateThaiId(id: string): boolean {
  // Check if the format is correct
  const regex = /^\d{13}$/
  const isFormatCorrect = regex.test(id)
  if (!isFormatCorrect) return false

  // Recalculate the last digit
  const partialId = id.slice(0, 12) as TwelveDigitString
  const correctLastDigit = calculateLastThaiIdDigit(partialId)

  // Check if the last digit is correct
  return correctLastDigit.toString() === id[12]
}
