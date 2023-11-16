import React from 'react'
import { Typography, TypographyProps } from '@mui/material'
import { Variant } from '@mui/material/styles/createTypography'

enum DisplaySize {
    xs = 'xs',
    sm = 'sm',
    md = 'md',
    lg = 'lg',
    xl = 'xl',
    xxl = 'xxl'
}

enum DisplayWeight {
    regular = 'regular',
    medium = 'medium',
    semibold = 'semibold',
    bold = 'bold'
}

export interface Props extends TypographyProps {
    size?: keyof typeof DisplaySize
    fontWeight?: keyof typeof DisplayWeight
}

const OnDisplay: React.FC<Props> = ({ size = DisplaySize.md, fontWeight = DisplayWeight.semibold, ...restProps }) => {
    const variant: Variant = React.useMemo(() => {
        switch (size) {
            case DisplaySize.xs:
                return 'h6'
            case DisplaySize.sm:
                return 'h5'
            case DisplaySize.md:
                return 'h4'
            case DisplaySize.lg:
                return 'h3'
            case DisplaySize.xl:
                return 'h2'
            case DisplaySize.xxl:
                return 'h1'
            default:
                return 'h4'
        }
    }, [size])

    const weight = React.useMemo(() => {
        switch (fontWeight) {
            case DisplayWeight.semibold:
                return 600
            default:
                return fontWeight
        }
    }, [fontWeight])

    return <Typography {...restProps} fontWeight={weight} variant={variant} />
}

export default OnDisplay
