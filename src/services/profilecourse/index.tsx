import { BaseListModel } from "@/interfaces/base-list.model";
import { apiService } from "../api";
import UserCourseModel from "@/interfaces/user/user-course.model";
import CourseFilterModel from "@/interfaces/user/user-course-filter.model";

const Course = "Course";
export const courseapi = apiService
  .enhanceEndpoints({ addTagTypes: [Course] })
  .injectEndpoints({
    endpoints: (builder) => ({
      getAllProfileCourse: builder.mutation<
        BaseListModel<UserCourseModel>,
        CourseFilterModel
      >({
        query: (data) => ({
          url: "profilecourse/list",
          method: "POST",
          body: data,
        }),
      }),

      createCourse: builder.mutation({
        query: (data) => ({
          url: "profilecourse/create",
          method: "POST",
          body: data,
        }),
        invalidatesTags: ["Course"],
      }),
      updateCourse: builder.mutation({
        query: (data) => ({
          url: `profilecourse/update`,
          method: "PUT",
          body: data,
        }),
        invalidatesTags: ["Course"],
      }),
      deleteCourse: builder.mutation({
        query: (id) => ({
          url: `profilecourse/delete/${id}`,
          method: "DELETE",
        }),
        invalidatesTags: ["Course"],
      }),
    }),
  });
export const {
  useGetAllProfileCourseMutation,
  useCreateCourseMutation,
  useDeleteCourseMutation,
  useUpdateCourseMutation,
} = courseapi;
