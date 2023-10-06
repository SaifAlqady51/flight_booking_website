import {
    extendType,
    nonNull,
    objectType,
    stringArg,
    inputObjectType,
    arg,
} from 'nexus';
import { User, UserInputType } from './User';

export const SearchResult = objectType({
    name: 'SearchResult',
    definition(t) {
        t.string('id');
        t.string('from');
        t.string('to');
        t.string('flightDate');
        t.string('numberOfAdults');
        t.string('travelClass');
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
        t.nonNull.list.field('searchResults', {
            type: 'SearchResult',
            resolve(_parent, _args, ctx) {
                return ctx.prisma.searchResult.findMany();
            },
        });
    },
});

export const SearchResultMutation = extendType({
	type: "Mutation",
	definition(t){
		t.nonNull.field('createSearchResult', {
			type: SearchResult,
			args:{
				from: nonNull(stringArg()),
				to: nonNull(stringArg()),
				flightDate: nonNull(stringArg()),
				numberOfAdults: nonNull(stringArg()),
				travelClass: nonNull(stringArg()),
				userId: nonNull(stringArg()),
				user: arg({
					type: 'UserInputType'
				}),
			},
			async resolve(_root,args,ctx){
				return await ctx.prisma.searchResult.create({
					data:{
						from: args.from,
						to: args.to,
						flightDate: args.flightDate,
						numberOfAdults: args.numberOfAdults,
						travelClass: args.travelClass,
						user: {
							connect: {id: args.userId || undefined}
						},

					}
				})
			}
		})
	}
})
