'use client'
import { createGlobalStyle} from "styled-components"

export const darkMode = {
    body:'#001233',
    textColor: 'white',
    navColor:'#0466c8',

}

export const lightMode = {
    body:'#caf0f8',
    textColor:'black',
    navColor:'#0466c8'
}



export const GlobalStyles = createGlobalStyle`
    body {
        background-color: ${(props) => props.theme.body};
        color:${(props) => props.theme.textColor};
    }

`