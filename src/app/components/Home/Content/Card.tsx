import { FC } from 'react';
import {
    CardContainer,
    CardChild,
} from '@/styles/HomeStyles/ContentStyles/Card.styles';
interface CardProps {}

const Card: FC<CardProps> = () => {
    return (
        <>
            <CardContainer>
                <CardChild>Economy</CardChild>
                <CardChild>Business Class</CardChild>
                <CardChild>First Class</CardChild>
            </CardContainer>
        </>
    );
};

export default Card;
