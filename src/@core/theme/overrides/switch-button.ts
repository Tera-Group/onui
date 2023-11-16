// ** Type Import
import { OwnerStateThemeType } from '.'

const SwitchButton = () => {
    return {
        MuiSwitch: {
            styleOverrides: {
                root: ({ theme }: OwnerStateThemeType) => ({
                    width: theme.spacing(4.5),
                    height: theme.spacing(2.5),
                    padding: 0,
                    '& .MuiSwitch-switchBase': {
                        padding: 0,
                        margin: '2px 3px',
                        '&.Mui-checked': {
                            transform: `translateX(${theme.spacing(1.75)})`,
                            color: theme.palette.common.white,
                            '& + .MuiSwitch-track': {
                                backgroundColor: theme.palette.successColor600.main,
                                opacity: 1,
                                border: 0
                            },
                            '&.Mui-disabled + .MuiSwitch-track': {
                                opacity: 0.5
                            }
                        }
                    },
                    '& .MuiSwitch-thumb': {
                        boxSizing: 'border-box',
                        width: theme.spacing(2),
                        height: theme.spacing(2)
                    },
                    '& .MuiSwitch-track': {
                        borderRadius: theme.spacing(2),
                        backgroundColor: theme.palette.grey[100],
                        opacity: 1
                    },
                })

            }
        }
    }
}

export default SwitchButton
