/* eslint-disable @typescript-eslint/no-explicit-any */
import authSlice from '@Slices/auth.slice'
import axiosInstance from '@Utils/axiosInstance'
import { useAppDispatch } from '@Store'
import { notifyError, notifySuccess } from '@Utils/alerts'

interface ILogin {
  email: string
  password: string
}

export const useAuth = () => {
  const dispatch = useAppDispatch()

  const onLoginUser = async (payload: ILogin) => {
    try {
      dispatch(authSlice.actions.setLoading())

      // const res: IAuth = await axiosInstance.post(`/login`, {Params:{
      //   page,limit
      // }})
      const res: IAuth = await axiosInstance.post(`/login`, payload)
      dispatch(authSlice.actions.setData(res))
      notifySuccess('you are now logged in')
    } catch (error: any) {
      dispatch(authSlice.actions.setError(error.message))
      notifyError(error.message)
    }
  }

  return { onLoginUser }
}
