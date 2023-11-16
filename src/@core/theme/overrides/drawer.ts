// ** Type Import
import { Theme } from '@mui/material'
import { OwnerStateThemeType } from './'

const openedMixin = (theme: Theme) => ({
    minWidth: 264,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen
    }),
    overflowX: 'hidden'
})

const closedMixin = (theme: Theme) => ({
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
    }),
    minWidth: 72,
    padding: 0
})

const Drawer = () => {
    return {
        MuiDrawer: {
            defaultProps: {
                container: () => document.getElementById('__next')
            },
            styleOverrides: {
                root: ({ ownerState, theme }: OwnerStateThemeType) => ({
                    flexShrink: 0,
                    whiteSpace: 'nowrap',
                    boxSizing: 'border-box',
                    ...openedMixin(theme),
                    '& .MuiDrawer-paper': openedMixin(theme),
                    ...(!ownerState.open && {
                        ...closedMixin(theme),
                        '& .MuiDrawer-paper': closedMixin(theme)
                    })
                })
            }
        }
    }
}

export default Drawer
