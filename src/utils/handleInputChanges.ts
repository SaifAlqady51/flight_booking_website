import { eventType, setChangeType } from "@/types/flightSearchForm-types";

export const handleChange = (e: eventType, setChange: setChangeType) => {
	setChange(e.target.value);
};
