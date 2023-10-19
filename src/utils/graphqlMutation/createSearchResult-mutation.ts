import { gql } from '@apollo/client';

export const CreateSearchResult = gql`
    mutation Mutation(
        $location: JSON
        $distination: JSON
        $flightDate: String!
        $numberOfAdults: String!
        $travelClass: String!
        $flights: JSON
        $userId: String!
    ) {
        createSearchResult(
            location: $location
            distination: $distination
            flightDate: $flightDate
            numberOfAdults: $numberOfAdults
            travelClass: $travelClass
            flights: $flights
            userId: $userId
        ) {
            id
            location
            distination
            flightDate
            numberOfAdults
            travelClass
            flights
            userId
        }
    }
`;
