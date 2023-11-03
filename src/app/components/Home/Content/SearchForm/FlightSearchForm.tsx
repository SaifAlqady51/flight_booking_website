'use client';

// react  hooks
import { useRouter } from 'next/navigation';
import React from 'react';

// redux
import { AppDispatch, useAppSelector } from '@/redux/store';
import { useDispatch } from 'react-redux';
import {
    changeLocationCityName,
    changeDistinationCityName,
    changeLocation,
    changeDistination,
    changeFlightDate,
    changeTravelClass,
    changeNumberOfAdults,
} from '@redux/features/flightFormInputValues-slice';
import { fetchedFlightData } from '@/redux/features/flightData-slice';
import {
    thruthyIsLoading,
    falsyIsLoading,
} from '@/redux/features/loading-slice';
import { check } from '@/redux/features/checkFlightDate-slice';
import { switchAlert } from '@/redux/features/toggleAlert-slice';

// graphql
import { CreateSearchResult } from '@/utils/graphqlMutation/createSearchResult-mutation';
import { useMutation } from '@apollo/client';
import { getSearchResultsForCurrentUser } from '@/utils/graphqlQuery/getSearchResults-query';

// styles
import { SelectChangeEvent } from '@mui/material/Select';
import { SearchField } from '../SearchForm/SearchField';
import { FlightSearchFormStyles } from '@styles/HomeStyles/ContentStyles/FlightSearchForm.styles';
import { SubmitButton } from '@styles/Buttons.styles';
import { SelectField } from './SelectField';

//utils
import { capitalizeString } from '@utils/capitalizeString';
import { getFlightOffers } from '@/utils/externalAPI/amadeus/getFlightOffers';
import { getCityCodeFromCityName } from '@utils/externalAPI/airLabs/makeIATACode';
import { hanldeFlightDate } from '@/utils/handleFlightDateLogic';

// types
import { InputEventType } from '@/types/flightSearchForm-types';

export const FlightSearchForm = () => {
    // set up router
    const router = useRouter();

    // dispatch is a fundamental method of updateing redux states
    const dispatch = useDispatch<AppDispatch>();

    // userId is the id of the curretn user
    const { userId } = useAppSelector((state) => state.userIdSlice);

    // this redux state returns all input values
    const { location, distination, flightDate, numberOfAdults, travelClass } =
        useAppSelector((state) => state.flightFormInputValues);

    // calling the graphql mutation that creates new SearchResult
    const [createSearchResult] = useMutation(CreateSearchResult, {
        refetchQueries: [
            {
                query: getSearchResultsForCurrentUser,
                variables: { userId },
            },
        ],
    });

    const handleSumbitWithoutUser = async (
        e: React.FormEvent<HTMLFormElement>,
    ) => {
        e.preventDefault();
        const locationIATACode = await getCityCodeFromCityName(
            location.cityName,
        );
        const distinationIATACode = await getCityCodeFromCityName(
            distination.cityName,
        );
        console.log('helelo');

        dispatch(
            changeLocation({
                cityName: location.cityName,
                IATACode: locationIATACode,
            }),
        );

        dispatch(
            changeDistination({
                cityName: distination.cityName,
                IATACode: distinationIATACode,
            }),
        );
        if (!hanldeFlightDate(flightDate).status) {
            dispatch(switchAlert());
            dispatch(
                check({
                    status: hanldeFlightDate(flightDate).status,
                    message: hanldeFlightDate(flightDate).message,
                }),
            );
        } else if (locationIATACode && distinationIATACode) {
            dispatch(thruthyIsLoading());
            dispatch(
                fetchedFlightData({
                    location: {
                        cityName: location,
                        IATACode: locationIATACode,
                    },
                    distination: {
                        cityName: distination,
                        IATACode: distinationIATACode,
                    },
                    flightDate,
                    numberOfAdults,
                    travelClass,
                }),
            );
            dispatch(falsyIsLoading());
            router.push('/flights');
        }
    };

    const handleSumbit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // waiting for IATA city code response from airLabs api
        const locationIATACode = await getCityCodeFromCityName(
            location.cityName,
        );
        const distinationIATACode = await getCityCodeFromCityName(
            distination.cityName,
        );

        if (!hanldeFlightDate(flightDate).status) {
            dispatch(switchAlert());
            dispatch(
                check({
                    status: hanldeFlightDate(flightDate).status,
                    message: hanldeFlightDate(flightDate).message,
                }),
            );
        } else if (locationIATACode && distinationIATACode) {
            dispatch(thruthyIsLoading());
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
                    location: {
                        cityName: location.cityName,
                        IATACode: locationIATACode,
                    },
                    distination: {
                        cityName: distination.cityName,
                        IATACode: distinationIATACode,
                    },
                    flightDate: flightDate,
                    numberOfAdults: numberOfAdults,
                    travelClass: travelClass,
                    flights: { flightsList },
                    userId: userId,
                },
            });
            router.push('/flights');
            dispatch(falsyIsLoading());
        }
    };

    return (
        <FlightSearchFormStyles
            onSubmit={userId ? handleSumbit : handleSumbitWithoutUser}
        >
            <SearchField
                labelOfInputField='location'
                handleChange={(e: InputEventType) =>
                    dispatch(
                        changeLocationCityName(
                            capitalizeString(e.target.value),
                        ),
                    )
                }
            />
            <SearchField
                labelOfInputField='distination'
                handleChange={(e: InputEventType) =>
                    dispatch(
                        changeDistinationCityName({
                            cityName: capitalizeString(e.target.value),
                            userId: userId,
                        }),
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
