import { styled } from "styled-components";



export const SignupButton = styled.button`
    width: 100px;
    height: 30px;
    color: white;
    background-color:inherit;
    border:none;
    border-radius: 8px;
    font-size:17px;
    margin-right:15px;
    display:flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    font-weight: bold;
    text-transform: uppercase;

    
    &:hover{
        background-color: grey;
        transition: 0.5s;
    }


    @media (max-width: 750px) {
        color: ${(props) => props.theme.textColor};
        font-size: 18px;
        font-weight: bold;
        padding:0;
        margin-right:0

    }

`