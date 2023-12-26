import React from 'react'
import { Checkbox } from '@mui/material'
import type { CheckboxProps } from '@mui/material'
import CheckedIcon from './checked-icon'
import IndeterminateIcon from './indeterminate-icon'
import UnCheckedIcon from './un-checked-icon'

const OnCheckbox: React.FC<CheckboxProps> = ({
    checkedIcon = <CheckedIcon />,
    icon = <UnCheckedIcon />,
    indeterminateIcon = <IndeterminateIcon />,
    ...props
}) => {
    return <Checkbox checkedIcon={checkedIcon} icon={icon} indeterminateIcon={indeterminateIcon} {...props} />
}

export default OnCheckbox
