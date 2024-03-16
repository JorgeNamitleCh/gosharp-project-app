import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface User {
    username: string;
    password: string;
}

interface AuthState {
    user: User | null;
    isLoggedIn: boolean;
    error: string | null;
}

const initialState: AuthState = {
    user: null,
    isLoggedIn: false,
    error: null,
};


export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginSuccess(state, action: PayloadAction<User>) {
            state.user = action.payload;
            state.isLoggedIn = true;
            state.error = null;
        },
        loginFailure(state, action: PayloadAction<string>) {
            state.error = action.payload;
        },
        logout(state) {
            state.user = null;
            state.isLoggedIn = false;
            state.error = null;
        },
    }
});

export const { loginSuccess, loginFailure, logout } = authSlice.actions;

export default authSlice.reducer;