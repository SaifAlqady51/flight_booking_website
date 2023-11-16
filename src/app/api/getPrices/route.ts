
import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

/* eslint-disable*/
export async function GET(request: NextRequest) {
    if (process.env.STRIPE_SECRET_KEY) {
        const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
		const prices = await stripe.prices.list({active:true});

        return NextResponse.json(prices.data.reverse());
    }

    return NextResponse.json({ message: 'cannot find your stripe data' });
}
