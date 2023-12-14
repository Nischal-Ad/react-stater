import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { Suspense } from 'react'
import Loading from '@Components/Loader'

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
      <Suspense fallback={<Loading />}>
        <Outlet />
      </Suspense>
    </>
  )
}

export default RestrictedRoute
