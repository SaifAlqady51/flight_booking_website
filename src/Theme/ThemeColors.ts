'use client';
import { createGlobalStyle } from 'styled-components';

export const darkMode = {
    bodyColor: '#10002b',
    textColor: 'white',
    navColor: '#4e148c',
    pricingCardText: 'black',
};

export const lightMode = {
    bodyColor: '#c8b6ff',
    textColor: 'black',
    navColor: '#4e148c',
	pricingCardText: 'white',
};

export const GlobalStyles = createGlobalStyle`
	html {
		
		scroll-behavior: smooth;
	}
    body {
		
		scroll-behavior: smooth;
        background-color: ${(props) => props.theme.bodyColor};
        color:${(props) => props.theme.textColor};
    }

`;
