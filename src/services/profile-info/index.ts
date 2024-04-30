import { apiService } from "../api";
import { BaseListModel } from "@/interfaces/base-list.model";
import ProfileInfoModel from "@/interfaces/profile-info/profile-info.model";
import ProfileInfoFilterModel from "@/interfaces/profile-info/profile-info-filter.model";
const ProfileInfo = "ProfileInfo";

export const ProfileInfoApi = apiService
  .enhanceEndpoints({ addTagTypes: [ProfileInfo] })
  .injectEndpoints({
    endpoints: (builder) => ({
      getallProfileInfo: builder.mutation<
        BaseListModel<ProfileInfoModel>,
        ProfileInfoFilterModel
      >({
        query: (data) => ({
          url: "proficiency/list",
          method: "POST",
          body: data,
        }),
      }),
      getProfileInfoById: builder.query<ProfileInfoModel, Number>({
        query: (id) => ({
          url: `profileinfo/list/${id}`,
          transformResponse: (response: { data: ProfileInfoModel }) =>
            response.data,
          transformErrorResponse: (response: { status: string | number }) =>
            response.status,
        }),
      }),
      createProfileInfo: builder.mutation({
        query: (data) => ({
          url: "profileinfo/create",
          method: "POST",
          body: data,
        }),
        invalidatesTags: ["ProfileInfo"],
      }),
      updateProfileInfo: builder.mutation({
        query: (data) => ({
          url: `profileinfo/update`,
          method: "PUT",
          body: data,
        }),
        invalidatesTags: ["ProfileInfo"],
      }),
      deleteProfileInfo: builder.mutation({
        query: (id) => ({
          url: `profileinfo/delete/${id}`,
          method: "DELETE",
        }),
        invalidatesTags: ["ProfileInfo"],
      }),
    }),
  });
export const {
  useGetallProfileInfoMutation,
  useGetProfileInfoByIdQuery,
  useCreateProfileInfoMutation,
  useUpdateProfileInfoMutation,
  useDeleteProfileInfoMutation,
} = ProfileInfoApi;
