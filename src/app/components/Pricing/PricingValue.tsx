'use client'
import {
    PriceContainer,
    PriceNumber,
} from '@/styles/PricingStyles/PricingCard.styles';

import { BiDollar } from 'react-icons/bi';
import { DollarIconProvider } from '@/styles/NavStyles/ListIcon.styles';

interface PricingValueProps {
	priceValue:number;
}

const PricingValue = ({priceValue}: PricingValueProps) => {
    return (
        <PriceContainer>
            <DollarIconProvider $priceValue={priceValue}>
                <BiDollar />
            </DollarIconProvider>
            <PriceNumber>{priceValue}</PriceNumber>
        </PriceContainer>
    );
};

export default PricingValue;
