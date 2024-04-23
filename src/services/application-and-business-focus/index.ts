import { BaseListModel } from "@/interfaces/base-list.model";
import { apiService } from "../api";
import api from "@/services/ApiClient";
import UserCourseModel from "@/interfaces/user/user-course.model";
import CourseFilterModel from "@/interfaces/user/user-course-filter.model";
import { url } from "inspector";
import BaseFilterModel from "@/interfaces/base-filter.model";
import ApplicatioonFilterModel from "@/interfaces/user/user-application-filter.model";
const ApplicationAndBusinessFocus = "ApplicationAndBusinessFocus";
export const applicationandbusinessfocusapi = apiService
  .enhanceEndpoints({ addTagTypes: [ApplicationAndBusinessFocus] })
  .injectEndpoints({
    endpoints: (builder) => ({
      getAllProfileApplicationAndBusinessFocus: builder.mutation<
        BaseListModel<UserCourseModel>,
        ApplicatioonFilterModel
      >({
        query: (data) => ({
          url: "profileapplicationandbusinessfocus/list",
          method: "POST",
          body: data,
        }),
      }),

      createProfileApplicationAndBusinessFocus: builder.mutation({
        query: (data) => ({
          url: "profileapplicationandbusinessfocus/create",
          method: "POST",
          body: data,
        }),
        invalidatesTags: ["ApplicationAndBusinessFocus"],
      }),
      updateProfileApplicationAndBusinessFocus: builder.mutation({
        query: (data) => ({
          url: `profileapplicationandbusinessfocus/update`,
          method: "PUT",
          body: data,
        }),
        invalidatesTags: ["ApplicationAndBusinessFocus"],
      }),
      deleteProfileApplicationAndBusinessFocus: builder.mutation({
        query: (id) => ({
          url: `profileapplicationandbusinessfocus/delete/${id}`,
          method: "DELETE",
        }),
        invalidatesTags: ["ApplicationAndBusinessFocus"],
      }),
    }),
  });
export const {
  useGetAllProfileApplicationAndBusinessFocusMutation,
  useCreateProfileApplicationAndBusinessFocusMutation,
  useDeleteProfileApplicationAndBusinessFocusMutation,
  useUpdateProfileApplicationAndBusinessFocusMutation,
} = applicationandbusinessfocusapi;
