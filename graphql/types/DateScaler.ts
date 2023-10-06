import { GraphQLScalarType, Kind } from 'graphql';
import {scalarType} from 'nexus';
import { decorateType } from 'nexus';
import {GraphQLDate} from 'graphql-scalars';
// export const dateScalar =  scalarType({
//     name: 'Date',

//     description: 'Date custom scalar type',

//     serialize(value) {
//         if (value instanceof Date) {
//             return value.getTime(); // Convert outgoing Date to integer for JSON
//         }

//         throw Error('GraphQL Date Scalar serializer expected a `Date` object');
//     },

//     parseValue(value) {
//         if (typeof value === 'number') {
//             return new Date(value); // Convert incoming integer to Date
//         }

//         throw new Error('GraphQL Date Scalar parser expected a `number`');
//     },

//     pardseLiteral(ast) {
//         if (ast.kind === Kind.INT) {
//             // Convert hard-coded AST string to integer and then to Date

//             return new Date(parseInt(ast.value, 10));
//         }

//         // Invalid hard-coded value (not an integer)

//         return null;
//     },
// });
//
export const DateScalar = scalarType({
  name: 'Date',
  asNexusMethod: 'date',
  description: 'Date custom scalar type',
  parseValue(value:any) {
    return new Date(value)
  },
  serialize(value:any) {
    return value.getTime()
  },
  parseLiteral(ast) {
    if (ast.kind === Kind.INT) {
      return new Date(ast.value)
    }
    return null
  },
})
// export const GQLDate = decorateType(GraphQLDate, {
//   rootTyping: 'Date',
//   asNexusMethod: 'date',
// })
