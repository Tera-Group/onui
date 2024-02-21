import React from 'react'
import { StoryFn, Meta } from '@storybook/react'
import { Chip, Stack } from '@mui/material'
import CircleIcon from '@mui/icons-material/Circle'

export default {
    title: 'MUI/Chip',
    component: Chip
} as Meta<typeof Chip>

const Template: StoryFn<typeof Chip> = args => <Chip {...args} />

export const Playground = Template.bind({})

Playground.args = {
    label: 'Label'
}

export const Colors: StoryFn<typeof Chip> = () => (
    <Stack spacing={2} direction={'row'}>
        <Chip color='default' label='default' icon={<CircleIcon />} onClick={() => {}} />
        <Chip color='error' label='error' icon={<CircleIcon />} onClick={() => {}} />
        <Chip color='info' label='info' icon={<CircleIcon />} onClick={() => {}} />
        <Chip color='primary' label='primary' icon={<CircleIcon />} onClick={() => {}} />
        <Chip color='success' label='success' icon={<CircleIcon />} onClick={() => {}} />
        <Chip color='warning' label='warning' icon={<CircleIcon />} onClick={() => {}} />
    </Stack>
)

export const Size: StoryFn<typeof Chip> = () => (
    <Stack spacing={2} direction={'row'}>
        <Chip label='Small' size='small' />
        <Chip label='Medium' size='medium' />
    </Stack>
)
