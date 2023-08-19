import axios from 'axios';
import {getAmadeusKey} from './utils/getAmadeusKey';

export async function getFlightOffer({from,to}:{from:string,to:string}){

	const url = `https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=
		${from}&destinationLocationCode=
		${to}&departureDate=2023-11-02&adults=1&nonStop=false&max=250`
	const config = {
		headers: {Authorization: await getAmadeusKey()}
	} 
	const flights = await axios.get(url,config)
	return {"meta":{"count":2},"data":[flights.data.data[0]]}
}




