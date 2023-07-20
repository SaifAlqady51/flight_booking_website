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


    @media (max-width:640px){
        position: fixed;
        flex-direction:column;
        align-items: center;
        right:${({toggle}) => toggle? '0' : '-70%'};
        top:80px;
        background-color:black;
        margin: 0;
        transition: right .5s;
        height:100vh;
        justify-content: start;
        padding: 0;
        width:70%;
        background-color: rgb(4, 102, 200,0.4);
    }

`
