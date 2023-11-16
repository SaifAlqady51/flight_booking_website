'use client';
import { redirect } from 'next/navigation';
import { storeCurrentUserSubscription } from '@/redux/features/userSubscription-slice';
import { useAppSelector, AppDispatch } from '@/redux/store';
import { useDispatch } from 'react-redux';
import Loading from '../components/LoadingPage';
import { useEffect } from 'react';
import { useMutation } from '@apollo/client';
import { UpdateUserSubscription } from '@/utils/graphqlMutation/updateuesrSubscription';
const Page = () => {
    const dispatch = useDispatch<AppDispatch>();

    const { userId } = useAppSelector((state) => state.userIdSlice);
    const { clickedSubscription, userSubscription } = useAppSelector(
        (state) => state.userSubscription,
    );

    const [updateSubscription] = useMutation(UpdateUserSubscription);

    updateSubscription({
        variables: { userId: userId, subscription: clickedSubscription },
    });

    dispatch(storeCurrentUserSubscription(clickedSubscription));

    useEffect(() => {
        redirect('/');
    }, [userSubscription]);

    return <Loading />;
};

export default Page;
