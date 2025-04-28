import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    pagination : 1
} 

 const PaginationSlice = createSlice({
    name:'pagination',
    initialState,
    reducers:{
      changePagination : ((state, {payload}) => {
         state.pagination = payload
      })
    }
 })

 export default PaginationSlice.reducer
 export const {changePagination} = PaginationSlice.actions