import React from 'react'
import TextField from '@mui/material/TextField'
import format from 'date-fns/format'
import DatePicker from 'react-datepicker'
import type { ReactDatePickerProps } from 'react-datepicker'
import DatePickerContainer from './on-datepicker-container'
import { InputAdornment } from '@mui/material'
import OnIcon from '../on-icons'

const CustomInput = React.forwardRef((props, ref) => {
    return (
        <TextField
            inputRef={ref}
            {...props}
            autoComplete='off'
            InputProps={{
                startAdornment: (
                    <InputAdornment position='start'>
                        <OnIcon icon='calendar' />
                    </InputAdornment>
                )
            }}
            className='w-full'
        />
    )
})

CustomInput.displayName = 'CustomDateInput'

export interface Props extends ReactDatePickerProps {
    className?: string
    disabled?: boolean
    name: string
    placeholder?: string
    onChange: (newValue: any) => void
}

const OnDatePicker: React.FC<Props> = ({
    className,
    name,
    placeholder,
    value,
    dateFormat = 'dd/MM/yyyy',
    disabled = false,
    popperPlacement = 'bottom-start',
    onChange,
    ...restProps
}) => {
    const [date, setDate] = React.useState(new Date())

    const handleChange = React.useCallback((newDate: any) => {
        onChange(newDate)
        setDate(newDate)
    }, [])

    React.useEffect(() => {
        if (!value) return

        setDate(new Date(value))
    }, [value])
    return (
        <DatePickerContainer>
            <DatePicker
                className={className}
                customInput={<CustomInput />}
                dateFormat={dateFormat}
                disabled={disabled}
                id='date-picker'
                popperPlacement={popperPlacement}
                placeholderText={placeholder}
                selected={date}
                onChange={handleChange}
                {...restProps}
            />
        </DatePickerContainer>
    )
}

export default OnDatePicker
