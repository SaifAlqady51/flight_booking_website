import axios from 'axios';
import { getFlightOffer } from '../api'
import {getAmadeusKey} from './getAmadeusKey';

export async function getFlightOrderId(){
	const URL = 'https://test.api.amadeus.com/v1/shopping/seatmaps'
	try{
		const response = await axios({
			method:'POST',
			url:URL,
			data: await getFlightOffer({from:'PAR',to:'SYD'}),
			headers:{
				"Authorization": await getAmadeusKey()	
			}
			
		})
		console.log(response.data.data[0].decks[0].seats)
	}catch(error){
		console.log(error)
	}
}

