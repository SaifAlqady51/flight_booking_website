import styled from 'styled-components';
import Image from 'next/image';
import {motion} from 'framer-motion'

export const PlaneIconContainer = styled(motion.div)`
    width:180px;
    height:110px;

    @media (max-width:750px) {
        width:100px;
        height:61px;
        
    }
`

export const PlaneIconStyled = styled(Image)`
    width:180px;
    height:110px;

    @media (max-width:750px) {
        width:100px;
        height:61px;
    }
`

