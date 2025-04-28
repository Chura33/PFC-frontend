import { useMutation, UseMutationResult, useQuery } from "@tanstack/react-query"
import { AxiosError } from "axios"
import client from "../../../../../config/client"
import { _handleAxiosError } from "../../../../../services/request.service"
import { NewEntriesI } from ".."




export const useGetEntries = () => {
    const getUser = useQuery<any, AxiosError>({
      queryKey: ['get-activity'],
      queryFn: async () => {
        try {
          const response = await client.get('tracker/entries')
          return response?.data
        } catch (error) {
          throw error
        }
      },
    })
    return getUser
  }


  export const useCreateEntry = (): UseMutationResult<
  any,
  AxiosError<unknown>,
  NewEntriesI
> => {
  const createEntryMutation = useMutation<
    any,
    AxiosError<unknown>,
    NewEntriesI
  >({
    mutationFn: async (data: NewEntriesI): Promise<any> => {
      try {
        const response = await client.post("tracker/entry/add/", data);
        return response.data;
      } catch (error) {
        throw  _handleAxiosError(error)
      }
    },
  });

  return createEntryMutation;
};