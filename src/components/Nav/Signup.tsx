'use client'
import { StyledLink } from '@/styles/NavStyles/StyledLink.styles'
import { FC } from 'react'
import { AppDispatch,useAppSelector } from "@/redux/store";
import { useDispatch } from 'react-redux';
import { thruthyIsLoading } from '@/redux/features/signupButtonIsLoading-slice';
import {useSession,signIn,signOut} from 'next-auth/react'
import { SignupButton } from '@/styles/NavStyles/SignupButton.styles';
interface SignupButtonProps {
  
}

const Signup: FC = () => {
  const {data:session} = useSession();
  const isLoading = useAppSelector((state) => state.signupButtonIsLoading.isLoading)
  const dispatch = useDispatch<AppDispatch>();

  console.log('session: ' + session?.user?.email)

  const signupWithGoogle = async() => {
    dispatch(thruthyIsLoading())
    try{
      await signIn('google')
    }catch(error){
      throw new Error('Error signing up'+ error)

      }
  }

  const signout = async () => {
    dispatch(thruthyIsLoading())

    try{

      await signOut()
    }catch(error){
      throw new Error('Error signing out'+ error)
    }
  }
  if(session){

  }
  return (
    <>
        <SignupButton  onClick={session? signout: signupWithGoogle} disabled={isLoading} >{session? 'Sign out': 'Sign up'}</SignupButton>
    </>
  )
}

export default Signup