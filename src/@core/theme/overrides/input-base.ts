// ** Util Import
import { hexToRGBA } from '../../utils/common'
import { OwnerStateThemeType } from './'

const InputBase = () => {
    return {
        MuiInputBase: {
            styleOverrides: {
                root: ({ theme }: OwnerStateThemeType) => ({
                    border: `1px solid ${theme.palette.grey[300]}`,
                    borderRadius: theme.spacing(0.75),
                    color: theme.palette.grey[900],
                    fontSize: theme.spacing(2),
                    fontWeight: '400',
                    lineHeight: theme.spacing(3),
                    wordWrap: 'break-word',

                    '&.Mui-disabled': {
                        background: theme.palette.grey[50],
                        color: theme.palette.grey[500]
                    },
                    '&.Mui-error': {
                        border: `1px solid ${theme.palette.errorColor300.main}`,
                        '&.Mui-focused': {
                            border: `1px solid ${theme.palette.errorColor300.main}`,
                            boxShadow: `${theme.spacing(0, 0, 0, 0.5)} ${
                                theme.palette.errorColor100.main
                            }, ${theme.spacing(0, 0.125, 0.25, 0)} ${hexToRGBA(theme.palette.grey[900], 0.05)}`
                        }
                    },
                    '&.Mui-focused': {
                        border: `1px solid ${theme.palette.primaryColor500.main}`,
                        boxShadow: `${theme.spacing(0, 0, 0, 0.5)} ${
                            theme.palette.primaryColor100.main
                        }, ${theme.spacing(0, 0.125, 0.25, 0)} ${hexToRGBA(theme.palette.grey[900], 0.05)}`
                    },
                    '&::placeholder': {
                        color: theme.palette.grey[300]
                    },
                    input: {
                        textOverflow: 'ellipsis'
                    }
                })
            }
        },
        MuiOutlinedInput: {
            styleOverrides: {
                root: ({ theme }: OwnerStateThemeType) => ({
                    paddingLeft: theme.spacing(1.5)
                }),
                notchedOutline: () => ({
                    border: 'none'
                }),
                input: ({ theme }: OwnerStateThemeType) => ({ padding: theme.spacing(1, 1.5, 1, 0) })
            }
        },
        MuiFormHelperText: {
            styleOverrides: {
                root: ({ theme }: OwnerStateThemeType) => ({
                    fontSize: theme.spacing(1.75),
                    fontWeight: 400,
                    lineHeight: theme.spacing(2.5),
                    margin: theme.spacing(0.5, 0, 0, 0),
                    color: theme.palette.grey[600]
                })
            }
        }
    }
}

export default InputBase
