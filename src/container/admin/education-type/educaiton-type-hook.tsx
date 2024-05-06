import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Config } from "@/config";
import { SortOrder } from "@/enums/sort-order.enum";
import { BaseListModel } from "@/interfaces/base-list.model";
import EducationTypeModel from "@/interfaces/setup/education-type.model";
import {
  useDeleteEducationTypeMutation,
  useGetallEducationTypeMutation,
} from "@/services/education-type";
import EducationTypeFilterModel from "@/interfaces/setup/education-type-filter.model";
import { SortByEducationType } from "@/enums/education-type/education.enum";
import { useTranslation } from "react-i18next";

export const useEducation = () => {
  const { t } = useTranslation();
  const [addModal, setAddModal] = useState(false);
  const [updateModal, setUpdateModal] = useState(false);
  const [currentItem, setCurrentItem] = useState<EducationTypeModel>();

  const [query, setQuery] = useState("");

  const [getAllEducationType, { data, isLoading }] =
    useGetallEducationTypeMutation();

  const [deleteEducationType, { isLoading: isDeleteing }] =
    useDeleteEducationTypeMutation();
  const [currentPage, setCurrentPage] = useState(1);
  const onPageChange = async (page: number) => {
    setCurrentPage(page);
  };
  const [result, setResult] = useState<
    BaseListModel<EducationTypeModel> | undefined
  >();
  const getEducationTypeAsyc = async (searchText: string = "") => {
    const payload: EducationTypeFilterModel = {
      CurrentPage: currentPage,
      PageSize: Config.Filter.PageSize,
      SearchTerm: searchText,
      SortBy: SortByEducationType.Name,
      SortOrder: SortOrder.ASC,
    };
    const response = await getAllEducationType(payload).unwrap();
    setResult(response);
  };

  const upsertEducationTypeLocally = (model: EducationTypeModel) => {
    if (!result || !result.Items) {
      return;
    }
    let updatedItems = result.Items.filter((item) => item.Id !== model.Id);
    setResult({
      ...result,
      Items: updatedItems,
    });
  };

  const deleteEducationTypeLocally = (id: number) => {
    if (!result || !result.Items) {
      return;
    }
    let updatedItems = result.Items.filter((item) => item.Id !== id);
    setResult({
      ...result,
      Items: updatedItems,
    });
  };

  //Modal
  const toggleAddeModal = () => {
    setAddModal(!addModal);
  };
  const toggleUpdateModal = (item: EducationTypeModel) => {
    setUpdateModal(!updateModal);
    setCurrentItem(item);
  };

  const handleDelete = async (id: number) => {
    try {
      await deleteEducationType(id);
      toast.success(t("EducationType.AddOrEdit.Input.Toast.Success.Delete"));
      deleteEducationTypeLocally(id);
    } catch (e: any) {
      toast.error(t("EducationType.AddOrEdit.Input.Toast.ErrorMessage"));
    }
  };

  //Search Data
  const searchData = async (e: any) => {
    const key = e.target.value;
    await getEducationTypeAsyc(key);
  };

  // Filtered Items
  const filteredItems = data?.Items?.filter((item: EducationTypeModel) => {
    return item.Name.toLowerCase().includes(query.toLowerCase());
  });
  useEffect(() => {
    getEducationTypeAsyc();
  }, [currentPage]);

  return {
    toggleAddeModal,
    toggleUpdateModal,
    handleDelete,
    data,
    searchData,
    query,
    addModal,
    updateModal,
    currentItem,
    filteredItems,
    isLoading,
    upsertEducationTypeLocally,
    onPageChange,
    result,
  };
};
