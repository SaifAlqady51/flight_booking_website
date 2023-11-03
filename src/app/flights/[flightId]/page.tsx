'use client';
import { FlightStopsLine } from '@/app/components/Flights/FlightStopsLine';
import {FlightType} from '@/types/flight-types';

const Page = ({flightData}:{flightData:FlightType}) => {
    return <FlightStopsLine  flightData={flightData}/>;
};

export default Page;
