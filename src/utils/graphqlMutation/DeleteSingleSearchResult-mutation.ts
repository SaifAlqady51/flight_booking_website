import { gql } from '@apollo/client';

export const DeleteSingleSearchResult = gql`
    mutation Mutation($id: String!) {
        deletSingleSearchResult(id: $id) {
			id 
        }
    }
`;
