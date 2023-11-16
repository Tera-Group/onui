const ListItem = () => {
    return {
        MuiListItem: {
            defaultProps: {
                container: () => document.getElementById('__next')
            },
            styleOverrides: {}
        }
    }
}

export default ListItem
