import { styled } from 'styled-components';

export const SeatsContainer = styled.div<{ $width: string; $height: string }>`
    width: ${(props) => props.$width};
    height: ${(props) => props.$height};
    border: 1px solid black;
`;

export const SeatStyles = styled.div<{ $availabl: 'AVAILABLE' | 'BLOCKED' }>`
    width: 10px;
    height: 10px;
    color: ${(props) => (props.$availabl === 'AVAILABLE' ? 'grey' : 'black')};
`;
