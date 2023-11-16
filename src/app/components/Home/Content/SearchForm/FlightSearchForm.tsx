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
    truthyIsLoading,
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
import { FieldType } from '@/types/inputField-types';

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

    const flightDataFalseValidity = () => {
        dispatch(
            check({
                status: hanldeFlightDate(flightDate).status,
                message: hanldeFlightDate(flightDate).message,
            }),
        );
    };

    // this function executes when the user is not signed in
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
            flightDataFalseValidity();
			dispatch(switchAlert())

        } else if (locationIATACode && distinationIATACode) {
            dispatch(truthyIsLoading());
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

    // this function executes when the user is signed in
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
            flightDataFalseValidity();
			dispatch(switchAlert())

        } else if (locationIATACode && distinationIATACode) {
            dispatch(truthyIsLoading());
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
    const inputFields: FieldType[] = [
        { label: 'location', changeingFunction: changeLocationCityName },
        { label: 'distination', changeingFunction: changeDistinationCityName },
        {
            label: 'flight date',
            placeholder: '2023-12-12',
            changeingFunction: changeFlightDate,
        },
        { label: 'number of adults', changeingFunction: changeNumberOfAdults },
    ];

    return (
        <FlightSearchFormStyles
            onSubmit={userId ? handleSumbit : handleSumbitWithoutUser}
        >
            {inputFields.map((field: FieldType) => (
                <>
                    <SearchField
                        labelOfInputField={field.label}
                        handleChange={(e: InputEventType) =>
                            dispatch(
                                field.changeingFunction(
                                    capitalizeString(e.target.value),
                                ),
                            )
                        }
                        placeholder={field.placeholder}
                    />
                </>
            ))}
            <SelectField
                labelOfSelectField='travel class'
                travelClass={travelClass}
                handleChange={(e: SelectChangeEvent) =>
                    dispatch(
                        changeTravelClass({
                            travelClass: capitalizeString(e.target.value),
                            userId: userId,
                        }),
                    )
                }
            />
            <SubmitButton type='submit' value='Submit' />
        </FlightSearchFormStyles>
    );
};
