import React from 'react'
import { StoryFn, Meta } from '@storybook/react'
import { Button, Stack } from '@mui/material'
import { OnText } from '../../shared'

export default {
    title: 'MUI/Button',
    component: Button
} as Meta<typeof Button>

const Template: StoryFn<typeof Button> = args => <Button {...args} />

export const TextButton: StoryFn<typeof Button> = () => (
    <Stack spacing={3}>
        <Stack direction='row' alignItems='center' spacing={2}>
            <OnText>primary: </OnText>
            <Button size='small' disabled>
                button sm disabled
            </Button>
            <Button size='small'>button sm</Button>
            <Button size='medium'>button md</Button>
            <Button size='large'>button lg</Button>
        </Stack>
        <Stack direction='row' alignItems='center' spacing={2}>
            <OnText>secondary: </OnText>
            <Button color='secondary' size='small' disabled>
                button sm disabled
            </Button>
            <Button color='secondary' size='small'>
                button sm
            </Button>
            <Button color='secondary' size='medium'>
                button md
            </Button>
            <Button color='secondary' size='large'>
                button lg
            </Button>
        </Stack>
        <Stack direction='row' alignItems='center' spacing={2}>
            <OnText>error: </OnText>
            <Button color='error' size='small' disabled>
                button sm disabled
            </Button>
            <Button color='error' size='small'>
                button sm
            </Button>
            <Button color='error' size='medium'>
                button md
            </Button>
            <Button color='error' size='large'>
                button lg
            </Button>
        </Stack>
    </Stack>
)

export const ContainedButton: StoryFn<typeof Button> = () => (
    <Stack spacing={2}>
        <Stack direction='row' alignItems='center' spacing={2}>
            <OnText>primary: </OnText>
            <Button variant='contained' size='small' disabled>
                button sm disabled
            </Button>
            <Button variant='contained' size='small'>
                button sm
            </Button>
            <Button variant='contained' size='medium'>
                button md
            </Button>
            <Button variant='contained' size='large'>
                button lg
            </Button>
        </Stack>
        <Stack direction='row' alignItems='center' spacing={2}>
            <OnText>secondary: </OnText>
            <Button variant='contained' color='secondary' size='small' disabled>
                button sm disabled
            </Button>
            <Button variant='contained' color='secondary' size='small'>
                button sm
            </Button>
            <Button variant='contained' color='secondary' size='medium'>
                button md
            </Button>
            <Button variant='contained' color='secondary' size='large'>
                button lg
            </Button>
        </Stack>
        <Stack direction='row' alignItems='center' spacing={2}>
            <OnText>error: </OnText>
            <Button variant='contained' color='error' size='small' disabled>
                button sm disabled
            </Button>
            <Button variant='contained' color='error' size='small'>
                button sm
            </Button>
            <Button variant='contained' color='error' size='medium'>
                button md
            </Button>
            <Button variant='contained' color='error' size='large'>
                button lg
            </Button>
        </Stack>
    </Stack>
)
