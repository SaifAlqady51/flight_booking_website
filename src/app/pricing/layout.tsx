import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
    title: 'Tayara | Pricing Page',
    description: 'flight Booking website',
};

export default function layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
