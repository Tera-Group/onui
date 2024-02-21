import React from 'react'
import { StoryFn, Meta } from '@storybook/react'
import { Menu, MenuItem, Grid, Chip } from '@mui/material'
import { OnText } from '../../shared'
import { Circle } from '@mui/icons-material'

export default {
    title: 'MUI/Menu',
    component: Menu
} as Meta<typeof Menu>

const Template: StoryFn<typeof Menu> = args => <Menu {...args} />

export const Playground: StoryFn<typeof Menu> = () => (
    <Grid container maxWidth={500}>
        <Menu className='mt-3' id='simple-popover' open={true}>
            <MenuItem>
                <OnText fontWeight='medium'>Nội dung lẻ</OnText>
            </MenuItem>
            <MenuItem>
                <OnText fontWeight='medium'>Nội dung bộ</OnText>
            </MenuItem>
        </Menu>
    </Grid>
)

export const Popup: StoryFn<typeof Menu> = () => {
    const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null)
    const [menuId, setMenuId] = React.useState<string | undefined>(undefined)

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget)
    }

    const handleClose = () => {
        setAnchorEl(null)
    }

    React.useEffect(() => {
        setMenuId(() => {
            if (Boolean(anchorEl)) return `simple-popover`

            return undefined
        })
    }, [anchorEl])

    return (
        <Grid container maxWidth={500}>
            <Chip color='info' icon={<Circle />} label='Popup' size='small' onClick={handleClick} />
            <Menu
                className='mt-3'
                id={menuId}
                open={!!menuId}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left'
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left'
                }}>
                <MenuItem onClick={handleClose}>
                    <OnText fontWeight='medium'>Item 01</OnText>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <OnText fontWeight='medium'>Item 02</OnText>
                </MenuItem>
            </Menu>
        </Grid>
    )
}
