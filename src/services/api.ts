import type { BaseQueryFn, FetchArgs, FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { Config } from '@/config';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootState } from '@/store/store';
import { setCredentials, logout } from '@/store/auth/slice';
import { decryptToken, getToken } from '@/utils';
import { jwtDecode } from 'jwt-decode';
import { HttpStatusCode } from 'axios';

const baseQuery = fetchBaseQuery({
    baseUrl: Config.API.BaseUrl,
    prepareHeaders: (headers, { getState })=> {
        const token = (getState() as RootState).auth.AccessToken;
        if(token) headers.set('authorization', `Bearer ${token}`);
        return headers;
    },
    timeout: Config.API.Request.Timeout.Milliseconds
});

const baseQueryWithReauth: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> = async (args, api, extraOptions)=> {
    let result = await baseQuery(args, api, extraOptions);

    if (result.error && result.error.status === HttpStatusCode.Unauthorized) {
        // try to get a new token
        const payload = getToken();
        try {
            const decryptedToken = await decryptToken(payload?.AccessToken);
            const decoded = jwtDecode<IUser>(decryptedToken);
            const refreshResult = await baseQuery({ url: '/auth/refresh/', method: 'POST', body: { RefreshToken: payload?.RefreshToken, UserId: decoded.UserId }}, api, extraOptions);
            if (!refreshResult?.data) {
                throw new Error('Invalid refreshToken or userId')
            } 
            api.dispatch(setCredentials(refreshResult.data));
            result = await baseQuery(args, api ,extraOptions);
        } catch(e) {
            api.dispatch(logout());
        }
    }
    return result;
};

export const apiService = createApi({
    baseQuery: baseQueryWithReauth,
    endpoints: ()=> ({})
});
