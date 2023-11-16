import { createSlice } from '@reduxjs/toolkit';

type initialStateType = {
    activAlert: boolean;
};

const initialState = {
    activAlert: true,
};

export const toggleAlert = createSlice({
    name: 'toggleAlert',
    initialState,
    reducers: {
        switchAlert: (state: initialStateType) => {
            state.activAlert = !state.activAlert;
        },
    },
});

export const { switchAlert } = toggleAlert.actions;
export default toggleAlert.reducer;
