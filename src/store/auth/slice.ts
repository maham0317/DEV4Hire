import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

const initialState = {
    AccessToken: null,
    RefreshToken: null,
    isAuthenticated: false,
} as { AccessToken: string | null; RefreshToken: string | null; isAuthenticated: boolean };

const authSlice = createSlice({
    name: 'auth',
    initialState: localStorage.getItem('D4HRT')? {...initialState, isAuthenticated: true}: initialState,
    reducers: {
        setCredentials: (state, action)=> {
            const { AccessToken, RefreshToken } = action.payload;
            state.AccessToken = AccessToken;
            state.RefreshToken = RefreshToken;
            state.isAuthenticated = true;
            localStorage.setItem('D4HRT', JSON.stringify(action.payload));
        },
        logout: ()=> {
            localStorage.removeItem('D4HRT');
            return initialState;
        }
    }
});

export const { setCredentials, logout } = authSlice.actions;
export default authSlice.reducer;

export const getIsAuthenticated = (state: RootState)=> state.auth.isAuthenticated;