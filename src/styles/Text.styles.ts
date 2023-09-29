import styled from 'styled-components';

export const FlightPageText = styled.h2`
    min-width: 20%;
    font-size: 20px;
    color: white;
    margin-right: 5%;
    margin-left: 5%;
`;

export const SearchResultText = styled(FlightPageText)`
    min-width: 20%;
    @media (max-width: 1070px) {
        min-width: 40%;
    }

    @media (max-width: 800px) {
        min-width: 50%;
        margin-left: 10%;
    }
`;
export const FlightCardText = styled(FlightPageText)`
    min-width: 40%;
    @media (max-width: 1000px) {
        margin-top: 5px;
        margin-bottom: 5px;
    }
`;

export const SearchResultTextResult = styled.span`
    font-size: 20px;
    color: wheat;
`;
