import { ApolloServer } from 'apollo-server-micro';
import { schema } from '../../../graphql/schema';
// import { resolvercs } from '../../../graphql/resolvers';
import { createContext } from '@graphql/context';
// @ts-ignore
import Cors from 'micro-cors';
const apolloServer = new ApolloServer({
    schema,
    context: createContext,
});
// @ts-ignore
const cors = Cors();
// start apolloServer

const startServer = apolloServer.start();

export default cors(async function handler(req: any, res: any) {
    if (req.method === 'OPTIONS') {
        res.end();
        return false;
    }
    await startServer;

    await apolloServer.createHandler({
        path: '/api/graphql',
    })(req, res);
});

export const config = {
    api: {
        bodyParser: false,
    },
};
