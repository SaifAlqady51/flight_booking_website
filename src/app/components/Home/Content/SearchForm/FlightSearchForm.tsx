"use client";
import { AppDispatch } from "@/redux/store";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { useState } from "react";

import { eventType } from "@/types/flightSearchForm-types";
import { FlightSearchFormStyles } from "@styles/HomeStyles/ContentStyles/FlightSearchForm.styles";
import { SearchField } from "../SearchForm/SearchField";
import { changeFormValue } from "@redux/features/flightFormInputValues-slice";
import { useFindFlightSearch } from "@server/controllers/getFlightOffer";
import { SubmitButton } from "@styles/HomeStyles/ContentStyles/SubmitButton.styles";
import { handleChange } from "@/utils/handleInputChanges";

export const FlightSearchForm = () => {
	const router = useRouter();

	const [location, setLocation] = useState("");
	const [distination, setDistination] = useState("");
	const [flightDate, setFlightDate] = useState("");

	useFindFlightSearch();

	const dispatch = useDispatch<AppDispatch>();
	const handleSumbit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		dispatch(changeFormValue({ location, distination, flightDate }));
		router.replace("/flights");
	};

	return (
		<FlightSearchFormStyles onSubmit={handleSumbit}>
			<SearchField
				labelOfInputField="location"
				handleChange={(e: eventType) => handleChange(e, setLocation)}
			/>
			<SearchField
				labelOfInputField="distination"
				handleChange={(e: eventType) => handleChange(e, setDistination)}
			/>
			<SearchField
				labelOfInputField="flight date"
				handleChange={(e: eventType) => handleChange(e, setFlightDate)}
			/>
			<SubmitButton type="submit" value="Submit" />
		</FlightSearchFormStyles>
	);
};
