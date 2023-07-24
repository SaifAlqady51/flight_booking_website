import { createSlice } from "@reduxjs/toolkit";


type initialStateType = {
    isLoading:boolean
}


const initialState = {
    isLoading:false
} as initialStateType

export const signupButtonIsLoading = createSlice({
    name:'signupButtonIsLoading',
    initialState: initialState,
    reducers:{
        // set the isLoading property to true
        thruthyIsLoading:(state:initialStateType) => {
            state.isLoading = true
        },
        
        // set the isLoading property to false
        falsyIsLoading:(state:initialStateType) => {
            state.isLoading = false
        }
    }
})


export const {thruthyIsLoading, falsyIsLoading} = signupButtonIsLoading.actions;
export default signupButtonIsLoading.reducer;