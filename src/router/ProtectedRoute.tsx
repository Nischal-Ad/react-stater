import React from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { Suspense } from 'react'
import Loading from '@Components/Loader'

interface ProtectedRouteProps {
  auth: boolean
  isAdmin?: boolean
  adminRoute?: boolean
  userRoute?: boolean
  Navbar: React.ReactElement
  Footer: React.ReactElement
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  auth = false,
  isAdmin = false,
  userRoute = false,
  adminRoute = false,
  Navbar,
  Footer,
}) => {
  const location = useLocation()

  if (!auth) {
    const previousPath = location.state?.previousPath
    if (previousPath !== location.pathname) {
      return (
        <Navigate
          to="/"
          replace={true}
          state={{ previousPath: location.pathname }}
        />
      )
    }
  }

  if (userRoute && isAdmin) {
    return <Navigate to={'/admin/dashboard'} replace={true} />
  }

  if (adminRoute && !isAdmin) {
    return <Navigate to={'/dashboard'} replace={true} />
  }

  return (
    <>
      {Navbar}
      <Suspense fallback={<Loading />}>
        <Outlet />
      </Suspense>
      {Footer}
    </>
  )
}

export default ProtectedRoute
