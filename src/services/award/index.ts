import { AwardModel } from "@/interfaces/award/award.model";
import { BaseListModel } from "@/interfaces/base-list.model";
import { apiService } from "../api";
import AwardFilterModel from "@/interfaces/award/award.filter.model";
const Award = "Award";
export const awardapi = apiService
  .enhanceEndpoints({ addTagTypes: [Award] })
  .injectEndpoints({
    endpoints: (builder) => ({
      getAllProfileAward: builder.mutation<
        BaseListModel<AwardModel>,
        AwardFilterModel
      >({
        query: (data) => ({
          url: "profileaward/list",
          method: "POST",
          body: data,
        }),
      }),

      createProfileAward: builder.mutation({
        query: (data) => ({
          url: "profileaward/create",
          method: "POST",
          body: data,
        }),
        invalidatesTags: ["Award"],
      }),
      getAwardById: builder.query<AwardModel, Number>({
        query: (id) => ({
          url: `profileaward/list/${id}`,
          transformResponse: (response: { data: AwardModel }) => response.data,
          transformErrorResponse: (response: { status: string | number }) =>
            response.status,
        }),
      }),
      updateProfileAward: builder.mutation({
        query: (data) => ({
          url: `profileaward/update`,
          method: "PUT",
          body: data,
        }),
        invalidatesTags: ["Award"],
      }),
      deleteProfileAward: builder.mutation({
        query: (id) => ({
          url: `profileaward/delete/${id}`,
          method: "DELETE",
        }),
        invalidatesTags: ["Award"],
      }),
    }),
  });
export const {
  useGetAllProfileAwardMutation,
  useCreateProfileAwardMutation,
  useDeleteProfileAwardMutation,
  useUpdateProfileAwardMutation,
  useGetAwardByIdQuery,
} = awardapi;
