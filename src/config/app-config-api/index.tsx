import { useQuery } from "@tanstack/react-query"
import { AxiosError } from "axios"
import client from "../client"
import { _handleAxiosError } from "@/services/request.service"


export interface ConfigResponseI {
    board:{
        name:string 
        _id:string
    }[]
    category:{
        name:string 
        _id:string
    }[]
    fee:{
        _id:string 
        name:string 
        type:string 
        amount:string 
        renewal_amount:string
    }[]
}


export const useAppConfig = () => {
    const appConfig = useQuery<ConfigResponseI,AxiosError>({
        queryKey:['app-config'],
        queryFn:async() => {
           try{
            const response = await client.get('utils/app-config')
             return response.data.data
           }catch(error){
             throw _handleAxiosError(error)
           } 
        }
    })
    return appConfig
}