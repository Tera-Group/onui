import { OwnerStateThemeType } from './'

const Dialog = () => {
    return {
        MuiDialog: {
            defaultProps: {
                container: () => document.getElementById('__next')
            },
            styleOverrides: {
                root: ({ theme }: OwnerStateThemeType) => ({
                    '& .MuiDialogContent-root': {
                        padding: theme.spacing(3)
                    },
                    '& .MuiDialogTitle-root': {
                        padding: 0
                    },
                    '& .MuiDialogActions-root': {
                        padding: theme.spacing(4, 3, 3, 3)
                    }
                })
            }
        }
    }
}

export default Dialog
