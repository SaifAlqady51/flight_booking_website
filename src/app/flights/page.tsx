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
import { storeCurrentUserId } from '@/redux/features/userId-slice';
import { getUserId } from '@/utils/externalAPI/getUserId';
import DisplaySearchResults from '../components/Flights/DisplaySearchResults';
import { pushSearchResult } from '@/redux/features/expandFlightCard-slice';
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
	const {isLoading}  = useAppSelector((state) => state.loading)

    useEffect(() => {
        async function fetchUserId() {
            const currentUserId = await getUserId();
            // store useId in redux userId state
            dispatch(storeCurrentUserId(currentUserId));
        }
        fetchUserId();
    }, [dispatch]);

    // get searchResult query from graphql
    const { loading, error, data } = useQuery(getSearchResultsForCurrentUser, {
        variables: { userId: userId },
    });


    if (error) {
        console.error(error);
    }
    // if loading equlas true display loading screen
    if (loading || isLoading) {
        return <LoadingPage />;
        // if loading equals flase dispaly All SearchResult if exist
    } else {
        return <DisplaySearchResults data={data} />;
    }
};

export default Page;
