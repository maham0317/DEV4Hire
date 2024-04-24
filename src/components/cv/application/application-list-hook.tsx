import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Config } from "@/config";
import { SortOrder } from "@/enums/sort-order.enum";
import { SortByapplicationandbusinessfocus } from "@/enums/application-and-business-focus.ts/application-and-business-focus.enum";
import {
  useDeleteProfileApplicationAndBusinessFocusMutation,
  useGetAllProfileApplicationAndBusinessFocusMutation,
  useUpdateProfileApplicationAndBusinessFocusMutation,
} from "@/services/application-and-business-focus";
import { BaseListModel } from "@/interfaces/base-list.model";
import ApplicatioonFilterModel from "@/interfaces/user/user-application-filter.model";
import { ApplicationAndBusinessFocusModel } from "@/interfaces/application-and-business-focus/application-and-business-focus.model";

export const useApplicationAndBusinessFocus = () => {
  const [query, setQuery] = useState("");
  const [updateModal, setUpdateModal] = useState(false);
  const [currentItem, setCurrentItem] =
    useState<ApplicationAndBusinessFocusModel>();
  const [addModal, setAddModal] = useState(false);

  const [getAllApplicationAndBusinessFocus, { data, isLoading }] =
    useGetAllProfileApplicationAndBusinessFocusMutation();
  const [deleteApplicationAndBusinessFocus] =
    useDeleteProfileApplicationAndBusinessFocusMutation();
  const [updateApplicationAndBusinessFocus] =
    useUpdateProfileApplicationAndBusinessFocusMutation();

  const [result, setResult] =
    useState<BaseListModel<ApplicationAndBusinessFocusModel>>();

  useEffect(() => {
    callApiAsync();
  }, []);

  const callApiAsync = async () => {
    try {
      const payload: ApplicatioonFilterModel = {
        CurrentPage: 1,
        PageSize: Config.Filter.PageSize,
        SearchTerm: "",
        SortBy: SortByapplicationandbusinessfocus.Name,
        SortOrder: SortOrder.ASC,
      };
      const data = await getAllApplicationAndBusinessFocus(payload);
      setResult(data);
    } catch (error) {
      console.error(
        "Error fetching application and business focus data:",
        error
      );
      toast.error("Error fetching application and business focus data");
    }
  };

  const toggleAddModal = () => {
    setAddModal(!addModal);
  };

  const handleDelete = async (id: number) => {
    try {
      await deleteApplicationAndBusinessFocus(id);
      toast.success("Application deleted successfully");
      callApiAsync();
    } catch (error) {
      console.error("Error deleting application and business focus:", error);
      toast.error("Error deleting application and business focus");
    }
  };

  const toggleUpdateModal = (item: ApplicationAndBusinessFocusModel) => {
    setCurrentItem(item);
    setUpdateModal(true);
  };

  const filteredItems = data?.Items.filter(
    (item: ApplicationAndBusinessFocusModel) => {
      return item.ApplicationOrBusiness.toLowerCase().includes(
        query.toLowerCase()
      );
    }
  );

  const updateApplication = async (data: ApplicationAndBusinessFocusModel) => {
    try {
      await updateApplicationAndBusinessFocus(data);
      toast.success("Application and business focus updated successfully");
      callApiAsync();
    } catch (error) {
      console.error("Error updating application and business focus:", error);
      toast.error("Error updating application and business focus");
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
    updateApplication,
  };
};
