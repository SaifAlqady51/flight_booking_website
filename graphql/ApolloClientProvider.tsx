'use client'
import apolloClient from "@/lib/apollo";
import {ReactNode} from "react";
import { ApolloProvider } from "@apollo/client";

export const ApolloClientProvider = ({children}:{children:ReactNode}) => {
	return(
		<ApolloProvider client={apolloClient}>
			{children}
		</ApolloProvider>
	)
}
