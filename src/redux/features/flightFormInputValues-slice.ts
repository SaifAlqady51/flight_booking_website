import { createSlice, PayloadAction } from '@reduxjs/toolkit';
export type FlightFormInputValuesinitialStateType = {
    location: string;
    distination: string;
    flightDate: string;
    numberOfAdults: string;
    travelClass: string;
};

const initialState = {
    location: '',
    distination: '',
    flightDate: '',
    numberOfAdults: '',
    travelClass: '',
} as FlightFormInputValuesinitialStateType;

export const flightFormInputValues = createSlice({
    name: 'flightFormInputValues',
    initialState: initialState,
    reducers: {
        // changeFormValue: (
        //     state: FlightFormInputValuesinitialStateType,
        //     action: PayloadAction<FlightFormInputValuesinitialStateType>,
        // ) => {
        //     state.location = action.payload.location;
        //     state.distination = action.payload.distination;
        //     state.flightDate = action.payload.flightDate;
        //     state.numberOfAdults = action.payload.numberOfAdults;
        //     state.travelClass = action.payload.travelClass;
        // },

        changeLocation: (
            state: FlightFormInputValuesinitialStateType,
            action: PayloadAction<string>,
        ) => {
            state.location = action.payload;
        },
        changeDistination: (
            state: FlightFormInputValuesinitialStateType,
            action: PayloadAction<string>,
        ) => {
            state.distination = action.payload;
        },
        changeNumberOfAdults: (
            state: FlightFormInputValuesinitialStateType,
            action: PayloadAction<string>,
        ) => {
            state.numberOfAdults = action.payload;
        },
        changeFlightDate: (
            state: FlightFormInputValuesinitialStateType,
            action: PayloadAction<string>,
        ) => {
            state.flightDate = action.payload;
        },
        changeTravelClass: (
            state: FlightFormInputValuesinitialStateType,
            action: PayloadAction<string>,
        ) => {
            state.travelClass = action.payload;
        },
    },
});

export const {
    changeLocation,
    changeDistination,
    changeFlightDate,
    changeNumberOfAdults,
    changeTravelClass,
} = flightFormInputValues.actions;
export default flightFormInputValues.reducer;
