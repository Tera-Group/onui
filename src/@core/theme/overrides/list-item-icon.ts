// ** Util Import
import { OwnerStateThemeType } from '.'

const ListItemIcon = () => {
    return {
        MuiListItemIcon: {
            styleOverrides: {
                root: ({ theme }: OwnerStateThemeType) => ({
                    minWidth: 24
                })
            }
        }
    }
}

export default ListItemIcon
