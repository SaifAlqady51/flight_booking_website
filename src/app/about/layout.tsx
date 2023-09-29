'use client';
import { Container } from '@/styles/HomeStyles/HomeContainer';
import { RouteChangeProvider } from 'nextjs13-router-events';

export default function layout({ children }: { children: React.ReactNode }) {
    return (
        <Container>
            <RouteChangeProvider>{children}</RouteChangeProvider>
        </Container>
    );
}
