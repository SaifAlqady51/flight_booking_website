import styled from 'styled-components';
import { motion } from 'framer-motion';
export const HeroStyles = styled(motion.h2)`
    margin: 80px auto 40px auto;
    font-size: 40px;
    font-weight: 700;

    @media (max-width: 685px) {
        font-size: 30px;
    }

    @media (max-width: 460px) {
        font-size: 20px;
    }
`;
