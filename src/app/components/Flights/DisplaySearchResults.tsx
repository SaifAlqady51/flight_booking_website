'use client';
import { useEffect } from 'react';
import SearchResult from '@components/Flights/SearchResult';
import { AllFlightCardsContainer } from '@/styles/FlightStyles/FlightCard.styles';
import { FlightCard } from '@components/Flights/FlightCard';
// redux
import { useAppSelector, AppDispatch } from '@/redux/store';
import { useDispatch } from 'react-redux';
import {
    pushSearchResult,
    resetSearchResults,
    switchFlightCards,
} from '@/redux/features/expandFlightCard-slice';

const DisplaySearchResults = ({ data }: { data: any }) => {
    // console.log('first SearchResult : '  + JSON.stringify(data.getSearchResultsForSpecificUser[0]))
    const dispatch = useDispatch<AppDispatch>();
    const { listOfExpanded } = useAppSelector(
        (state) => state.expandFlightCards
    );
    const expandItemForEachSearchResult = (
        numberOfSearchResults: number,
        listOfIds: string[],
    ) => {
        dispatch(pushSearchResult({ numberOfSearchResults, listOfIds }));
    };

    const resetSearchResultsListOfExpanded = () => {
        dispatch(resetSearchResults());
    };

    const getSearchResultsIds = () => {
        const ids = data.getSearchResultsForSpecificUser.map(
            (searchResult: any) => searchResult.id,
        );
        return ids;
    };
    useEffect(() => {
        console.log('all ids for SearchResults ' + getSearchResultsIds());
        resetSearchResultsListOfExpanded();
        dispatch(
            pushSearchResult({
                numberOfSearchResults:
                    data.getSearchResultsForSpecificUser.length,
                listOfIds: getSearchResultsIds(),
            }),
        );
    }, []);

    const AllSearchResults = () =>
        data.getSearchResultsForSpecificUser.map((searchResult: any) => (
            <>
                <SearchResult
                    key={searchResult.id}
                    id={searchResult.id}
                    searchResult={searchResult}
                />
            </>
        ));

    if (data && listOfExpanded.length > 0) {
        return <AllSearchResults />;
    } else {
        return <h1>There is no Search Results for you</h1>;
    }
};

export default DisplaySearchResults;
