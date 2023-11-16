// ** Type Import
import { OwnerStateThemeType } from './'

const Tabs = () => {
    return {
        MuiTabs: {
            styleOverrides: {
                root: ({ theme }: OwnerStateThemeType) => ({})
            }
        }
    }
}

export default Tabs
