import React from 'react'
import { StoryFn, Meta } from '@storybook/react'
import { Stack, ToggleButtonGroup, ToggleButton, Button } from '@mui/material'
import { OnIcon, OnText } from '../../shared'

export default {
    title: 'MUI/ToggleButtonGroup',
    component: ToggleButtonGroup
} as Meta<typeof ToggleButtonGroup>

const Template: StoryFn<typeof ToggleButtonGroup> = args => <ToggleButtonGroup {...args} />

export const Playground: StoryFn<typeof ToggleButtonGroup> = () => {
    const [alignment, setAlignment] = React.useState('left')

    const handleAlignment = (event: React.MouseEvent<HTMLElement>, newAlignment: string | null) => {
        if (newAlignment !== null) {
            setAlignment(newAlignment)
        }
    }

    return (
        <Stack spacing={2}>
            <ToggleButtonGroup value={alignment} exclusive onChange={handleAlignment}>
                <ToggleButton value='left' aria-label='left aligned'>
                    <Button startIcon={<OnIcon icon='zap' />} sx={{}}>
                        <OnText size='sm' fontWeight='semibold'>
                            One
                        </OnText>
                    </Button>
                </ToggleButton>
                <ToggleButton value='center' aria-label='left aligned'>
                    <Button startIcon={<OnIcon icon='zap' />}>
                        <OnText size='sm' fontWeight='semibold'>
                            Two
                        </OnText>
                    </Button>
                </ToggleButton>
                <ToggleButton value='right' aria-label='left aligned'>
                    <Button startIcon={<OnIcon icon='zap' />}>
                        <OnText size='sm' fontWeight='semibold'>
                            Three
                        </OnText>
                    </Button>
                </ToggleButton>
            </ToggleButtonGroup>
        </Stack>
    )
}
