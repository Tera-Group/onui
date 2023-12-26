// ** Type Import
import { OwnerStateThemeType } from './'

const DataGrid = () => {
    return {
        MuiDataGrid: {
            styleOverrides: {
                root: ({ ownerState, theme }: OwnerStateThemeType) => ({
                    backgroundColor: theme.palette.common.white,
                    border: `1px solid ${theme.palette.grey[200]}`,
                    borderRadius: 8,
                    ...(typeof ownerState.className === 'string' &&
                        ownerState.className.includes('rounded-none') && {
                            borderRadius: 0
                        }),
                    boxShadow: '0px 2px 4px -2px rgba(16, 24, 40, 0.06), 0px 4px 8px -2px rgba(16, 24, 40, 0.10)',
                    '& .MuiDataGrid-withBorderColor': {
                        borderBottomColor: theme.palette.grey[200]
                    },
                    '& .MuiDataGrid-row:hover': {
                        backgroundColor: theme.palette.grey[100]
                    },
                    '& .MuiDataGrid-row.Mui-selected': {
                        backgroundColor: theme.palette.grey[100]
                    },
                    '& .MuiDataGrid-cell:focus': {
                        outlineColor: theme.palette.grey[100]
                    },
                    '& .MuiDataGrid-columnHeader:focus': {
                        outlineColor: theme.palette.grey[100]
                    },
                    '& .MuiDataGrid-cell:focus-within': {
                        outlineColor: theme.palette.grey[100]
                    },
                    '& .MuiDataGrid-columnHeader:focus-within': {
                        outlineColor: theme.palette.grey[100]
                    },
                    '& .MuiDataGrid-columnHeaderCheckbox': {
                        padding: 0,
                        '& .MuiSvgIcon-root': {
                            width: 20,
                            height: 20
                        }
                    },
                    '& .MuiDataGrid-checkboxInput': {
                        padding: 0,
                        '& .MuiSvgIcon-root': {
                            width: 20,
                            height: 20
                        }
                    }
                }),
                columnHeader: ({ theme }: OwnerStateThemeType) => ({
                    backgroundColor: theme.palette.grey[50],
                    padding: '0 16px'
                }),
                columnHeaderTitle: ({ theme }: OwnerStateThemeType) => ({
                    color: theme.palette.grey[600],
                    fontSize: 14,
                    fontWeight: 500,
                    lineHeight: 20
                }),
                cell: () => ({
                    padding: '12px 16px'
                }),
                footerContainer: () => ({
                    padding: '8px 24px'
                })
            }
        }
    }
}
export default DataGrid
