import React from 'react'
import { StoryFn, Meta } from '@storybook/react'
import { Grid, Stack } from '@mui/material'
import OnCheckbox from '../on-checkbox'
import OnDisplay from '../on-display'
import OnText from '../on-text'

export default {
    title: 'Shared/OnCheckbox',
    component: OnCheckbox
} as Meta<typeof OnCheckbox>

const Template: StoryFn<typeof OnCheckbox> = args => <OnCheckbox {...args} />

export const Playground: StoryFn<typeof OnCheckbox> = () => (
    <Stack spacing={2}>
        <Grid container maxWidth={500}>
            <Grid item xs={6} sx={{ paddingX: 3 }}>
                <OnDisplay size='xs'>Size = small</OnDisplay>
                <Stack direction='row' justifyContent='space-between' sx={{ marginBottom: 1 }}>
                    <OnText>unchecked: </OnText>
                    <OnCheckbox />
                </Stack>
                <Stack direction='row' justifyContent='space-between' sx={{ marginBottom: 1 }}>
                    <OnText>checked: </OnText>
                    <OnCheckbox checked />
                </Stack>
                <Stack direction='row' justifyContent='space-between' sx={{ marginBottom: 1 }}>
                    <OnText>disabled unchecked: </OnText>
                    <OnCheckbox disabled />
                </Stack>
                <Stack direction='row' justifyContent='space-between' sx={{ marginBottom: 1 }}>
                    <OnText>disabled checked: </OnText>
                    <OnCheckbox checked disabled />
                </Stack>
            </Grid>
        </Grid>
    </Stack>
)
