export const customColors = {
  primary: '#B9F0B0',
  secondary: '#BBB7ED',
  accent: '#F0B997',
  danger: '#FFCC73',
  error: '#FF7E7D',
  'gray-100': '#F2F2F2',
  'gray-200': '#BFBFBF',
  'gray-300': '#8C8C8C',
  'gray-400': '#595959',
  'gray-500': '#404040',
  'primary-link': 'rgba(185, 240, 176, 0.6)',
} as const

export type ColorKeys = keyof typeof customColors
export type ColorValues = typeof customColors[ColorKeys]

export type Colors = Record<ColorKeys, ColorValues>
