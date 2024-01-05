import React from 'react'
import { StoryFn, Meta } from '@storybook/react'
import { Checkbox, Grid, Stack, TextField } from '@mui/material'
import { OnDisplay, OnText } from '../../shared'

export default {
    title: 'MUI/Input',
    component: TextField
} as Meta<typeof TextField>

const Template: StoryFn<typeof TextField> = args => <TextField {...args} />

export const Playground: StoryFn<typeof TextField> = () => (
    <Grid container maxWidth={500}>
        <Grid item sx={{ paddingX: 3 }}>
            <Stack
                direction='row'
                justifyContent='space-between'
                alignItems='center'
                sx={{ marginBottom: 1 }}
                spacing={1}>
                <OnText>default:</OnText>
                <TextField />
            </Stack>
            <Stack
                direction='row'
                justifyContent='space-between'
                alignItems='center'
                sx={{ marginBottom: 1 }}
                spacing={1}>
                <OnText>disabled:</OnText>
                <TextField disabled value='kha hoang' />
            </Stack>
            <Stack
                direction='row'
                justifyContent='space-between'
                alignItems='center'
                sx={{ marginBottom: 1 }}
                spacing={1}>
                <OnText>textarea:</OnText>
                <TextField value='kha hoang' multiline minRows={4} maxRows={4} />
            </Stack>
        </Grid>
    </Grid>
)
