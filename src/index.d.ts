interface IState {
  status: 'idle' | 'loading' | 'success' | 'error'
  error: unknown
}

interface IStatus {
  message: string
  success: boolean
}

interface IQuery {
  pagination_page: number
  pagination_limit: number
  search: string
  query: string
}

interface IUser {
  email: string
  _id: string
  password: string
  name: string
  role: 'admin' | 'user'
  createdAt: Date
}

interface IAuth extends IStatus {
  data: IUser
}
