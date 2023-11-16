import React from 'react'
import Box, { BoxProps } from '@mui/material/Box'
import Drawer, { DrawerProps } from '@mui/material/Drawer'
import MainContentWrapper, { MainContentWrapperComposition } from './main-content-wrapper'

interface OnLayoutComposition {
    MainContentWrapper: React.FC<BoxProps> & MainContentWrapperComposition
    Sidebar: React.FC<DrawerProps>
}

export interface Props {
    children: React.ReactNode
    className?: string
}

const OnLayout: React.FC<Props> & OnLayoutComposition = ({ children }) => {
    return <Box sx={{ display: 'flex' }}>{children}</Box>
}

export default OnLayout

OnLayout.MainContentWrapper = MainContentWrapper

const Sidebar: React.FC<DrawerProps> = props => {
    return (
        <Box component='nav' sx={{ flexShrink: { sm: 0 } }} aria-label='sidebar'>
            <Drawer variant='permanent' {...props} />
        </Box>
    )
}
OnLayout.Sidebar = Sidebar
