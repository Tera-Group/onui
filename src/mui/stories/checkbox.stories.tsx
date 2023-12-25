import React from 'react'
import { StoryFn, Meta } from '@storybook/react'
import { Checkbox, Grid, Stack } from '@mui/material'
import { OnDisplay, OnText } from '../../shared'

export default {
    title: 'MUI/Checkbox',
    component: Checkbox
} as Meta<typeof Checkbox>

const Template: StoryFn<typeof Checkbox> = args => <Checkbox {...args} />

export const Playground: StoryFn<typeof Checkbox> = () => (
    <Grid container maxWidth={500}>
        <Grid item xs={6} sx={{ paddingX: 3 }}>
            <OnDisplay size='xs'>Size = small</OnDisplay>
            <Stack direction='row' justifyContent='space-between' sx={{ marginBottom: 1 }}>
                <OnText>unchecked: </OnText>
                <Checkbox />
            </Stack>
            <Stack direction='row' justifyContent='space-between' sx={{ marginBottom: 1 }}>
                <OnText>checked: </OnText>
                <Checkbox checked />
            </Stack>
            <Stack direction='row' justifyContent='space-between' sx={{ marginBottom: 1 }}>
                <OnText>disabled unchecked: </OnText>
                <Checkbox disabled />
            </Stack>
            <Stack direction='row' justifyContent='space-between' sx={{ marginBottom: 1 }}>
                <OnText>disabled checked: </OnText>
                <Checkbox checked disabled />
            </Stack>
        </Grid>
    </Grid>
)
