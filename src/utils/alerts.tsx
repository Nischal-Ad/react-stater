import { message, Modal } from 'antd'
import { MdError } from 'react-icons/md'

export const notifySuccess = (content: string) => {
  message.success({ content, duration: 1 })
}

export const notifyError = (content: string) => {
  message.error({ content, duration: 1 })
}

export const notifyErrorDialog = (message: string) => {
  Modal.confirm({
    centered: true,
    title: <p className="ml-1 text-sm">Failed</p>,
    icon: <MdError className=" text-xl text-red-500" />,
    cancelButtonProps: { className: 'hidden' },
    content: message,
    okText: 'ok',
    okButtonProps: { className: 'bg-red-500  hover:!bg-red-500' },
  })
}
