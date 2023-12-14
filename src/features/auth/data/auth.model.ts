export type TLogin = {
  email: string
  password: string
}

export interface ILogin extends IStatus {
  user: TLogin
  isAuth?: boolean
}

export interface ILoginState extends IState {
  data: Partial<ILogin>
  isAuth?: boolean
}
