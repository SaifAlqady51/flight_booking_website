import {
    configureStore,
    combineReducers,
    ThunkAction,
    Action,
    Reducer,
} from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useSelector } from 'react-redux';

// slices
import toggleSideNav from './features/toggleSideNav-slice';
import expandFlightCards from './features/expandFlightCard-slice';
import toggleTheme from './features/toggleTheme-slice';
import signupButtonIsLoading from './features/signupButtonIsLoading-slice';
import flightFormInputValues from './features/flightFormInputValues-slice';
import seatsMap from './features/seatsMap-slice';
import airlineLogo from './features/airlineLogo-slice';

import flightData from './features/flightData-slice';
import {
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
    persistReducer,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    version: 1,
    storage,
    blacklist: [
        'toggleSideNav',
        'signupButtonIsLoading',
        'flightFormInputValues',
        'seatsMap',
        'airlineLogo',
    ],
};

const reducer = combineReducers({
    toggleTheme,
    toggleSideNav,
    signupButtonIsLoading,
    flightFormInputValues,
    flightData,
    expandFlightCards,
    seatsMap,
    airlineLogo,
});

export const persistedReducer = persistReducer(
    persistConfig,
    reducer as Reducer,
);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [
                    FLUSH,
                    REHYDRATE,
                    PAUSE,
                    PERSIST,
                    PURGE,
                    REGISTER,
                ],
            },
        }),
});

type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export type AppTunk<ReturenType = void> = ThunkAction<
    ReturenType,
    RootState,
    unknown,
    Action<string>
>;
