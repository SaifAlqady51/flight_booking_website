import styled from 'styled-components';

export const Container = styled.div<{ activAlert?: boolean }>`
    filter: ${(props) => props.activAlert && 'blur(3px) brightness(0.5)'};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    margin-top: 80px;
    height: 100%;

	
`;

