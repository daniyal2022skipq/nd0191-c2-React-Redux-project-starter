import { createSlice } from "@reduxjs/toolkit";

const authState={
    authUser:null,
}
const authSlice=createSlice(
    {
        name:'authSlice',
        initialState:authState,
        reducers:{
            login(state,action){
                state.authUser=action.payload
            },
            logOut(state){
                state.authUser=null
            }
        }
    }
)

export const {login,logOut}=authSlice.actions

export default authSlice.reducer