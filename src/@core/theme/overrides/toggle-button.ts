// ** Type Import
import { OwnerStateThemeType } from '.'

const ToggleButton = () => {
    return {
        MuiToggleButton: {
            styleOverrides: {
                root: ({ theme }: OwnerStateThemeType) => ({
                    borderRadius: 0,
                    border: 0,
                    marginRight: 16,
                    padding: 0
                })
            }
        }
    }
}

export default ToggleButton
