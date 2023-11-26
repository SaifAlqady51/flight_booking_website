'use client';
import { FC, useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { FlightType } from '@/types/flight-types';
import {
    FlightCardContainer,
    LeftContainer,
    RightContainer,
    FlightCardImage,
    FlightBasicInfo,
    FlightCardButtonsArea,
} from '@styles/FlightStyles/FlightCard.styles';
import { FlightCardText } from '@/styles/Text.styles';
import { MoreButton } from '@/styles/Buttons.styles';
import Skeleton from '@mui/material/Skeleton';

interface FlightCardProps {
    flightData: FlightType;
    id: string;
}

export const FlightCard: FC<FlightCardProps> = ({ flightData, id }) => {
    const [img, setImg] = useState('');

    useEffect(() => {
        //importing ailines logos from logo api
        async function fetchData() {
            const response = await axios.get(
                `https://logo-api-pi.vercel.app/api?filename=${flightData.validatingAirlineCodes[0]}`,
                { headers: { 'Access-Control-Allow-Origin': '*' } },
            );
            setImg(response.data.img);
        }
        fetchData();
    }, [flightData]);

    const router = useRouter();

    const handleMoreButton = () => {
        router.push(`flights/${flightData.id}`);
        // dispatch(fetchSeatsMap(flightData));
    };
    return (
        <FlightCardContainer>
            <LeftContainer>
                {img ? (
                    <FlightCardImage src={img} alt='' />
                ) : (
                    <Skeleton
                        variant='rectangular'
						sx={{ ml: 2}}
                        width={'80%'}
                        height={'80%'}
                    />
                )}
            </LeftContainer>

            <RightContainer>
                <FlightBasicInfo>
                    <FlightCardText>
                        Date : {flightData.lastTicketingDate}
                    </FlightCardText>
                    <FlightCardText>
                        Price : {flightData.price.total}$
                    </FlightCardText>

                    <FlightCardText>
                        Stops : {flightData.itineraries[0].segments.length - 1}
                    </FlightCardText>
                </FlightBasicInfo>

                <FlightCardButtonsArea>
                    <MoreButton
                        href={{
                            pathname: `/flights/${id}`,
                            query: { object: JSON.stringify(flightData) },
                        }}
                        onClick={handleMoreButton}
                    >
                        More
                    </MoreButton>
                </FlightCardButtonsArea>
            </RightContainer>
        </FlightCardContainer>
    );
};
