'use client';
import { useEffect, useState } from 'react';
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
import Alert from './components/Alert';
export default function Home() {
	  
	const {activeAlert} = useAppSelector((state) => state.toggleAlert)
      const { isLoading } = useAppSelector((state) => state.loading);
      const { status, message } = useAppSelector(
            (state) => state.checkFlightDate,
      );
      const conditionToDisplayAlert = activeAlert && !status;
      if (isLoading) {
            return <LoadingPage />;
      } else {
            return (
                  <>
                        {conditionToDisplayAlert && (
                              <Alert
                                    message={message}
                              />
                        )}
                        <Container activeAlert={conditionToDisplayAlert}>
                              <Hero />
                              <HeroImage />
                              <FlightSearchForm />
                              <Messages />
                        </Container>
                  </>
            );
      }
}
