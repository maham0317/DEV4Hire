import EducationTypeModel from "@/interfaces/setup/education-type.model";
import api from "@/services/ApiClient";
import { apiService } from "../api";
import { BaseListModel } from "@/interfaces/base-list.model";
import EducationTypeFilterModel from "@/interfaces/setup/education-type-filter.model";

export const educationTypeApi = apiService
  .enhanceEndpoints({ addTagTypes: ["EducationType"] })
  .injectEndpoints({
    endpoints: (builder) => ({
      // query<ResultType, QueryArg>
      getallEducationType: builder.mutation<
        BaseListModel<EducationTypeModel>,
        EducationTypeFilterModel
      >({
        query: (data) => ({
          url: "educationtype/list",
          method: "POST",
          body: data,
        }),
      }),

      createEducationType: builder.mutation({
        query: (data) => ({
          url: "educationtype/create",
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
        invalidatesTags: ["EducationType"],
      }),
      updateEducationType: builder.mutation({
        query: ({ id, data }) => ({
          url: `educationtype/update`,
          method: "PUT",
          body: data,
        }),
        invalidatesTags: ["EducationType"],
      }),
      deleteEducationType: builder.mutation({
        query: (id) => ({
          url: `educationtype/delete/${id}`,
          method: "DELETE",
        }),
        invalidatesTags: ["EducationType"],
      }),
    }),
    // this func will refetch the todos when page focused
    //refetchOnFocus: true,
  });

// the use hook below is automaticlly created by reduk toolkit, you just can see the template
// useGetAllTodosQuery is for getAllTodos above, and usePostTodoMutation is for postTodo, etc.
export const {
  useGetallEducationTypeMutation,
  useCreateEducationTypeMutation,
  useUpdateEducationTypeMutation,
  useDeleteEducationTypeMutation,
} = educationTypeApi;

export async function getAllEducationType(): Promise<any> {
  let url = `educationtype/list`;
  const response: any = await api.get(url);
  return response.data;
}

export async function getEducationTypeById(id: number): Promise<any> {
  let url = `educationtype/list/${id}`;
  const response: any = await api.get(url);
  return response.data;
}

export async function deleteEducationTypeById(id: number): Promise<any> {
  let url = `educationtype/delete/${id}`;
  const response: any = await api.delete(url);
  return response.data;
}

export async function updateEducationTypeById(id: number): Promise<any> {
  let url = `educationtype/update/${id}`;
  const response: any = await api.put(url);
  return response.data;
}

export async function createEducationType(
  data: EducationTypeModel
): Promise<any> {
  let url = `educationtype/create`;
  const response: any = await api.post(url, data);
  return response.data;
}

export const educationService = {
  getAllEducationType,
  getEducationTypeById,
  deleteEducationTypeById,
  updateEducationTypeById,
  createEducationType,
};
