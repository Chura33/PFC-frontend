import { useState } from "react"
import { FaTimes } from "react-icons/fa"
import LogOutModal from "../elements/modals/logout-modal"
import { useDispatch, useSelector } from "react-redux"
import { storeCookie } from "../../utils/storage"
import { logOut } from "../../redux/slices/auth"
import { useNavigate } from "react-router-dom"

const DashboardNavbar = () => {
  const[showUser,setShowUser] = useState(false)
  const[isLogout,setIsLogout] = useState(false)
  const {decodedValue} = useSelector((store:any) => store.auth)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  console.log('user', decodedValue)
  return (
    <header className="py-4 px-3 bg-white md:pr-8">
      <nav className="flex flex-row items-center justify-between">
        <section className="flex items-center gap-x-10 w-full">
           <h3 className="text-xl font-bold">SurVass</h3>
           <input className="hidden w-[50%] md:block bg-[#c4c1c1] py-3 rounded-xl " type="text"/>
        </section>
        <section onClick={() => setShowUser(!showUser)}>
          <div className="bg-[#c4c1c1] cursor-pointer rounded-full size-10 flex flex-col items-center justify-center">
           <h2 className="text-white font-bold text-xs uppercase">{decodedValue.username.split('').splice(0,2).join('.')}</h2>
           
          </div>
        </section>

        <section className={`absolute ${showUser ? 'right-8' :'-right-[50rem]'}  w-[70%] md:w-[30%] px-4 py-3 top-12 transition-all duration-500 ease-in-out flex flex-col gap-y-3 rounded-xl bg-white shadow-[#b5b5b5] shadow-2xl`}>
           <div className="flex flex-row items-end justify-end">
            <FaTimes onClick={() => setShowUser(false) } className='text-red-500 cursor-pointer ' size={22}/> 
           </div>
           <div>
            <h2 className="text-black font-semibold">Username</h2>
            <p className="text-[grey]">{decodedValue.username}</p>
           </div>
           <button onClick={() =>{
            
             setIsLogout(true)}} className="text-red-500 rounded-xl shadow-[grey] shadow-2xl py-3 px-4 text-center ">
             Logout
           </button>
        </section>
      </nav>
      {
        isLogout && <LogOutModal onClose={() => setIsLogout(false)} logOut={() => {
          dispatch(logOut())
          storeCookie({ key: "AUTH_TOKEN", value: "" });
          navigate('/')
        }}/>
      }
    </header>
  )
}

export default DashboardNavbar