import { NextAuthOptions } from 'next-auth';
import NextAuth from 'next-auth/next';
import GoogleProvider from 'next-auth/providers/google';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import prisma from '../../../lib/prisma';

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

export const authOptions: NextAuthOptions = {
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

    callbacks: {
        async jwt({ token,user}) {
            const dbUser = await prisma.user.findFirst({
                where: {
                    email: token.email,
                },
            });

            if (!dbUser) {
                token.id = user!.id;
				token.subscription = "Free"
                return token;
            }

            return {
                id: dbUser.id,
                name: dbUser.name,
                email: dbUser.email,
                picture: dbUser.image,
                subscription: dbUser.subscription,
            };
        },

        async session({ session, token }) {
            if (token && session?.user) {
                session.user.id = token.id;
                session.user.name = token.name;
                session.user.email = token.email;
                session.user.image = token.picture;
                session.user.subscription = token.subscription;
            }
            return session;
        },
    },
};

const handler = NextAuth(authOptions);
export default handler;
export { handler as GET, handler as POST };
