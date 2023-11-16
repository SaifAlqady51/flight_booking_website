import { gql } from '@apollo/client';

export const UpdateUserSubscription = gql`
    mutation Mutation($userId: String!, $subscription: String!) {
        updateUserSubscription(userId: $userId, subscription: $subscription) {
            id
            subscription
        }
    }
`;
