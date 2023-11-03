'use client';
import { FlightStopsLine } from '@/app/components/Flights/FlightStopsLine';

const page = ({flightData}:{flightData:any}) => {
    return <FlightStopsLine  flightData={flightData}/>;
};

export default page;
