import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom'
import { lazy } from 'react'
import ProtectedRoute from './ProtectedRoute'

//normal components
import UserMenu from '@Shared/user'
import AdminMenu from '@Shared/admin'
import Error from '@Components/Error'
import RestrictedRoute from './RestrictedRoute'

// Lazy load components
const Auth = lazy(() => import('@Features/auth'))

const Router = ({ isAuth, isAdmin }: { isAuth: boolean; isAdmin: boolean }) => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        {/* normal routes */}
        {/* <Route path="*" element={<Error />} /> */}
        {/* end of normal routes */}

        {/* restricted routes only assisable when user is logout */}
        <Route element={<RestrictedRoute auth={isAuth} isAdmin={isAdmin} />}>
          <Route path="/" element={<Auth />} />
        </Route>
        {/* end of restricted routes */}

        {/* protected routes for auth user */}
        <Route
          element={
            <ProtectedRoute
              auth={isAuth}
              Menu={isAdmin ? AdminMenu : UserMenu}
            />
          }
        >
          {/* <Route path="/" element={<Auth />} /> */}
        </Route>
        {/* end of protected routes for auth user */}

        {/* protected routes for user */}
        <Route
          element={
            <ProtectedRoute auth={isAuth} userRoute={true} Menu={UserMenu} />
          }
        >
          {/* <Route path="/dashboard" element={<Dashboard />} /> */}
        </Route>
        {/* end of protected routes for user */}

        {/* protected routes for admin */}
        <Route
          element={
            <ProtectedRoute
              auth={isAuth}
              isAdmin={isAdmin}
              adminRoute={true}
              Menu={AdminMenu}
            />
          }
        >
          {/* <Route path="/admin/dashboard" element={<AdminDashboard />} /> */}
        </Route>
        {/* end of protected routes for admin */}

        <Route path="*" element={<Error />} />
      </>
    )
  )
  return <RouterProvider router={router} />
}
export default Router
