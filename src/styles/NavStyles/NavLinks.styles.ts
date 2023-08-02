import { styled } from "styled-components";


export const NavLinks = styled.ul<{toggle: Boolean}>`
    width:25%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    text-transform: uppercase;
    list-style-type: none;
    

    @media (max-width: 1500px){
        width:35%;
    }

    @media (max-width: 1050px){
        width:55%;
    }
    @media (max-width: 800px){
        width:70%;
    }


    @media (max-width:750px){
        position: absolute;
        flex-direction:column;
        align-items: center;
        right:${({toggle}) => toggle? '0' : '-100%'};
        top:80px;
        background-color:black;
        margin: 0;
        transition: right .5s;
        height:200px;
        justify-content: start;
        padding: 0;
        width:100%;
        background-color: rgb(78, 20, 140, 0.4);
        z-index: 11;
        backdrop-filter: blur(10px);

    }

`
