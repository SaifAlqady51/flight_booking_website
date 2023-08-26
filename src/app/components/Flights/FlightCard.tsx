import {
	FlightCardContainer,
	LeftContainer,
	RightContainer,
	FlightCardImage,
} from "@styles/FlightStyles/FlightCard.styles";
import PaperAirplane from "@images/paper-airplane.png";

export const FlightCard = () => {
	return (
		<FlightCardContainer>
			<LeftContainer>
				<FlightCardImage src={PaperAirplane} alt="paper_plane" />
			</LeftContainer>

			<RightContainer></RightContainer>
		</FlightCardContainer>
	);
};
