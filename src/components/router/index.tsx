import { lazy, Suspense } from 'react'

import { Route, Routes } from 'react-router-dom'
import { RoutePaths } from './route-path'
import PublicRoute from './public-routes'
import ProtectedRoutes from './protected-route'
import { useSelector } from 'react-redux'

const LoginPage = lazy(() => import('../../features/auth/signin'))
const SignUpPage = lazy(() => import('../../features/auth/signup'))
const UserDashboard = lazy(() => import('../../features/dashboard/user/main-dashboard'))

const MainRouter = () => {
    const {isLoggedIn} = useSelector((store:any) => store.auth)
    return (
        <Routes>
            <Route path={RoutePaths.HOME} element={
                <PublicRoute redirectPath='/' isAllowed={true} >
                <Suspense fallback='Loading...'>
                    <LoginPage/>
                </Suspense>
             </PublicRoute>
            }/>
            <Route path={RoutePaths.SIGNUP} element={
                <PublicRoute redirectPath='/' isAllowed={true} >
                <Suspense fallback='Loading...'>
                    <SignUpPage/>
                </Suspense>
             </PublicRoute>
            }/>
            <Route
            path={RoutePaths.DASHBOARD}
            element={
                <ProtectedRoutes redirectPath='/' isAllowed={isLoggedIn}>
                  <Suspense fallback="Loading...">
                     <UserDashboard/>
                  </Suspense>
                </ProtectedRoutes>
            }
            />
            
         
            {/* <Route path="*" element={<NotFound />}></Route> */}
        </Routes>
    )
}

export default MainRouter