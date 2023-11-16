import React from 'react'
import TextField from '@mui/material/TextField'
import format from 'date-fns/format'
import DatePicker, { ReactDatePickerProps } from 'react-datepicker'
import DatePickerContainer from './on-datepicker-container'
import { InputAdornment } from '@mui/material'
import OnIcon from '../on-icons'

type DateType = Date | null | undefined

interface PickerProps {
    label?: string
    end: Date | number
    start: Date | number
}

const CustomInput = React.forwardRef((props: PickerProps, ref) => {
    const startDate = props.start !== null ? format(props.start, 'dd/MM/yyyy') : null
    const endDate = props.end !== null ? ` - ${format(props.end, 'dd/MM/yyyy')}` : null

    const value = `${startDate !== null ? startDate : ''}${endDate !== null ? endDate : ''}`

    return (
        <TextField
            inputRef={ref}
            label={props.label || ''}
            {...props}
            autoComplete='off'
            InputProps={{
                startAdornment: (
                    <InputAdornment position='start'>
                        <OnIcon icon='calendar' />
                    </InputAdornment>
                )
            }}
            value={value}
            className='w-full'
        />
    )
})

CustomInput.displayName = 'CustomInput'

export interface Props {
    className?: string
    disabled?: boolean
    endAt: number | null
    name: string
    placeholder?: string
    popperPlacement?: ReactDatePickerProps['popperPlacement']
    startAt: number | null
    onChange: (newValue: any) => void
}

const OnDatePickersRange: React.FC<Props> = ({
    className,
    endAt,
    name,
    placeholder,
    startAt,
    disabled = false,
    popperPlacement = 'bottom-start',
    onChange
}) => {
    const [dateRange, setDateRange] = React.useState<DateType[]>([null, null])
    const [startDate, endDate] = dateRange

    React.useEffect(() => {
        if (!startAt || !endAt) return

        setDateRange([new Date(startAt), new Date(endAt)])
    }, [startAt, endAt])

    const handleOnChange = (dates: any) => {
        onChange(dates)
        setDateRange(dates)
    }

    return (
        <DatePickerContainer>
            <DatePicker
                className={className}
                disabled={disabled}
                endDate={endDate}
                id='date-range-picker'
                popperPlacement={popperPlacement}
                placeholderText={placeholder}
                selectsRange={true}
                selected={startDate}
                startDate={startDate}
                shouldCloseOnSelect={false}
                customInput={<CustomInput start={startDate as Date | number} end={endDate as Date | number} />}
                onChange={handleOnChange}
                monthsShown={2}
            />
        </DatePickerContainer>
    )
}

export default OnDatePickersRange
