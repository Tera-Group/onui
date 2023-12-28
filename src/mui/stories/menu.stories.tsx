import React from 'react'
import { StoryFn, Meta } from '@storybook/react'
import { Menu, MenuItem, Grid } from '@mui/material'
import { OnText } from '../../shared'

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
