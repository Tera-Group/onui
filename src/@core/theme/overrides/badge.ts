// ** Type Import
import { OwnerStateThemeType } from '.'

const Badge = () => {
    return {
        MuiBadge: {
            styleOverrides: {
                badge: ({ theme }: OwnerStateThemeType) => ({
                    border: `2px solid ${theme.palette.common.white}`,
                    borderRadius: '16px',
                    fontSize: '0.625rem',
                    fontWeight: 500,
                    lineHeight: 1.3,
                    letterSpacing: 0.1,
                    height: 'auto',
                    padding: '0px 3px',
                    top: 2,
                    right: 4
                }),
                colorPrimary: ({ theme }: OwnerStateThemeType) => ({
                    backgroundColor: theme.palette.primaryColor600.main
                })
            }
        }
    }
}

export default Badge
