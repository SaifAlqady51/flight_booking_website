"use client";
import { FlightPageContainer } from "@/styles/FlightStyles/FlightPageContainer.styles";
import { FlightCard } from "@components/Flights/FlightCard";
import { FC } from "react";
import { useAppSelector } from "@/redux/store";
interface pageProps {}

const Page: FC<pageProps> = ({}) => {
	const flights = useAppSelector((state) => state.flightData.flights);
	console.log("flight page");
	return (
		<FlightPageContainer>
			{flights.map((flight: any) => (
				<FlightCard
					key={flight.id}
					price={flight.price.total}
					date={flight.lastTicketingDate}
					itineraries={3}
				/>
			))}
		</FlightPageContainer>
	);
};

export default Page;
