import React from 'react'
import { Stack, StackProps } from '@mui/material'

const OnFlexSingleRow: React.FC<Omit<StackProps, 'direction'>> = props => {
    return <Stack direction='row' justifyContent='space-between' alignItems='center' spacing={1} {...props} />
}

export default OnFlexSingleRow
