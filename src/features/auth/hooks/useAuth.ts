/* eslint-disable @typescript-eslint/no-explicit-any */
import authSlice from '@Slices/auth.slice'
import { useAppDispatch } from '@Store'
import { onLogin } from '../data/auth.service'
import { TLogin } from '../data/auth.model'
import { notifyError, notifySuccess } from '@Utils/alerts'

export const useAuth = () => {
  const dispatch = useAppDispatch()

  const onLoginUser = async (payload: TLogin) => {
    try {
      dispatch(authSlice.actions.setLoading())

      const res = await onLogin(payload)
      dispatch(authSlice.actions.setData({ ...res, isAuth: true }))
      notifySuccess('you are now logged in')
    } catch (error: any) {
      dispatch(authSlice.actions.setError(error.message))
      notifyError(error.message)
    }
  }

  return { onLoginUser }
}
