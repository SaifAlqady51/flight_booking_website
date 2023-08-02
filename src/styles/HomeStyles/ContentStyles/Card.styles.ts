import styled from 'styled-components'
import {motion} from 'framer-motion'

export const CardContainer = styled(motion.div)`
    width:40%;
    height:80px;
    margin: 40px auto;
    background-color: ${(props) => props.theme.navColor};
    display:flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    
    @media (max-width:640px){
        flex-direction:column;
        margin:40px;
        height: 180px
    }

`

export const CardChild = styled.div`
    width:33%;
    height:inherit;
    color: ${(props) => props.theme.textColor};
    display:flex;
    align-items: center;
    justify-content: center;
    font-size:1.5rem;
    border:1px solid black;

    @media (max-width:640px){
        width:200px;
        height:60px

    }


`