import styled, { css } from 'styled-components';
import Link from 'next/link';

export const Button = css`
    height: 45px;
    cursor: pointer;
    border: none;
    font-size: 18px;
    color: white;
`;

export const SubmitButton = styled.input`
    ${Button}
    width: 150px;
    border-radius: 20px;
    background-color: #10002b;

    &:hover {
        background: #200031;
    }
    @media (max-width: 1700px) {
        margin: 5px 8%;
    }
    @media (max-width: 1100px) {
        width: 120px;
    }

    @media (max-width: 800px) {
        width: 80%;
        margin: 10px 8%;
    }
`;

export const GeneralButtons = css`
    ${Button}
    width:120px;
    border-radius: 10px;
    margin-right: 5%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`;
export const DeleteButton = styled.button`
    ${GeneralButtons}
    background: #8f2d56;
    &:hover {
        background: #ff2d66;
    }
`;

export const ExpandButton = styled.button`
    ${GeneralButtons}
    width:150px;
    background: #5e7cc0;

    &:hover {
        background: #507cff;
    }
`;

export const MoreButton = styled(Link)`
    ${GeneralButtons}
    background:#c25c44;
    height: 35px;

    &:hover {
        background: #f25c24;
    }
`;
