'use client';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import { FC, useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { getSeatsMap } from '@server/utils/getSeatsMap';
import { FlightType } from '@/types/flight-types';
import { add } from '@redux/features/airlineLogo-slice';
import {
    FlightCardContainer,
    LeftContainer,
    RightContainer,
    FlightCardImage,
    FlightBasicInfo,
    FlightCardButtonsArea,
} from '@styles/FlightStyles/FlightCard.styles';
import { FlightCardText } from '@/styles/Text.styles';
import { AppDispatch, useAppSelector } from '@/redux/store';
import { fetchSeatsMap } from '@/redux/features/seatsMap-slice';
import { MoreButton } from '@/styles/Buttons.styles';
interface FlightCardProps {
    flightData: FlightType;
}

export const FlightCard: FC<FlightCardProps> = ({ flightData }) => {
    const LogoImagesList = useAppSelector((state) => state.airlineLogo);

    const [img, setImg] = useState('');

    const dispatch = useDispatch<AppDispatch>();

    //useEffect(() => {
    //    //importing ailines logos from logo api
    //    async function fetchData() {
    //        const response = await axios.get(
    //            `https://logo-api-pi.vercel.app/api?filename=${flightData.validatingAirlineCodes[0]}`,
    //            { headers: { 'Access-Control-Allow-Origin': '*' } },
    //        );

    //        dispatch(
    //            add({
    //                name: flightData.validatingAirlineCodes[0],
    //                img: response.data.img,
    //            }),
    //        );
    //        setImg(response.data.img);
    //    }
        // console.log(LogoImagesList.img.length);
        // if (LogoImagesList.img.length < 50) {
        //     console.log('inside if');
        //     fetchData()
        //         .then((res) => console.log(res))
        //         .catch((error) => console.log(error));
        // } else {
        //     console.log('inside else');
        //     console.log(flightData.id);
        //     const findImg = LogoImagesList.img.find(
        //         (singleImg: any) =>
        //             singleImg.name === flightData.validatingAirlineCodes[0],
        //     );
        //     console.log(findImg.name);
        //     setImg(findImg.img);
        // }
		// fetchData()
    // }, []);

    const router = useRouter();

    const handleMoreButton = () => {
        router.push(`flights/${flightData.id}`);
        dispatch(fetchSeatsMap(flightData));
    };
    return (
        <FlightCardContainer>
            <LeftContainer>
                <FlightCardImage src={img} alt='' />
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
                    <MoreButton onClick={handleMoreButton}>More</MoreButton>
                </FlightCardButtonsArea>
            </RightContainer>
        </FlightCardContainer>
    );
};
