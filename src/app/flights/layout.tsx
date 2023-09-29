'use client';
import { Container } from '@/styles/HomeStyles/HomeContainer';

export default function layout({ children }: { children: React.ReactNode }) {
    return <Container>{children}</Container>;
}
