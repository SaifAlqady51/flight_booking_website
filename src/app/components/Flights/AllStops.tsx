import { useState, useEffect } from 'react';
import axios from 'axios';
import { SegmentType } from '@/types/flight-types';
import airPlane from '@public/static/images/airplane.png';
import {
    CityName,
    AirPlaneImage,
} from '@styles/FlightDetailedStyles/StopsLine.styles';

interface AllStopsProps {
    stops: SegmentType[];
}
const AllStops = ({ stops }: AllStopsProps) => {
    const lastArrivalIata = stops[stops.length - 1].arrival.iataCode;
    const [lastArrival, setLastArrival] = useState();

    useEffect(() => {
        axios
            .get(
                `https://airlabs.co/api/v9/airports?iata_code=${lastArrivalIata}&api_key=28294636-8167-4a93-a9cc-665f743e9160`,
            )
            .then((response: any) => setLastArrival(response.data.response))
            .catch((error) => console.log(error));
    });

    console.log(lastArrival);
    return (
        <>
            {stops.map((stop) => (
                <>
                    <CityName key={stop.id}>{stop.departure.iataCode}</CityName>
                    <AirPlaneImage src={airPlane} alt='' />
                </>
            ))}
            <CityName>{lastArrival}</CityName>
        </>
    );
};

export default AllStops;
