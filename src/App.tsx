import { lazy, memo, Suspense, useEffect } from 'react'
import WebFont from 'webfontloader'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Spin } from 'antd'

// pages
import Error from '@Src/pages/Error'
import Login from '@Pages/auth/Login'
import UserWrapper from '@Components/UserWrapper'

//lazy loading pages
const Dashboard = lazy(() => import('@Pages/dashboard/Dashboard'))

const App = () => {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Poppins'],
      },
    })
  }, [])

  const isAuth = true

  return (
    <Routes>
      <Route element={isAuth && <Navigate to={'/dashboard'} replace={true} />}>
        <Route path="/" element={<Login />} />
      </Route>

      {/* user routes  */}
      <Route
        path="/*"
        element={
          isAuth ? <UserWrapper /> : <Navigate to={'/'} replace={true} />
        }
      >
        <Route path="dashboard" element={  <Suspense fallback={<Spin />}>
              <Dashboard />
            </Suspense>} />
      </Route>

      <Route path="*" element={<Error />} />
    </Routes>
  )
}

export default memo(App)
