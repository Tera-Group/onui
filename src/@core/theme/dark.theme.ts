import { createTheme } from '@mui/material'
import themeOptions from './theme-options'
import { colors as defaultColors } from '../configs'

export const darkTheme = createTheme(themeOptions('dark', defaultColors.dark))
