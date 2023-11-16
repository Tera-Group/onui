// ** Type Import
import { OwnerStateThemeType } from './'

const AppBar = () => {
    return {
        MuiAppBar: {
            styleOverrides: {
                root: ({ theme }: OwnerStateThemeType) => ({
                    backgroundColor: theme.palette.common.white,
                    borderBottom: `1px solid ${theme.palette.grey[200]}`,
                    color: theme.palette.common.black,
                    transition: theme.transitions.create(['margin', 'width'], {
                        easing: theme.transitions.easing.sharp,
                        duration: theme.transitions.duration.leavingScreen
                    })
                })
            }
        }
    }
}

export default AppBar
