import { OwnerStateThemeType } from '.'

const Menu = () => {
    return {
        MuiMenu: {
            defaultProps: {
                container: () => document.getElementById('__next')
            },
            styleOverrides: {
                root: ({ theme }: OwnerStateThemeType) => ({
                    '& .MuiMenu-list': {
                        backgroundColor: theme.palette.common.white,
                        borderRadius: 4,
                        padding: '4px 8px'
                    },
                    '& .MuiMenu-paper': {
                        boxShadow: '0px 4px 6px -2px rgba(16, 24, 40, 0.03), 0px 12px 16px -4px rgba(16, 24, 40, 0.08)',
                        borderRadius: 8,
                        border: `1px solid ${theme.palette.grey[300]}`
                    },
                    '& .MuiMenuItem-root': {
                        borderRadius: 4,
                        margin: '4px 0',
                        padding: '10px 12px',
                        transition: 'all 0.3s ease',
                        ':hover': {
                            backgroundColor: theme.palette.primaryColor100.main,
                            color: theme.palette.primaryColor700.main
                        }
                    }
                })
            }
        }
    }
}

export default Menu
