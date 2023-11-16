import React from 'react'

const hypen2CamelCase = (text: string) => {
    return `-${text}`.toLowerCase().replace(/-(.)/g, function (match, group1) {
        return group1.toUpperCase()
    })
}

export interface Props extends React.SVGProps<SVGSVGElement> {
    icon: string
}

const OnIcon: React.FC<Props> = ({ icon, ...restProps }) => {
    const iconName = hypen2CamelCase(icon)
    const IconComponent = require(`@untitled-ui/icons-react`)[iconName]

    if (!icon || !IconComponent) return null

    return <IconComponent {...restProps} />
}

export default OnIcon
