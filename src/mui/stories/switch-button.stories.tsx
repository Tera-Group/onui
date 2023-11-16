import React from 'react'
import { StoryFn, Meta } from '@storybook/react'
import { Switch as SwitchButton } from '@mui/material'

export default {
    title: 'MUI/Switch',
    component: SwitchButton
} as Meta<typeof SwitchButton>

const Template: StoryFn<typeof SwitchButton> = args => <SwitchButton {...args} />

export const Playground = Template.bind({})

Playground.args = {
    color: 'primary'
}
