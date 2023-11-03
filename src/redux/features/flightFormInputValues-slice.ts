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
            action: PayloadAction<{ cityName: string; userId: string }>,
        ) => {
            state.distination.cityName = action.payload.cityName;
            if (!action.payload.userId.length) {
                state.id = `${Date.now()}`;
            }
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
            action: PayloadAction<string>,
        ) => {
            state.travelClass = action.payload;
        },
        deleteSearchResult: (state: FlightFormInputValuesinitialStateType) => {
            state = {
                id: '',
                location: {
                    cityName: '',
                    IATACode: '',
                },
                distination: {
                    cityName: '',
                    IATACode: '',
                },
                flightDate: '',
                numberOfAdults: '',
                travelClass: '',
            };
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
	deleteSearchResult
} = flightFormInputValues.actions;
export default flightFormInputValues.reducer;
