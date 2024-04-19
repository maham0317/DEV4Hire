import { useEffect, useState } from "react";
import WorkRoleModel from "@/interfaces/work-role/work-role.model";
import { toast } from "react-toastify";
import {
  useDeleteWorkRoleMutation,
  useGetallWorkRoleMutation,
} from "@/services/work-roles/index";
import WorkRoleFilterModel from "@/interfaces/work-role/work-role-filter.model";
import { Config } from "@/config";
import { SortByWorkRole } from "@/enums/work-role/work-role.enum";
import { SortOrder } from "@/enums/sort-order.enum";
import { BaseListModel } from "@/interfaces/base-list.model";
import { IndustryTypeModel } from "@/interfaces/industry-type/industry-type.model";
import IndustryTypeFilterModel from "@/interfaces/industry-type/industry-type-filter.model";
import { SortByIndustryType } from "@/enums/industry-type/industry-type.enum";
import {
  useDeleteIndustryTypeMutation,
  useGetAllIndustryTypeMutation,
} from "@/services/industry-type";
import { useTranslation } from "react-i18next";
export const useIndustryType = () => {
  const [addModal, setAddModal] = useState(false);
  const [updateModal, setUpdateModal] = useState(false);
  const [currentItem, setCurrentItem] = useState<IndustryTypeModel>();
  const { t } = useTranslation();
  const [query, setQuery] = useState("");

  const [getAllIndustryType, { data, isLoading: loading }] =
    useGetAllIndustryTypeMutation();

  const [deleteIndustryType, { isLoading: isDeleting }] =
    useDeleteIndustryTypeMutation();
  const [result, setResult] = useState<
    BaseListModel<IndustryTypeModel> | undefined
  >();
  const callApiAsync = async () => {
    const payload: IndustryTypeFilterModel = {
      CurrentPage: 1,
      PageSize: Config.Filter.PageSize,
      SearchTerm: "",
      SortBy: SortByIndustryType.Name,
      SortOrder: SortOrder.ASC,
    };
    var data = await getAllIndustryType(payload);
    setResult(data);
  };

  useEffect(() => {
    callApiAsync();
  }, []);

  // Modal
  const toggleAddModal = () => {
    setAddModal(!addModal);
  };

  const toggleUpdateModal = (item: IndustryTypeModel) => {
    setUpdateModal(!updateModal);
    setCurrentItem(item);
  };

  // Delete industry type
  const handleDelete = async (id: number) => {
    try {
      await deleteIndustryType(id);
      toast.success(t("IndustryType.AddOrEdit.Input.Toast.DeleteMessage"));
      callApiAsync();
    } catch (error) {
      console.error("Error deleting industry type:", error);
      toast.error(t("IndustryType.AddOrEdit.Input.Toast.ErrorMessage"));
    }
  };

  // Search Data
  const searchData = (e: any) => {
    const key = e.target.value;
    setQuery(key);
  };

  // Filtered Items
  const filteredItems = data?.Items?.filter((item: IndustryTypeModel) => {
    return item.IndustryName.toLowerCase().includes(query.toLowerCase());
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
  };
};
