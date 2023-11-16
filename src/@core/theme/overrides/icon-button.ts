// ** Util Import
import { OwnerStateThemeType } from '.'

const IconButton = () => {
    return {
        MuiIconButton: {
            styleOverrides: {
                root: ({ ownerState, theme }: OwnerStateThemeType) => ({
                    '&:hover': {
                        color: theme.palette.primaryColor500.main,
                        backgroundColor: 'transparent'
                    }
                })
            }
        }
    }
}

export default IconButton
