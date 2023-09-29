import styled from 'styled-components';
import Image from 'next/image';

export const StopsLineContainer = styled.div`
    margin-top: 40px;
    display: flex;
    align-items: center;
`;
export const CityName = styled.h2`
    font-size: 40px;
    display: inline;
    margin: 0 40px;
`;

export const AirPlaneImage = styled(Image)`
    width: 150px;
    height: 100px;
    margin-right: 20px;
    margin-left: 20px;
`;
