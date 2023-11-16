const Popper = () => {
    return {
        MuiPopper: {
            defaultProps: {
                container: () => document.getElementById('__next')
            }
        }
    }
}

export default Popper
