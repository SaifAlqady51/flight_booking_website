import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

/* eslint-disable*/
export async function GET(request: NextRequest) {
    const { searchParams } = new URL(request.url);
    if (process.env.STRIPE_SECRET_KEY) {
        const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
        const product = await stripe.products.list({
            ids: [`${searchParams.get('id')}`],
        });

        return NextResponse.json(product.data[0]);
    }

    return NextResponse.json({ message: 'cannot find your stripe data' });
}
