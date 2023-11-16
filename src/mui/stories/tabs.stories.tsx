import React from 'react'
import { StoryFn, Meta } from '@storybook/react'
import { Tabs, Stack, Tab } from '@mui/material'
import { OnText } from '../../shared'

export default {
    title: 'MUI/Tabs',
    component: Tabs
} as Meta<typeof Tabs>

const Template: StoryFn<typeof Tabs> = args => <Tabs {...args} />

export const Playground: StoryFn<typeof Tabs> = () => {
    const [value, setValue] = React.useState('one')

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue)
    }

    return (
        <Stack spacing={2}>
            <Tabs value={value} onChange={handleChange} className='indicator-top'>
                <Tab
                    value='one'
                    label={
                        <Stack textAlign='left'>
                            <OnText fontWeight='semibold'>Chọn nội dung</OnText>
                            <OnText>Tìm nội dung muốn gửi yêu cầu liên kết</OnText>
                        </Stack>
                    }
                />
                <Tab
                    value='two'
                    label={
                        <Stack textAlign='left'>
                            <OnText fontWeight='semibold'>Chọn sản phẩm </OnText>
                            <OnText>Thiết lập danh sách sản phẩm muốn liên kêt</OnText>
                        </Stack>
                    }
                />
                <Tab
                    value='three'
                    label={
                        <Stack textAlign='left'>
                            <OnText fontWeight='semibold'>Kiểm tra và gửi yêu cầu</OnText>
                            <OnText>Đối soát các thông tin đã nhập</OnText>
                        </Stack>
                    }
                />
            </Tabs>
        </Stack>
    )
}
