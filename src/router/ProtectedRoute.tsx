import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { Suspense } from 'react'
import Loading from '@Components/Loader'
import { notifyError } from '@Utils/alerts'

interface ProtectedRouteProps {
  auth: boolean
  isAdmin?: boolean
  Navbar: React.ReactElement
  Footer: React.ReactElement
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  auth,
  isAdmin = false,
  Navbar,
  Footer,
}) => {
  if (!auth) {
    notifyError('please login first')
    return <Navigate to={'/'} replace />
  }

  // if (!isAdmin) {
  // 	return <Navigate to={'/'} replace />;
  // }

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
