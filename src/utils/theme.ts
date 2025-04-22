export type Sizes = {
  xs: number
  sm: number
  md: number
  lg: number
  '1x': number
  '2x': number
  '3x': number
  '4x': number
  '5x': number
  '6x': number
  '7x': number
  auto: string
}

export const fontSizes: Sizes = {
  xs: 10,
  sm: 12,
  md: 14,
  lg: 16,
  '1x': 20,
  '2x': 24,
  '3x': 30,
  '4x': 40,
  '5x': 50,
  '6x': 60,
  '7x': 64,
  auto: 'auto',
}
export const spacing: Sizes = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  '1x': 20,
  '2x': 24,
  '3x': 30,
  '4x': 40,
  '5x': 50,
  '6x': 60,
  '7x': 70,
  auto: 'auto',
}

export const colors: any = {
  primary: '#3AB8B7',
  secondary: '#C9A9D1',
  white: '#fff',
  gray500: '#4C4D4D',
  gray300: '#828282',
  gray200: '#949494',
  secondary50: '#F5EFF7',
  secondary100: '#FBF6FA',
  secondary200: '#FAF7FB',
  secondary300: '#F0E7F2',
  primary100: '#EBF8F8',
  primary400: '#A6D6CC',
  secondary400: '#F4EEF6',
  secondary500: '#dfcbe4',
  white500: '#f5f5f5',
  pink: '#F2B8D4',
  white100: '#F8F8F8',
  footer: '#EDF7F5',
  danger: 'red',
}
export const fontFamily: any = {
  primary: 'Poppins',
  secondary: 'Judson',
  other: 'Gotham',
}
const theme = {
  colors: colors,
  fontSizes,
  spacing,
  fontFamily,
}

export default theme
