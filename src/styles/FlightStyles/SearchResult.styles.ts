import { styled, css } from 'styled-components';

export const SearchResultContainer = styled.div`
    width: 80%;
    height: 240px;
    background: ${(props) => props.theme.navColor};
    margin-top: 100px;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;

    @media (max-width: 1070px) {
        height: 360px;
    }
    @media (max-width: 800px) {
        height: 500px;
    }
`;

export const SearchResultInfo = styled.div`
    height: 80%;
    display: flex;
    align-items: center;
    justify-content: start;
    position: relative;
    flex-wrap: wrap;

    @media (max-width: 800px) {
        justify-content: center;
        align-items: center;
    }
`;

// export const SearchResultBasicInfo = styled.div`
// 	${SearchResultInfo}
// `;

// export const SearchResultDetailedInfo = styled.div`
// 	${SearchResultInfo}
// `;

export const SearchResultButtonsArea = styled.div`
    height: 10%;
    display: flex;
    align-items: center;
    justify-content: end;

    @media (max-width: 800px) {
        justify-content: center;
    }
`;
