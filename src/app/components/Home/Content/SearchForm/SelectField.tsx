import { FC } from "react";
import { useAnimate } from "framer-motion";
import {
	StyledSelect,
	SearchFieldContainer,
	InputLabel,
} from "@styles/HomeStyles/ContentStyles/FlightSearchForm.styles";
import { TravelClassType } from "@/types/travelClass-types";

interface SelectFieldProps {
	handleChange: any;
	travelClass: TravelClassType;
}

export const SelectField: FC<SelectFieldProps> = ({
	handleChange,
	travelClass,
}) => {
	const [scope, animate] = useAnimate();

	const onFieldInputFocus = () => {
		animate(
			scope.current,
			{ x: 5, y: -25, scale: 0.75 },
			{ duration: 0.3 }
		);
	};
	return (
		<>
			<SearchFieldContainer>
				<StyledSelect
					onChange={handleChange}
					value={travelClass}
					onFocus={onFieldInputFocus}
				>
					<option value=""></option>
					<option value="ECONOMY">ECONOMY</option>
					<option value="PREMIUM_ECONOMY">PREMIUM_ECONOMY</option>
					<option value="BUSINESS">BUSINESS</option>
					<option value="FIRST">FIRST</option>
				</StyledSelect>
				<InputLabel ref={scope}>Travel class</InputLabel>
			</SearchFieldContainer>
		</>
	);
};
