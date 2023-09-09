import { FC } from "react";
import {
	SearchResultContainer,
	SearchResultBasicInfo,
	SearchResultDetailedInfo,
	SearchResultButtonsArea,
} from "@/styles/FlightStyles/SearchResult.styles";
import { useAppSelector, AppDispatch } from "@/redux/store";
import { useDispatch } from "react-redux";
import { switchFlightCards } from "@/redux/features/expandFlightCard-slice";
import FlightText from "./FlightText";
import { DeleteButton, ExpandButton } from "@/styles/Buttons.styles";
import DeleteIcon from "@mui/icons-material/Delete";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

const SearchResult: FC = () => {
	const { expanded } = useAppSelector((state) => state.expandFlightCards);
	const { flights } = useAppSelector((state) => state.flightData);

	const { location, distination, flightDate, adults, travelClass } =
		useAppSelector((state) => state.flightFormInputValues);

	const dispatch = useDispatch<AppDispatch>();

	return (
		<SearchResultContainer>
			<SearchResultBasicInfo>
				<FlightText constText={"From"} varText={location} />
				<FlightText constText={"To"} varText={distination} />
				<FlightText constText={"Number of results"} varText={flights.length} />
			</SearchResultBasicInfo>
			<SearchResultDetailedInfo>
				<FlightText constText={"Date"} varText={flightDate} />
				<FlightText constText={"Number of adults"} varText={adults} />
				<FlightText constText={"Travel Class"} varText={travelClass} />
			</SearchResultDetailedInfo>
			<SearchResultButtonsArea>
				<DeleteButton>
					<DeleteIcon />
					Delete
				</DeleteButton>
				<ExpandButton onClick={() => dispatch(switchFlightCards())}>
					{expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
					{expanded ? "Expand less" : "Expand more"}
				</ExpandButton>
			</SearchResultButtonsArea>
		</SearchResultContainer>
	);
};

export default SearchResult;
