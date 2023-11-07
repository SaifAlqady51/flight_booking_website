import {
    extendType,
    inputObjectType,
    nonNull,
    objectType,
    stringArg,
} from 'nexus';
import { Account } from './Account';
import { SearchResult } from './SearchResult';
import { Session } from './Session';

export const User = objectType({
    name: 'User',
    definition(t) {
        t.string('id');
        t.string('name');
        t.string('email');
        t.list.field('sessions', {
            type: Session,
            resolve(parent: any, _args, ctx) {
                return ctx.prisma.user
                    .findUnique({
                        where: { id: parent.id },
                    })
                    .sessions();
            },
        });
        t.list.field('accounts', {
            type: Account,
            resolve(parent: any, _args, ctx) {
                return ctx.prisma.user
                    .findUnique({
                        where: { id: parent.id },
                    })
                    .accounts();
            },
        });
        t.list.field('searchResults', {
            type: SearchResult,
            resolve(parent: any, _args, ctx) {
                return ctx.prisma.user
                    .findUnique({
                        where: { id: parent.id },
                    })
                    .searchResults();
            },
        });
    },
});

export const UserInputType = inputObjectType({
    name: 'UserInputType',
    definition(t) {
        t.string('id');
        t.string('name');
        t.string('email');
    },
});

export const UserQuery = extendType({
    type: 'Query',
    // get all users
    definition(t) {
        t.nonNull.list.field('users', {
            type: 'User',
            resolve(_parent, _args, ctx) {
                return ctx.prisma.user.findMany();
            },
        });
        t.nonNull.field('userById', {
            type: 'User',
            args: {
                id: nonNull(stringArg()),
            },
            //@ts-ignore
            resolve(_parent, args, ctx) {
                return ctx.prisma.user.findUnique({
                    where: { id: args.id },
                });
            },
        });
    },
});
