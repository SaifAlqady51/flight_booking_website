'use client';

import { Container } from '@/styles/HomeStyles/HomeContainer';
import { SeatsContainer } from '@/styles/FlightStyles/Seats.styles';
import {
    StopsLineContainer,
    CityName,
} from '@/styles/FlightDetailedStyles/StopsLine.styles';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState, useMemo } from 'react';
import { getSeatsMap } from '@/utils/externalAPI/amadeus/getSeatsMap';
import { getCityNameFromCityCode } from '@/utils/externalAPI/IATACode/makeIATACode';

const Page = () => {
    // creating state to store seatsMap data
    // eslint-disable-next-line no-use-before-define
    const [seatsMap, setSeatsMap] = useState({});
    const [allVisitedCities, setAllVisitedCities] = useState<String[]>([]);

    // get the data from URL
    const searchParams = useSearchParams();

    // converting URL flight data from string to JSON type
    // using useMemo hook to avoid unnecessary rerenders
    const flightData = useMemo(() => {
        // get the object data from searchParams
        const dataFromURL = searchParams?.get('object');
        const result = dataFromURL ? JSON.parse(dataFromURL) : {};
        return result;
    }, []);

    useEffect(() => {
        async function fetchSeatsMap() {
            const response = await getSeatsMap(flightData);
            setSeatsMap(response.data.data);
        }
        fetchSeatsMap();
    }, [flightData]);

    useEffect(() => {
        async function getIATACode() {
            const departure = await getCityNameFromCityCode(
                flightData.itineraries[0].segments[0].departure.iataCode
            );
            setAllVisitedCities((prevList) => [...prevList, departure]);
            for (let element of flightData.itineraries[0].segments) {
                const cityName = await getCityNameFromCityCode(
                    element.arrival.iataCode
                );
                setAllVisitedCities((prevList) => [...prevList, cityName]);
            }
        }
        getIATACode();
    }, []);
    console.log(allVisitedCities);
    console.log(seatsMap);

    return (
        <Container>
            <StopsLineContainer>
                <CityName>
                    {' '}
                    {flightData.itineraries[0].segments[0].departure.iataCode}
                </CityName>
                {flightData.itineraries[0].segments.map((element: any) => (
                    <CityName key={element.arrival.at}>
                        {element.arrival.iataCode}
                    </CityName>
                ))}
            </StopsLineContainer>

            <SeatsContainer
                $width={'700px'}
                $height={'2400px'}
            ></SeatsContainer>
        </Container>
    );
};

export default Page;
