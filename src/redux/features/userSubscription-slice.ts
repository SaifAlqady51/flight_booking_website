import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type initailStateType = {
    userSubscription: string;
    clickedSubscription: string;
};

const initialState = {
    userSubscription: 'Free',
    clickedSubscription: 'Free',
} as initailStateType;

export const userSubscription = createSlice({
    name: 'userSubscription',
    initialState,
    reducers: {
        storeCurrentUserSubscription: (
            state: initailStateType,
            action: PayloadAction<string>,
        ) => {
            state.userSubscription = action.payload;
        },
        changeClickedSubscription: (
            stat: initailStateType,
            action: PayloadAction<string>,
        ) => {
            stat.clickedSubscription = action.payload;
        },
    },
});

export const { storeCurrentUserSubscription, changeClickedSubscription } =
    userSubscription.actions;
export default userSubscription.reducer;
