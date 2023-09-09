import { FC } from "react";

import {
	FlightCardText,
	FlightCardTextResult,
} from "@/styles/FlightStyles/FlightCard.styles";

interface FlightTextProps {
	constText: string;
	varText: string;
}

const FlightText: FC<FlightTextProps> = ({ constText, varText }) => {
	return (
		<>
			<FlightCardText>
				{constText} :{" "}
				<FlightCardTextResult>{varText}</FlightCardTextResult>
			</FlightCardText>
		</>
	);
};

export default FlightText;
