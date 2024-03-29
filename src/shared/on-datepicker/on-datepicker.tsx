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

type DateType = Date | null | undefined
export interface Props extends ReactDatePickerProps {
    className?: string
    customInput?: React.ReactNode
    disabled?: boolean
    name: string
    placeholder?: string
    onChange: (newValue: any) => void
}

const OnDatePicker: React.FC<Props> = ({
    className,
    customInput,
    name,
    placeholder,
    value,
    dateFormat = 'dd/MM/yyyy',
    disabled = false,
    popperPlacement = 'bottom-start',
    onChange,
    ...restProps
}) => {
    const [date, setDate] = React.useState<DateType>(null)

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
                customInput={!customInput ? <CustomInput /> : customInput}
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
