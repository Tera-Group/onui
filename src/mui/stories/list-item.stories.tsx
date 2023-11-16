import React from 'react'
import { StoryFn, Meta } from '@storybook/react'
import { ListItem, ListItemButton, ListItemIcon, ListItemText, Stack } from '@mui/material'
import { OnIcon, OnText } from '../../shared'

export default {
    title: 'MUI/ListItem',
    component: ListItem
} as Meta<typeof ListItem>

const Template: StoryFn<typeof ListItem> = args => <ListItem {...args} />

export const Playground = Template.bind({})

export const Primary: StoryFn<typeof ListItem> = () => {
    return (
        <Stack spacing={2} maxWidth={160}>
            <ListItem disablePadding>
                <ListItemButton component={'a'} href='/' selected={true}>
                    <ListItemIcon>
                        <OnIcon icon='link-02' />
                    </ListItemIcon>
                    <ListItemText
                        primary={
                            <Stack direction='row' alignItems='center'>
                                <OnText size='md' fontWeight='medium'>
                                    xxx
                                </OnText>
                            </Stack>
                        }
                    />
                </ListItemButton>
            </ListItem>
        </Stack>
    )
}
