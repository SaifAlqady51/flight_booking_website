import {configureStore,combineReducers,ThunkAction,Action} from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useSelector } from 'react-redux';

// slices
import  toggleSideNav from './features/toggleSideNav-slice'
import toggleTheme  from './features/toggleTheme-slice';
import signupButtonIsLoading from './features/signupButtonIsLoading-slice';

import storageSession from 'reduxjs-toolkit-persist/lib/storage/session'

// redux persist 
// import storage from 'redux-persist/lib/storage';
import { FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER, persistReducer } from 'redux-persist';
// import AsyncStorage from '@react-native-async-storage/async-storage';




const persistConfig = {
    key: 'root',
    version:1,
    storage:storageSession,
    blacklist:['toggleSideNav']
}

const reducer = combineReducers({
    toggleTheme,
    toggleSideNav,
    signupButtonIsLoading
})


export const persistedReducer = persistReducer(persistConfig, reducer)


export const store = configureStore({
    reducer:persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],

        }
    })
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState>  = useSelector;



export type AppTunk<ReturenType = void> = ThunkAction<ReturenType, RootState,unknown,Action<string>>