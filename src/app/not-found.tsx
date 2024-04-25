'use client';
import { Container } from '@/styles/HomeStyles/HomeContainer';
import {
    NotFoundHeader,
    NotFoundMessage,
} from '@/styles/NotFoundStyles/NotFound.styles';
import Link from 'next/link';

const NotFound = () => {
    return (
        <Container>
            <NotFoundHeader>There was a porblem</NotFoundHeader>
            <NotFoundMessage>
                we could not find the page you were looking for
            </NotFoundMessage>
            <h1>
                got to{' '}
                <Link href={`${process.env.NEXTAUTH_URL}`}>home page</Link>{' '}
            </h1>
        </Container>
    );
};

export default NotFound;
