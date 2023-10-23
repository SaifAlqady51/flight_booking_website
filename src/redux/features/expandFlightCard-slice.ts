import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { stat } from 'fs';
import { ACTION_SERVER_ACTION } from 'next/dist/client/components/router-reducer/router-reducer-types';

type expandList = {
    id: string;
    expanded: boolean;
};

type pushSearchArgs = {
    numberOfSearchResults: number;
    listOfIds: string[];
};

type initialStateType = {
    listOfExpanded: expandList[];
};

const initialState = {
    listOfExpanded: [],
} as unknown as initialStateType;

const expandFlightCards = createSlice({
    name: 'expandFlightCards',
    initialState,
    reducers: {
        pushSearchResult: (
            state: initialStateType,
            action: PayloadAction<pushSearchArgs>,
        ) => {
            for (
                let i = 0;
                i <= action.payload.numberOfSearchResults - 1;
                i++
            ) {
                state.listOfExpanded.push({
                    id: action.payload.listOfIds[i],
                    expanded: false,
                });
            }
        },
        resetSearchResults: (state: initialStateType) => {
            state.listOfExpanded = [];
        },

        switchFlightCards: (
            state: initialStateType,
            action: PayloadAction<string>,
		) => {
            for (let i = 0; i < state.listOfExpanded.length; i++) {
                if (state.listOfExpanded[i].id === action.payload) {
                    state.listOfExpanded[i].expanded =
                        !state.listOfExpanded[i].expanded;

                }
				else {
					state.listOfExpanded[i].expanded = false
				}
            }
        },
    },
});

export const { pushSearchResult, resetSearchResults, switchFlightCards } =
    expandFlightCards.actions;
export default expandFlightCards.reducer;
