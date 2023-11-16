import React from 'react'
import { HexColorPicker } from 'react-colorful'
import { Box, InputAdornment, TextField } from '@mui/material'
import OnText from '../on-text'
import HexColorContainer from './on-hex-color-container'

export interface Props {
    disabled?: boolean
    value: string
    onChange: (newValue: any) => void
}

const OnHexColorPicker: React.FC<Props> = ({ disabled = false, value = '#FFFFFF', onChange }) => {
    const [color, setColor] = React.useState(value)
    const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null)

    const open = Boolean(anchorEl)
    const id = open ? 'simple-popover' : undefined

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        if (disabled) return

        setAnchorEl(event.currentTarget)
    }

    const handleClose = () => {
        setAnchorEl(null)
    }

    const handleChange = (newColor: any) => {
        onChange(newColor.toUpperCase())
        setColor(newColor.toUpperCase())
    }

    return (
        <>
            <TextField
                InputProps={{
                    startAdornment: (
                        <InputAdornment position='start'>
                            <Box sx={{ backgroundColor: color, cursor: 'pointer', width: 150, height: 24, ml: 1 }} />
                        </InputAdornment>
                    ),
                    endAdornment: (
                        <InputAdornment
                            className='h-10 max-h-full pl-3 pr-1 m-0 border-gray-300 [&>p]:mx-auto border-l'
                            position='end'>
                            <OnText
                                fontWeight='medium'
                                size='xs'
                                className={`cursor-pointer ${!disabled ? 'text-blue-600' : 'text-gray-400'}`}>
                                Thay đổi
                            </OnText>
                        </InputAdornment>
                    )
                }}
                value={color}
                onClick={handleClick}
            />
            <HexColorContainer
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left'
                }}>
                <HexColorPicker color={color} onChange={handleChange} />
            </HexColorContainer>
        </>
    )
}

export default OnHexColorPicker
