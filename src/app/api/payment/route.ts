import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

/* eslint-disable*/
export async function POST(request: NextRequest) {
    if (process.env.STRIPE_SECRET_KEY) {
        const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
        let data = await request.json();
        let priceId = data.priceId;
        const session = await stripe.checkout.sessions.create({
            line_items: [
                {
                    quantity: 1,
                    price: priceId,
                },
            ],
            mode: 'subscription',
            success_url: `${process.env.URL}/payment`,
            cancel_url: `${process.env.URL}/pricing`,
        });

        console.log(session.url);
        return NextResponse.json(session.url);
    }

    return NextResponse.json({ message: 'cannot find your stripe data' });
}
