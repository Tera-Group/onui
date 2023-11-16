// ** MUI Theme Provider
import { deepmerge } from '@mui/utils'
import { Palette, ThemeOptions } from '@mui/material'

// ** Theme Override Imports
import palette from './palette'
import overrides from './overrides'
import typography from './typography'
import { Colors } from '../configs/colors/types'

const themeOptions = (mode: Palette['mode'], colors: Colors): ThemeOptions => {
    const userThemeConfig: ThemeOptions = {}

    const mergedThemeConfig: ThemeOptions = deepmerge(
        {
            palette: palette(mode, colors),
            components: overrides(mode),
            typography
        },
        userThemeConfig
    )

    return mergedThemeConfig
}

export default themeOptions
