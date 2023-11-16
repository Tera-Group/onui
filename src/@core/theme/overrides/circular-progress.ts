// ** Type Import
import { OwnerStateThemeType } from './'

const CircularProgress = () => {
    return {
        MuiCircularProgress: {
            styleOverrides: {
                colorPrimary: ({ theme }: OwnerStateThemeType) => ({
                    color: theme.palette.primaryColor400.main
                }),
                colorSecondary: ({ theme }: OwnerStateThemeType) => ({
                    color: theme.palette.secondaryColor400.main
                })
            }
        }
    }
}

export default CircularProgress
