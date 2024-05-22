import { apiService } from '../api';
import { BaseListModel } from '@/interfaces/base-list.model';
import { IndustryTypeModel, IndustryTypeFilterModel } from '@/interfaces/industry-type-listing';

const industryTypeApi = apiService.enhanceEndpoints({ addTagTypes: ['IndustryType'] }).injectEndpoints({
    endpoints: (builder) => ({
        getAllIndustryType: builder.mutation<BaseListModel<IndustryTypeModel>, IndustryTypeFilterModel>({
            query: data=> ({
                url: 'industrytype/list',
                method: 'POST',
                body: data,
            })
        }),
        getIndustryTypeById: builder.query<IndustryTypeModel, Number>({
            query: id=> ({
                url: `industrytype/list/${id}`,
                transformResponse: (response: { data: IndustryTypeModel })=> response.data,
                transformErrorResponse: (response: { status: string | number })=> response.status
            })
        }),
        createIndustryType: builder.mutation({
            query: data=> ({
                url: 'industrytype/create',
                method: 'POST',
                body: data,
            }),
            invalidatesTags: ['IndustryType'],
        }),
        updateIndustryType: builder.mutation({
            query: (data) => ({
            url: `industrytype/update`,
            method: 'PUT',
            body: data,
            }),
            invalidatesTags: ['IndustryType'],
        }),
        deleteIndustryType: builder.mutation({
            query: (id) => ({
            url: `industrytype/delete/${id}`,
            method: 'DELETE',
            }),
            invalidatesTags: ['IndustryType'],
        }),
    }),
    // this func will refetch the todos when page focused
    //refetchOnFocus: true,
  });

export const { useGetAllIndustryTypeMutation, useCreateIndustryTypeMutation, useUpdateIndustryTypeMutation, useDeleteIndustryTypeMutation, useGetIndustryTypeByIdQuery } = industryTypeApi;
