// ** Type Import
import { OwnerStateThemeType } from '.'

const Checkbox = () => {
    return {
        MuiCheckbox: {
            styleOverrides: {
                root: ({ theme }: OwnerStateThemeType) => ({
                    width: theme.spacing(2.5),
                    height: theme.spacing(2.5),
                    padding: 0,
                    '&.MuiCheckbox-colorPrimary': {
                        color: theme.palette.grey[300],
                        '&.Mui-checked': {
                            color: theme.palette.primaryColor600.main,
                            '&.Mui-disabled': {
                                color: theme.palette.primaryColor300.main
                            }
                        },
                        '&.Mui-disabled': {
                            color: theme.palette.grey[200]
                        },
                        '&:hover': {
                            color: theme.palette.primaryColor600.main,
                            '&.Mui-checked': {
                                color: theme.palette.primaryColor700.main
                            }
                        }
                    }
                })
            }
        }
    }
}

export default Checkbox
