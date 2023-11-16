import React from 'react'
import { StoryFn, Meta } from '@storybook/react'
import { Stack } from '@mui/material'
import OnAlert from '../on-alert'

export default {
    title: 'Shared/OnAlert',
    component: OnAlert
} as Meta<typeof OnAlert>

const Template: StoryFn<typeof OnAlert> = args => <OnAlert {...args} />

export const Playground = Template.bind({})

Playground.args = {
    title: "We've just released a new feature",
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ut semper tellus, at.',
    status: 'info'
}

export const Variant: StoryFn<typeof OnAlert> = () => (
    <Stack spacing={2}>
        <OnAlert
            title="We've just released a new feature"
            description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ut semper tellus, at.'
            status='success'
        />
        <OnAlert
            title="We've just released a new feature"
            description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ut semper tellus, at.'
            status='error'
        />
        <OnAlert
            title="We've just released a new feature"
            description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ut semper tellus, at.'
            status='warning'
        />
        <OnAlert
            title="We've just released a new feature"
            description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ut semper tellus, at.'
            status='info'
        />
    </Stack>
)
