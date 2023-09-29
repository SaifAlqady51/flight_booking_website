export const resolvers = {
	Query: {
		users: () => [
			{
				id: 'sjk',
				name: 'test string',
				email: 'test string',
				emailVerified: 'test string',
				image: 'test string',
				createdAt: 'test string',
				updatedAt: 'test string',
			},
		],
	},
};
