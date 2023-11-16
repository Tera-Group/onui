// ** React Imports
import React from 'react'

// ** MUI Imports
import CssBaseline from '@mui/material/CssBaseline'
import GlobalStyles from '@mui/material/GlobalStyles'
import { PaletteMode } from '@mui/material'
import { ThemeProvider as Provider, createTheme, responsiveFontSizes } from '@mui/material/styles'
import { deepmerge } from '@mui/utils'

// ** Theme
import themeOptions from './theme-options'
import { colors as defaultColors } from '../configs'
import { ThemeColor } from '../configs/colors/types'

// ** Global Styles
import GlobalStyling from './global-styles'

interface Settings {
    colors?: ThemeColor
    mode: PaletteMode
}

interface Props {
    settings: Settings
    children: any
}

const ThemeProvider = (props: Props) => {
    const { settings, children } = props
    const { colors = defaultColors, mode = 'light' } = settings

    // ** Pass merged ThemeOptions (of core and user) to createTheme function
    let theme = createTheme(themeOptions(mode, deepmerge(defaultColors[mode], colors[mode])))

    // ** Set responsive font sizes to true
    //   if (themeConfig.responsiveFontSizes) {
    //     theme = responsiveFontSizes(theme)
    //   }

    return (
        <Provider theme={theme}>
            <CssBaseline />
            <GlobalStyles styles={() => GlobalStyling(theme) as any} />
            {children}
        </Provider>
    )
}

export default ThemeProvider
