import type { BaseQueryFn, FetchArgs, FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { Config } from '@/config';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootState } from '@/store/store';
import { setCredentials, logout } from '@/store/auth/slice';
import { jwtDecode } from 'jwt-decode';
import { getToken } from '@/utils';

const baseQuery = fetchBaseQuery({
    baseUrl: Config.API_URL,
    prepareHeaders: (headers, { getState })=> {
        const token = (getState() as RootState).auth.AccessToken;
        if(token) {
            headers.set('authorization', `Bearer ${token}`);
        }
        return headers;
    }
});

const baseQueryWithReauth: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> = async (args, api, extraOptions)=> {
    let result = await baseQuery(args, api, extraOptions);

    if(result.error && result.error.status === 401) {
        // try to get a new token
        const payload = getToken();
        const decoded: IUser = jwtDecode(payload?.AccessToken || '');
        try {
            const refreshResult = await baseQuery({url: '/auth/refresh/', method: 'POST',body: {RefreshToken: payload?.RefreshToken, UserId: decoded.UserId}}, api, extraOptions);
            // store the new token in the store or wherever you keep it
            api.dispatch(setCredentials(refreshResult.data));
            // retry the initial query
            result = await baseQuery(args, api, extraOptions);
        } catch {
            api.dispatch(logout());
        }
    }
    return result;
};

export const apiService = createApi({
  baseQuery: baseQueryWithReauth,
  endpoints: () => ({}),
});
