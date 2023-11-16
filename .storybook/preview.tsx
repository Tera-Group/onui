import React from 'react'
import { CssBaseline, ThemeProvider } from '@mui/material'
import type { Preview } from '@storybook/react'
import { darkTheme, lightTheme } from '../src/@core/theme'

const withThemeProvider = (Story, context) => {
    const { theme: themeKey } = context.globals
    const theme = React.useMemo(() => (themeKey !== 'light' ? darkTheme : lightTheme), [themeKey])

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Story />
        </ThemeProvider>
    )
}
const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            expanded: true,
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/
            }
        }
    },
    globalTypes: {
        theme: {
            name: 'Theme',
            description: 'Global theme for components',
            defaultValue: 'light',
            toolbar: {
                icon: 'circlehollow',
                // Array of plain string values or MenuItem shape (see below)
                items: [
                    { value: 'light', left: '☀️', title: 'Light mode' },
                    { value: 'dark', left: '🌙', title: 'Dark mode' }
                ],
                // Property that specifies if the name of the item will be displayed
                showName: true,
                // Change title based on selected value
                dynamicTitle: true
            }
        }
    },
    decorators: [withThemeProvider]
}

export default preview
