'use client';
import { useEffect } from 'react';
import { FC } from 'react';
import LoadingPage from '../../app/components/LoadingPage';
// graphql
import { useQuery } from '@apollo/client';
import { getSearchResultsForCurrentUser } from '@/utils/graphqlQuery/getSearchResults-query';

//redux
import { useAppSelector, AppDispatch } from '@/redux/store';
import { useDispatch } from 'react-redux';
import DisplaySearchResults from '../components/Flights/DisplaySearchResults';
import {
    pushSearchResult,
    resetSearchResults,
} from '@/redux/features/expandFlightCard-slice';
import { FlightSearchForm } from '../components/Home/Content/SearchForm/FlightSearchForm';
interface pageProps {}

const Page: FC<pageProps> = ({}) => {
    // dispatch redux
    const dispatch = useDispatch<AppDispatch>();

    // import expanedFlightCards slice from redux
    const { listOfExpanded } = useAppSelector(
        (state) => state.expandFlightCards,
    );

    // import userId slice from redux
    const { userId } = useAppSelector((state) => state.userIdSlice);
    const { isLoading } = useAppSelector((state) => state.loading);

    // get searchResult query from graphql
    const { loading, error, data } = useQuery(getSearchResultsForCurrentUser, {
        variables: { userId: userId },
    });


    // const resetSearchResultsListOfExpanded = () => {
    //     dispatch(resetSearchResults());
    // };

    // const getSearchResultsIds = () => {
    //     const ids = data.getSearchResultsForSpecificUser.map(
    //         (searchResult: any) => searchResult.id,
    //     );
    //     return ids;
    // };
    // useEffect(() => {
    //     resetSearchResultsListOfExpanded();
    //     const createExpanedList = async () => {
    //         dispatch(
    //             pushSearchResult({
    //                 numberOfSearchResults:
    //                     data.getSearchResultsForSpecificUser.length,
    //                 listOfIds: getSearchResultsIds(),
    //             }),
    //         );
    //     };

    // createExpanedList()
    // console.log('length of listOfExpanded : ' + listOfExpanded.length);
    // console.log('length of data : ' + data.getSearchResultsForSpecificUser.length)
    // }, []);

    if (error) {
        console.error(error);
    }

    // if loading equlas true display loading screen

    if (loading || isLoading) {
        return <LoadingPage />;
    }
    // if loading equals flase dispaly All SearchResult if exist
    else{
        return (
            <>
                <FlightSearchForm />
                <DisplaySearchResults data={data} />
            </>
        );
	}
};

export default Page;
