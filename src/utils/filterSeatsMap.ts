

export const filterSeatsMap = (trips:any[]) => {
	let seatsArray = []
	for(let trip of trips){
		seatsArray.push(trip.decks[0].seats)
	}

	return seatsArray
		
}
