import React from 'react'
import { Checkbox } from '@mui/material'
import type { CheckboxProps } from '@mui/material'
import FavoriteBorder from '@mui/icons-material/FavoriteBorder'
import Favorite from '@mui/icons-material/Favorite'

const CheckedIcon = () => (
    <svg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <g filter='url(#filter0_d_1_23527)'>
            <rect x='2' y='1' width='16' height='16' rx='4' fill='#F2F2FF' />
            <rect x='2.5' y='1.5' width='15' height='15' rx='3.5' stroke='currentColor' />
            <path
                fill-rule='evenodd'
                clip-rule='evenodd'
                d='M14.3536 5.64645C14.5488 5.84171 14.5488 6.15829 14.3536 6.35355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536L5.64645 9.35355C5.45118 9.15829 5.45118 8.84171 5.64645 8.64645C5.84171 8.45118 6.15829 8.45118 6.35355 8.64645L8.5 10.7929L13.6464 5.64645C13.8417 5.45118 14.1583 5.45118 14.3536 5.64645Z'
                fill='currentColor'
            />
        </g>
        <defs>
            <filter
                id='filter0_d_1_23527'
                x='0'
                y='0'
                width='20'
                height='20'
                filterUnits='userSpaceOnUse'
                color-interpolation-filters='sRGB'>
                <feFlood flood-opacity='0' result='BackgroundImageFix' />
                <feColorMatrix
                    in='SourceAlpha'
                    type='matrix'
                    values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                    result='hardAlpha'
                />
                <feOffset dy='1' />
                <feGaussianBlur stdDeviation='1' />
                <feColorMatrix
                    type='matrix'
                    values='0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.05 0'
                />
                <feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow_1_23527' />
                <feBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow_1_23527' result='shape' />
            </filter>
        </defs>
    </svg>
)
const UnCheckedIcon = () => (
    <svg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <g filter='url(#filter0_d_1_23563)'>
            <rect x='2' y='1' width='16' height='16' rx='4' fill='white' />
            <rect x='2.5' y='1.5' width='15' height='15' rx='3.5' stroke='currentColor' />
        </g>
        <defs>
            <filter
                id='filter0_d_1_23563'
                x='0'
                y='0'
                width='20'
                height='20'
                filterUnits='userSpaceOnUse'
                color-interpolation-filters='sRGB'>
                <feFlood flood-opacity='0' result='BackgroundImageFix' />
                <feColorMatrix
                    in='SourceAlpha'
                    type='matrix'
                    values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                    result='hardAlpha'
                />
                <feOffset dy='1' />
                <feGaussianBlur stdDeviation='1' />
                <feColorMatrix
                    type='matrix'
                    values='0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.05 0'
                />
                <feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow_1_23563' />
                <feBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow_1_23563' result='shape' />
            </filter>
        </defs>
    </svg>
)

const OnCheckbox: React.FC<CheckboxProps> = ({ checkedIcon = <CheckedIcon />, icon = <UnCheckedIcon />, ...props }) => {
    return <Checkbox icon={icon} checkedIcon={checkedIcon} {...props} />
}

export default OnCheckbox
