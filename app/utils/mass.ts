const metricMassUnits = [
  'milligram',
  'gram',
  'kilogram',
  'metricTon'
] as const

const imperialMassUnits = ['ounce', 'pound', 'stone', 'usTon'] as const

export const massUnits = [...metricMassUnits, ...imperialMassUnits]

export type MassUnits = (typeof massUnits)[number]

export const massUnitSymbols = {
  milligram: 'mg',
  gram: 'g',
  kilogram: 'kg',
  metricTon: 't',
  ounce: 'oz',
  pound: 'lb',
  stone: 'st',
  usTon: 'ton'
} satisfies Record<MassUnits, string>

export const massConversionMatrix = {
  milligram: {
    milligram: 1,
    gram: 1 / 1_000,
    kilogram: 1 / 1_000_000,
    metricTon: 1 / 1_000_000_000,
    ounce: 1 / 28_349.5,
    pound: 1 / 453_592,
    stone: 1 / 6_350_293,
    usTon: 1 / 907_184_740
  },
  gram: {
    milligram: 1_000,
    gram: 1,
    kilogram: 1 / 1_000,
    metricTon: 1 / 1_000_000,
    ounce: 1 / 28.3495,
    pound: 1 / 453.592,
    stone: 1 / 6_350.293,
    usTon: 1 / 907_184.74
  },
  kilogram: {
    milligram: 1_000_000,
    gram: 1_000,
    kilogram: 1,
    metricTon: 1 / 1_000,
    ounce: 35.274,
    pound: 2.205,
    stone: 1 / 6.3503,
    usTon: 1 / 907.18474
  },
  metricTon: {
    milligram: 1_000_000_000,
    gram: 1_000_000,
    kilogram: 1_000,
    metricTon: 1,
    ounce: 35_274,
    pound: 2_205,
    stone: 157.47,
    usTon: 1.1023
  },
  ounce: {
    milligram: 28_349.5,
    gram: 28.3495,
    kilogram: 1 / 35.274,
    metricTon: 1 / 35_274,
    ounce: 1,
    pound: 1 / 16,
    stone: 1 / 224,
    usTon: 1 / 32_000
  },
  pound: {
    milligram: 453_592,
    gram: 453.592,
    kilogram: 1 / 2.205,
    metricTon: 1 / 2_205,
    ounce: 16,
    pound: 1,
    stone: 1 / 14,
    usTon: 1 / 2_000
  },
  stone: {
    milligram: 6_350_293,
    gram: 6_350.293,
    kilogram: 6.3503,
    metricTon: 1 / 157.47,
    ounce: 224,
    pound: 14,
    stone: 1,
    usTon: 1 / 142.857
  },
  usTon: {
    milligram: 907_184_740,
    gram: 907_184.74,
    kilogram: 907.18474,
    metricTon: 1 / 1.1023,
    ounce: 32_000,
    pound: 2_000,
    stone: 142.857,
    usTon: 1
  }
} satisfies Record<MassUnits, Record<MassUnits, number>>

export function convertMass(
  value: number,
  fromUnit: MassUnits,
  toUnit: MassUnits
): number {
  if (fromUnit === toUnit) return value
  return value * massConversionMatrix[fromUnit][toUnit]
}
