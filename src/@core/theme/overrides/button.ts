// ** Util Import
import { OwnerStateThemeType } from '.'

const Button = () => {
    return {
        MuiButton: {
            styleOverrides: {
                root: ({ ownerState, theme }: OwnerStateThemeType) => ({
                    borderRadius: 8,
                    fontSize: '0.875rem',
                    lineHeight: '1.25rem',
                    textTransform: 'none',
                    ...(ownerState.size === 'small' && {
                        padding: '8px 14px'
                    }),
                    ...(ownerState.size === 'medium' && {
                        padding: '10px 16px'
                    }),
                    ...(ownerState.size === 'large' && {
                        padding: '10px 18px',
                        fontSize: '1rem',
                        lineHeight: '1.5rem'
                    }),
                    ...(ownerState.variant === 'text' && {
                        '&:hover': {
                            backgroundColor: 'transparent'
                        }
                    })
                }),
                contained: ({ theme }: OwnerStateThemeType) => ({
                    border: `1px solid ${theme.palette.common.black}`,
                    boxShadow: '0px 1px 2px 0px rgba(16, 24, 40, 0.05)',
                    ':hover': {
                        boxShadow: '0px 1px 2px 0px rgba(16, 24, 40, 0.05)'
                    }
                }),
                containedPrimary: ({ theme }: OwnerStateThemeType) => ({
                    borderColor: theme.palette.primaryColor500.main,
                    color: theme.palette.common.white,
                    '&.MuiButton-containedPrimary': {
                        backgroundColor: theme.palette.primaryColor500.main
                    },
                    '&.MuiButton-containedPrimary:hover': {
                        backgroundColor: theme.palette.primaryColor700.main,
                        borderColor: theme.palette.primaryColor700.main
                    },
                    '&.MuiButton-containedPrimary:focus': {
                        backgroundColor: theme.palette.primaryColor600.main,
                        borderColor: theme.palette.primaryColor600.main,
                        boxShadow: `0px 0px 0px 4px ${theme.palette.primaryColor200.main}, 0px 1px 2px 0px rgba(16, 24, 40, 0.05)`
                    },
                    '&.MuiButton-containedPrimary:disabled': {
                        backgroundColor: theme.palette.primaryColor200.main,
                        borderColor: theme.palette.primaryColor200.main,
                        color: theme.palette.common.white
                    }
                }),
                containedSecondary: ({ theme }: OwnerStateThemeType) => ({
                    borderColor: theme.palette.grey[300],
                    color: theme.palette.grey[500],
                    '&.MuiButton-containedSecondary': {
                        backgroundColor: theme.palette.common.white
                    },
                    '&.MuiButton-containedSecondary:hover': {
                        backgroundColor: theme.palette.grey[200],
                        color: theme.palette.grey[600]
                    },
                    '&.MuiButton-containedSecondary:focus': {
                        borderColor: theme.palette.grey[300],
                        boxShadow: `0px 0px 0px 4px ${theme.palette.grey[100]}, 0px 1px 2px 0px rgba(16, 24, 40, 0.05)`
                    },
                    '&.MuiButton-containedSecondary:disabled': {
                        borderColor: theme.palette.grey[200],
                        color: theme.palette.grey[300]
                    }
                }),
                containedError: ({ theme }: OwnerStateThemeType) => ({
                    borderColor: theme.palette.errorColor600.main,
                    color: theme.palette.common.white,
                    '&.MuiButton-containedError': {
                        backgroundColor: theme.palette.errorColor600.main
                    },
                    '&.MuiButton-containedError:hover': {
                        backgroundColor: theme.palette.errorColor700.main,
                        borderColor: theme.palette.errorColor700.main
                    },
                    '&.MuiButton-containedError:focus': {
                        boxShadow: `0px 0px 0px 4px ${theme.palette.errorColor100.main}, 0px 1px 2px 0px rgba(16, 24, 40, 0.05)`
                    },
                    '&.MuiButton-containedError:disabled': {
                        backgroundColor: theme.palette.errorColor200.main,
                        borderColor: theme.palette.errorColor200.main,
                        color: theme.palette.common.white
                    }
                })
            }
        },
        MuiButtonBase: {
            defaultProps: {
                disableRipple: false
            }
        }
    }
}

export default Button
