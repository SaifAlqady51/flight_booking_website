import { styled } from "styled-components";
import Link from 'next/link'

export const StyledLink = styled(Link)`
    color:white;
    text-decoration: none;
    padding: 6px 10px;
    font-size: 17px;
    border-radius: 3px;

    &:hover{
        background-color: grey;
        transition: 0.5s;
    }


    @media (max-width: 750px) {
        color: ${(props) => props.theme.textColor};
        font-size: 17px;
        font-weight: bold;

    }


`
