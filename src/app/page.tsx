'use client';
import Hero from '@components/Home/Hero/Hero';
import { Container } from '@/styles/HomeStyles/HomeContainer';
import HeroImage from '@components/Home/Hero/HeroImage';
import Messages from '@components/Home/Content/Messages';
import { FlightSearchForm } from '@components/Home/Content/SearchForm/FlightSearchForm';
import { gql, useQuery } from '@apollo/client';
import cities from 'cities-list'

export default function Home() {
	// console.log('all cities' + JSON.stringify(cities))
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
