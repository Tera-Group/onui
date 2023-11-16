const Modal = () => {
    return {
        MuiModal: {
            defaultProps: {
                container: () => document.getElementById('__next')
            },
            styleOverrides: {}
        }
    }
}

export default Modal
