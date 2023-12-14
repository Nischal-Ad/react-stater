import localAxios from '@Utils/localAxios'
import { ILogin, TLogin } from './auth.model'

export const onLogin = (payload: TLogin): Promise<ILogin> =>
  localAxios.post(`/login`, payload)
