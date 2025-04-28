import React, { ReactNode } from 'react'
import { Navigate, Outlet } from 'react-router-dom'

interface PublicI {
    redirectPath:string 
    children:ReactNode
    isAllowed:boolean
}
const PublicRoute:React.FC<PublicI> = ({isAllowed,redirectPath = '/',children}) => {
   if(!isAllowed){
    return <Navigate to={redirectPath} replace/>
   }
     return children ? <>{children}</> : <Outlet/>
}

export default PublicRoute