import React from 'react'
import AppBar, { AppBarProps } from '@mui/material/AppBar'
import Box, { BoxProps } from '@mui/material/Box'
import { styled } from '@mui/material'

const StyledMainContentWrapper = styled(Box)<BoxProps>({
    flexGrow: 1,
    minWidth: 0,
    display: 'flex',
    minHeight: '100vh',
    flexDirection: 'column'
})

export interface MainContentWrapperComposition {
    Main: React.FC<BoxProps>
    Header: React.FC<AppBarProps>
}

const MainContentWrapper: React.FC<BoxProps> & MainContentWrapperComposition = ({ children, ...restProps }) => {
    return <StyledMainContentWrapper {...restProps}>{children}</StyledMainContentWrapper>
}

export default MainContentWrapper

const Main: React.FC<BoxProps> = props => <Box component='main' sx={{ p: 0 }} {...props} />
MainContentWrapper.Main = Main

const Header: React.FC<AppBarProps> = props => (
    <AppBar position='sticky' elevation={0} sx={{ px: 3, py: 1.5 }} {...props} />
)
MainContentWrapper.Header = Header
