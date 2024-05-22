import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Config } from "@/config";
import { SortOrder } from "@/enums/sort-order.enum";
import { BaseListModel } from "@/interfaces/base-list.model";
import {
  useDeleteProfileInfoMutation,
  useGetallProfileInfoMutation,
} from "@/services/profile-info";
import ProfileInfoModel from "@/interfaces/profile-info/profile-info.model";
import ProfileInfoFilterModel from "@/interfaces/profile-info/profile-info-filter.model";
import { SortByProfileInfo } from "@/enums/profile-info/profile-info.enums";
import { useTranslation } from "react-i18next";

export const useProfileInfo = () => {
  const { t } = useTranslation();
  const [addModal, setAddModal] = useState(false);
  const [updateModal, setUpdateModal] = useState(false);
  const [currentItem, setCurrentItem] = useState<
    ProfileInfoModel | undefined
  >();

  const [query, setQuery] = useState("");

  const [getAllProfileInfo, { data, isLoading: loading }] =
    useGetallProfileInfoMutation();

  const [deleteProfileInfo, { isLoading: isDeleting }] =
    useDeleteProfileInfoMutation();

  const [result, setResult] = useState<BaseListModel<ProfileInfoModel>>();

  const callApiAsync = async () => {
    try {
      const payload: ProfileInfoFilterModel = {
        CurrentPage: 1,
        PageSize: Config.Filter.PageSize,
        SearchTerm: "",
        SortBy: SortByProfileInfo.Name,
        SortOrder: SortOrder.ASC,
      };
      const response = await getAllProfileInfo(payload);
      setResult(response.data);
    } catch (error) {
      console.error("Error fetching profile info:", error);
    }
  };

  useEffect(() => {
    callApiAsync();
  }, []);

  //Modal
  const toggleAddModal = () => {
    setAddModal(!addModal);
  };

  const toggleUpdateModal = (item: ProfileInfoModel) => {
    setUpdateModal(!updateModal);
    setCurrentItem(item);
  };

  const handleDelete = async (id: number) => {
    try {
      await deleteProfileInfo(id);
      toast.success("Delete Profile Info successful.");
      callApiAsync();
    } catch (error) {
      console.error("Error deleting profile info:", error);
      toast.error("Failed to delete profile info.");
    }
  };

  //Search Data
  const searchData = (e: React.ChangeEvent<HTMLInputElement>) => {
    const key = e.target.value;
    setQuery(key);
  };

  // Filtered Items
  const filteredItems = data?.Items?.filter((item: ProfileInfoModel) => {
    return item.JobTitle?.toLowerCase().includes(query.toLowerCase());
  });

  return {
    toggleAddModal,
    toggleUpdateModal,
    handleDelete,
    data,
    searchData,
    query,
    addModal,
    updateModal,
    currentItem,
    filteredItems,
    callApiAsync,
    isDeleting,
    loading,
  };
};
