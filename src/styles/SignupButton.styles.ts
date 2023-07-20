import { styled } from "styled-components";



export const SignupButton = styled.button`
    width: 100px;
    height: 30px;
    color: 'black';
    background-color:blue;
    border:none;
    border-radius: 8px;
    font-size:17px;
    margin-right:15px;
    display:flex;
    align-items: center;
    justify-content: space-around;
    flex-shrink: 0;

    @media (max-width:500px){
        font-size:15px;
        width:80px;
    }
`