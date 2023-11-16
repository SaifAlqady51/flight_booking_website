'use client';
import { useAppSelector } from '@/redux/store';
import Hero from '@components/Home/Hero/Hero';
import { Container } from '@/styles/HomeStyles/HomeContainer';
import HeroImage from '@components/Home/Hero/HeroImage';
import Messages from '@components/Home/Content/Messages';
import { FlightSearchForm } from '@components/Home/Content/SearchForm/FlightSearchForm';
import LoadingPage from './components/LoadingPage';
import Alert from './components/Alert';

export default function Home() {
    const { activAlert } = useAppSelector((state) => state.toggleAlert);
    const { isLoading } = useAppSelector((state) => state.loading);
    const { status, message } = useAppSelector(
        (state) => state.checkFlightDate
    );
    let conditionToDisplayAlert = activAlert && !status;

    if (!isLoading) {
        return (
            <>
                {conditionToDisplayAlert && <Alert message={message} />}
                <Container activAlert={conditionToDisplayAlert}>
                    <Hero />
                    <HeroImage />
                    <FlightSearchForm />
                    <Messages />
                </Container>
            </>
        );
    } else {
        return <LoadingPage />;
    }
}
