'use client';

import { Container } from '@/styles/HomeStyles/HomeContainer';
import { SeatsContainer } from '@/styles/FlightStyles/Seats.styles';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState, useMemo } from 'react';
import { getSeatsMap } from '@/utils/externalAPI/amadeus/getSeatsMap';

const Page = () => {

	// creating state to store seatsMap data
    const [seatsMap, setSeatsMap] = useState({});

	// get the data from URL
    const searchParams = useSearchParams();

	// converting URL flight data from string to JSON type
	// using useMemo hook to avoid unnecessary rerenders
    const flightData = useMemo(() => {
		// get the object data from searchParams
        const dataFromURL =  searchParams?.get('object');
		const result = dataFromURL ? JSON.parse(dataFromURL) : {};
		return result
    }, []);

    console.log(flightData);

    useEffect(() => {
        async function fetchSeatsMap() {
            const response = await getSeatsMap(flightData);
            setSeatsMap(response.data.data);
        }
        fetchSeatsMap();
    }, [flightData]);
    console.log(seatsMap);

    return (
        <Container>
            <SeatsContainer
                $width={'700px'}
                $height={'2400px'}
            ></SeatsContainer>
        </Container>
    );
};

export default Page;
