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
        t.string('image');
        t.string('subscription');
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
        t.string('image');
        t.string('subscription');
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
            resolve(_parent, args, ctx) {
                return ctx.prisma.user.findUnique({
                    where: { id: args.id },
                });
            },
        });
    },
});

export const UserMutation = extendType({
    type: 'Mutation',
    definition(t) {
        t.nonNull.field('deleteAllUsers', {
            type: 'User',
            args: {
                userId: nonNull(stringArg()),
            },
            async resolve(_parent, args, ctx) {
                return await ctx.prisma.user.deleteMany({
                    where: { id: args.userId },
                });
            },
        });
        t.nonNull.field('updateUserSubscription', {
            type: 'User',
            args: {
                userId: nonNull(stringArg()),
                subscription: nonNull(stringArg()),
            },
            async resolve(_parent, args, ctx) {
                return await ctx.prisma.user.updateMany({
                    where: { id : args.userId },
                    data: {
                        subscription: args.subscription,
                    },
                });
            },
        });
    },
});
