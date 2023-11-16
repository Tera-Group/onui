// ** Type Import
import { OwnerStateThemeType } from './'

const Chip = () => {
    return {
        MuiChip: {
            styleOverrides: {
                root: ({ ownerState, theme }: OwnerStateThemeType) => ({
                    columnGap: '6px',
                    width: 'fit-content',

                    ...(ownerState.size == 'small' && {
                        padding: '2px 8px'
                    }),
                    ...(ownerState.size == 'medium' && {
                        padding: '2px 10px'
                    })
                }),
                icon: ({ ownerState, theme }: OwnerStateThemeType) => ({
                    margin: 0,
                    fontSize: '8px',

                    ...(ownerState.label == null && {
                        fontSize: '0.75rem'
                    })
                }),
                avatar: () => ({
                    margin: 0,
                    width: 16,
                    height: 16
                }),
                colorError: ({ theme }: OwnerStateThemeType) => ({
                    backgroundColor: theme.palette.errorColor50.main,
                    '& .MuiChip-label, & .MuiChip-icon': {
                        color: theme.palette.errorColor700.main
                    }
                }),
                colorPrimary: ({ theme }: OwnerStateThemeType) => ({
                    backgroundColor: theme.palette.primaryColor50.main,
                    '& .MuiChip-label, & .MuiChip-icon': {
                        color: theme.palette.primaryColor700.main
                    }
                }),
                colorSuccess: ({ theme }: OwnerStateThemeType) => ({
                    backgroundColor: theme.palette.successColor50.main,
                    '& .MuiChip-label, & .MuiChip-icon': {
                        color: theme.palette.successColor700.main
                    }
                }),
                colorWarning: ({ theme }: OwnerStateThemeType) => ({
                    backgroundColor: theme.palette.warningColor50.main,
                    '& .MuiChip-label, & .MuiChip-icon': {
                        color: theme.palette.warningColor700.main
                    }
                }),
                label: ({ theme }: OwnerStateThemeType) => ({
                    color: theme.palette.grey[700],
                    padding: 0
                }),
                labelSmall: { fontSize: '0.75rem', lineHeight: '1.125rem' },
                labelMedium: { fontSize: '0.875rem', lineHeight: '1.25rem' }
            }
        }
    }
}

export default Chip
