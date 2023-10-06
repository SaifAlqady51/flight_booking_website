import { PrismaClient } from "@prisma/client";
import prisma from '@lib/prisma';
import { NextRequest } from "next/server";
export type Context = {
	prisma:PrismaClient
	req:any 
	
}

export async function createContext(req:any,res:any): Promise<Context> {
	return{
		req,
		prisma,
	}
}
