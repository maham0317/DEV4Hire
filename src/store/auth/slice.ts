import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

const initialState = {
    user: null,
    token: null,
    isAuthenticated: false,
} as { user: null | IUser; token: string | null; isAuthenticated: boolean };

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setCredentials: (state, action)=> {
            const { user, accessToken, isAuthenticated } = action.payload
            state.user = user;
            state.token = accessToken;
            state.isAuthenticated = isAuthenticated;
        },
        logout: ()=> initialState
    }
});

export const { setCredentials, logout } = authSlice.actions;
export default authSlice.reducer;

export const getIsAuthenticated = (state: RootState)=> state.auth.isAuthenticated;