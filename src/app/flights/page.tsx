"use client";
import { FlightCard } from "@components/Flights/FlightCard";
import { FC } from "react";
import { useAppSelector } from "@/redux/store";
import SearchResult from "@components/Flights/SearchResult";
import { AllFlightCardsContainer } from "@/styles/FlightStyles/FlightCard.styles";

interface pageProps {}

const Page: FC<pageProps> = ({}) => {
	const { expanded } = useAppSelector((state) => state.expandFlightCards);

	const flights = useAppSelector((state) => state.flightData.flights);

	const AllFlightCards = () =>
		flights.map((flight: any) => (
			<FlightCard
				key={flight.id}
				price={flight.price.total}
				date={flight.lastTicketingDate}
				itineraries={3}
			></FlightCard>
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
