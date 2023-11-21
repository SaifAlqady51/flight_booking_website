import React from 'react';
import PricingValue from './PricingValue';
import { CheckIconProvider } from '@/styles/NavStyles/ListIcon.styles';
import {
    PricingCardStyles,
    PricingCardUL,
    PricingCardLI,
    PricingCardHeading,
    PricingButton,
} from '@/styles/PricingStyles/PricingCard.styles';
import { AiOutlineCheck } from 'react-icons/ai';
import axios from 'axios';
import { changeClickedSubscription } from '@/redux/features/userSubscription-slice';
import { AppDispatch} from '@/redux/store';
import { useDispatch } from 'react-redux';

interface PricingCardProps {
	id:string;
	userSignedIn: boolean;
    header: string;
    benifits: string[];
    subscribed: boolean;
    priceValue: number;
}

const PricingCard = ({
	id,
	userSignedIn,
    header,
    benifits,
    subscribed,
    priceValue,
}: PricingCardProps) => {

	const dispatch = useDispatch<AppDispatch>()

    const handleSubscribtion = async (
        e: React.MouseEvent<HTMLButtonElement>,
    ) => {
        e.preventDefault();
		dispatch(changeClickedSubscription(header))
        const { data } = await axios.post(
            '/api/payment',
            { priceId: id },
            { headers: { 'Content-Type': 'application/json' } },
        );
		window.location.assign(data)
    };
    return (
        <PricingCardStyles>
            <PricingCardHeading>{header}</PricingCardHeading>
            <PricingValue priceValue={priceValue} />
            <PricingCardUL>
                {benifits.map((benifit: string) => (
                    <PricingCardLI key={benifit.length}>
                        <CheckIconProvider>
                            <AiOutlineCheck />
                        </CheckIconProvider>
                        {benifit}
                    </PricingCardLI>
                ))}
            </PricingCardUL>
			<PricingButton $subscribed={subscribed} disabled={userSignedIn? false : true} onClick={handleSubscribtion}>
                {subscribed ? 'subscribed' : 'subscribe'}
            </PricingButton>
        </PricingCardStyles>
    );
};

export default PricingCard;
