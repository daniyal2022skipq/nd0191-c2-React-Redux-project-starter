import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { _saveQuestionAnswer } from "../_DATA";
const answerState={
    answers:{},
    isLoading:false
}


 export const answerThunk=createAsyncThunk(
    'answerSlice/answerThunk', 

    async(answer)=>{
        const response=await _saveQuestionAnswer(answer)
        if(response ===true) return answer
        
    }
)
const answerSlice=createSlice({
    name:'answerSlice',
    initialState:answerState,
    extraReducers:{
        [answerThunk.pending]:(state,action)=>{
            state.isLoading=true
        },
        [answerThunk.fulfilled]:(state,action)=>{
            state.answers=action.payload
            state.isLoading=false
        }
    }
})

export default answerSlice.reducer
