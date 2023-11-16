const Menu = () => {
    return {
        MuiMenu: {
            defaultProps: {
                container: () => document.getElementById('__next')
            },
            styleOverrides: {}
        }
    }
}

export default Menu