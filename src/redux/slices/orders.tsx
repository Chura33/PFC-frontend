import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    productPrice : 0
} 

 const OrderSlice = createSlice({
    name:'orders',
    initialState,
    reducers:{
      changeProductPrice : ((state, {payload}) => {
         state.productPrice = payload
      })
    }
 })

 export default OrderSlice.reducer
 export const {changeProductPrice} = OrderSlice.actions