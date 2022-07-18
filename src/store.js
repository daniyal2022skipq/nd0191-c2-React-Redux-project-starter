import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import userReducer from './slices/userSlice'
import questionReducer from './slices/questionSlice'
import answerReducer from './slices/answerSlice'

const store=configureStore(
   {
    reducer:{
        auth:authReducer,
        user:userReducer,
        question:questionReducer,
        answer:answerReducer
    }
   }
)

export default store