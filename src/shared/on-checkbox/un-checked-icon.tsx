import React from 'react'

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

export default UnCheckedIcon
