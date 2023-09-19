import axios from "axios";
import { getAmadeusKey } from "./getAmadeusKey";
import { FlightType } from "@/types/flight-types";

export async function getSeatsMap(flightData : FlightType) {
	console.log('flight data: ' + JSON.stringify(flightData))
	const URL = "https://test.api.amadeus.com/v1/shopping/seatmaps";
	try {
		const response = await axios({
			method: "POST",
			url: URL,
			data: {data:[flightData]},
			headers: {
				Authorization: await getAmadeusKey(),
			},
		});
		console.log(response.data);
	} catch (error) {
		console.log(error);
	}
}
