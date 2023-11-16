import { createTheme } from '@mui/material'
import themeOptions from './theme-options'
import { colors as defaultColors } from '../configs'

export const lightTheme = createTheme(themeOptions('light', defaultColors.light))
