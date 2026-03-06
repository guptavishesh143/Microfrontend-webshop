import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import { CookieStorage } from 'redux-persist-cookie-storage';
import Cookies from 'js-cookie';
import dataReducer from './dataSlice';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    data: dataReducer,
});

const persistConfig = {
    key: 'mfe-root',
    storage: new CookieStorage(Cookies, {
        setCookieOptions: {
            path: '/',
            sameSite: 'Lax',
        }
    }),
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false, // Required for redux-persist
        }),
});

export const persistor = persistStore(store);
