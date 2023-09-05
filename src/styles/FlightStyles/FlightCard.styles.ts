import styled, { css } from "styled-components";
import Image from "next/image";
// main contianer of the flight card
export const FlightCardContainer = styled.div`
	width: 70%;
	height: 300px;
	background-color: ${(props) => props.theme.navColor};
	margin-top: 100px;
	border-radius: 40px;
	display: flex;
`;
// left contianer
export const LeftContainer = styled.div`
	width: 30%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: start;
`;
// left contianer elements  
const FlightCardImageTemp = css`
	width: 150px;
	height: 150px;
	display: flex;
	margin: 10px;
`;
export const FlightCardImage = styled(Image)`
	${FlightCardImageTemp}
`;

// right contianer
export const RightContainer = styled.div`
	width: 70%;
	height: inherit;
	display:flex;
	flex-direction:column;
`;
// right contianer elements
export const FlightBasicInfo = styled.div`
	height:50%;
	padding:10px;
	display:flex;
	align-items: center;
	justify-content: space-between;


;
`

export const FlightCardText = styled.h2`
	font-size: 20px;
	color:white ;
`

export const FlightDetailedInfo = styled.div`
	height:50%;
	padding:10px;
`
