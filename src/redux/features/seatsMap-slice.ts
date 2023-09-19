import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SeatsMapType } from "@/types/seatsMap-types";
import { FlightType } from "@/types/flight-types";
import axios from "axios";
import { getAmadeusKey } from "@server/utils/getAmadeusKey";
import { filterSeatsMap } from "@/utils/filterSeatsMap";

type initialStateType = {
	seats: SeatsMapType[];
	loading: "idle" | "pending" | "succeeded" | "failed";
	error: string;
};

const initialState = {
	seats: [],
	loading: "idle",
	error: "",
} as initialStateType;

export const fetchSeatsMap = createAsyncThunk(
	"seatsMap",
	async (flightData: FlightType) => {
		const URL = "https://test.api.amadeus.com/v1/shopping/seatmaps";
		try {
			const response = await axios({
				method: "POST",
				url: URL,
				data: { data: [flightData] },
				headers: {
					Authorization: await getAmadeusKey(),
				},
			});
			return filterSeatsMap(response.data.data);

		} catch (error) {
			console.log(error);
		}
	}
);
const seatsMap = createSlice({
	name: "seatsMap",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchSeatsMap.pending, (state: initialStateType) => {
				state.seats = [];
				state.loading = "pending";
			})
			.addCase(
				fetchSeatsMap.fulfilled,
				(state: initialStateType, action: PayloadAction<any>) => {
					state.seats.push(...action.payload);
					state.loading = "succeeded";
				}
			);
	},
});

export default seatsMap.reducer;
