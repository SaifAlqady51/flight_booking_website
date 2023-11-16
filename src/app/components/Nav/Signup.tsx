import { FC } from 'react';
import { AppDispatch, useAppSelector } from '@/redux/store';
import { useDispatch } from 'react-redux';
import {
    falsyIsLoading,
    truthyIsLoading,
} from '@/redux/features/loading-slice';
import { useSession, signIn, signOut } from 'next-auth/react';
import { SignupButton } from '@/styles/NavStyles/SignupButton.styles';
import { storeCurrentUserId } from '@/redux/features/userId-slice';
import { storeCurrentUserSubscription } from '@/redux/features/userSubscription-slice';

const Signup: FC = () => {
    const { data: session } = useSession();
    const isLoading = useAppSelector((state) => state.loading.isLoading);

    const dispatch = useDispatch<AppDispatch>();
    if (session?.user) {
        dispatch(storeCurrentUserId(session?.user?.id));
		dispatch(storeCurrentUserSubscription(session.user.subscription))
    }
    console.log('session: ' + JSON.stringify(session?.user));

    const signupWithGoogle = async () => {
        dispatch(truthyIsLoading());
        try {
            await signIn('google');
            dispatch(falsyIsLoading());
        } catch (error) {
            throw new Error('Error signing up' + error);
        }
    };

    const singoutFromGoogle = async () => {
        dispatch(truthyIsLoading());

        try {
            await signOut();
            dispatch(falsyIsLoading());
        } catch (error) {
            throw new Error('Error signing out' + error);
        }
    };

    return (
        <>
            <SignupButton
                onClick={session ? singoutFromGoogle : signupWithGoogle}
                disabled={isLoading}
            >
                {session ? 'Sign out' : 'Sign up'}
            </SignupButton>
        </>
    );
};

export default Signup;
