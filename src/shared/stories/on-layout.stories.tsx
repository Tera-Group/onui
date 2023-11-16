import React from 'react'
import { StoryFn, Meta } from '@storybook/react'
import {
    Avatar,
    Badge,
    Divider,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Stack
} from '@mui/material'
import OnLayout from '../on-layout'
import OnIcon from '../on-icons'

export default {
    title: 'Shared/OnLayout',
    component: OnLayout
} as Meta<typeof OnLayout>

const Template: StoryFn<typeof OnLayout> = args => <OnLayout {...args} />

export const Example: StoryFn<typeof OnLayout> = () => (
    <OnLayout>
        <OnLayout.Sidebar open={true}>
            <List>
                {['Liên kết nội dung', 'Đơn hàng', 'Sản phẩm'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <OnIcon icon='file-06' />
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {['Marketing', 'Doanh thu', 'Đánh giá'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <OnIcon icon='bank-note-03' />
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </OnLayout.Sidebar>
        <OnLayout.MainContentWrapper>
            <OnLayout.MainContentWrapper.Header>
                <Stack direction='row' alignItems='center' justifyContent='space-between'>
                    <Stack direction='row' justifyContent='flex-end' flexGrow={1}>
                        <IconButton size='small' disableRipple sx={{ mr: 3 }}>
                            <Badge color='error' variant='dot'>
                                <OnIcon icon='bell-02' />
                            </Badge>
                        </IconButton>
                        <Avatar alt='avatar'>M</Avatar>
                    </Stack>
                </Stack>
            </OnLayout.MainContentWrapper.Header>
            <OnLayout.MainContentWrapper.Main>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum facilisis leo vel. Risus at
                ultrices mi tempus imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus. Convallis
                convallis tellus id interdum velit laoreet id donec ultrices. Odio morbi quis commodo odio aenean sed
                adipiscing. Amet nisl suscipit adipiscing bibendum est ultricies integer quis. Cursus euismod quis
                viverra nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo
                quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget arcu
                dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa sapien
                faucibus et molestie ac.
            </OnLayout.MainContentWrapper.Main>
        </OnLayout.MainContentWrapper>
    </OnLayout>
)
