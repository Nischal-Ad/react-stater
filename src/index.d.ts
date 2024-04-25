interface IState {
  status: 'idle' | 'loading' | 'success' | 'error'
  error: unknown
}

interface IStatus {
  message: string
  success: boolean
}

interface IAuth extends IStatus {
  user?: Partial<IUser>
}
