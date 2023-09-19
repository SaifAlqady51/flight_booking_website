"use client";
import dynamic from 'next/dynamic'
import { Suspense } from "react";
import { FC, useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { getSeatsMap } from "@server/utils/getSeatsMap";
import { FlightType } from "@/types/flight-types";
import {
	FlightCardContainer,
	LeftContainer,
	RightContainer,
	FlightCardImage,
	FlightBasicInfo,
	FlightDetailedInfo,
	FlightCardText,
	FlightCardButtonsArea,
} from "@styles/FlightStyles/FlightCard.styles";
import PaperAirplane from "@images/paper-airplane.png";
import { AppDispatch, useAppSelector } from "@/redux/store";
import { fetchSeatsMap } from "@/redux/features/seatsMap-slice";
import { MoreButton } from "@/styles/Buttons.styles";
import { fetchArilineLogo } from "@/redux/features/airlineLogo-slice";

interface FlightCardProps {
	flightData: FlightType;
}

export const FlightCard: FC<FlightCardProps> = ({ flightData }) => {
	const [img, setImg] = useState();


	useEffect(() => {
		async function fetchData() {
			const response = await axios.get(
				`https://logo-api-pi.vercel.app/api?filename=${flightData.validatingAirlineCodes[0]}`,
				{ headers: { "Access-Control-Allow-Origin": "*" } }

			);
			setImg(response.data.img)
		}
		fetchData();
	}, []);

	const dispatch = useDispatch<AppDispatch>();

	const router = useRouter();

	const handleMoreButton = () => {
		router.push(`flights/${flightData.id}`);
		dispatch(fetchSeatsMap(flightData));
	};
	return (
		<FlightCardContainer>
			<LeftContainer>
				<FlightCardImage src={img} alt=''/>
			</LeftContainer>

			<RightContainer>
				<FlightBasicInfo>
					<FlightCardText>
						Date : {flightData.lastTicketingDate}
					</FlightCardText>
					<FlightCardText>
						Price : {flightData.price.total}$
					</FlightCardText>
					<FlightCardText></FlightCardText>
				</FlightBasicInfo>

				<FlightDetailedInfo>
					<FlightCardText>
						Itineraries :{" "}
						{flightData.itineraries[0].segments.length}
					</FlightCardText>
				</FlightDetailedInfo>
				<FlightCardButtonsArea>
					<MoreButton onClick={handleMoreButton}>More</MoreButton>
				</FlightCardButtonsArea>
			</RightContainer>
		</FlightCardContainer>
	);
};
