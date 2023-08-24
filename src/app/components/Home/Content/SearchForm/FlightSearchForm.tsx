'use client'
import { AppDispatch, useAppSelector } from '@/redux/store';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation';

import { FlightSearchFormStyles } from '@styles/HomeStyles/ContentStyles/FlightSearchForm.styles'
import {SearchField} from '../SearchForm/SearchField' 
import {changeLocationValue, changeDistinationValue, changeFlightDateValue} from '@redux/features/flightFormInputValues-slice';
import { ChangeEvent,useEffect } from 'react';
import { useFindFlightSearch } from '@server/controllers/getFlightOffer'
import { SubmitButton } from '@styles/HomeStyles/ContentStyles/SubmitButton.styles'
//testing our reducers
//

export const FlightSearchForm = () => {
	
	const router = useRouter()

	const flights = useFindFlightSearch()

	const flightInputValues = useAppSelector((state) => state.flightFormInputValues)
	const dispatch = useDispatch<AppDispatch>();

		
	useEffect(() => {console.log(JSON.stringify(flightInputValues))},[flightInputValues])

	const handleLocationChange = (e:ChangeEvent<HTMLInputElement>) => {
		dispatch(changeLocationValue(e.target.value))
		
	}

	const handleDistinationChange = (e:ChangeEvent<HTMLInputElement>) => {
		dispatch(changeDistinationValue(e.target.value))
	}

	const handleFlightDateChange = (e:ChangeEvent<HTMLInputElement>) => {
		dispatch(changeFlightDateValue(e.target.value))
	}

	const handleSumbit = (e:React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log(flights)
		router.push('/seats')
	}
	

	return(
		<FlightSearchFormStyles onSubmit={handleSumbit}>
			<SearchField labelOfInputField='location' handleChange={handleLocationChange} />
			<SearchField labelOfInputField='distination' handleChange={handleDistinationChange}  />
			<SearchField labelOfInputField='flight date' handleChange={handleFlightDateChange} />
			<SubmitButton type="submit" value='Submit'/>

		</FlightSearchFormStyles>
	)
}
