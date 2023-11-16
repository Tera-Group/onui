const Paper = () => {
    return {
        MuiPaper: {
            defaultProps: {
                container: () => document.getElementById('__next')
            }
        }
    }
}

export default Paper
