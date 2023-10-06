import { gql, useMutation } from '@apollo/client';

export const CreateNewSearchResult = gql`
    mutation Mutation(
        $from: String!
        $to: String!
        $flightDate: String!
        $numberOfAdults: String!
        $travelClass: String!
        $userId: String!
    ) {
        createSearchResult(
            from: $from
            to: $to
            flightDate: $flightDate
            numberOfAdults: $numberOfAdults
            travelClass: $travelClass
            userId: $userId
        ) {
            id
            from
            to
            flightDate
            numberOfAdults
            travelClass
            userId
        }
    }
`;
