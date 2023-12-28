// ** Type Imports
import { Palette, PaletteColor } from '@mui/material'
import type { Colors, ColorRange } from '../../configs/colors/types'

type PaletteColorRange = {
    [k: string]: Partial<PaletteColor>
}

const colorRange2MuiPalette = (color: ColorRange, customName: string): PaletteColorRange => {
    return Object.entries(color).reduce((result, [colorId, colorHex]) => {
        const colorKey = `${customName}Color${colorId}`

        result[colorKey] = {
            main: colorHex
        }

        return result
    }, {} as any)
}

const generateCustomColors = (colors: Colors) => {
    return {
        ...colorRange2MuiPalette(colors.primary, 'primary'),
        ...colorRange2MuiPalette(colors.secondary, 'secondary'),
        ...colorRange2MuiPalette(colors.error, 'error'),
        ...colorRange2MuiPalette(colors.success, 'success'),
        ...colorRange2MuiPalette(colors.warning, 'warning'),
        ...colorRange2MuiPalette(colors.gray, 'gray')
    }
}

const DefaultPalette = (mode: Palette['mode'], colors: Colors) => ({
    common: colors.base,
    mode: mode,
    contrastThreshold: 3,
    tonalOffset: 0.2,
    primary: {
        main: colors.primary[500]
    },
    secondary: {
        main: colors.secondary[500]
    },
    error: {
        main: colors.error[500]
    },
    warning: {
        main: colors.warning[500]
    },
    info: {
        main: colors.primary[500]
    },
    success: {
        main: colors.success[500]
    },
    grey: colors.gray,
    text: {
        primary: colors.gray[900],
        secondary: colors.gray[600],
        disabled: colors.gray[200]
    },
    divider: colors.gray[100],
    action: {},
    background: {},
    ...generateCustomColors(colors)
})

export default DefaultPalette
