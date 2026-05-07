const metricLengthUnits = [
  'millimeter',
  'centimeter',
  'meter',
  'kilometer'
] as const

const imperialLengthUnits = ['inch', 'foot', 'yard', 'mile'] as const

export const lengthUnits = [...metricLengthUnits, ...imperialLengthUnits]

export type LengthUnits = (typeof lengthUnits)[number]

export const lengthUnitSymbols = {
  millimeter: 'mm',
  centimeter: 'cm',
  meter: 'm',
  kilometer: 'km',
  inch: 'in',
  foot: 'ft',
  yard: 'yd',
  mile: 'mi'
} satisfies Record<LengthUnits, string>

export const lengthConversionMatrix = {
  millimeter: {
    millimeter: 1,
    centimeter: 1 / 10,
    meter: 1 / 1_000,
    kilometer: 1 / 1_000_000,
    inch: 1 / 25.4,
    foot: 1 / 304.8,
    yard: 1 / 914.4,
    mile: 1 / 1_609_000
  },
  centimeter: {
    millimeter: 10,
    centimeter: 1,
    meter: 1 / 100,
    kilometer: 1 / 100_000,
    inch: 1 / 2.54,
    foot: 1 / 30.48,
    yard: 1 / 91.44,
    mile: 1 / 160_900
  },
  meter: {
    millimeter: 1_000,
    centimeter: 100,
    meter: 1,
    kilometer: 1 / 1_000,
    inch: 39.37,
    foot: 3.281,
    yard: 1.094,
    mile: 1 / 1_609
  },
  kilometer: {
    millimeter: 1_000_000,
    centimeter: 100_000,
    meter: 1_000,
    kilometer: 1,
    inch: 39_370,
    foot: 3_281,
    yard: 1_094,
    mile: 1 / 1.609
  },
  inch: {
    millimeter: 25.4,
    centimeter: 2.54,
    meter: 1 / 39.37,
    kilometer: 1 / 39_370,
    inch: 1,
    foot: 1 / 12,
    yard: 1 / 36,
    mile: 1 / 63_360
  },
  foot: {
    millimeter: 304.8,
    centimeter: 30.48,
    meter: 1 / 3.281,
    kilometer: 1 / 3_281,
    inch: 12,
    foot: 1,
    yard: 1 / 3,
    mile: 1 / 5_280
  },
  yard: {
    millimeter: 914.4,
    centimeter: 91.44,
    meter: 1 / 1.094,
    kilometer: 1 / 1_094,
    inch: 36,
    foot: 3,
    yard: 1,
    mile: 1 / 1_760
  },
  mile: {
    millimeter: 1_609_000,
    centimeter: 160_900,
    meter: 1_609,
    kilometer: 1.609,
    inch: 63_360,
    foot: 5_280,
    yard: 1_760,
    mile: 1
  }
} satisfies Record<LengthUnits, Record<LengthUnits, number>>

export function convertLength(
  value: number,
  fromUnit: LengthUnits,
  toUnit: LengthUnits
): number {
  if (fromUnit === toUnit) return value
  return value * lengthConversionMatrix[fromUnit][toUnit]
}
