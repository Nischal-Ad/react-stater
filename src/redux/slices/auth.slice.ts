import { ILogin, ILoginState } from '@Features/auth/data/auth.model'
import { createSlice } from '@reduxjs/toolkit'
import type { CaseReducer, PayloadAction } from '@reduxjs/toolkit'

const initialState: ILoginState = {
  status: 'idle',
  data: {},
  error: '',
  isAuth: false,
}

const setLoading: CaseReducer<ILoginState> = (state) => ({
  ...state,
  status: 'loading',
})

const setData: CaseReducer<ILoginState, PayloadAction<ILogin>> = (
  state,
  action
) => ({
  status: 'success',
  isAuth: action.payload.isAuth,
  data: action.payload,
  error: '',
})

const setError: CaseReducer<ILoginState, PayloadAction<Error>> = (
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
