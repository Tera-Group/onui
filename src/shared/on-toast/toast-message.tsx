import React from 'react'
import { toast } from 'react-toastify'
import { getToastIcon } from './toast.utils'
import OnIcon from '../on-icons'
import OnText from '../on-text'

interface Props {
    title: string
    message: string
}

export const showToast = (message: string, options: { [key: string]: any }) => {
    const { title, type: notifType, ...restOptions } = options
    const icon = getToastIcon(notifType)

    if (!toast.isActive(message)) {
        toast(<ToastMessage title={title} message={message} />, {
            ...restOptions,
            type: notifType,
            icon: <OnIcon icon={icon} />,
            style: { display: 'grid', gridTemplateColumns: '1fr 36px' }
        })
    }
}

const ToastMessage: React.FC<Props> = ({ title, message }) => {
    return (
        <>
            <OnText size='md' fontWeight='semibold'>
                {title[0].toUpperCase() + title.substring(1)}
            </OnText>
            <OnText size='sm'>{message}</OnText>
        </>
    )
}

export default ToastMessage
