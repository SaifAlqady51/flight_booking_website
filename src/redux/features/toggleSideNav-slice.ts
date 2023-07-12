import { createSlice,PayloadAction } from "@reduxjs/toolkit";


type initialStateType = {
        active:boolean
}

const initialState = {
        active: false
    
} as initialStateType

export const toggleSideNav = createSlice({
    name:'toggleSideNav',
    initialState: initialState,
    reducers:{
        toggleSwitch: (state:initialStateType) => {
            state.active = !state.active;
        },

    }
})

export const {toggleSwitch} = toggleSideNav.actions;
export default toggleSideNav.reducer;
