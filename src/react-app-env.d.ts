/// <reference types="react-scripts" />
declare module 'react/jsx-runtime';

interface IUser {
    unique_name: string;
    UserId: string;
    role: string;
}

interface IAuth {
    AccessToken: string | null;
    RefreshToken: string | null;
    isAuthenticated: boolean;
}