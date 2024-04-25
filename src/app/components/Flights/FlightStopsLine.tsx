'use client';
import { FC } from 'react';
import { StopsLineContainer } from '@styles/FlightDetailedStyles/StopsLine.styles';
import { useSearchParams } from 'next/navigation';

interface FlightStopsLineProps {
    flightData: any;
}

export const FlightStopsLine: FC<FlightStopsLineProps> = () => {
    const searchParams = useSearchParams();
    /* eslint-disable */
    const object = searchParams?.get('object');

    return (
        <StopsLineContainer>
            {/* <AllStops stops={flight.itineraries[0].segmant} /> */}
        </StopsLineContainer>
    );
};
