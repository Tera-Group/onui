import { showToast } from './toast-message'
import { NotificationType, getDescription } from './toast.utils'

const handleNotification = (message: string, options: { title: string; type: NotificationType }, isError = false) => {
    const description = getDescription(message)

    if (isError) {
        console.error(description, message)
        return
    }

    !!description && showToast(description, options)
}

/**
 * The onToast() allows you to push an information message to the screen with primary color.
 *
 * @param message A default message
 * @param description A description of the information message. It will be replaced text "Thông tin" in the title.
 * @example_01 alertInfo('Lorem ipsum')
 * @example_02 alertInfo('Nội dung của bạn sẽ được phát hành sau 13h', 'Thông tin')
 */
export const onToast = (message: string, description = 'Thông tin') => {
    handleNotification(message, { title: description, type: NotificationType.Default })
}

/**
 * The onToastInfo() allows you to push an information message to the screen.
 *
 * @param message A information message
 * @param description A description of the information message. It will be replaced text "Thông tin" in the title.
 * @example_01 alertInfo('Lorem ipsum')
 * @example_02 alertInfo('Nội dung của bạn sẽ được phát hành sau 13h', 'Thông tin')
 */
export const onToastInfo = (message: string, description = 'Thông tin') => {
    handleNotification(message, { title: description, type: NotificationType.Info })
}

/**
 * The onToastSuccess() allows you to push an success message to the screen.
 *
 * @param message A success message
 * @param description A description of the successful message. It will be replaced text "Thành công" in the title.
 * @example_01 alertSuccess('Lorem ipsum')
 * @example_02 alertSuccess('Tệp đã được tải lên hệ thống.', 'Upload thành công')
 */
export const onToastSuccess = (message: string, description = 'Thành công') => {
    handleNotification(message, { title: description, type: NotificationType.Success })
}

/**
 * The onToastWarning() allows you to push an warning message to the screen.
 *
 * @param message A warning message
 * @param description A description of the warning message. It will be replaced text "Cảnh báo" in the title.
 * @example_01 alertWarning('Lorem ipsum')
 * @example_02 alertWarning('Hệ thống đang bảo trì.', 'Cảnh báo')
 */
export const onToastWarning = (message: string, description = 'Cảnh báo') => {
    handleNotification(message, { title: description, type: NotificationType.Warning })
}

/**
 * The onToastError() allows you to push an error message to the screen.
 *
 * @param message An error message
 * @param description A description of the error message. It will be replaced text "Lỗi" in the title.
 * @example_01 alertError('Resolution không hợp lệ')
 * @example_02 alertError('Bitrate không hợp lệ', 'Lỗi Video')
 */
export const onToastError = (message: string, description = 'Lỗi') => {
    const isCodeError = /TypeError: Cannot read properties/.test(message)
    handleNotification(message, { title: description, type: NotificationType.Error }, isCodeError)
}
