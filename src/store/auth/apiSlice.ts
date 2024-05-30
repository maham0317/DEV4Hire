import { apiService } from '../../services/api';

export const authApiSlice = apiService.injectEndpoints({
    endpoints: builder=> ({
        login: builder.mutation({
            query: credentials=> ({
                url: '/auth/token/',
                method: 'POST',
                body: { ...credentials }
            })
        })
    })
});

export const { useLoginMutation } = authApiSlice;