import React from 'react'
import { StoryFn, Meta } from '@storybook/react'
import { CircularProgress, Stack } from '@mui/material'

export default {
    title: 'MUI/CircularProgress',
    component: CircularProgress
} as Meta<typeof CircularProgress>

const Template: StoryFn<typeof CircularProgress> = args => <CircularProgress {...args} />

export const Playground = Template.bind({})
Playground.args = {
    color: 'primary'
}

export const Colors: StoryFn<typeof CircularProgress> = () => (
    <Stack spacing={2} maxWidth={300}>
        <CircularProgress color='primary' />
        <CircularProgress color='secondary' />
    </Stack>
)
