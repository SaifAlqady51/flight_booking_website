import { NextAuthOptions } from 'next-auth';
import NextAuth from 'next-auth/next';
import GoogleProvider from 'next-auth/providers/google';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import prisma from '@/lib/prisma';

function googleCredential() {
	const clientId = process.env.GOOGLE_CLIENT_ID;
	const clientSecret = process.env.GOOGLE_CLIENT_SECRET;

	if (!clientId || clientId.length === 0) {
		throw new Error('no clientId for google provider set');
	}

	if (!clientSecret || clientSecret.length === 0) {
		throw new Error('no clientSecret for google provider set');
	}

	return { clientId, clientSecret };
}

const authOptions: NextAuthOptions = {
	adapter: PrismaAdapter(prisma),
	session: {
		strategy: 'jwt',
	},
	providers: [
		GoogleProvider({
			clientId: googleCredential().clientId,
			clientSecret: googleCredential().clientSecret,
		}),
	],

	secret: process.env.NEXTAUTH_SECRET,
};
const authHandler = NextAuth(authOptions);
export default async function handler(...params: any[]) {
  await authHandler(...params);
}
