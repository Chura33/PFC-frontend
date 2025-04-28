import { createSlice } from "@reduxjs/toolkit";


export interface InitialStateI {
    isLoggedIn : boolean
    currentUser : any
    decodedValue:any
}
const initialState:InitialStateI  = {
   isLoggedIn : false,
   currentUser : {},
   decodedValue: {},
}

const AuthSlice = createSlice({
    name:'auth',
    initialState,
    reducers:{
       getUser:((state, {payload}) => {
         state.currentUser = payload
       }),
       getDecodedValue:((state, {payload}) => {
         state.decodedValue = payload
         state.isLoggedIn = true
       }),
       logOut : ((state) => {
        state.currentUser = {}
        state.decodedValue = {}
        state.isLoggedIn = false
       })
    }
})
export default AuthSlice.reducer

export const {getUser, logOut, getDecodedValue} = AuthSlice.actions
