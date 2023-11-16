import React from 'react'
import { StoryFn, Meta } from '@storybook/react'
import { TextField, Autocomplete, Stack } from '@mui/material'

export default {
    title: 'MUI/Autocomplete',
    component: Autocomplete
} as Meta<typeof Autocomplete>

const Template: StoryFn<typeof Autocomplete> = args => <Autocomplete {...args} />

export const Playground = Template.bind({})
Playground.args = {
    size: 'small',
    options: [
        { label: 'The Shawshank Redemption', year: 1994 },
        { label: 'The Godfather: Part II', year: 1974 }
    ],
    renderInput: params => <TextField {...params} />
}

export const Disabled: StoryFn<typeof Autocomplete> = () => (
    <Stack spacing={2} maxWidth={300}>
        <Autocomplete
            size='small'
            options={[
                { label: 'The Shawshank Redemption', year: 1994 },
                { label: 'The Godfather: Part II', year: 1974 }
            ]}
            renderInput={params => (
                <TextField helperText='This is a hint text to help user.' placeholder='Placeholder' {...params} />
            )}
        />
        <Autocomplete
            size='small'
            disabled={true}
            options={[
                { label: 'The Shawshank Redemption', year: 1994 },
                { label: 'The Godfather: Part II', year: 1974 }
            ]}
            renderInput={params => <TextField {...params} />}
        />
    </Stack>
)

export const Errors: StoryFn<typeof Autocomplete> = () => (
    <Stack spacing={2} maxWidth={300}>
        <Autocomplete
            size='small'
            options={[
                { label: 'The Shawshank Redemption', year: 1994 },
                { label: 'The Godfather: Part II', year: 1974 }
            ]}
            renderInput={params => <TextField error helperText='This is a hint text to help user.' {...params} />}
        />
    </Stack>
)
