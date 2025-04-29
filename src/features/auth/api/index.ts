
import { useMutation, UseMutationResult, useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";

import client from "../../../config/client";
import { _handleAxiosError } from "../../../services/request.service";


export interface SignInI {
  username:string 
  password:string
}
export interface SignUpI {
  username:string 
  password:string
}

export interface SignInResponse {
 
  token:string;
  user:{
    _id :string 
    username :string
  }
 
}

export const useSignIn = (): UseMutationResult<
  SignInResponse,
  AxiosError<unknown>,
  SignInI
> => {
  const signInMutation = useMutation<
    SignInResponse,
    AxiosError<unknown>,
    SignInI
  >({
    mutationFn: async (data: SignInI): Promise<SignInResponse> => {
      try {
        const response = await client.post("user/login", data);
        return response.data;
      } catch (error) {
        throw  _handleAxiosError(error)
      }
    },
  });

  return signInMutation;
};


export const useSignUp = (): UseMutationResult<
  any,
  AxiosError<unknown>,
  SignUpI
> => {
  const signUpMutation = useMutation<
    any,
    AxiosError<unknown>,
    SignUpI
  >({
    mutationFn: async (data: SignUpI): Promise<any> => {
      try {
        const response = await client.post("user/create", data);
        return response.data;
      } catch (error) {
        throw  _handleAxiosError(error)
      }
    },
  });

  return signUpMutation;
};








 
export const useGetUser = () => {
    const getUser = useQuery<any, AxiosError>({
      queryKey: ['get-user'],
      queryFn: async () => {
        try {
          const response = await client.get('/todos')
          return response?.data
        } catch (error) {
          throw error
        }
      },
    })
    return getUser
  }


  export const useGetScore = () => {
    const getScore = useQuery<{result:string}, AxiosError>({
      queryKey: ['get-score'],
      queryFn: async () => {
        try {
          const response = await client.get('tracker/score')
          return response?.data
        } catch (error) {
          throw error
        }
      },
    })
    return getScore
  }

  export const useGetStartDate = () => {
    const getStartDate = useQuery<{start:string}, AxiosError>({
      queryKey: ['get-startDate'],
      queryFn: async () => {
        try {
          const response = await client.get('tracker/start')
          return response?.data
        } catch (error) {
          throw error
        }
      },
    })
    return getStartDate
  }


  