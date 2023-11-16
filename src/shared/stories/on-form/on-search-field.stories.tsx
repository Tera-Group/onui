import React from 'react'
import { StoryFn, Meta } from '@storybook/react'
import OnSearchField from '../../on-form/on-search-field'

export default {
    title: 'Shared/OnSearchField',
    component: OnSearchField
} as Meta<typeof OnSearchField>

const Template: StoryFn<typeof OnSearchField> = args => <OnSearchField {...args} />

export const Playground = Template.bind({})

Playground.args = {
    value: 'search'
}
