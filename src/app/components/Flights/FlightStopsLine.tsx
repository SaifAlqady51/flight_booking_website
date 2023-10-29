'use client';
import { FC } from 'react';
import { usePathname } from 'next/navigation';
import {
    StopsLineContainer,
} from '@styles/FlightDetailedStyles/StopsLine.styles';
import { useAppSelector} from '@/redux/store';
import { FlightType, SegmentType } from '@/types/flight-types';
import AllStops from './AllStops';

export const FlightStopsLine: FC = () => {
    // get the flights data that returned from the api
    const { flights } = useAppSelector((state) => state.flightData);

    // get the current pathname
    const pathname = usePathname();

    // make a vairable id that takes the id of the page
    const id: number = parseInt(pathname?.slice(-1) as string);

    // get the specific flight with the id from
    const flightById: FlightType = flights[id - 1];

    // get the stops list form that flight
    const stops: SegmentType[] = flightById.itineraries[0].segments;

    // make a vairable takes the last arirval from stops list

    return (
        <StopsLineContainer>
            <AllStops stops={stops} />
        </StopsLineContainer>
    );
};
