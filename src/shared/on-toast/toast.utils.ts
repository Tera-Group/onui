export enum NotificationType {
    Default = 'default',
    Error = 'error',
    Info = 'info',
    Success = 'success',
    Warning = 'warning'
}

const throttle = (cb: () => void, delay = 250) => {
    let shouldWait = false

    return () => {
        if (shouldWait) return

        cb()
        shouldWait = true
        setTimeout(() => {
            shouldWait = false
        }, delay)
    }
}

export const playSound = throttle(() => {
    const url = '/static/sound/new_message.mp3'
    const audio = new Audio(url)
    audio.play().catch(e => console.error(e))
}, 3000)

export const getDescription = (value: string | { [key: string]: any }): string => {
    let description
    if (typeof value === 'string') {
        description = value
    } else if (value instanceof Error) {
        description = value.message
    } else if (value instanceof PromiseRejectionEvent) {
        description = getDescription(value.reason)
    } else {
        description = JSON.stringify(value)
    }

    return description
}

export const getToastIcon = (type: NotificationType): string => {
    switch (type) {
        case NotificationType.Error:
            return 'alert-circle'
        case NotificationType.Info:
            return 'alert-circle'
        case NotificationType.Success:
            return 'check-circle'
        case NotificationType.Warning:
            return 'alert-triangle'
        default:
            return 'alert-circle'
    }
}
