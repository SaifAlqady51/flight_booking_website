import { ApolloClient, InMemoryCache } from '@apollo/client';



const apolloClient = new ApolloClient({
    uri: 'https://flight-booking-website-sandy.vercel.app/api/graphql',
    cache: new InMemoryCache(),
});

export default apolloClient;
