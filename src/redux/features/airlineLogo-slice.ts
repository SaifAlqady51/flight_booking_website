import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type initialStateType = {
    img: any[];
};

const initialState = {
    img: [],
} as initialStateType;

const airlineLogo = createSlice({
    name: 'airlineLogo',
    initialState: initialState,
    reducers: {
        add(state: initialStateType, action: PayloadAction<any>) {
            state.img.push(action.payload);
        },
    },
});

export const { add } = airlineLogo.actions;
export default airlineLogo.reducer;
