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

    @media (max-width:1300px){
        width:50%;
    }
    @media (max-width:1050px){
        width:60%;
    }
    @media (max-width:860px){
        width:70%;
    }
    @media (max-width:760px){
        width:75%;
    }

    
    @media (max-width:685px){
        flex-direction:column;
        margin:40px;
        height: 180px;
        width:200px;
        
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



    @media (max-width:685px){
        width:200px;
        height:60px;
        &:nth-child(1), &:nth-child(2) {
        border-bottom : 1px solid black;
    }

    }


`