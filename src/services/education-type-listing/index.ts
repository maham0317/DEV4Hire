import { apiService } from "../api";
import { BaseListModel } from "@/interfaces/base-list.model";
import EducationTypeModel, {
  EducationTypeFilterModel,
} from "@/interfaces/education-type-listing";

export const educationTypeApi = apiService
  .enhanceEndpoints({ addTagTypes: ["EducationType"] })
  .injectEndpoints({
    endpoints: (builder) => ({
      getAllEducationType: builder.mutation<
        BaseListModel<EducationTypeModel>,
        EducationTypeFilterModel
      >({
        query: (data) => ({
          url: "educationtype/list",
          method: "POST",
          body: data,
        }),
      }),
      getEducationTypeById: builder.query<EducationTypeModel, Number>({
        query: (id) => ({
          url: `educationtype/list/${id}`,
          transformResponse: (response: { data: EducationTypeModel }) =>
            response.data,
          transformErrorResponse: (response: { status: string | number }) =>
            response.status,
        }),
      }),
      createEducationType: builder.mutation({
        query: (data) => ({
          url: "educationtype/create",
          method: "POST",
          body: data,
        }),
        invalidatesTags: ["EducationType"],
      }),
      updateEducationType: builder.mutation({
        query: (data) => ({
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

export const {
  useGetAllEducationTypeMutation,
  useCreateEducationTypeMutation,
  useUpdateEducationTypeMutation,
  useDeleteEducationTypeMutation,
  useGetEducationTypeByIdQuery,
} = educationTypeApi;
