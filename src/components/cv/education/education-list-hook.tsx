import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import UserCourseModel from "@/interfaces/user/user-course.model";
import CourseFilterModel from "@/interfaces/user/user-course-filter.model";
import { Config } from "@/config";
import { SortOrder } from "@/enums/sort-order.enum";
import { SortByCourse } from "@/enums/course/course.enum";
import {
  useDeleteCourseMutation,
  useGetAllProfileCourseMutation,
  useUpdateCourseMutation,
} from "@/services/profilecourse";
import { BaseListModel } from "@/interfaces/base-list.model";

export const useCourse = () => {
  const [query, setQuery] = useState("");
  const [updateModal, setUpdateModal] = useState(false);
  const [currentItem, setCurrentItem] = useState<UserCourseModel>();
  const [addModal, setAddModal] = useState(false);

  const [getAllProfileCourse, { data, isLoading }] =
    useGetAllProfileCourseMutation();
  const [deleteCourse] = useDeleteCourseMutation();
  const [updateCourseMutation] = useUpdateCourseMutation();

  const [result, setResult] = useState<BaseListModel<UserCourseModel>>();

  useEffect(() => {
    callApiAsync();
  }, []);

  const callApiAsync = async () => {
    try {
      const payload: CourseFilterModel = {
        CurrentPage: 1,
        PageSize: Config.Filter.PageSize,
        SearchTerm: "",
        SortBy: SortByCourse.Name,
        SortOrder: SortOrder.ASC,
      };
      const data = await getAllProfileCourse(payload);
      setResult(data);
    } catch (error) {
      console.error("Error fetching course data:", error);
      toast.error("Error fetching course data");
    }
  };

  const toggleAddModal = () => {
    setAddModal(!addModal);
  };

  const handleDelete = async (id: number) => {
    try {
      await deleteCourse(id);
      toast.success("Course deleted successfully");
      callApiAsync();
    } catch (error) {
      console.error("Error deleting course:", error);
      toast.error("Error deleting course");
    }
  };

  const toggleUpdateModal = (item: UserCourseModel) => {
    setCurrentItem(item);
    setUpdateModal(true);
  };

  const filteredItems = data?.Items.filter((item: UserCourseModel) => {
    return item.CourseName.toLowerCase().includes(query.toLowerCase());
  });

  const updateCourse = async (data: UserCourseModel) => {
    try {
      await updateCourseMutation(data);
      toast.success("Course updated successfully");
      callApiAsync();
    } catch (error) {
      console.error("Error updating course:", error);
      toast.error("Error updating course");
    }
  };

  return {
    toggleAddModal,
    toggleUpdateModal,
    data,
    addModal,
    query,
    currentItem,
    filteredItems,
    callApiAsync,
    updateModal,
    handleDelete,
    updateCourse,
  };
};
