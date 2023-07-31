import styled from 'styled-components';
import Image from 'next/image';
import {motion} from 'framer-motion'


export const HeroImageContainer = styled(motion.div)`
    width:500px;
    height:500px;
    border-radius: 10px;

    @media (max-width:750px) {
        width:200px;
        height:200px;
    }
`

export const HeroImageStyled = styled(Image)`
    width:500px;
    height:500px;
    border-radius: 200px;


    @media (max-width:750px) {
        width:200px;
        height:200px;
    }
`

