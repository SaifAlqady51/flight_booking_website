'use client';
import { FC, useEffect } from 'react';
import SearchResult from '@components/Flights/SearchResult';
// redux
import { useAppSelector, AppDispatch } from '@/redux/store';
import { useDispatch } from 'react-redux';
import {
    pushSearchResult,
    resetSearchResults,
} from '@/redux/features/expandFlightCard-slice';
import LoadingPage from '../LoadingPage';

interface DisplaySearchResultsProps {
    data?: any;
    dataWithoutUser?: any;
}

const DisplaySearchResults: FC<DisplaySearchResultsProps> = ({
    data,
    dataWithoutUser,
}) => {
    // get the userId to check if the user signed in or not
    const { userId } = useAppSelector((state) => state.userIdSlice);
    console.log('data : ' + data ? 'there is no data' : 'there is data');
    console.log('data without user : ' + JSON.stringify(dataWithoutUser));

    // invoking useDispatch
    const dispatch = useDispatch<AppDispatch>();

    const checkIfTheUserEnterData =
        dataWithoutUser.location.cityName.length !== 0 &&
        dataWithoutUser.destination.cityName.length !== 0 &&
        dataWithoutUser.fligthData.length !== 0 &&
        dataWithoutUser.travelClass.length !== 0 &&
        dataWithoutUser.numberOfAdults.length !== 0;

    // get listOfExpanded to check its length and then display data or not
    const { listOfExpanded } = useAppSelector(
        (state) => state.expandFlightCards,
    );

    useEffect(() => {
        // get Id for each search result
        const getIdsForSearchResults = () => {
            // create an array to store search results ids
            let listOfIds: string[] = [];

            // get search results
            let searchResults = userId ? data : new Array(dataWithoutUser);
            console.log('search Result : ' + JSON.stringify(searchResults));

            // get the id from each search result then add it to listOfIds
            for (let searchResult of searchResults) {
                listOfIds.push(searchResult.id);
            }
            return listOfIds;
        };

        // resetSearchResults is a functoin to clear the data store in listOfExpanded state
        dispatch(resetSearchResults());
        const listOfIds = getIdsForSearchResults();
        console.log('List of Ids' + getIdsForSearchResults());

        // adding stored ids in listOfIds to the listOfExpanded state
        dispatch(
            pushSearchResult({
                numberOfSearchResults: listOfIds.length,
                listOfIds: listOfIds,
            }),
        );
    }, [data, dispatch, dataWithoutUser, userId]);

    console.log(JSON.stringify(data));

    if (data && listOfExpanded.length == data.length && userId) {
        const AllSearchResults = () =>
            data.map((searchResult: any) => (
                <>
                    <SearchResult
                        key={searchResult.id}
                        id={searchResult.id}
                        searchResult={searchResult}
                    />
                </>
            ));
        return <AllSearchResults />;
    } else if (
        !userId &&
        listOfExpanded.length == new Array(dataWithoutUser).length &&
        checkIfTheUserEnterData
    ) {
        return (
            <>
                <SearchResult
                    id={dataWithoutUser.id}
                    searchResult={dataWithoutUser}
                />
            </>
        );
    } else if (!data && !dataWithoutUser) {
        return <h1>There is no Search Results for you</h1>;
    } else {
        return <LoadingPage />;
    }
};

export default DisplaySearchResults;
