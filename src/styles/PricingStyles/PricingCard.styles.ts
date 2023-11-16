import { styled } from 'styled-components';

export const PricingCardsContainer = styled.div`
    display: flex;
	width: 60%;
    height: 500px;
    justify-content: space-between;
    margin-top: 100px;

	@media (max-width:1600px){
		width:70%;
	}
	@media (max-width:1380px){
		width:80%;
	}
	@media (max-width:1200px){
		width:90%;
	}
	@media (max-width:1060px){
		width:95%;
	}
	
	@media (max-width:1000px){
		flex-direction:column;
		align-items:center;
	}
`;

export const PricingCardStyles = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 300px;
    height: inherit;
    background-color: #b8d0ff;
    position: relative;
	flex-shrink:0;

    color: ${(props) => props.theme.pricingCardText};
    border-radius: 40px;

	@media (max-width:1000px){
		margin-bottom:80px;
	}
`;
export const PricingCardHeading = styled.h1`
    font-size: 2.4rem;
`;

export const PricingCardUL = styled.ul`
    font-size: 1.3rem;
    padding-left: 0;
`;

export const PricingCardLI = styled.li`
    display: flex;
    align-items: center;
    padding-top: 15px;
    font-size: 1rem;
    list-style-type: none;
`;
export const PriceContainer = styled.div`
    width: 60%;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
`;
export const PriceNumber = styled.div`
    width: auto;
    height: inherit;
    font-size: 2.5rem;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
`;
export const PricingButton = styled.button<{$subscribed: boolean}>`
	cursor:pointer;
    width: 70%;
    height: 50px;
	background-color: ${(props) => props.$subscribed? 'gray': 'blue'};
	color:${(props) => props.$subscribed? 'black': 'white'};
	border:0;
	font-size:1.4rem;
	font-weight:bold;
    position: absolute;
	bottom:30px;
	border-radius:30px;
	display:flex;
	justify-content:center;
	align-items:center;
	text-decoration:none;

`;
