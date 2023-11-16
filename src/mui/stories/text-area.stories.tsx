import React from 'react'
import { StoryFn, Meta } from '@storybook/react'
import { Stack } from '@mui/material'
import TextField from '@mui/material/TextField'

export default {
    title: 'MUI/TextArea',
    component: TextField
} as Meta<typeof TextField>

const Template: StoryFn<typeof TextField> = args => <TextField {...args} />

export const Playground = Template.bind({})
Playground.args = { placeholder: 'TextArea', multiline: true, rows: 3 }

export const Disabled: StoryFn<typeof TextField> = () => (
    <Stack spacing={2} maxWidth={300}>
        <TextField multiline rows={3} />
        <TextField multiline rows={3} disabled={true} />
    </Stack>
)

export const Error: StoryFn<typeof TextField> = () => (
    <Stack spacing={2} maxWidth={300}>
        <TextField multiline rows={3} />
        <TextField multiline rows={3} error />
        <TextField multiline rows={3} helperText='Error' error />
    </Stack>
)
