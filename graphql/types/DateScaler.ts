import { Kind } from 'graphql';
import { scalarType } from 'nexus';


export const DateScalar = scalarType({
    name: 'Date',
    asNexusMethod: 'date',
    description: 'Date custom scalar type',
    parseValue(value: any) {
        return new Date(value);
    },
    serialize(value: any) {
        return value.getTime();
    },
    parseLiteral(ast) {
        if (ast.kind === Kind.INT) {
            return new Date(ast.value);
        }
        return null;
    },
});
