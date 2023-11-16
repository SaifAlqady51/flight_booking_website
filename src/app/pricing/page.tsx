'use client';
import { useEffect, useState } from 'react';
import { Container } from '@/styles/HomeStyles/HomeContainer';
import PricingCard from '../components/Pricing/PricingCard';
import { PricingCardsContainer } from '@/styles/PricingStyles/PricingCard.styles';
import getPrices from '@/utils/getPricesFromStripe';
import getProductById from '@/utils/getProductById';
import { AppDispatch, useAppSelector } from '@/redux/store';
import { useDispatch } from 'react-redux';
import {
    falsyIsLoading,
    truthyIsLoading,
} from '@/redux/features/loading-slice';
import LoadingPage from '../../app/components/LoadingPage';

const Page = () => {
    console.log('pricing');
    const dispatch = useDispatch<AppDispatch>();
    const { isLoading } = useAppSelector((state) => state.loading);
    // state for prices from stripe api
    const [prices, setPrices] = useState<any[]>([]);

    // state of productNames array returned from prices object
    const [subscriptionPlans, setSubscriptionPlans] = useState<string[]>([]);
    const { userSubscription } = useAppSelector(
        (state) => state.userSubscription,
    );

    const getPricesAndProducts = async () => {
        dispatch(truthyIsLoading());
        let subPlans = [];
        // get all Prices that in stripe api storage
        const allPrices = await getPrices();

        // loop over allPrices
        for (let price of allPrices) {
            // get product by sending price.product = product id to getProductById
            const subPlan = await getProductById(price.product);
            // pushing product name to productsNames
            subPlans.push(subPlan.name);
        }

        setSubscriptionPlans(subPlans);
        setPrices(allPrices);

        dispatch(falsyIsLoading());
    };

    useEffect(() => {
        getPricesAndProducts();
    }, [getPricesAndProducts]);
    console.log('userSubscrption : ' + userSubscription);

    if (isLoading) {
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
