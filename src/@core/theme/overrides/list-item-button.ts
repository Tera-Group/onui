// ** Util Import
import { OwnerStateThemeType } from '.'

const ListItemButton = () => {
    return {
        MuiListItemButton: {
            styleOverrides: {
                root: ({ theme }: OwnerStateThemeType) => ({
                    borderRadius: 4,
                    columnGap: 8,
                    paddingLeft: 12,
                    paddingRight: 8
                })
            }
        }
    }
}

export default ListItemButton
