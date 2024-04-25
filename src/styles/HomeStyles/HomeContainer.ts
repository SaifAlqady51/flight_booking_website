import styled from 'styled-components';

export const Container = styled.div<{
    activAlert?: boolean;
    $pricing?: boolean;
}>`
    filter: ${(props) => props.activAlert && 'blur(3px) brightness(0.5)'};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    margin-top: 80px;
    height: 100%;

    @media (max-width: 1000px) {
        height: ${(props) => (props.$pricing ? '1500px' : '100%')};
    }
`;
