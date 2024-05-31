import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { setToken, getToken, removeToken } from '@/utils';

const initialState: IAuth = {
    AccessToken: null,
    RefreshToken: null,
    isAuthenticated: false,
};

const authSlice = createSlice({
    name: 'auth',
    initialState: getToken()? {...initialState, isAuthenticated: true}: initialState,
    reducers: {
        setCredentials: (state, action)=> {
            const { AccessToken, RefreshToken } = action.payload;
            state.AccessToken = AccessToken;
            state.RefreshToken = RefreshToken;
            state.isAuthenticated = true;
            setToken(action.payload);
        },
        logout: ()=> {
            removeToken();
            return initialState;
        }
    }
});

export const { setCredentials, logout } = authSlice.actions;
export default authSlice.reducer;

export const getIsAuthenticated = (state: RootState)=> state.auth.isAuthenticated;