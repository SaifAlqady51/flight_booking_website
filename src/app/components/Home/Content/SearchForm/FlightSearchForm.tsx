'use client';

// react basic hooks
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

// redux  
import { AppDispatch, useAppSelector } from '@/redux/store';
import { useDispatch } from 'react-redux';
import {changeFormValue} from '@redux/features/flightFormInputValues-slice'
import { fetchedFlightData } from '@/redux/features/flightData-slice';

import { CreateNewSearchResult } from '@/utils/createNewSearchResult';
import { useMutation } from '@apollo/client';
import { InputEventType } from '@/types/flightSearchForm-types';
import { SelectChangeEvent } from '@mui/material/Select';
import { FlightSearchFormStyles } from '@styles/HomeStyles/ContentStyles/FlightSearchForm.styles';
import { SearchField } from '../SearchForm/SearchField';
import { SubmitButton } from '@styles/Buttons.styles';
import {capitalizeString} from '@utils/capitalizeString'
import {
    handleInputChange,
    handleSelectChange,
    makeIATACode,
} from '@/utils/handleInputChanges';
import { SelectField } from './SelectField';
import axios from 'axios';

export const FlightSearchForm = () => {
    // set up router
    const router = useRouter();


    const dispatch = useDispatch<AppDispatch>();

    // local states for the inputs field
	const [location, setLocation] = useState<string>('');
	const [distination, setDistination] = useState<string>('');
	const [flightDate, setFlightDate] = useState<string>('');
	const [numberOfAdults, setNumberOfAdults] = useState<string>('');
    const [travelClass, setTravelClass] = useState<string>('');
    const [userId, setUserId] = useState<string>('');
	
    dispatch(
        changeFormValue({
            location: capitalizeString(location),
            distination: capitalizeString(distination),
            flightDate: flightDate,
            adults: numberOfAdults,
            travelClass: travelClass,
        }),
    );

    // fetching UserId from our local api
    useEffect(() => {
        async function fetchUserId() {
            const response = await axios.get('http://localhost:3000/api');
            setUserId(response.data);
        }

        fetchUserId();
    });

    // calling the graphql mutation that creates new SearchResult
    const [createSearchResult] = useMutation(CreateNewSearchResult);


    const handleSumbit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // create new SearchResult query in the graphql database
        createSearchResult({
            variables: {
                from: location,
                to: distination,
                flightDate: flightDate,
                numberOfAdults: numberOfAdults,
                travelClass: travelClass,
                userId: userId,
            },
        });

        dispatch(
            fetchedFlightData({
                location: makeIATACode(location),
                distination: makeIATACode(distination),
                flightDate,
                adults: numberOfAdults,
                travelClass,
            }),
        );
        router.replace('/flights');
    };

    return (
        <FlightSearchFormStyles onSubmit={handleSumbit}>
            <SearchField
                labelOfInputField='location'
				handleChange={(e: InputEventType) => 
					handleInputChange(e, setLocation)
				}
            />
            <SearchField
                labelOfInputField='distination'
                handleChange={(e: InputEventType) =>
                    handleInputChange(e, setDistination)
                }
            />
            <SearchField
                labelOfInputField='flight date'
                placeholder=' 2023-12-12'
                handleChange={(e: InputEventType) =>
                    handleInputChange(e, setFlightDate)
                }
            />
            <SearchField
                labelOfInputField='number Of Adults'
                handleChange={(e: InputEventType) =>
                    handleInputChange(e, setNumberOfAdults)
                }
            />
            <SelectField
                labelOfSelectField='travel class'
                travelClass={travelClass}
                handleChange={(e: SelectChangeEvent) =>
                    handleSelectChange(e, setTravelClass)
                }
            />
            <SubmitButton type='submit' value='Submit' />
        </FlightSearchFormStyles>
    );
};
