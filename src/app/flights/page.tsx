"use client";
import { FlightCard } from "@components/Flights/FlightCard";
import { FC } from "react";
import { useAppSelector } from "@/redux/store";
import SearchResult from "@components/Flights/SearchResult";
import { AllFlightCardsContainer } from "@/styles/FlightStyles/FlightCard.styles";
import { FlightType } from "@/types/flight-types";

interface pageProps {}

const Page: FC<pageProps> = ({}) => {
	const { expanded } = useAppSelector((state) => state.expandFlightCards);

	const flights = useAppSelector((state) => state.flightData.flights);

	const AllFlightCards = () =>
		flights.map((flight: FlightType) => (
			<FlightCard key={flight.id} flightData={flight}></FlightCard>
		));

	return (
		<>
			<SearchResult />
			{expanded ? (
				<AllFlightCardsContainer>
					<AllFlightCards />
				</AllFlightCardsContainer>
			) : (
				<div></div>
			)}
		</>
	);
};

export default Page;
