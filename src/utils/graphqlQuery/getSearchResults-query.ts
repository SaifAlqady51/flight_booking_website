import { gql } from '@apollo/client';

export const getSearchResultsForCurrentUser = gql`
    query Query($userId: String!) {
        getSearchResultsForSpecificUser(userId: $userId) {
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
