export const temperatureUnits = ['celsius', 'fahrenheit', 'kelvin'] as const

export const temperatureUnitSymbols = {
  celsius: '°C',
  fahrenheit: '°F',
  kelvin: 'K'
} as const

export type TemperatureUnits = (typeof temperatureUnits)[number]

export function convertTemperature(
  value: number,
  fromUnit: TemperatureUnits,
  toUnit: TemperatureUnits
): number {
  if (fromUnit === toUnit) return value

  // First convert to Celsius
  let celsius: number
  switch (fromUnit) {
    case 'celsius':
      celsius = value
      break
    case 'fahrenheit':
      celsius = ((value - 32) * 5) / 9
      break
    case 'kelvin':
      celsius = value - 273.15
      break
  }

  // Then convert from Celsius to target unit
  switch (toUnit) {
    case 'celsius':
      return celsius
    case 'fahrenheit':
      return (celsius * 9) / 5 + 32
    case 'kelvin':
      return celsius + 273.15
  }
}
