import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type FlightFormInputValuesinitialStateType = {
	location: string;
	distination: string;
	flightDate: string;
};

const initialState = {
	location: "",
	distination: "",
	flightDate: "",
} as FlightFormInputValuesinitialStateType;

export const flightFormInputValues = createSlice({
	name: "flightFormInputValues",
	initialState: initialState,
	reducers: {
		changeFormValue: (
			state: FlightFormInputValuesinitialStateType,
			action: PayloadAction<FlightFormInputValuesinitialStateType>
		) => {
			state.location = action.payload.location;
			state.distination = action.payload.distination;
			state.flightDate = action.payload.flightDate;
		},
	},
});

export const { changeFormValue } = flightFormInputValues.actions;
export default flightFormInputValues.reducer;
