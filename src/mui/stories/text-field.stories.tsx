import React from 'react'
import { StoryFn, Meta } from '@storybook/react'
import { TextField, Stack } from '@mui/material'

export default {
    title: 'MUI/TextField',
    component: TextField
} as Meta<typeof TextField>

const Template: StoryFn<typeof TextField> = args => <TextField {...args} />

export const Playground = Template.bind({})
Playground.args = { placeholder: 'TextField', disabled: false }

export const Disabled: StoryFn<typeof TextField> = () => (
    <Stack spacing={2} maxWidth={300}>
        <TextField placeholder='TextField' />
        <TextField placeholder='TextField' disabled={true} />
    </Stack>
)

export const Error: StoryFn<typeof TextField> = () => (
    <Stack spacing={2} maxWidth={300}>
        <TextField placeholder='TextField' />
        <TextField placeholder='TextField' error />
        <TextField placeholder='TextField' helperText='Error' error />
    </Stack>
)
