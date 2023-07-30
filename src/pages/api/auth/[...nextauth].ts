import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import GoogleProvider from 'next-auth/providers/google'


function googleCredential(){
    const clientId = process.env.GOOGLE_CLIENT_ID;
    const clientSecret = process.env.GOOGLE_CLIENT_SECRET;

    if (!clientId || clientId.length === 0) {
        throw new Error("no clientId for google provider set");
    }

    if (!clientSecret || clientSecret.length === 0) {
        throw new Error("no clientSecret for google provider set");
    }

    return { clientId, clientSecret };
}


export default NextAuth({
    providers:[
        GoogleProvider({
            clientId: googleCredential().clientId,
            clientSecret: googleCredential().clientSecret,
        })
    ],

    secret: process.env.NEXTAUTH_SECRET,
})


