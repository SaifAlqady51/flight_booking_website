import { extendType, nonNull, objectType, stringArg, arg } from 'nexus';
import { User } from './User';

export const SearchResult = objectType({
    name: 'SearchResult',
    definition(t) {
        t.string('id');
        t.field('location', { type: 'JSON' });
        t.field('distination', { type: 'JSON' });
        t.string('flightDate');
        t.string('numberOfAdults');
        t.string('travelClass');
        t.field('flights', { type: 'JSON' });
        t.field('logos', { type: 'JSON' });
        t.field('user', {
            type: User,
            resolve(parent: any, _args, ctx) {
                return ctx.prisma.searchResult
                    .findUnique({
                        where: { id: parent.id },
                    })
                    .user();
            },
        });
        t.string('userId');
    },
});

export const SearchResultQuery = extendType({
    type: 'Query',
    definition(t) {
        t.nonNull.list.field('getSearchResultsForSpecificUser', {
            type: SearchResult,
            args: {
                userId: nonNull(stringArg()),
            },
            resolve(_parent, args, ctx) {
                return ctx.prisma.searchResult.findMany({
                    where: { userId: args.userId },
                });
            },
        });
    },
});

export const SearchResultMutation = extendType({
    type: 'Mutation',
    definition(t) {
        t.nonNull.field('createSearchResult', {
            type: SearchResult,
            args: {
                location: arg({
                    type: 'JSON',
                }),

                distination: arg({
                    type: 'JSON',
                }),
                flightDate: nonNull(stringArg()),
                numberOfAdults: nonNull(stringArg()),
                travelClass: nonNull(stringArg()),
                flights: arg({
                    type: 'JSON',
                }),
                logos: arg({
                    type: 'JSON',
                }),
                userId: nonNull(stringArg()),
                user: arg({
                    type: 'UserInputType',
                }),
            },
            async resolve(_root, args, ctx) {
                return await ctx.prisma.searchResult.create({
                    data: {
                        location: args.location,
                        distination: args.distination,
                        flightDate: args.flightDate,
                        numberOfAdults: args.numberOfAdults,
                        travelClass: args.travelClass,
                        flights: args.flights,
                        logos: args.logos,
                        user: {
                            connect: { id: args.userId || undefined },
                        },
                    },
                });
            },
        });

        t.nonNull.field('deleteAllSearchResult', {
            type: SearchResult,
            args: {
                userId: nonNull(stringArg()),
            },
            async resolve(_root: any, args, ctx) {
                return await ctx.prisma.searchResult.deleteMany({
                    where: { userId: args.userId },
                });
            },
        });

        t.nonNull.field('deletSingleSearchResult', {
            type: SearchResult,
            args: {
                id: nonNull(stringArg()),
            },
            async resolve(_root, args, ctx) {
                return await ctx.prisma.searchResult.delete({
                    where: { id: args.id },
                });
            },
        });
    },
});
