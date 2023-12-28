import React from 'react'
import { StoryFn, Meta } from '@storybook/react'
import { Badge, Grid, IconButton } from '@mui/material'
import { OnIcon } from '../../shared'

export default {
    title: 'MUI/Badge',
    component: Badge
} as Meta<typeof Badge>

const Template: StoryFn<typeof Badge> = args => <Badge {...args} />

export const Playground: StoryFn<typeof Badge> = () => (
    <Grid container maxWidth={500}>
        <IconButton>
            <Badge badgeContent={100} color='primary' max={9}>
                <OnIcon icon='bell-02' />
            </Badge>
        </IconButton>
    </Grid>
)
