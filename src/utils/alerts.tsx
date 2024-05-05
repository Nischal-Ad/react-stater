import { message } from 'antd'

export const notifySuccess = (content: string) => {
  message.success({ content, duration: 1 })
}

export const notifyError = (content: string) => {
  message.error({ content, duration: 1 })
}
