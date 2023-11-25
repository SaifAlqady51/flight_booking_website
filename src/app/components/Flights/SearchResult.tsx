'use client';

import { FC } from 'react';
import { useRouter } from 'next/navigation';
// redux
import { useAppSelector, AppDispatch } from '@/redux/store';
import { useDispatch } from 'react-redux';
import { switchFlightCards } from '@/redux/features/expandFlightCard-slice';
import { deleteSearchResult } from '@/redux/features/flightFormInputValues-slice';

// styles
import {
    SearchResultInfo,
    SearchResultContainer,
    SearchResultButtonsArea,
} from '@/styles/FlightStyles/SearchResult.styles';
import FlightText from './FlightText';
import { DeleteButton, ExpandButton } from '@/styles/Buttons.styles';
import AllFlightCards from './AllFlightCards';
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
    const router = useRouter();
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
    const { flights } = useAppSelector((state) => state.flightData);
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
    const deletingSearchResult = () => {
        deleteSingleSearchResult({ variables: { id: searchResult.id } });
        router.refresh();
    };

    const deleteingSearchResultWithoutUser = () => {
        dispatch(deleteSearchResult());
    };

    // get expanded state from current Search Result
    const getCurrentSearchResultExpandState = () => {
        const currentSearchResult = findSearchResultId();
        return currentSearchResult.expanded;
    };
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

                    {/* <FlightText */}
                    {/*     constText={'Number of results'} */}
                    {/*     varText={`${ */}
                    {/*         userId */}
                    {/*             ? searchResult.flights.flightsList.length */}
                    {/*             : flights.length */}
                    {/*     }`} */}
                    {/* /> */}
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
                    <DeleteButton
                        onClick={
                            userId
                                ? deletingSearchResult
                                : deleteingSearchResultWithoutUser
                        }
                    >
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
            {getCurrentSearchResultExpandState() &&
            (searchResult.flights || flights) ? (
                <AllFlightCardsContainer>
                    <AllFlightCards
                        flightsList={
                            userId ? searchResult.flights.flightsList : flights
                        }
                    />
                </AllFlightCardsContainer>
            ) : (
                <div></div>
            )}
        </>
    );
};

export default SearchResult;
