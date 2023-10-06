'use client';
import { AppDispatch } from '@/redux/store';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { CreateNewSearchResult } from '@/utils/createNewSearchResult';
import { useMutation } from '@apollo/client';
import { InputEventType } from '@/types/flightSearchForm-types';
import { SelectChangeEvent } from '@mui/material/Select';
import { FlightSearchFormStyles } from '@styles/HomeStyles/ContentStyles/FlightSearchForm.styles';
import { SearchField } from '../SearchForm/SearchField';
import { SubmitButton } from '@styles/Buttons.styles';
import {
    handleInputChange,
    handleSelectChange,
    makeIATACode,
} from '@/utils/handleInputChanges';
// import { fetchedFlightData } from '@/redux/features/flightData-slice';
import { changeFormValue } from '@/redux/features/flightFormInputValues-slice';
import { SelectField } from './SelectField';
import axios from 'axios';
import { setUseProxies } from 'immer';

export const FlightSearchForm = () => {
	// set up router
    const router = useRouter();

    // local states for the inputs field
    const [location, setLocation] = useState('');
    const [distination, setDistination] = useState('');
    const [flightDate, setFlightDate] = useState('');
    const [numberOfAdults, setNumberOfAdults] = useState('');
    const [travelClass, setTravelClass] = useState<string>('');
    const [userId, setUserId] = useState<string>('');

	// fetching UserId from our local api
    useEffect(() => {
        async function fetchUserId() {
            const response = await axios.get('http://localhost:3000/api');
            setUserId(response.data);
        }

        fetchUserId();
    });
	// calling the graphql mutation that creates new SearchResult	
    const [createSearchResult] = useMutation(
        CreateNewSearchResult,
    );
	
    const dispatch = useDispatch<AppDispatch>();

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

        // dispatch(
        //     changeFormValue({
        //         location: location,
        //         distination: distination,
        //         flightDate: flightDate,
        //         adults: numberOfAdults,
        //         travelClass: travelClass,
        //     }),
        // );
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
