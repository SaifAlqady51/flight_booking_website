'use client';

import { FC } from 'react';

// redux
import { useAppSelector, AppDispatch } from '@/redux/store';
import { useDispatch } from 'react-redux';
// import { switchFlightCards } from '@/redux/features/expandFlightCard-slice';

// styles
import {
    SearchResultInfo,
    SearchResultContainer,
    SearchResultButtonsArea,
} from '@/styles/FlightStyles/SearchResult.styles';
import FlightText from './FlightText';
import { DeleteButton, ExpandButton } from '@/styles/Buttons.styles';

// icons
import DeleteIcon from '@mui/icons-material/Delete';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

interface SearchResultProps {
    location: string;
    distination: string;
    flightDate: string;
    numberOfAdults: string;
    travelClass: string;
}

const SearchResult: FC<SearchResultProps> = ({
    location,
    distination,
    flightDate,
    numberOfAdults,
    travelClass,
}) => {
    const { expanded } = useAppSelector((state) => state.expandFlightCards);
    const { flights } = useAppSelector((state) => state.flightData);

    // const { location, distination, flightDate, numberOfAdults, travelClass } =
    //     useAppSelector((state) => state.flightFormInputValues);

    const dispatch = useDispatch<AppDispatch>();

    return (
        <SearchResultContainer>
            <SearchResultInfo>
                <FlightText constText={'From'} varText={location} />
                <FlightText constText={'To'} varText={distination} />
                <FlightText
                    constText={'Number of results'}
                    varText={flights.length}
                />
                <FlightText constText={'Date'} varText={flightDate} />
                <FlightText
                    constText={'Number of adults'}
                    varText={numberOfAdults}
                />
                <FlightText constText={'Travel Class'} varText={travelClass} />
            </SearchResultInfo>
            <SearchResultButtonsArea>
                <DeleteButton>
                    <DeleteIcon />
                    Delete
                </DeleteButton>
                {/* <ExpandButton onClick={() => dispatch(switchFlightCards(1))}> */}
                {/*     {expanded[0] ? <ExpandLessIcon /> : <ExpandMoreIcon />} */}
                {/*     {expanded[0] ? 'Expand less' : 'Expand more'} */}
                {/* </ExpandButton> */}
            </SearchResultButtonsArea>
        </SearchResultContainer>
    );
};

export default SearchResult;
