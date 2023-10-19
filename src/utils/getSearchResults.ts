import { gql } from '@apollo/client';

export const getSearchResults = gql`
    query Query($userId: String!) {
        getSearchResultsQuery {
            id
            location
            distination
            flightDate
            numberOfAdults
            travelClass
            flights
        }
    }
`;
