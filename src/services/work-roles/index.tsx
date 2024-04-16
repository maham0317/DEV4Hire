import api from "@/services/ApiClient";
import WorkRoleModel from "@/interfaces/work-role/work-role.model";
import BaseFilterModel from "@/interfaces/base-filter.model";
import { apiService } from "../api";
import { BaseListModel } from "@/interfaces/base-list.model";
import WorkRoleFilterModel from "@/interfaces/work-role/work-role-filter.model";
const WorkRole = "WorkRole";
const controller = "workrole";
export const workRoleApi = apiService
  .enhanceEndpoints({ addTagTypes: [WorkRole] })
  .injectEndpoints({
    endpoints: (builder) => ({
      // query<ResultType, QueryArg>
      // getAllWorkRole: builder.query<WorkRoleModel[], void>({
      //   query: () => `${controller}/list`,
      //   providesTags: [WorkRole],
      //   transformResponse: (res: WorkRoleModel[]) => {
      //     return res;
      //   },
      // }),
      getallWorkRole: builder.mutation<
        BaseListModel<WorkRoleModel>,
        WorkRoleFilterModel
      >({
        query: (data) => ({
          url: "workrole/list",
          method: "POST",
          body: data,
        }),
      }),
      createWorkRole: builder.mutation({
        query: (data) => ({
          url: "workrole/create",
          method: "POST",
          body: data,
        }),
        // async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        //   queryFulfilled
        //     .then((result) => {
        //       toast.success("Education type created successfully");
        //     })
        //     .catch((error) => {
        //       toast.error("Ther is some error");
        //     });
        // },
        // this invalidatesTags mean will re-run func getAllEducationType, so after we modifying data, the data will be fresh or up to date
        invalidatesTags: ["WorkRole"],
      }),
      updateWorkRole: builder.mutation({
        query: (data) => ({
          url: `workrole/update`,
          method: "PUT",
          body: data,
        }),
        invalidatesTags: ["WorkRole"],
      }),
      deleteWorkRole: builder.mutation({
        query: (id) => ({
          url: `workrole/delete/${id}`,
          method: "DELETE",
        }),
        invalidatesTags: ["WorkRole"],
      }),
    }),
    // this func will refetch the todos when page focused
    //refetchOnFocus: true,
  });

// the use hook below is automaticlly created by reduk toolkit, you just can see the template
// useGetAllTodosQuery is for getAllTodos above, and usePostTodoMutation is for postTodo, etc.
export const {
  useGetallWorkRoleMutation,
  useUpdateWorkRoleMutation,
  useCreateWorkRoleMutation,
  useDeleteWorkRoleMutation,
} = workRoleApi;

//GET
export async function getAllWorkRole(model: BaseFilterModel): Promise<any> {
  let url = `workrole/list`;
  const response: any = await api.post(url, model);
  return response.data;
}
//GET BY ID
export async function getWorkRoleByid(id: number): Promise<any> {
  let url = `workrole/list/${id}`;
  const response: any = await api.get(url);
  return response.data;
}
//DELETE
export async function deleteWorkrole(id: number): Promise<any> {
  let url = `workrole/delete/${id}`;
  const response: any = await api.delete(url);
  return response.data;
}
//UPDATE
export async function updateWorkRole(model: WorkRoleModel): Promise<any> {
  let url = `workrole/update`;
  const response: any = await api.put(url, model);
  return response.data;
}
//CREATE
export async function createWorkrole(model: WorkRoleModel): Promise<any> {
  let url = `workrole/create`;
  const response: any = await api.post(url, model);
  return response.data;
}

export const roleServices = {
  getAllWorkRole,
  updateWorkRole,
  createWorkrole,
  deleteWorkrole,
  getWorkRoleByid,
};
