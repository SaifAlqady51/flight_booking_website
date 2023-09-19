import {
	InputEventType,
	SetInputChangeType,
	SetSelectChangeType,
} from "@/types/flightSearchForm-types";
import { SelectChangeEvent } from "@mui/material/Select";
import { TravelClassType } from "@/types/travelClass-types";

// handle input filed changes 
export const handleInputChange = (
	e: InputEventType,
	setChange: SetInputChangeType
) => {
	setChange(e.target.value);
};

//handl select field changes
export const handleSelectChange = (
	e: SelectChangeEvent,
	setChange: SetSelectChangeType
) => {
	setChange(e.target.value as TravelClassType);
};

// convert city name to IATA code 
export const makeIATACode = (city: string) => {
	return city.slice(0, 3).toUpperCase();
};
