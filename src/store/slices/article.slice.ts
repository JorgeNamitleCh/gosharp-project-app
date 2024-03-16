import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { getStorageData } from '../../utils/localStorage';
import AsyncStorage from '@react-native-async-storage/async-storage';

export interface ArticleAddState {
    id: string;
    name: string;
    price: number;
    info: string;
}

export interface ArticleRemoveState {
    id: string;
}

const initialState: ArticleAddState[] = [] || [];

export const articleSlice = createSlice({
    name: 'article',
    initialState,
    reducers: {
        addToArticle: (state, action: PayloadAction<ArticleAddState>) => {
            const { id } = action.payload;
            if (
                state.length === 0 ||
                state.filter((item) => item.id === id).length === 0
            ) {
                state.push(action.payload);
            }
        },
        removeToArticle: (state, action: PayloadAction<ArticleRemoveState>) => {
            const { id } = action.payload;
            if (state.some((item) => item.id === id)) {
                return state = state.filter((item) => item.id !== id)
            }
        },
    },
});

export const { addToArticle, removeToArticle } = articleSlice.actions;
export default articleSlice.reducer;