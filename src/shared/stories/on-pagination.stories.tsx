import React from 'react'
import { StoryFn, Meta } from '@storybook/react'
import OnPagination from '../on-pagination'

export default {
    title: 'Shared/ Pagination',
    component: OnPagination
} as Meta<typeof OnPagination>

const Template: StoryFn<typeof OnPagination> = args => <OnPagination {...args} />

export const Playground = Template.bind({})
Playground.args = {}
