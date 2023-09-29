'use client';
import { createGlobalStyle } from 'styled-components';

export const darkMode = {
    body: '#10002b',
    textColor: 'white',
    navColor: '#4e148c',
};

export const lightMode = {
    body: '#c8b6ff',
    textColor: 'black',
    navColor: '#4e148c',
};

export const GlobalStyles = createGlobalStyle`
    body {
        background-color: ${(props) => props.theme.body};
        color:${(props) => props.theme.textColor};
    }

`;
