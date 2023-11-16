// ** Type Import
import { OwnerStateThemeType } from '.'

const ToggleButtonGroup = () => {
    return {
        MuiToggleButtonGroup: {
            styleOverrides: {
                root: ({ theme }: OwnerStateThemeType) => ({
                    borderBottom: `1px solid ${theme.palette.grey[100]}`,
                    '& .MuiButtonBase-root .MuiButton-root': {
                        borderBottom: `2px solid transparent`,
                        borderRadius: 0,
                        color: theme.palette.grey[500]
                    },
                    '& .MuiButtonBase-root.MuiToggleButtonGroup-grouped:hover .MuiButton-root': {
                        borderColor: theme.palette.primaryColor700.main,
                        color: theme.palette.primaryColor700.main
                    },
                    '& .MuiButtonBase-root.Mui-selected .MuiButton-root': {
                        borderColor: theme.palette.primaryColor700.main,
                        color: theme.palette.primaryColor700.main
                    },
                    '& .MuiButtonBase-root.MuiToggleButtonGroup-grouped:hover': {
                        backgroundColor: 'transparent'
                    },
                    '& .MuiButtonBase-root.Mui-selected': {
                        backgroundColor: 'transparent'
                    }
                })
            }
        }
    }
}

export default ToggleButtonGroup
