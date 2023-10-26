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
        (state) => state.expandFlightCards,
    );

    console.log(
        'data : ' + JSON.stringify(data.getSearchResultsForSpecificUser),
    );

    const getIdsForSearchResults = () => {
        let listOfIds: string[] = [];
        const searchResults = data.getSearchResultsForSpecificUser;
        for (let searchResult of searchResults) {
            listOfIds.push(searchResult.id);
        }
        return listOfIds;
    };

    useEffect(() => {
		dispatch(resetSearchResults())
		const listOfIds = getIdsForSearchResults()
        console.log('List of Ids' + getIdsForSearchResults());
        dispatch(
            pushSearchResult({
                numberOfSearchResults: listOfIds.length,
                listOfIds: listOfIds,
            }),
        );
    }, [data]);

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

    if (
        data &&
        listOfExpanded.length ==
            data.getSearchResultsForSpecificUser.length
    ) {
        return <AllSearchResults />;
    } else {
        return <h1>There is no Search Results for you</h1>;
    }
};

export default DisplaySearchResults;
