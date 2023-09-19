import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
type initialStateType = {
	ICAO: string;
	loading: "idle" | "pending" | "succeeded" | "failed";
};

const initialState = {
	ICAO: "",
	loading: "idle",
} as initialStateType;

export const fetchArilineLogo = createAsyncThunk(
	"airlineLogo",
	async (IATA: string) => {
		const URL = `https://logo-api-pi.vercel.app/api?filename=${IATA}`

		const response = (await axios.get(URL)) as { img: string };

		return response.img;
	}
);

const airlineLogo = createSlice({
	name: "airlineLogo",
	initialState,
	reducers: {
		reset: (state:initialStateType) => {
			state.ICAO = 'whi'
			state.loading = 'idle'
		}
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchArilineLogo.pending, (state: initialStateType) => {
				state.ICAO = "whi";
				state.loading = "pending";
			})
			.addCase(
				fetchArilineLogo.fulfilled,
				(state: initialStateType, action: PayloadAction<any>) => {
					state.ICAO = action.payload;
					state.loading = "succeeded";
				}
			);
	},
});

export const {reset} = airlineLogo.actions;
export default airlineLogo.reducer;

