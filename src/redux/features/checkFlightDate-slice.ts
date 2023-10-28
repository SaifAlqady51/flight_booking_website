import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type initialStateType = {
    status: boolean;
    message: string;
};

const initialState = {
    status: true,
    message: '',
};

export const checkFlightDate = createSlice({
    name: 'checkFlightDate',
    initialState,
    reducers: {
        check: (
            state: initialStateType,
            action: PayloadAction<initialStateType>,
        ) => {
            state.status = action.payload.status;
            state.message = action.payload.message;
        },
    },
});

export const { check } = checkFlightDate.actions;
export default checkFlightDate.reducer;
