import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Place = {
    cityName: string;
    IATACode: string;
};

export type FlightFormInputValuesinitialStateType = {
    id?: string;
    location: Place;
    distination: Place;
    flightDate: string;
    numberOfAdults: string;
    travelClass: string;
};

const initialState = {
    id: '',
    location: { cityName: '', IATACode: '' },
    distination: { cityName: '', IATACode: '' },
    flightDate: '',
    numberOfAdults: '',
    travelClass: '',
} as FlightFormInputValuesinitialStateType;

export const flightFormInputValues = createSlice({
    name: 'flightFormInputValues',
    initialState: initialState,
    reducers: {
        changeLocationCityName: (
            state: FlightFormInputValuesinitialStateType,
            action: PayloadAction<string>,
        ) => {
            state.location.cityName = action.payload;
        },
        changeDistinationCityName: (
            state: FlightFormInputValuesinitialStateType,
            action: PayloadAction<string>,
        ) => {
            state.distination.cityName = action.payload;
        },

        changeLocation: (
            state: FlightFormInputValuesinitialStateType,
            action: PayloadAction<Place>,
        ) => {
            state.location = action.payload;
        },

        changeDistination: (
            state: FlightFormInputValuesinitialStateType,
            action: PayloadAction<Place>,
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
            action: PayloadAction<{
                travelClass: string;
                userId: string;
            }>,
        ) => {
            state.travelClass = action.payload.travelClass;
            if (!action.payload.userId.length) {
                state.id = `${Date.now()}`;
            }
        },
        deleteSearchResult: (state: FlightFormInputValuesinitialStateType) => {
            /*eslint-disable*/
            state = initialState;
        },
    },
});

export const {
    changeLocationCityName,
    changeDistinationCityName,
    changeLocation,
    changeDistination,
    changeFlightDate,
    changeNumberOfAdults,
    changeTravelClass,
    deleteSearchResult,
} = flightFormInputValues.actions;
export default flightFormInputValues.reducer;
