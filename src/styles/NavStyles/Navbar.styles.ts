import styled from 'styled-components';

export const NavContainer = styled.div`
    background-color:${(props) => props.theme.navColor};
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    position:fixed;
    width: 100%;
    top:0;
    z-index: 10;

`

export const LeftNavbar = styled.div`
    height: inherit;
    width:15%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    @media  (max-width:1400px){
        width:20%
    }
    @media (max-width:1000px){
        width:35%;
    }
    @media (max-width:750px) {
        width:100%;
        justify-content: center;
    }

    
`

export const RightNavbar = styled.div`
    height:inherit;
    width:85%;
    display: flex;
    align-items: center;
    justify-content: end;
    flex-shrink:0;


    @media  (max-width:1400px){
        width:80%
    }
    @media (max-width:1000px){
        width:65%;
        
    }
    @media (max-width:750px) {
        width:10%;
        display:flex;
        align-items: center;
        justify-content: end;
    }
`

