import {configureStore} from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useSelector } from 'react-redux';

// slices
import  toggleSideNav from './features/toggleSideNav-slice'
import toggleTheme  from './features/toggleTheme-slice';
import signupButtonIsLoading from './features/signupButtonIsLoading-slice';


export const store = configureStore({
    reducer:{
        toggleSideNav,
        toggleTheme,
        signupButtonIsLoading

    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState>  = useSelector;