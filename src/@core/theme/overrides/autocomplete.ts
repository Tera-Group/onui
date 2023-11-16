// ** Util Import
import { OwnerStateThemeType } from './'

const Autocomplete = () => {
    return {
        MuiAutocomplete: {
            styleOverrides: {
                root: ({ theme }: OwnerStateThemeType) => ({
                    borderRadius: theme.spacing(0.75),
                    background: theme.palette.common.white,
                    '&.Mui-disabled': {
                        background: theme.palette.grey[50],
                        color: theme.palette.grey[500]
                    },
                    '&::placeholder': {
                        color: theme.palette.grey[300]
                    }
                }),
                listbox: ({ theme }: OwnerStateThemeType) => ({
                    color: theme.palette.grey[900],
                    fontSize: theme.spacing(2),
                    fontWeight: '400',
                    lineHeight: theme.spacing(3),
                }),
                option: ({ theme }: OwnerStateThemeType) => ({
                    '&.Mui-focused': {
                        backgroundColor: theme.palette.primaryColor50.main
                    }
                })
            }
        }
    }
}
export default Autocomplete