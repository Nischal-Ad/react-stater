import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { Suspense } from 'react'
import { Spin } from 'antd'

interface IRestrictedRoutes {
  auth: boolean
  isAdmin: boolean
}

const RestrictedRoute: React.FC<IRestrictedRoutes> = ({
  auth = false,
  isAdmin = false,
}) => {
  if (auth) {
    return isAdmin ? (
      <Navigate to={'/admin/dashboard'} replace={true} />
    ) : (
      <Navigate to={'/dashboard'} replace={true} />
    )
  }

  return (
    <>
      <Suspense
        fallback={
          <div className="mt-10 flex justify-center">
            <Spin size="large" />
          </div>
        }
      >
        <Outlet />
      </Suspense>
    </>
  )
}

export default RestrictedRoute
