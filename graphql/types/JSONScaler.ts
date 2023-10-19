import { scalarType } from 'nexus';
import { GraphQLJSONObject } from 'graphql-type-json';

export const JSONScaler = scalarType({
    name: 'JSON',
    asNexusMethod: 'json',
    serialize: GraphQLJSONObject.serialize,
    parseValue: GraphQLJSONObject.parseValue,
    parseLiteral: GraphQLJSONObject.parseLiteral,
});
