import { FC } from 'react';
import { Metadata } from 'next';
interface pageProps {}

export const metadata: Metadata = {
    title: 'Tayara | About Page',
    description: 'flight Booking website',
};

const page: FC<pageProps> = () => {
    console.log('about page');
    return (
        <>
            <h1>About Page</h1>
        </>
    );
};

export default page;
