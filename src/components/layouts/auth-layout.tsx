
import { ReactNode } from 'react'

export interface AuthLayoutI {
    children : ReactNode
}
const AuthLayout:React.FC<AuthLayoutI> = ({children}) => {
  return (
    <div className='overflow-y-hidden h-screen'>
       
       {children}
    </div>
  )
}

export default AuthLayout