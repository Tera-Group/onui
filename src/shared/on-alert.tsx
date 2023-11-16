import React from 'react'
import { Alert, AlertColor, AlertProps, AlertTitle } from '@mui/material'

export interface Props extends AlertProps {
    title: string
    description: string
    status?: AlertProps['severity']
}

const OnAlert: React.FC<Props> = props => {
    const { title, description, status } = props
    return (
        <Alert severity={status}>
            <AlertTitle>{title}</AlertTitle>
            {description}
        </Alert>
    )
}

export default OnAlert
