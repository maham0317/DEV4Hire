import UserCourseModel from "@/interfaces/user/user-course.model";

import { useEffect, useState } from "react";
import { BaseListModel } from "@/interfaces/base-list.model";
import CourseFilterModel from "@/interfaces/user/user-course-filter.model";
import { Config } from "@/config";
import { SortOrder } from "@/enums/sort-order.enum";
import { toast } from "react-toastify";
import { SortByCourse } from "@/enums/course/course.enum";
import {
  useDeleteProfileApplicationAndBusinessFocusMutation,
  useGetAllProfileApplicationAndBusinessFocusMutation,
} from "@/services/application-and-business-focus";
import { ApplicationAndBusinessFocusModel } from "@/interfaces/application-and-business-focus/application-and-business-focus.model";
import ApplicatioonFilterModel from "@/interfaces/user/user-application-filter.model";
import { SortByapplicationandbusinessfocus } from "@/enums/application-and-business-focus.ts/application-and-business-focus.enum";
export const useApplicationAndBusinessFocus = () => {
  const [query, setQuery] = useState("");

  const [currentItem, setCurrentItem] =
    useState<ApplicationAndBusinessFocusModel>();

  const [getAllApplicationAndBusinessFocus, { data, isLoading: loading }] =
    useGetAllProfileApplicationAndBusinessFocusMutation();

  const [deleteApplicationAndBusinessFocus, { isLoading: isDeleteing }] =
    useDeleteProfileApplicationAndBusinessFocusMutation();

  const [result, setResult] =
    useState<BaseListModel<ApplicationAndBusinessFocusModel>>();

  const callApiAsync = async () => {
    const payload: ApplicatioonFilterModel = {
      CurrentPage: 1,
      PageSize: Config.Filter.PageSize,
      SearchTerm: "",
      SortBy: SortByapplicationandbusinessfocus.Name,
      SortOrder: SortOrder.ASC,
    };
    var data = await getAllApplicationAndBusinessFocus(payload);
    setResult(data);
  };

  useEffect(() => {
    callApiAsync();
  }, []);

  const handleDelete = async (id: number) => {
    try {
      await deleteApplicationAndBusinessFocus(id);
      toast.success("Application delete successfully.");
      callApiAsync();
    } catch (error) {
      toast.error("There is some error.");
    }
  };

  const filteredItems = data?.Items.filter(
    (items: ApplicationAndBusinessFocusModel) => {
      return items.ApplicationOrBusiness.toLowerCase().includes(
        query.toLowerCase()
      );
    }
  );

  return {
    data,
    query,
    currentItem,
    filteredItems,
    callApiAsync,
    handleDelete,
  };
};
