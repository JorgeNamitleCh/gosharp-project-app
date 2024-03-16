import { configureStore } from '@reduxjs/toolkit';
import {  authSlice, articleSlice } from './slices';

const store = configureStore({
    reducer: {
        AuthReducer: authSlice.reducer,
        ArticleReducer: articleSlice.reducer,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
export default store