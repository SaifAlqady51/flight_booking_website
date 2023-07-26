import { createSlice } from "@reduxjs/toolkit";

type initialStateType = {
    theme:'light'| 'dark'
}

const initialState = {
    theme: 'dark'
} as initialStateType;

export const toggleTheme = createSlice({
    name:'toggleTheme',
    initialState: initialState,
    reducers:{
        switchTheme:(state:initialStateType) => {
            if(state.theme === 'light'){
                state.theme = 'dark';
            }
            else {
                state.theme = 'light'
            }
        },
    }
})

export const {switchTheme} = toggleTheme.actions;
export default toggleTheme.reducer;


