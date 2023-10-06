'use client';
import {
    SearchFieldContainer,
    InputLabel,
    StyledInput,
} from '@styles/HomeStyles/ContentStyles/FlightSearchForm.styles';
import { FC } from 'react';
import { useAnimate } from 'framer-motion';

interface SearchFieldProps {
    typeOfInputField?: string;
    labelOfInputField: string;
    handleChange?: any;
    placeholder?: string;
}

export const SearchField: FC<SearchFieldProps> = ({
    typeOfInputField,
    labelOfInputField,
    handleChange,
    placeholder,
}) => {
    const [scope, animate] = useAnimate();


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
				list="cities"
                type={typeOfInputField ? typeOfInputField : 'text'}
                onFocus={onFieldInputFocus}
                onChange={handleChange}
                placeholder={placeholder}
            />
            <InputLabel ref={scope} initial={{ x: 0, y: 0 }}>
                {labelOfInputField}
            </InputLabel>
        </SearchFieldContainer>
    );
};
