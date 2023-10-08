import { createSlice, PayloadAction } from '@reduxjs/toolkit';
export type FlightFormInputValuesinitialStateType = {
    location: string;
    distination: string;
    flightDate: string;
    adults: string;
    travelClass: string;
};

const initialState = {
    location: '',
    distination: '',
    flightDate: '',
    adults: '',
    travelClass: '',
} as FlightFormInputValuesinitialStateType;

export const flightFormInputValues = createSlice({
    name: 'flightFormInputValues',
    initialState: initialState,
    reducers: {
        changeFormValue: (
            state: FlightFormInputValuesinitialStateType,
            action: PayloadAction<FlightFormInputValuesinitialStateType>,
        ) => {
            state.location = action.payload.location;
            state.distination = action.payload.distination;
            state.flightDate = action.payload.flightDate;
            state.adults = action.payload.adults;
            state.travelClass = action.payload.travelClass;
		},
    },
});

export const { changeFormValue } = flightFormInputValues.actions;
export default flightFormInputValues.reducer;
