import { createSlice } from '@reduxjs/toolkit';

type initalStateType = {
    expanded: boolean;
};

const initialState = { expanded: false } as initalStateType;

const expandFlightCards = createSlice({
    name: 'expandFlightCards',
    initialState,
    reducers: {
        switchFlightCards: (state: initalStateType) => {
            state.expanded = !state.expanded;
        },
    },
});

export const { switchFlightCards } = expandFlightCards.actions;
export default expandFlightCards.reducer;
