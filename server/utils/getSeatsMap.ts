// import axios from 'axios';
// import { GetFlightOffer } from '../controllers/getFlightOffer'
// import {getAmadeusKey} from './getAmadeusKey';

// export async function getSeatsMap(){
// 	const URL = 'https://test.api.amadeus.com/v1/shopping/seatmaps'
// 	try{
// 		const response = await axios({
// 			method:'POST',
// 			url:URL,
// 			data: await GetFlightOffer(),
// 			headers:{
// 				"Authorization": await getAmadeusKey()	
// 			}
			
// 		})
// 		console.log(response.data.data[0].decks[0].seats)
// 	}catch(error){
// 		console.log(error)
// 	}
// }

