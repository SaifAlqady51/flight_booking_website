import { createSlice, PayloadAction } from '@reduxjs/toolkit' ;

type initialStateType = {
	location:string,
	distination:string,
	flightDate:string
}

const initialState = {
	location:'',
	distination:'',
	flightDate:''
} as initialStateType


export const flightFormInputValues = createSlice({
	name: 'flightFormInputValues',
	initialState: initialState,
	reducers:{
		changeLocationValue:(state:initialStateType,action:PayloadAction<string>) => {
			let newLocation = action.payload
			state.location = newLocation
		},	
		changeDistinationValue:(state:initialStateType,action:PayloadAction<string>) => {
			state.distination = action.payload
		},
		
		changeFlightDateValue:(state:initialStateType,action:PayloadAction<string>) => {

			state.flightDate= action.payload
		},


		
	}
})

export const {changeLocationValue, changeDistinationValue, changeFlightDateValue} = flightFormInputValues.actions;
export default flightFormInputValues.reducer
