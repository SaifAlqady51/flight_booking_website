import styled from 'styled-components';
import Image from 'next/image';
import { motion } from 'framer-motion';

export const PlaneIconContainer = styled(motion.div)`
    width: 150px;
    height: 150px;
    margin: 30px;
    @media (max-width: 750px) {
        width: 100px;
        height: 100px;
    }
`;

export const PlaneIconStyled = styled(Image)`
    width: 150px;
    height: 150px;
    margin: 30px;
    @media (max-width: 750px) {
        width: 100px;
        height: 100px;
    }
`;
