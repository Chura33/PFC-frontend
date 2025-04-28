import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    activeNav : 'dashboard'
} 

 const NavSlice = createSlice({
    name:'activeNav',
    initialState,
    reducers:{
      changeActiveNav : ((state, {payload}) => {
         state.activeNav = payload
      })
    }
 })

 export default NavSlice.reducer
 export const {changeActiveNav} = NavSlice.actions