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
import { Container } from '@/styles/HomeStyles/HomeContainer';
import Alert from '../components/Alert';
interface pageProps {}

const Page: FC<pageProps> = ({}) => {
    // importing active alert state from redux that return true if there is an Alert
    const { activeAlert } = useAppSelector((state) => state.toggleAlert);

    // importing status and message states from check flight date status returns false if there is an error with flight date and message returns that error if exists
    const { status, message } = useAppSelector(
        (state) => state.checkFlightDate,
    );

    // the condition that returns an alert
    const conditionToDisplayAlert = activeAlert && !status;

    // import userId slice from redux
    const { userId } = useAppSelector((state) => state.userIdSlice);
    const { isLoading } = useAppSelector((state) => state.loading);

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
    }
    // if loading equals flase dispaly All SearchResult if exist
    else {
        return (
            <>
                {conditionToDisplayAlert && <Alert message={message} />}
                <Container activeAlert={conditionToDisplayAlert}>
                    <FlightSearchForm />
                    <DisplaySearchResults data={data} />
                </Container>
            </>
        );
    }
};

export default Page;
