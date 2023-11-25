'use client';

import { Container } from '@/styles/HomeStyles/HomeContainer';
import { useQuery } from '@apollo/client';
import { getSearchResultsForCurrentUser } from '@/utils/graphqlQuery/getSearchResults-query';

const Page = () => {
    // const { loading, error, data } = useQuery(getSearchResultsForCurrentUser);

	// console.log(data.iteneries.segmants[0].iatacode)

    return <Container></Container>;
};

export default Page;
