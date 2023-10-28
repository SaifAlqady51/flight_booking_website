import styled from 'styled-components';

export const Container = styled.div<{ activeAlert: boolean }>`
    filter: ${(props) => props.activeAlert && 'blur(3px) brightness(0.5)'};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    margin-top: 80px;
    height: 3000px;
`;
