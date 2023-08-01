import styled from 'styled-components'
import {motion} from 'framer-motion'

export const CardContainer = styled(motion.div)`
    width:50%;
    height:80px;
    margin: 40px auto;
    background-color: ${(props) => props.theme.navColor};
    display:flex;
    align-items: center;
    justify-content: center;
    


`

export const CardChild = styled.div`
    width:33%;
    height:inherit;
    color: ${(props) => props.theme.textColor};
    display:flex;
    align-items: center;
    justify-content: center;
    font-size:1.5rem;
`