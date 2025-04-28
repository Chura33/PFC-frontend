import $http from 'axios'
import { toast } from 'react-toastify'
import { BASE_URL } from './index'
import { clearItem, deleteStorageCookie, getAuthToken } from '../utils/storage'

export { BASE_URL } from './index'

const client = $http.create({
    timeout : 100000,
    headers:{
        'Content-Type' : 'application/json',
    },
    baseURL:BASE_URL
})

//Set up response interceptor
client.interceptors.response.use(
    async (response) => await Promise.resolve(response),
    async (error) => {
        if(error.response){
            const status = error.response.status
            if([500,501,503].includes(status)){
                toast.error('Something went wrong processsing your request')
                return await Promise.reject({
                    status,
                    message:'Something went wrong processing your request,Refresh your window and try again !!!'
                })
            }
            if([401,307,403].includes(status)){
                 // Clear the expired token and reject the promise
                 deleteStorageCookie({key:'AUTH_TOKEN'})
                 clearItem()
                 toast.error('Login session expired , please login again')
                 window.location.href = '/'
                 return await Promise.reject({
                    status,
                    message:'Login sesion expired, please login again'
                 })
            }
        }
        return await Promise.reject(error)
    }
)

// Set up request interceptor
client.interceptors.request.use((config) => {
 const token = getAuthToken()  
 const unAuthenticatedRoutes = [
    '/',
  ] 
  const pattern = unAuthenticatedRoutes.join('|')
  const regex = new RegExp(`^/(?:${pattern})(?:/|$)`)
  if (!regex.test(config.url as string)) {
    // Set the authorization header
    config.headers.Authorization = `Bearer ${token as string}`
  }
  return config
})

export default client

// Get the authorization header
export const setAuthorization = () => ({
    Authorization : `Bearer ${getAuthToken() as string}`
})

