import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom'
import { lazy } from 'react'

//normal components
import Error from '@Components/Error'
import RestrictedRoute from './RestrictedRoute'
import ProtectedRoute from './ProtectedRoute'

// Lazy load components
const Auth = lazy(() => import('@Pages/auth'))

const Router = ({ isAuth, isAdmin }: { isAuth: boolean; isAdmin: boolean }) => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        {/* restricted routes only assisable when user is logout */}
        <Route element={<RestrictedRoute auth={isAuth} isAdmin={isAdmin} />}>
          <Route path="/" element={<Auth />} />
        </Route>

        {/* protected routes for auth user */}
        {/* <Route
          element={
            <ProtectedRoute
              auth={isAuth}
              Menu={isAdmin ? AdminMenu : UserMenu}
            />
          }
        >
          <Route path="/" element={<Auth />} />
        </Route> */}

        {/* protected routes for user */}
        {/* <Route
          element={
            <ProtectedRoute auth={isAuth} userRoute={true} Menu={UserMenu} />
          }
        >
          <Route path="/dashboard" element={<Dashboard />} />
        </Route> */}

        {/* protected routes for admin */}
        {/* <Route
          element={
            <ProtectedRoute
              auth={isAuth}
              isAdmin={isAdmin}
              adminRoute={true}
              Menu={AdminMenu}
            />
          }
        >
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
        </Route> */}

        {/* normal routes */}
        <Route path="*" element={<Error />} />
      </>
    )
  )
  return <RouterProvider router={router} />
}
export default Router
