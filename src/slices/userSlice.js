import { createSlice } from "@reduxjs/toolkit";
import {userstate } from "../_DATA";
import { answerThunk } from "./answerSlice";
import { questionThunk } from "./questionSlice";

const userState={
    users:userstate,
}
const userSlice=createSlice({
    name:'userSlice',
    initialState:userState,
    extraReducers:{
        [questionThunk.fulfilled]:(state,action)=>{
            state.users[action.payload.author].questions.push(action.payload.id)
        },
         [answerThunk.fulfilled]:(state,action)=>{
            const {authedUser,qid,answer}=action.payload
               state.users[authedUser].answers[qid]=answer
         }
    }
})

export default userSlice.reducer