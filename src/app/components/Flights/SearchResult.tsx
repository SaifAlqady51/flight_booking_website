'use client';

import { FC } from 'react';

// redux
import { useAppSelector, AppDispatch } from '@/redux/store';
import { useDispatch } from 'react-redux';
import { switchFlightCards } from '@/redux/features/expandFlightCard-slice';

// styles
import {
    SearchResultInfo,
    SearchResultContainer,
    SearchResultButtonsArea,
} from '@/styles/FlightStyles/SearchResult.styles';
import FlightText from './FlightText';
import { DeleteButton, ExpandButton } from '@/styles/Buttons.styles';
import { FlightCard } from './FlightCard';
import { AllFlightCardsContainer } from '@/styles/FlightStyles/FlightCard.styles';

// icons
import DeleteIcon from '@mui/icons-material/Delete';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

// graphql
import { useMutation } from '@apollo/client';
import { DeleteSingleSearchResult } from '@/utils/graphqlMutation/DeleteSingleSearchResult-mutation';
import { getSearchResultsForCurrentUser } from '@/utils/graphqlQuery/getSearchResults-query';

interface SearchResultProps {
    id: string;
    searchResult: any;
}

const SearchResult: FC<SearchResultProps> = ({ id, searchResult }) => {
    // importing listOfExpanded state from redux that change the state of each searchResult whether it was expanded or not
    const { listOfExpanded } = useAppSelector(
        (state) => state.expandFlightCards,
    );
    const { userId } = useAppSelector((state) => state.userIdSlice);

    // mutation for deleting single search result
    const [deleteSingleSearchResult] = useMutation(DeleteSingleSearchResult, {
        refetchQueries: [
            { query: getSearchResultsForCurrentUser, variables: { userId } },
        ],
    });

    // dispatch is a method to update redux states
    const dispatch = useDispatch<AppDispatch>();

    // find This current Search Result ID from listOfExpanded redux state
    const findSearchResultId = () => {
        const currentSearchResult = listOfExpanded.filter(
            (list: any) => list.id === id,
        );
        console.log(
            'current SEarch result : ' + JSON.stringify(currentSearchResult[0]),
        );
        return currentSearchResult[0];
    };

    // delete a specific search result when this button clicked
    const deletingButton = () => {
        deleteSingleSearchResult({ variables: { id: searchResult.id } });
    };

    // get expanded state from current Search Result
    const getCurrentSearchResultExpandState = () => {
        const currentSearchResult = findSearchResultId();
        console.log(' current : ' + currentSearchResult.expanded);
        return currentSearchResult.expanded;
    };
    // all the flights card that attached to current Search Result
    const AllFlightCards = () =>
        searchResult.flights.flightsList.map((flight: any) => (
            <FlightCard key={flight.id} flightData={flight}></FlightCard>
        ));
    console.log(searchResult);

    return (
        <>
            <SearchResultContainer>
                <SearchResultInfo>
                    <FlightText
                        constText={'From'}
                        varText={searchResult.location.cityName}
                    />
                    <FlightText
                        constText={'To'}
                        varText={searchResult.distination.cityName}
                    />
                    <FlightText
                        constText={'Number of results'}
                        varText={`${searchResult.flights.flightsList.length}`}
                    />
                    <FlightText
                        constText={'Date'}
                        varText={searchResult.flightDate}
                    />
                    <FlightText
                        constText={'Number of adults'}
                        varText={searchResult.numberOfAdults}
                    />
                    <FlightText
                        constText={'Travel Class'}
                        varText={searchResult.travelClass}
                    />
                </SearchResultInfo>
                <SearchResultButtonsArea>
                    <DeleteButton onClick={deletingButton}>
                        <DeleteIcon />
                        Delete
                    </DeleteButton>

                    <ExpandButton
                        onClick={() => dispatch(switchFlightCards(id))}
                    >
                        {getCurrentSearchResultExpandState() ? (
                            <ExpandLessIcon />
                        ) : (
                            <ExpandMoreIcon />
                        )}
                        {getCurrentSearchResultExpandState()
                            ? 'Expand less'
                            : 'Expand more'}
                    </ExpandButton>
                </SearchResultButtonsArea>
            </SearchResultContainer>
            {getCurrentSearchResultExpandState() ? (
                <AllFlightCardsContainer>
                    <AllFlightCards />
                </AllFlightCardsContainer>
            ) : (
                <div></div>
            )}
        </>
    );
};

export default SearchResult;
