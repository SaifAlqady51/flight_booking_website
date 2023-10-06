import {
    InputEventType,
    SetInputChangeType,
} from '@/types/flightSearchForm-types';
import { SelectChangeEvent } from '@mui/material/Select';

// handle input filed changes
export const handleInputChange = (
    e: InputEventType,
    setChange: SetInputChangeType,
) => {
    setChange(e.target.value);
};

//handl select field changes
export const handleSelectChange = (
    e: SelectChangeEvent,
    setChange: SetInputChangeType,
) => {
    setChange(e.target.value as string);
};

// convert city name to IATA code
export const makeIATACode = (city: string) => {
    return city.slice(0, 3).toUpperCase();
};
