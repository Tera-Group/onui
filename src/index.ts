// Import customize theme
import { useTheme } from '@mui/material'
import { default as ThemeProvider } from './@core/theme/theme-provider'

export { ThemeProvider, useTheme }

// Export original mui components
export * from './mui'

// Export shared components
export * from './shared'
