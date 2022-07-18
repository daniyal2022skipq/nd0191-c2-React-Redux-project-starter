import { questionstate, _saveQuestion,_getQuestions } from "../_DATA";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const quesState={
    questions:questionstate,
    allQuestions:questionstate,
    isLoading:false
}

export const questionThunk=createAsyncThunk('questionSlice/questionThunk',async(questions)=>{
    const response=await _saveQuestion(questions)
    return response
})
export const getquestionThunk=createAsyncThunk('questionSlice/getquestionThunk',async()=>{
    const response=await _getQuestions()
    return response
})

const questionSlice=createSlice({
    name:'questionSlice',
    initialState:quesState,
    reducers:{

    },
    extraReducers:{
        [questionThunk.pending]:(state,action)=>{
            state.isLoading=true
            },
       [questionThunk.fulfilled]:(state,action)=>{
        state.questions=action.payload
        state.isLoading=false
        },
        [getquestionThunk.fulfilled]:(state,action)=>{
            state.allQuestions=action.payload
        }

    }

})
export default questionSlice.reducer