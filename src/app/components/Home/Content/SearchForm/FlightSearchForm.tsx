'use client';

// react  hooks
import { useState } from 'react';
import { useRouter } from 'next/navigation';

// redux
import { AppDispatch, useAppSelector } from '@/redux/store';
import { useDispatch } from 'react-redux';
import {
    changeLocation,
    changeDistination,
    changeFlightDate,
    changeTravelClass,
    changeNumberOfAdults,
} from '@redux/features/flightFormInputValues-slice';
import {
    thruthyIsLoading,
    falsyIsLoading,
} from '@/redux/features/loading-slice';

// graphql
import { CreateSearchResult } from '@/utils/graphqlMutation/createSearchResult-mutation';
import { useMutation } from '@apollo/client';
import { getSearchResultsForCurrentUser } from '@/utils/graphqlQuery/getSearchResults-query';

import { InputEventType } from '@/types/flightSearchForm-types';
import { SelectChangeEvent } from '@mui/material/Select';
import { FlightSearchFormStyles } from '@styles/HomeStyles/ContentStyles/FlightSearchForm.styles';
import { SearchField } from '../SearchForm/SearchField';
import { SubmitButton } from '@styles/Buttons.styles';
import { capitalizeString } from '@utils/capitalizeString';
import { getFlightOffers } from '@/utils/externalAPI/amadeus/getFlightOffers';
import {
    handleInputChange,
    handleSelectChange,
} from '@/utils/handleInputChanges';
import { SelectField } from './SelectField';
import { getCityCodeFromCityName } from '@utils/externalAPI/airLabs/makeIATACode';

export const FlightSearchForm = () => {
    // set up router
    const router = useRouter();

    const dispatch = useDispatch<AppDispatch>();

    const { userId } = useAppSelector((state) => state.userIdSlice);

    const { location, distination, flightDate, numberOfAdults, travelClass } =
        useAppSelector((state) => state.flightFormInputValues);

    console.log('user ID: ' + userId);
    // calling the graphql mutation that creates new SearchResult
    const [createSearchResult] = useMutation(CreateSearchResult, {
        refetchQueries: [
            { query: getSearchResultsForCurrentUser, variables: { userId } },
        ],
    });

    // console.log(getAirPortIATACodeFromCityName('Alexandria'));

    const handleSumbit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // waiting for IATA city code response from airLabs api
        dispatch(thruthyIsLoading());
        const locationIATACode = await getCityCodeFromCityName(location);
        const distinationIATACode = await getCityCodeFromCityName(distination);

        // waiting for flightsData response from amadeus api
        const flightsList = await getFlightOffers({
            locationIATACode,
            distinationIATACode,
            flightDate,
            numberOfAdults,
            travelClass,
        });

        // create new SearchResult query in the graphql database
        createSearchResult({
            variables: {
                location: { cityName: location, IATACode: locationIATACode },
                distination: {
                    cityName: distination,
                    IATACode: distinationIATACode,
                },
                flightDate: flightDate,
                numberOfAdults: numberOfAdults,
                travelClass: travelClass,
                flights: { flightsList },
                userId: userId,
            },
        });

        dispatch(falsyIsLoading());

        router.replace('/flights');
    };

    return (
        <FlightSearchFormStyles onSubmit={handleSumbit}>
            <SearchField
                labelOfInputField='location'
                handleChange={(e: InputEventType) =>
                    dispatch(changeLocation(capitalizeString(e.target.value)))
                }
            />
            <SearchField
                labelOfInputField='distination'
                handleChange={(e: InputEventType) =>
                    dispatch(
                        changeDistination(capitalizeString(e.target.value)),
                    )
                }
            />
            <SearchField
                labelOfInputField='flight date'
                placeholder=' 2023-12-12'
                handleChange={(e: InputEventType) =>
                    dispatch(changeFlightDate(capitalizeString(e.target.value)))
                }
            />
            <SearchField
                labelOfInputField='number Of Adults'
                handleChange={(e: InputEventType) =>
                    dispatch(
                        changeNumberOfAdults(capitalizeString(e.target.value)),
                    )
                }
            />
            <SelectField
                labelOfSelectField='travel class'
                travelClass={travelClass}
                handleChange={(e: SelectChangeEvent) =>
                    dispatch(
                        changeTravelClass(capitalizeString(e.target.value)),
                    )
                }
            />
            <SubmitButton type='submit' value='Submit' />
        </FlightSearchFormStyles>
    );
};
