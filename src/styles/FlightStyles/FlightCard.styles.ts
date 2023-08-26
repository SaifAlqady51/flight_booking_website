import styled, { css } from "styled-components";
import Image from "next/image";

export const FlightCardContainer = styled.div`
	width: 70%;
	height: 300px;
	background-color: ${(props) => props.theme.navColor};
	margin-top: 100px;
	border-radius: 40px;
	display: flex;
`;

export const LeftContainer = styled.div`
	width: 30%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: start;
`;

export const RightContainer = styled.div`
	width: 70%;
	height: inherit;
`;

const FlightCardImageTemp = css`
	width: 150px;
	height: 150px;
	display: flex;
	margin: 10px;
`;
export const FlightCardImage = styled(Image)`
	${FlightCardImageTemp}
`;
