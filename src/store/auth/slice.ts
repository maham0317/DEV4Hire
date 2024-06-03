import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { setToken, getToken, removeToken } from '@/utils';

const token = getToken();

const initialState: IAuth = token? {...token, isAuthenticated: true}: {
    AccessToken: null,
    RefreshToken: null,
    isAuthenticated: false,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setCredentials: (state, action)=> {
            const { AccessToken, RefreshToken } = action.payload;
            state.AccessToken = AccessToken;
            state.RefreshToken = RefreshToken;
            state.isAuthenticated = true;
            setToken(action.payload);
        },
        logout: (state)=> {
            removeToken();
            state.AccessToken = null;
            state.RefreshToken = null;
            state.isAuthenticated = false;
        }
    }
});

export const { setCredentials, logout } = authSlice.actions;
export default authSlice.reducer;

export const getIsAuthenticated = (state: RootState)=> state.auth.isAuthenticated;