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

  const [getAllIndustryType, { data, isLoading }] =
    useGetAllIndustryTypeMutation();

  const [currentPage, setCurrentPage] = useState(1);
  const onPageChange = async (page: number) => {
    setCurrentPage(page);
  };

  const [deleteIndustryType, { isLoading: isDeleting }] =
    useDeleteIndustryTypeMutation();
  const [result, setResult] = useState<
    BaseListModel<IndustryTypeModel> | undefined
  >();
  const getIndustryTypeAsync = async (searchText: string = "") => {
    const payload: IndustryTypeFilterModel = {
      CurrentPage: currentPage,
      PageSize: Config.Filter.PageSize,
      SearchTerm: searchText,
      SortBy: SortByIndustryType.Name,
      SortOrder: SortOrder.ASC,
    };
    const response = await getAllIndustryType(payload).unwrap();
    setResult(response);
  };

  const upsertIndustryTypeLocally = (model: IndustryTypeModel) => {
    if (!result || !result.Items) {
      return;
    }
    let updatedItems = result.Items.filter((item) => item.Id !== model.Id);
    // Insert model at the start of the array
    updatedItems.unshift(model);

    setResult({
      ...result,
      Items: updatedItems,
    });
  };

  const deleteIndustryTypeLocally = (id: number) => {
    if (!result || !result.Items) {
      return;
    }
    let updatedItems = result.Items.filter((item) => item.Id !== id);
    setResult({
      ...result,
      Items: updatedItems,
    });
  };
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
      toast.success(t("IndustryType.AddOrEdit.Input.Toast.Success.Delete"));
      deleteIndustryTypeLocally(id);
    } catch (error) {
      toast.error(t("IndustryType.AddOrEdit.Input.Toast.ErrorMessage"));
    }
  };

  // Search Data
  const searchData = async (e: any) => {
    const key = e.target.value;
    await getIndustryTypeAsync(key);
  };

  // Filtered Items
  const filteredItems = data?.Items?.filter((item: IndustryTypeModel) => {
    return item.IndustryName.toLowerCase().includes(query.toLowerCase());
  });

  useEffect(() => {
    getIndustryTypeAsync();
  }, [currentPage]);
  return {
    toggleAddModal,
    toggleUpdateModal,
    handleDelete,
    isLoading,
    searchData,
    query,
    addModal,
    updateModal,
    currentItem,
    filteredItems,
    upsertIndustryTypeLocally,
    onPageChange,
    result,
  };
};
