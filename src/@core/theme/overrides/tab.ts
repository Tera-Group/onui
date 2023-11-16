// ** Type Import
import { OwnerStateThemeType } from './'

const Tab = () => {
    return {
        MuiTab: {
            styleOverrides: {
                root: ({ theme }: OwnerStateThemeType) => ({
                    textTransform: 'none',
                    paddingLeft: 0,
                    paddingRight: 0,
                    marginRight: 16
                })
            }
        }
    }
}

export default Tab
