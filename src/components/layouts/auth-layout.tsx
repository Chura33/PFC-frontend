
import { ReactNode } from 'react'
import Home from '../../features/home'
export interface AuthLayoutI {
    children : ReactNode
}
const AuthLayout:React.FC<AuthLayoutI> = ({children}) => {
  return (
    <div className='overflow-y-hidden h-screen'>
       <Home/>
       {children}
    </div>
  )
}

export default AuthLayout