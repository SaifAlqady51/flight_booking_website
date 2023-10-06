import { getServerSession } from 'next-auth';
import { NextResponse } from 'next/server';
import { authOptions } from '@/pages/api/auth/[...nextauth]';

export async function GET(_req: Request) {
    const session = await getServerSession(authOptions);
    return NextResponse.json(session?.user?.id);
}
