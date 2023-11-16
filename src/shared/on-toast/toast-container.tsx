import React from 'react'
import { ToastContainer as Container, ToastContainerProps } from 'react-toastify'

export type Props = ToastContainerProps

const ToastContainer: React.FC<Props> = props => {
    return <Container autoClose={5000} theme='colored' {...props} />
}

export default ToastContainer
