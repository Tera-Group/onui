const Divider = () => {
    return {
        MuiDivider: {
            defaultProps: {
                container: () => document.getElementById('__next')
            },
            styleOverrides: {}
        }
    }
}

export default Divider
