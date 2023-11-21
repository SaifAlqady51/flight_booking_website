'use client';
import { useEffect, useState } from 'react';
import { Container } from '@/styles/HomeStyles/HomeContainer';
import PricingCard from '../components/Pricing/PricingCard';
import { PricingCardsContainer } from '@/styles/PricingStyles/PricingCard.styles';
import getPrices from '@/utils/getPricesFromStripe';
import { AppDispatch, useAppSelector } from '@/redux/store';
import { useDispatch } from 'react-redux';
import {
    falsyIsLoading,
    truthyIsLoading,
} from '@/redux/features/loading-slice';
import LoadingPage from '../../app/components/LoadingPage';

const Page = () => {
    const dispatch = useDispatch<AppDispatch>();
	const {userId} = useAppSelector((state) => state.userIdSlice)		
    const { isLoading } = useAppSelector((state) => state.loading);
    // state for prices from stripe api
    const [prices, setPrices] = useState<any[]>([]);
	const subscriptionPlans = ['Free','Primium','Travel'] 

    // state of productNames array returned from prices object
    const { userSubscription } = useAppSelector(
        (state) => state.userSubscription,
    );

    const getPricesAndProducts = async () => {
        dispatch(truthyIsLoading());
        // get all Prices that in stripe api storage
		
        const allPrices = await getPrices();


        setPrices(allPrices);

        dispatch(falsyIsLoading());
    };

    useEffect(() => {
        getPricesAndProducts();
    }, []);

	if (isLoading || prices.length < 3) {
        return <LoadingPage />;
    } else {
        return (
            <>
                <Container>
                    <PricingCardsContainer>
                        {prices.map((price, index) => (
                            <PricingCard
                                id={price.id}
                                key={price.id}
								userSignedIn={userId.length === 0? false: true}
                                header={subscriptionPlans[index]}
                                benifits={[
                                    'searching for three flights a week',
                                    'using your api',
                                ]}
                                priceValue={price.unit_amount / 100}
                                subscribed={
                                    userSubscription ===
                                    subscriptionPlans[index]
                                        ? true
                                        : false
                                }
                            />
                        ))}
                    </PricingCardsContainer>
                </Container>
            </>
        );
    }
};

export default Page;
