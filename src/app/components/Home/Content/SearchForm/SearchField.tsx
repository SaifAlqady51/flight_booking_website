'use client';
import { useState, useEffect } from 'react';
import {
    SearchFieldContainer,
    InputLabel,
    StyledInput,
} from '@styles/HomeStyles/ContentStyles/FlightSearchForm.styles';
import { FC } from 'react';
import { useAnimate } from 'framer-motion';
import CitiesList from '../../Content/SearchForm/CitiesList';
import { filterCitiesList } from '@utils/filterCitiesList';
import { useAppSelector } from '@/redux/store';

interface SearchFieldProps {
    labelOfInputField: string;
    handleChange?: any;
    placeholder?: string;
}

export const SearchField: FC<SearchFieldProps> = ({
    labelOfInputField,
    handleChange,
    placeholder,
}) => {
    // importing location and distination from Redux
    const { location, distination } = useAppSelector(
        (state) => state.flightFormInputValues,
    );

    // creating animate state from framer-motion
    const [scope, animate] = useAnimate();

    // creating useState for citiesList autoCompletion
    const [locationCitiesList, SetLocationCitiesList] = useState<string[]>([]);
    const [distinationCitiesList, SetDistinationCitiesList] = useState<
        string[]
    >([]);

    useEffect(() => {
        SetLocationCitiesList(filterCitiesList(location.cityName));

        SetDistinationCitiesList(filterCitiesList(distination.cityName));
    }, [location, distination]);

    const onFieldInputFocus = () => {
        animate(
            scope.current,
            { x: 5, y: -25, scale: 0.75 },
            { duration: 0.3 },
        );
    };

    return (
        <SearchFieldContainer>
            <StyledInput
                required
                list={labelOfInputField}
                type='text'
                onFocus={onFieldInputFocus}
                onChange={handleChange}
                placeholder={placeholder}
            />
            {/* autoCompletion for location input field */}
            <CitiesList citiesList={locationCitiesList} label='location' />

            {/* autoCompletion for distination input field */}
            <CitiesList
                citiesList={distinationCitiesList}
                label='distination'
            />

            <InputLabel ref={scope} initial={{ x: 0, y: 0 }}>
                {labelOfInputField}
            </InputLabel>
        </SearchFieldContainer>
    );
};
