import {configureStore} from '@reduxjs/toolkit'
import  toggleSideNav from './features/toggleSideNav-slice'
import toggleTheme  from './features/toggleTheme-slice';
import { TypedUseSelectorHook, useSelector } from 'react-redux';


export const store = configureStore({
    reducer:{
        toggleSideNav,
        toggleTheme

    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState>  = useSelector;