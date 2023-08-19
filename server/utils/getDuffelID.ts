import axios from 'axios';
import {Duffel} from '@duffel/api';



export async function getDuffelId(){
	
	const duffel = new Duffel({
	  token: `duffel_test_WcXHISpP6pgnwAyWwO94A2dew1MLtfM402XgDlAb3m3`
	})

	const offerRequest = await duffel.offerRequests.create({
	  "slices": [
		{
		  "origin": 'LHR',
		  "destination": 'JFK',
		  "departure_date": "2024-02-16"
		},
	  ],
	  "passengers": [{ "type": "adult" }],
	  "cabin_class" : "business"
	})

	//@ts-ignore
	const offers = await duffel.offers.list(offerRequest.data.id)
	console.log(offers)
	//
	 // const data = {
	 // 	data: {
	 // 		slices : [
	 // 		  {
	 // 			origin: "NYC",
	 // 			destination: "ATL",
	 // 			departure_date: "2023-08-21"
	 // 		  },
	 // 		  {
	 // 			origin: "ATL",
	 // 			destination: "NYC",
	 // 			departure_date: "2023-09-21"
	 // 		  }
	 // 		],
	 // 		passengers: [{ "type": "adult" }, { "type": "adult" }, { "age": 1 }],
	 // 		cabin_class: "business"
	 // 	  }
	 // }
	 // try{
	 // 	const URL = 'https://api.duffel.com/air/offer_requests'
		// const response = await axios({

			// params:{
				// "return_offers":"false"
			// },

	 // 		method:'POST',
	 // 		url:URL,
			// headers:{
		
				// "Duffel-Version": "v1",
	 // 			"Accept-Encoding": "gzip",
	 // 			"Accept" : "application/josn",
	 // 			"Content-Type" : "application/json",
	 // 			"Authorization" : `Bearer duffel_test_WcXHISpP6pgnwAyWwO94A2dew1MLtfM402XgDlAb3m3`,
			
			// },
			// data,
			// decompress:true

	 // 	})
	 // 	console.log(response)
	 // }catch(error : any){
	 // 	console.log(error.config)
	 // }
	
	
	// const response = await axios({
	
	// 	url:'https://api.duffel.com/air/offer_requests',
	// 	method:'POST',

	//   // '{\n  "data": {\n    "slices" : [\n      {\n        "origin": "NYC",\n        "destination": "ATL",\n        "departure_date": "2023-08-21"\n      },\n      {\n        "origin": "ATL",\n        "destination": "NYC",\n        "departure_date": "2023-09-21"\n      }\n    ],\n    "passengers": [{ "type": "adult" }, { "type": "adult" }, { "age": 1 }],\n    "cabin_class": "business"\n  }\n}',
	// 	data:{
	// 	'data': {
	// 	  'slices': [
	// 		{
	// 		  'origin': 'NYC',
	// 		  'destination': 'ATL',
	// 		  'departure_date': '2023-08-21'
	// 		},
	// 		{
	// 		  'origin': 'ATL',
	// 		  'destination': 'NYC',
	// 		  'departure_date': '2023-09-21'
	// 		}
	// 	  ],
	// 	  'passengers': [
	// 		{
	// 		  'type': 'adult'
	// 		},
	// 		{
	// 		  'type': 'adult'
	// 		},
	// 		{
	// 		  'age': 1
	// 		}
	// 	  ],
	// 	  'cabin_class': 'business'
	// 	}
	// 	}
	// },
	//   {
	// 	params: {
	// 	  'return_offers': 'false'
	// 	},
	// 	headers: {
	// 	  'Accept-Encoding': 'gzip',
	// 	  'Accept': 'application/json',
	// 	  'Content-Type': 'application/json',
	// 	  'Duffel-Version': 'v1',
	// 	  'Authorization': 'Bearer duffel_test_WcXHISpP6pgnwAyWwO94A2dew1MLtfM402XgDlAb3m3 '
	// 	}
	//   }
	// });
	// console.log(response)
}
