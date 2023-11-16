// ** Type Import
import { OwnerStateThemeType } from './'

const TableCell = () => {
    return {
        MuiTableCell: {
            styleOverrides: {
                root: ({ theme }: OwnerStateThemeType) => ({
                    borderBottom: `1px solid ${theme.palette.grey[200]}`
                })
            }
        }
    }
}

export default TableCell
