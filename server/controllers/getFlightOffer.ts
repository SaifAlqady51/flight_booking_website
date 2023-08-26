"use client";
import axios from "axios";
import { getAmadeusKey } from "../utils/getAmadeusKey";

import { useAppSelector } from "@/redux/store";

export async function useFindFlightSearch() {
	const { location, distination, flightDate } = useAppSelector(
		(state) => state.flightFormInputValues
	);

	if (
		location.length === 3 &&
		distination.length === 3 &&
		flightDate.length === 10
	) {
		const url = `https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=
			${location}&destinationLocationCode=
			${distination}&departureDate=${flightDate}&adults=1&nonStop=false&max=250`;
		const config = {
			headers: { Authorization: await getAmadeusKey() },
		};
		const flights = await axios.get(url, config);
		// return {"meta":{"count":2},"data":[flights.data.data[0]]}
		return flights.data.data;
	}
}
