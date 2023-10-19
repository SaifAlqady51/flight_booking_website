import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type initailStateType = {
    userId: string;
};

const initialState = {
    userId: '',
} as initailStateType;

export const userIdSlice = createSlice({
    name: 'userId',
    initialState,
    reducers: {
        storeCurrentUserId: (
            state: initailStateType,
            action: PayloadAction<string >,
        ) => {
            state.userId = action.payload;
        },
    },
});

export const { storeCurrentUserId } = userIdSlice.actions;
export default userIdSlice.reducer;
