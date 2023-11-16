import React from 'react'
import { StoryFn, Meta } from '@storybook/react'
import { Stack } from '@mui/material'
import OnIcon from '../on-icons'

export default {
    title: 'Shared/OnIcons',
    component: OnIcon
} as Meta<typeof OnIcon>

const Template: StoryFn<typeof OnIcon> = args => <OnIcon {...args} />

export const Basic = Template.bind({})
Basic.args = {
    icon: 'activity'
}

export const Variants: StoryFn<typeof OnIcon> = () => (
    <Stack spacing={2} maxWidth={300}>
        <OnIcon icon='activity' />
        <OnIcon icon='link-02' />
        <OnIcon icon='link-03' />
    </Stack>
)
