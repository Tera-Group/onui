// ** Type Import
import { OwnerStateThemeType } from '.'

const Pagination = () => {
    return {
        MuiPaginationItem: {
            styleOverrides: {
                root: ({ theme }: OwnerStateThemeType) => ({
                    border: `1px solid ${theme.palette.grey[300]}`,
                    borderRadius: 0,
                    borderWidth: '1px 0',
                    color: theme.palette.grey[700],
                    fontWeight: 600,
                    margin: 0,
                    '&.Mui-selected': {
                        backgroundColor: theme.palette.primaryColor600.main,
                        color: theme.palette.common.white,
                        '&:hover': {
                            backgroundColor: theme.palette.primaryColor600.main,
                            color: theme.palette.common.white
                        }
                    },
                    '&:hover': {
                        backgroundColor: theme.palette.primaryColor600.main,
                        color: theme.palette.common.white
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
