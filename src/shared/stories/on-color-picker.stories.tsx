import React from 'react'
import { StoryFn, Meta } from '@storybook/react'
import { OnHexColorPicker } from '../on-colorful'

export default {
    title: 'Shared/OnColorful',
    component: OnHexColorPicker
} as Meta<typeof OnHexColorPicker>

const Template: StoryFn<typeof OnHexColorPicker> = args => <OnHexColorPicker {...args} />

export const HexColorPicker: StoryFn<typeof OnHexColorPicker> = () => (
    <OnHexColorPicker value='#df0000' onChange={() => {}} />
)
