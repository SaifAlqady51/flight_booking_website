import { PrismaClient } from "@prisma/client";
import prisma from '@lib/prisma';
export type Context = {
	prisma:PrismaClient
	req:any 
	
}

/* eslint-disable */
export async function createContext(req:any,_res:any): Promise<Context> {
	return{
		req,
		prisma,
	}
}
