import { createSlice } from '@reduxjs/toolkit'
import type { CaseReducer, PayloadAction } from '@reduxjs/toolkit'
import decodeAccessToken from '@Src/utils/decodeAccessToken'

interface IAuthState extends IState {
  data: Partial<IAuth>
}

const token = localStorage.getItem('token')
const authDetails: any = decodeAccessToken(token as string)

const initialState: IAuthState = {
  status: 'idle',
  data: authDetails,
  error: '',
}

const setLoading: CaseReducer<IAuthState> = (state) => ({
  ...state,
  status: 'loading',
})

const setData: CaseReducer<IAuthState, PayloadAction<IAuth>> = (
  state,
  action
) => ({
  status: 'success',
  data: action.payload,
  error: '',
})

const setError: CaseReducer<IAuthState, PayloadAction<Error | string>> = (
  state,
  action
) => ({
  ...state,
  status: 'error',
  error: action.payload,
})

const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {
    setLoading,
    setData,
    setError,
  },
})

export default authSlice
