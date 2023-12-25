import React from 'react'
import { StoryFn, Meta } from '@storybook/react'
import { OnDatePicker, OnDatePickersRange } from '../on-datepicker'

export default {
    title: 'Shared/OnDatepicker',
    component: OnDatePickersRange
} as Meta<typeof OnDatePickersRange>

const Template: StoryFn<typeof OnDatePickersRange> = args => <OnDatePickersRange {...args} />

export const Datepicker: StoryFn<typeof OnDatePickersRange> = () => {
    return (
        <OnDatePicker
            name='name-01'
            value=''
            onChange={date => {
                console.log(date)
            }}
        />
    )
}

export const DateTimepicker: StoryFn<typeof OnDatePickersRange> = () => {
    return (
        <OnDatePicker
            name='name-01'
            value=''
            onChange={date => {
                console.log(date)
            }}
            showTimeSelect
            timeFormat='HH:mm'
            timeIntervals={15}
            timeCaption='time'
            dateFormat='dd/MM/yyyy h:mm aa'
        />
    )
}

export const DatepickerRange: StoryFn<typeof OnDatePickersRange> = () => (
    <OnDatePickersRange name='name-02' endAt={null} startAt={null} onChange={() => {}} />
)
