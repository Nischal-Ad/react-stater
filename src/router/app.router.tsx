import {
 Navigate,
 Route,
 createBrowserRouter,
 createRoutesFromElements,
} from 'react-router-dom'
import { lazy, Suspense } from 'react'
import Error404 from '@Components/Error'
import ProtectedRoute from './ProtectedRoute'

//normal components
import Loading from '@Components/Loader'
import Navbar from '@Shared/navbar'
import Footer from '@Shared/footer'

// Lazy load components
const Auth = lazy(() => import('@Features/auth'))
const Dashboard = lazy(() => import('@Features/user/Dashboard'))

const auth = localStorage.getItem('auth') || ''
const isAuth = auth && JSON.parse(auth)

const router = createBrowserRouter(
 createRoutesFromElements(
  <>
   <Route
    path="/"
    element={
     !isAuth ? (
      <Suspense fallback={<Loading />}>
       <Auth />
      </Suspense>
     ) : (
      <Navigate to={'/dashboard'} replace />
     )
    }
   />
   <Route path="*" element={<Error404 />} />

   {/* protected routes for user */}
   <Route
    element={
     <ProtectedRoute
      auth={isAuth.isAuth}
      Navbar={<Navbar />}
      Footer={<Footer />}
     />
    }
   >
    <Route path="/dashboard" element={<Dashboard />} />
   </Route>

   {/* protected routes for admin */}
   {/* <Route element={<ProtectedRoute auth={isAuth.isAuth} isAdmin={true} />}>
				<Route path='/dashboard' element={<Dashboard />} />
			</Route> */}
  </>
 )
)

export default router
