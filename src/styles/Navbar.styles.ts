import styled from 'styled-components';

export const NavContainer = styled.div`
    background-color:black;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const LeftNavbar = styled.div`
    width:15%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    @media (max-width:1000px){
        width:30%;
    }
    @media (max-width:500px) {
        width:50%;
    }

    
`

export const RightNavbar = styled.div`
    height:inherit;
    width:85%;
    display: flex;
    align-items: center;
    justify-content: end;

    @media (max-width:1000px){
        width:70%;
    }
    @media (max-width:500px) {
        width:50%;
        display:flex;
        justify-content: space-between;
    }
`

