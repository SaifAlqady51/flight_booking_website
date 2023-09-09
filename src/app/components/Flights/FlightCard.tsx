import { FC } from "react";
import {
	FlightCardContainer,
	LeftContainer,
	RightContainer,
	FlightCardImage,
	FlightBasicInfo,
	FlightDetailedInfo,
	FlightCardText,
} from "@styles/FlightStyles/FlightCard.styles";
import PaperAirplane from "@images/paper-airplane.png";
import { LoadingFlightCard } from "./LoadingFlightCard";
import { useDispatch } from "react-redux";
import { AppDispatch, useAppSelector } from "@/redux/store";

interface FlightCardProps {
	price: string;
	date: string;
	itineraries: number;
}

export const FlightCard: FC<FlightCardProps> = ({
	price,
	date,
	itineraries,
}) => {
	return (
		<FlightCardContainer>
			<LeftContainer>
				<FlightCardImage src={PaperAirplane} alt="paper_plane" />
			</LeftContainer>

			<RightContainer>
				<FlightBasicInfo>
					<FlightCardText>Date : {date}</FlightCardText>
					<FlightCardText>Price : {price} </FlightCardText>
					<FlightCardText></FlightCardText>
				</FlightBasicInfo>

				<FlightDetailedInfo>
					<FlightCardText>
						{" "}
						Itineraries : {itineraries}{" "}
					</FlightCardText>
				</FlightDetailedInfo>
			</RightContainer>
		</FlightCardContainer>
	);
};
