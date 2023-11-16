import React from 'react'
import { StoryFn, Meta } from '@storybook/react'
import { OnDatePickersRange } from '../on-datepicker'

export default {
    title: 'Shared/OnDatepicker',
    component: OnDatePickersRange
} as Meta<typeof OnDatePickersRange>

const Template: StoryFn<typeof OnDatePickersRange> = args => <OnDatePickersRange {...args} />

export const Range: StoryFn<typeof OnDatePickersRange> = () => (
    <OnDatePickersRange name='name-01' endAt={null} startAt={null} onChange={() => {}} />
)
