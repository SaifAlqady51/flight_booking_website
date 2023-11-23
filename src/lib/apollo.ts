import { ApolloClient, InMemoryCache } from '@apollo/client';

const URL = process.env.NEXTAUTH_URL;

const apolloClient = new ApolloClient({
    uri: `${URL}/api/graphql`,
    cache: new InMemoryCache(),
});

export default apolloClient;
