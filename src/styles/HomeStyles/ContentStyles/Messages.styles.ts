import styled from 'styled-components';
import { motion } from 'framer-motion';

export const MainDiv = styled.div`
    height: 800px;
    width: 80%;
    display: flex;
    margin: 200px auto;
    flex-direction: column;

    @media (max-width: 750px) {
        margin: 200px auto 50px;
    }
`;
export const ChildDiv = styled.div`
    height: 600px;
    width: 100%;
    display: flex;
    justify-content: space-between;
`;
export const ChildDivBottom = styled(ChildDiv)`
    @media (max-width: 1200px) {
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-top: 40px;
    }
`;

export const ChildDivTop = styled(ChildDiv)`
    @media (max-width: 750px) {
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`;

interface GarndChildDivProps {
    text?: boolean;
    width: string;
    justify?: string;
    align?: string;
    order?: string;
    wideImage?: boolean;
    widthRes?: string;
}

export const GrandChildDiv = styled(motion.div)<GarndChildDivProps>`
    height: inherit;
    width: ${(props) => props.width};
    display: flex;
    flex-direction: column;
    justify-content: ${(props) => props.justify};
    align-items: ${(props) => props.align};
`;

export const GrandChildDivTop = styled(GrandChildDiv)`
    @media (max-width: 1400px) {
        width: ${(props) => props.widthRes};
    }

    @media (max-width: 1000px) {
        width: 50%;
    }
    @media (max-width: 850px) {
        width: 40%;
    }

    @media (max-width: 750px) {
        width: 68%;
        justify-content: end;
        align-items: ${(props) => (props.text ? 'center' : 'center')};
        order: ${(props) => props.order};
        text-align: center;
    }
`;

export const GrandChildDivBottom = styled(GrandChildDiv)`
    @media (max-width: 1400px) {
        width: ${(props) => props.widthRes};
        height: 200px;
    }

    @media (max-width: 1200px) {
        width: 90%;
        align-items: center;
    }

    @media (max-width: 750px) {
        margin: 50px;
        width: inherit;
        justify-content: center;
        align-items: ${(props) => (props.text ? 'center' : 'center')};
        order: ${(props) => props.order};
        text-align: center;
    }
`;
