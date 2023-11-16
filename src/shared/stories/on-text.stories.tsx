import React from 'react'
import { StoryFn, Meta } from '@storybook/react'
import { Stack } from '@mui/material'
import OnText from '../on-text'

export default {
    title: 'Shared/OnText',
    component: OnText
} as Meta<typeof OnText>

const Template: StoryFn<typeof OnText> = args => <OnText {...args} />

export const Playground = Template.bind({})

Playground.args = {
    children: 'Text lg - regular',
    size: 'lg',
    fontWeight: 'regular'
}

export const FontSize: StoryFn<typeof OnText> = () => (
    <Stack spacing={2}>
        <OnText size='xxs' fontWeight='regular'>
            Text xxs
        </OnText>
        <OnText size='xs' fontWeight='regular'>
            Text xs
        </OnText>
        <OnText size='sm' fontWeight='regular'>
            Text sm
        </OnText>
        <OnText size='md' fontWeight='regular'>
            Text md
        </OnText>
        <OnText size='lg' fontWeight='regular'>
            Text lg
        </OnText>
        <OnText size='xl' fontWeight='regular'>
            Text xl
        </OnText>
    </Stack>
)

export const FontWeight: StoryFn<typeof OnText> = () => (
    <Stack spacing={2}>
        <OnText size='md' fontWeight='regular'>
            Text md regular
        </OnText>
        <OnText size='md' fontWeight='medium'>
            Text md medium
        </OnText>
        <OnText size='md' fontWeight='semibold'>
            Text md semibold
        </OnText>
        <OnText size='md' fontWeight='bold'>
            Text md bold
        </OnText>
    </Stack>
)
