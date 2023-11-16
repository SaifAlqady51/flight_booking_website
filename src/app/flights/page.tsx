'use client';
// react
import { FC } from 'react';

// graphql
import { useQuery } from '@apollo/client';
import { getSearchResultsForCurrentUser } from '@/utils/graphqlQuery/getSearchResults-query';

//redux
import { useAppSelector } from '@/redux/store';
//styles
import LoadingPage from '../../app/components/LoadingPage';
import DisplaySearchResults from '../components/Flights/DisplaySearchResults';
import { FlightSearchForm } from '../components/Home/Content/SearchForm/FlightSearchForm';
import { Container } from '@/styles/HomeStyles/HomeContainer';
import Alert from '../components/Alert';

interface props {}

const Page: FC<props> = () => {
    // importing active alert state from redux that return true if there is an Alert
    const { activAlert } = useAppSelector((state) => state.toggleAlert);

    // importing status and message states from check flight date status returns false if there is an error with flight date and message returns that error if exists
    const { status, message } = useAppSelector(
        (state) => state.checkFlightDate,
    );

    // the condition that returns an alert
    const conditionToDisplayAlert = activAlert && !status;

    // import userId slice from redux
    const { userId } = useAppSelector((state) => state.userIdSlice);
    const { isLoading } = useAppSelector((state) => state.loading);

    // get searchResult query from graphql
    const { loading, error, data } = useQuery(getSearchResultsForCurrentUser, {
        variables: { userId: userId },
    });

    const dataWithoutUser = useAppSelector(
        (state) => state.flightFormInputValues,
    );
    if (error) {
        console.error(error);
    }

    // if loading equlas true display loading screen

    if (loading || isLoading) {
        return <LoadingPage />;
    }
    // data and userId exist or dataWithoutUser.id exist (dataWithoutUser.id only exist if there is no user signed up)
    else if ((data && userId) || dataWithoutUser.id) {
        return (
            <>
                {conditionToDisplayAlert && <Alert message={message} />}
                <Container activAlert={conditionToDisplayAlert}>
                    <FlightSearchForm />
                    <DisplaySearchResults
                        data={data?.getSearchResultsForSpecificUser}
                        dataWithoutUser={dataWithoutUser}
                    />
                </Container>
            </>
        );
    } else {
        return (
            <Container activAlert={conditionToDisplayAlert}>
                <FlightSearchForm />
            </Container>
        );
    }
};

export default Page;
