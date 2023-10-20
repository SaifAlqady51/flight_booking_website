'use client';
import { useEffect } from 'react';
import { getUserId } from '@/utils/externalAPI/getUserId';
import { useDispatch } from 'react-redux';
import { AppDispatch, useAppSelector } from '@/redux/store';
import { storeCurrentUserId } from '@/redux/features/userId-slice';

import Hero from '@components/Home/Hero/Hero';
import { Container } from '@/styles/HomeStyles/HomeContainer';
import HeroImage from '@components/Home/Hero/HeroImage';
import Messages from '@components/Home/Content/Messages';
import { FlightSearchForm } from '@components/Home/Content/SearchForm/FlightSearchForm';
import LoadingPage from './components/LoadingPage';

export default function Home() {
    const { isLoading } = useAppSelector((state) => state.loading);

    if (isLoading) {
        return <LoadingPage />;
    } else {
        return (
            <>
                <Container>
                    <Hero />
                    <HeroImage />
                    <FlightSearchForm />
                    <Messages />
                </Container>
            </>
        );
    }
}
