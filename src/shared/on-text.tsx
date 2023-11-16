import { Typography, TypographyProps } from '@mui/material'
import { Variant } from '@mui/material/styles/createTypography'
import React from 'react'

enum TextSize {
    xxs = 'xxs',
    xs = 'xs',
    sm = 'sm',
    md = 'md',
    lg = 'lg',
    xl = 'xl'
}

enum TextWeight {
    regular = 'regular',
    medium = 'medium',
    semibold = 'semibold',
    bold = 'bold'
}

export interface Props extends TypographyProps {
    size?: keyof typeof TextSize
    fontWeight?: keyof typeof TextWeight
}

const OnText: React.FC<Props> = ({ size = TextSize.md, fontWeight = TextWeight.regular, ...restProps }) => {
    const variant: Variant = React.useMemo(() => {
        switch (size) {
            case TextSize.xxs:
                return 'overline'
            case TextSize.xs:
                return 'caption'
            case TextSize.sm:
                return 'body2'
            case TextSize.md:
                return 'body1'
            case TextSize.lg:
                return 'subtitle2'
            case TextSize.xl:
                return 'subtitle1'
            default:
                return 'body1'
        }
    }, [size])

    const weight = React.useMemo(() => {
        switch (fontWeight) {
            case TextWeight.semibold:
                return 600
            default:
                return fontWeight
        }
    }, [fontWeight])

    return <Typography {...restProps} fontWeight={weight} variant={variant} />
}

export default OnText
