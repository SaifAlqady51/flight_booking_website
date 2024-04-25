import { createSlice } from '@reduxjs/toolkit';

type initialStateType = {
    isLoading: boolean;
};

const initialState = {
    isLoading: false,
} as initialStateType;

export const loading = createSlice({
    name: 'signupButtonIsLoading',
    initialState: initialState,
    reducers: {
        // set the isLoading property to true
        truthyIsLoading: (state: initialStateType) => {
            state.isLoading = true;
        },

        // set the isLoading property to false
        falsyIsLoading: (state: initialStateType) => {
            state.isLoading = false;
        },
    },
});

export const { truthyIsLoading, falsyIsLoading } = loading.actions;
export default loading.reducer;
