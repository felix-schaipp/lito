import tailwindConfig from '../tailwind.config'
import resolveConfig from 'tailwindcss/resolveConfig'
import { TailwindConfig } from 'tailwindcss/tailwind-config'
import { Colors } from './tailwind-colors'

const config = resolveConfig(tailwindConfig as TailwindConfig)

export const getColors = (): Colors => {
  return config.theme.colors as Colors
}
