import { createSlice } from '@reduxjs/toolkit';

type initialStateType = {
    activeAlert: boolean;
};

const initialState = {
    activeAlert: true,
};

export const toggleAlert = createSlice({
    name: 'toggleAlert',
    initialState,
    reducers: {
        switchAlert: (state: initialStateType) => {
            state.activeAlert = !state.activeAlert;
        },
    },
});

export const { switchAlert } = toggleAlert.actions;
export default toggleAlert.reducer;
