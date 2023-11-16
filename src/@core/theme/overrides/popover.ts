const Popover = () => {
    return {
        MuiPopover: {
            defaultProps: {
                container: () => document.getElementById('__next')
            }
        }
    }
}

export default Popover
