import { apiService } from "../api";
import { BaseListModel } from "@/interfaces/base-list.model";
import ProficiencyModel, {
  ProficiencyFilterModel,
} from "@/interfaces/proficiency-listing";

const proficiencyApi = apiService
  .enhanceEndpoints({ addTagTypes: ["Proficiency"] })
  .injectEndpoints({
    endpoints: (builder) => ({
      getAllProficiency: builder.mutation<
        BaseListModel<ProficiencyModel>,
        ProficiencyFilterModel
      >({
        query: (data) => ({
          url: "proficiency/list",
          method: "POST",
          body: data,
        }),
      }),
      getProficiencyById: builder.query<ProficiencyModel, Number>({
        query: (id) => ({
          url: `proficiency/list/${id}`,
          transformResponse: (response: { data: ProficiencyModel }) =>
            response.data,
          transformErrorResponse: (response: { status: string | number }) =>
            response.status,
        }),
      }),
      createProficiency: builder.mutation({
        query: (data) => ({
          url: "proficiency/create",
          method: "POST",
          body: data,
        }),
        invalidatesTags: ["Proficiency"],
      }),
      updateProficiency: builder.mutation({
        query: (data) => ({
          url: `proficiency/update`,
          method: "PUT",
          body: data,
        }),
        invalidatesTags: ["Proficiency"],
      }),
      deleteProficiency: builder.mutation({
        query: (id) => ({
          url: `proficiency/delete/${id}`,
          method: "DELETE",
        }),
        invalidatesTags: ["Proficiency"],
      }),
    }),
    // this func will refetch the todos when page focused
    //refetchOnFocus: true,
  });

export const {
  useGetAllProficiencyMutation,
  useCreateProficiencyMutation,
  useUpdateProficiencyMutation,
  useDeleteProficiencyMutation,
  useGetProficiencyByIdQuery,
} = proficiencyApi;
