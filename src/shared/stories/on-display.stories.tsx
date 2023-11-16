import React from 'react'
import { StoryFn, Meta } from '@storybook/react'
import OnDisplay from '../on-display'
import { Stack } from '@mui/material'

export default {
    title: 'Shared/OnDisplay',
    component: OnDisplay
} as Meta<typeof OnDisplay>

const Template: StoryFn<typeof OnDisplay> = args => <OnDisplay {...args} />

export const Playground = Template.bind({})

Playground.args = {
    children: 'Display md - semibold',
    size: 'md',
    fontWeight: 'semibold'
}

export const FontSize: StoryFn<typeof OnDisplay> = () => (
    <Stack spacing={2}>
        <OnDisplay size='xs' fontWeight='regular'>
            Display xs
        </OnDisplay>
        <OnDisplay size='sm' fontWeight='regular'>
            Display sm
        </OnDisplay>
        <OnDisplay size='md' fontWeight='regular'>
            Display md
        </OnDisplay>
        <OnDisplay size='lg' fontWeight='regular'>
            Display lg
        </OnDisplay>
        <OnDisplay size='xl' fontWeight='regular'>
            Display xl
        </OnDisplay>
        <OnDisplay size='xxl' fontWeight='regular'>
            Display 2xl
        </OnDisplay>
    </Stack>
)

export const FontWeight: StoryFn<typeof OnDisplay> = () => (
    <Stack spacing={2}>
        <OnDisplay size='md' fontWeight='regular'>
            Display md regular
        </OnDisplay>
        <OnDisplay size='md' fontWeight='medium'>
            Display md medium
        </OnDisplay>
        <OnDisplay size='md' fontWeight='semibold'>
            Display md semibold
        </OnDisplay>
        <OnDisplay size='md' fontWeight='bold'>
            Display md bold
        </OnDisplay>
    </Stack>
)
