import type { TwelveDigitString } from './thaiId.types'

export const calculateLastThaiIdDigit = (id: TwelveDigitString): number => {
  if (id.length !== 12) {
    throw new Error('Invalid Thai ID length, requires 12 digits.')
  }

  const sum = id
    .split('')
    .map((char, index) => {
      const digit = parseInt(char, 10)
      const weight = 13 - index
      return digit * weight
    })
    .reduce((acc, value) => acc + value, 0)

  return (11 - (sum % 11)) % 10
}
