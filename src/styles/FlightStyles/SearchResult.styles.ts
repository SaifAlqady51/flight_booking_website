import { styled, css } from "styled-components";

export const SearchResultContainer = styled.div`
	width: 80%;
	height: 240px;
	background: ${(props) => props.theme.navColor};
	margin-top: 100px;
	border-radius: 20px;
	display: flex;
	flex-direction: column;
`;

export const SearchResultInfo = css`
	height: 40%;
	display: flex;
	align-items: center;
	justify-content: start;
	
`;

export const SearchResultBasicInfo = styled.div`
	${SearchResultInfo}
`;

export const SearchResultDetailedInfo = styled.div`
	${SearchResultInfo}
`;

export const SearchResultButtonsArea = styled.div`
	height:10%;
	display:flex;
	align-items:center;
	justify-content:end
`
