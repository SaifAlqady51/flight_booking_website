import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type expandList = {
    id: number;
    expanded: boolean;
};

type initialStateType = {
    listOfExpanded: expandList[];
};

const initialState = {
    listOfExpanded: [{}],
} as unknown as initialStateType;

const expandFlightCards = createSlice({
    name: 'expandFlightCards',
    initialState,
    reducers: {
        pushSearchResult: (
            state: initialStateType,
            action: PayloadAction<number>,
        ) => {
            for (let i = 0; i <= action.payload; i++) {
                state.listOfExpanded.push({ id: i + 1, expanded: false });
            }
        },
        // switchFlightCards: (state: initialStateType[], action: PayloadAction<number>) => {
        // 	for(let i = 0; i < state.length;i++){
        // 		if(state[i].id === action.payload){
        // 			state[i].expanded === true
        // 		}
        // 	}
        // },
    },
});

export const { pushSearchResult } = expandFlightCards.actions;
export default expandFlightCards.reducer;
