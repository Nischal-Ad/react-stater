/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { Suspense } from 'react'
import { Spin } from 'antd'

interface ProtectedRouteProps {
  auth: boolean
  isAdmin?: boolean
  adminRoute?: boolean
  userRoute?: boolean
  Menu: any
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  auth = false,
  isAdmin = false,
  userRoute = false,
  adminRoute = false,
  Menu,
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
      <Menu>
        <Suspense
          fallback={
            <div className="mt-10 flex justify-center">
              <Spin size="large" />
            </div>
          }
        >
          <Outlet />
        </Suspense>
      </Menu>
    </>
  )
}

export default ProtectedRoute
