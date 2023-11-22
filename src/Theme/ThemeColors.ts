'use client';
import { createGlobalStyle } from 'styled-components';

const globalColors = {
	navColor: '#4e148c' 
}

export const darkMode = {
    bodyColor: '#10002b',
    textColor: 'white',
	navColor: globalColors.navColor,
    pricingCardText: 'black',
	scrollTrackColor: '#10002b',
	scrollThumbColor: '#3c096c'
};

export const lightMode = {
    bodyColor: '#c8b6ff',
	navColor: globalColors.navColor,
    textColor: 'black',
    pricingCardText: 'white',
	scrollTrackColor: '#c8b6ff',
	scrollThumbColor: '#290628'
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
	body::-webkit-scrollbar{
		width:0.2em;
		color:black;
		background-color:white;
	}
	body::-webkit-scrollbar-track {
		background-color:${(props) => props.theme.navColor};
	}
	body::-webkit-scrollbar-thumb{
		background-color: white;
		
	}

`;
