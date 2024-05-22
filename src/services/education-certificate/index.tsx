import { BaseListModel } from "@/interfaces/base-list.model";
import { apiService } from "../api";
import UserCourseModel from "@/interfaces/user/user-course.model";
import CourseFilterModel from "@/interfaces/user/user-course-filter.model";

const EducaionCertificate = "EducaionCertificate";
export const EducaionCertificateapi = apiService
  .enhanceEndpoints({ addTagTypes: [EducaionCertificate] })
  .injectEndpoints({
    endpoints: (builder) => ({
      getAllEducaionCertificate: builder.mutation<
        BaseListModel<UserCourseModel>,
        CourseFilterModel
      >({
        query: (data) => ({
          url: "profilecourse/list",
          method: "POST",
          body: data,
        }),
      }),

      createEducaionCertificate: builder.mutation({
        query: (data) => ({
          url: "profilecourse/create",
          method: "POST",
          body: data,
        }),
        invalidatesTags: ["EducaionCertificate"],
      }),
      updateEducaionCertificate: builder.mutation({
        query: (data) => ({
          url: `profilecourse/update`,
          method: "PUT",
          body: data,
        }),
        invalidatesTags: ["EducaionCertificate"],
      }),
      deleteEducaionCertificate: builder.mutation({
        query: (id) => ({
          url: `profilecourse/delete/${id}`,
          method: "DELETE",
        }),
        invalidatesTags: ["EducaionCertificate"],
      }),
    }),
  });
export const {
  useGetAllEducaionCertificateMutation,
  useCreateEducaionCertificateMutation,
  useDeleteEducaionCertificateMutation,
  useUpdateEducaionCertificateMutation,
} = EducaionCertificateapi;
