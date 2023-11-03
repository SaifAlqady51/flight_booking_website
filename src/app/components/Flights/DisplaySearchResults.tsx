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
    // console.log('first SearchResult : '  + JSON.stringify(data.getSearchResultsForSpecificUser[0]))
    //
    const { userId } = useAppSelector((state) => state.userIdSlice);
    console.log('data : ' + data ? 'there is no data' : 'there is data');
    console.log('data without user : ' + JSON.stringify(dataWithoutUser));

    const dispatch = useDispatch<AppDispatch>();
    const { listOfExpanded } = useAppSelector(
        (state) => state.expandFlightCards,
    );

    // console.log(
    //     'data : ' + JSON.stringify(data),
    // );

    useEffect(() => {
        const getIdsForSearchResults = () => {
            let listOfIds: string[] = [];
			let searchResults = userId? data : dataWithoutUser;
            console.log('search Result : ' + JSON.stringify(searchResults));
            for (let searchResult of searchResults) {
                listOfIds.push(searchResult.id);
            }
            return listOfIds;
        };
        dispatch(resetSearchResults());
        const listOfIds = getIdsForSearchResults();
        console.log('List of Ids' + getIdsForSearchResults());
        dispatch(
            pushSearchResult({
                numberOfSearchResults: listOfIds.length,
                listOfIds: listOfIds,
            }),
        );
    }, [data,dispatch, dataWithoutUser, userId]);
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
        listOfExpanded.length == new Array(dataWithoutUser).length
    ) {
        return (
            <>
                <SearchResult
                    id={dataWithoutUser.id}
                    searchResult={dataWithoutUser}
                />
            </>
        );
    } else if(!data && !dataWithoutUser){
        return <h1>There is no Search Results for you</h1>;
    }
	else{
		return (
			<LoadingPage />
		)
	}
};

export default DisplaySearchResults;
