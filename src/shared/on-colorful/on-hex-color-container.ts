import { styled } from '@mui/material/styles'
import Popover, { PopoverProps } from '@mui/material/Popover'

const HexColorContainer = styled(Popover)<PopoverProps>(({ theme }) => {
    return {
        padding: '20px 10px',
        '& .react-colorful': {
            height: 400,
            width: 400,
            padding: theme.spacing(2)
        },
        '& .react-colorful__saturation': {
            borderRadius: 0,
            '&-pointer': {
                cursor: 'grab',
                width: 16,
                height: 16,
                borderWidth: 4
            }
        },
        '& .react-colorful__hue': {
            height: 16,
            marginTop: 20,
            borderRadius: 16,
            '&-pointer': {
                height: 24,
                width: 9,
                borderRadius: 9,
                borderWidth: 3
            }
        }
    }
})

export default HexColorContainer
