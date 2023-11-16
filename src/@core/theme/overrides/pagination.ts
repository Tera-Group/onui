// ** Type Import
import { OwnerStateThemeType } from '.'

const Pagination = () => {
    return {
        MuiPaginationItem: {
            styleOverrides: {
                root: ({ theme }: OwnerStateThemeType) => ({
                    margin: 0,
                    borderRadius: 0,

                    color: theme.palette.grey[700],
                    border: `1px solid ${theme.palette.grey[300]}`,
                    borderWidth: '1px 0',

                    '&.Mui-selected': {
                        color: theme.palette.primaryColor500.main,
                        backgroundColor: theme.palette.primaryColor50.main,
                        fontWeight: 'bold',
                        '&:hover': {
                            backgroundColor: theme.palette.primaryColor50.main
                        }
                    },
                    '&:hover': {
                        backgroundColor: theme.palette.primaryColor50.main
                    }
                }),
                ellipsis: () => ({
                    height: 40,
                    paddingTop: 10
                })
            }
        },
        MuiPagination: {
            styleOverrides: {
                root: ({ theme }: OwnerStateThemeType) => ({
                    minWidth: 'fit-content'
                }),
                ul: ({ theme }: OwnerStateThemeType) => ({
                    '& li:not(:first-of-type):not(:last-child)': {
                        borderRight: `1px solid ${theme.palette.grey[300]}`
                    },
                    '& li:last-child': {
                        '& .MuiPaginationItem-root': {
                            borderRight: `1px solid ${theme.palette.grey[300]}`,
                            borderRadius: '0 8px 8px 0'
                        }
                    },
                    '& li:first-of-type': {
                        '& .MuiPaginationItem-root': {
                            border: `1px solid ${theme.palette.grey[300]}`,
                            borderWidth: '1px',
                            borderRadius: '8px 0 0 8px'
                        }
                    }
                })
            }
        },
        MuiTablePagination: {
            styleOverrides: {
                root: ({ theme }: OwnerStateThemeType) => ({
                    height: 'auto',
                    width: 'fit-content',
                    color: theme.palette.grey[700],

                    '& .MuiToolbar-root': {
                        width: 'fit-content',
                        columnGap: theme.spacing(3),
                        '> *': {
                            margin: 0
                        }
                    }
                })
            }
        }
    }
}

export default Pagination
