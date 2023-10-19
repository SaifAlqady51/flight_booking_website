import { getServerSession } from 'next-auth';
import { NextResponse } from 'next/server';
import { authOptions } from '@/pages/api/auth/[...nextauth]';

export async function GET(_req: Request) {
    const session = await getServerSession(authOptions);
    // check if user signed up
    if (session) {
        return NextResponse.json(session?.user);
    } else {
        return NextResponse.json('');
    }
}
