import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { authSlice, articleSlice } from './slices';
import { persistReducer, persistStore } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: [
        'AuthReducer', 'ArticleReducer'
    ]
};

const rootReducer = combineReducers({
    AuthReducer: authSlice.reducer,
    ArticleReducer: articleSlice.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
})

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
