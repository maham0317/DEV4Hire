import { apiService } from '../api';
import { BaseListModel } from '@/interfaces/base-list.model';
import { WorkRoleModel, WorkRoleFilterModel } from '@/interfaces/work-role-listing';

const WorkRoleApi = apiService.enhanceEndpoints({ addTagTypes: ['WorkRole'] }).injectEndpoints({
    endpoints: (builder) => ({
        getAllWorkRole: builder.mutation<BaseListModel<WorkRoleModel>, WorkRoleFilterModel>({
            query: data=> ({
                url: 'workrole/list',
                method: 'POST',
                body: data,
            })
        }),
        getWorkRoleById: builder.query<WorkRoleModel, Number>({
            query: id=> ({
                url: `workrole/list/${id}`,
                transformResponse: (response: { data: WorkRoleModel })=> response.data,
                transformErrorResponse: (response: { status: string | number })=> response.status
            })
        }),
        createWorkRole: builder.mutation({
            query: data=> ({
                url: 'workrole/create',
                method: 'POST',
                body: data,
            }),
            invalidatesTags: ['WorkRole'],
        }),
        updateWorkRole: builder.mutation({
            query: (data) => ({
            url: `workrole/update`,
            method: 'PUT',
            body: data,
            }),
            invalidatesTags: ['WorkRole'],
        }),
        deleteWorkRole: builder.mutation({
            query: (id) => ({
            url: `workrole/delete/${id}`,
            method: 'DELETE',
            }),
            invalidatesTags: ['WorkRole'],
        }),
    }),
    // this func will refetch the todos when page focused
    //refetchOnFocus: true,
  });

export const { useGetAllWorkRoleMutation, useCreateWorkRoleMutation, useUpdateWorkRoleMutation, useDeleteWorkRoleMutation, useGetWorkRoleByIdQuery } = WorkRoleApi;
