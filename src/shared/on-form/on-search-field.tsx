import React from 'react'
import { InputAdornment, TextField, TextFieldProps } from '@mui/material'
import OnIcon from '../on-icons'

export type Props = TextFieldProps

const OnSearchField: React.FC<Props> = props => {
    return (
        <TextField
            type='search'
            InputProps={{
                startAdornment: (
                    <InputAdornment position='start'>
                        <OnIcon icon='search-refraction' />
                    </InputAdornment>
                )
            }}
            {...props}
        />
    )
}
export default OnSearchField
