import styled, { css } from 'styled-components';
// main contianer of the flight card

export const AllFlightCardsContainer = styled.div`
    height: 600px;
    width: 80%;
    margin-top: 100px;
    margin-bottom: 100px;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-x: hidden;
    overflow-y: scroll;
    &::-webkit-scrollbar {
        width: 0.3em;
    }
    &::-webkit-scrollbar-track {
        background-color: ${(props) => props.theme.scrollTrackColor};
    }
    &::-webkit-scrollbar-thumb {
        background-color: ${(props) => props.theme.scrollThumbColor};
    }
`;
export const FlightCardContainer = styled.div`
    width: 70%;
    height: 200px;
    background-color: ${(props) => props.theme.navColor};
    margin-top: 100px;
    border-radius: 40px;
    display: flex;
    @media (max-width: 755px) {
        width: 90%;
        height: 220px;
    }
`;
// left contianer
export const LeftContainer = styled.div`
    width: 30%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: start;

    @media (max-width: 1300px) {
        width: 40%;
    }
    @media (max-width: 1000px) {
        width: 50%;
    }
`;
// left contianer elements
const FlightCardImageTemp = css`
    width: 80%;
    max-height: 95%;
    display: flex;
    padding: 10px 10px 10px 25px;
`;
export const FlightCardImage = styled.img`
    ${FlightCardImageTemp}
`;

// right contianer
export const RightContainer = styled.div`
    width: 70%;
    height: inherit;
    display: flex;
    flex-direction: column;
    @media (max-width: 1300px) {
        width: 60%;
    }
    @media (max-width: 1000px) {
        width: 50%;
    }
`;
// right contianer elements
export const FlightBasicInfo = styled.div`
    height: 80%;
    padding: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    @media (max-width: 1000px) {
        height: 70%;
    }
`;

export const FlightCardButtonsArea = styled.div`
    height: 25%;
    display: flex;
    justify-content: end;

    @media (max-width: 1000px) {
        justify-content: center;
    }
`;
