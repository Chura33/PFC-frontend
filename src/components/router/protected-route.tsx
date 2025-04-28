import React, { ReactNode} from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import DashboardLayout from '../layouts/dashboard-layout'

interface ProtectRoutesI{
    isAllowed:boolean 
    children:ReactNode 
    redirectPath: string
}
const ProtectedRoutes:React.FC<ProtectRoutesI> = ({isAllowed,redirectPath='/', children}) => {
  if(!isAllowed){
    return <Navigate to={redirectPath} replace/>
  }
  return children ? <DashboardLayout>{children}</DashboardLayout> : <Outlet/>
}
export default ProtectedRoutes 