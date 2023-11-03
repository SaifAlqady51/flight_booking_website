'use client';
import { FlightStopsLine } from '@/app/components/Flights/FlightStopsLine';

const Page = ({flightData}:{flightData:any}) => {
    return <FlightStopsLine  flightData={flightData}/>;
};

export default Page;
