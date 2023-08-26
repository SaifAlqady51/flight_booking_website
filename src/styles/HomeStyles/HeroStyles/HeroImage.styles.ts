import styled,{css} from 'styled-components';
import Image from 'next/image';
import {motion} from 'framer-motion'


const HeroImage = css`

    width:500px;
    height:500px;
    border-radius: 10px;
    margin-bottom:20px;

    @media (max-width:750px) {
        width:350px;
        height:350px;
    }

`

export const HeroImageContainer = styled(motion.div)`
	${HeroImage}
`

export const HeroImageStyled = styled(Image)`
	${HeroImage}
`

