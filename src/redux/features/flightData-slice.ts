import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { getAmadeusKey } from "@server/utils/getAmadeusKey";
import axios from "axios";

import { FlightFormInputValuesinitialStateType } from "./flightFormInputValues-slice";
type initialStateType = {
	flights: any[];
	loading: "idle" | "pending" | "succeeded" | "failed";
	error: string;
};

const initialState = {
	flights: [],
	loading: "idle",
	error: "",
} as initialStateType;

export const fetchedFlightData = createAsyncThunk(
	"flightsData",
	async ({
		location,
		distination,
		flightDate,
		adults,
		travelClass,
	}: FlightFormInputValuesinitialStateType) => {
		const url = `https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=${location}&destinationLocationCode=${distination}&departureDate=${flightDate}&adults=${adults}&travelClass=${travelClass}&nonStop=false&currencyCode=USD&max=50`;
		const config = {
			headers: { Authorization: await getAmadeusKey() },
		};
		const flights = await axios.get(url, config);
		return flights.data;
	}
);

export const flightData = createSlice({
	name: "flightData",
	initialState: initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchedFlightData.pending, (state: initialStateType) => {
				state.flights = [];
				state.loading = "pending";
			})
			.addCase(
				fetchedFlightData.fulfilled,
				(state: initialStateType, action: PayloadAction<any>) => {
					state.flights.push(...action.payload.data);
					state.loading = "succeeded";
				}
			);
	},
});

// export const {storeFlightsData} = flightData.actions;
export default flightData.reducer;
