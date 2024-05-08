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
import {
  useDeleteProficiencyMutation,
  useGetallProficiencyMutation,
} from "@/services/proficiency";
import ProficiencyModel from "@/interfaces/setup/proficiency.model";
import ProficiencyFilterModel from "@/interfaces/setup/proficiency-filter.model";
import { SortByProficiency } from "@/enums/proficiency/proficiency.enum";

export const useProficiency = () => {
  const { t } = useTranslation();
  const [addModal, setAddModal] = useState(false);
  const [updateModal, setUpdateModal] = useState(false);
  const [currentItem, setCurrentItem] = useState<ProficiencyModel>();

  const [query, setQuery] = useState("");

  const [getAllProficiency, { data, isLoading }] =
    useGetallProficiencyMutation();

  const [deleteProficiency, { isLoading: isDeleteing }] =
    useDeleteProficiencyMutation();
  const [currentPage, setCurrentPage] = useState(1);
  const onPageChange = async (page: number) => {
    setCurrentPage(page);
  };
  const [result, setResult] = useState<
    BaseListModel<ProficiencyModel> | undefined
  >();
  const getProficiencyAsyc = async (searchText: string = "") => {
    const payload: ProficiencyFilterModel = {
      CurrentPage: currentPage,
      PageSize: Config.Filter.PageSize,
      SearchTerm: searchText,
      SortBy: SortByProficiency.Name,
      SortOrder: SortOrder.ASC,
    };
    const response = await getAllProficiency(payload).unwrap();
    setResult(response);
  };

  const upsertProficiencyLocally = (model: ProficiencyModel) => {
    if (!result || !result.Items) {
      return;
    }
    let updatedItems = result.Items.filter((item) => item.Id !== model.Id);
    updatedItems.unshift(model);
    setResult({
      ...result,
      Items: updatedItems,
    });
  };

  const deleteProficiencyLocally = (id: number) => {
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
  const toggleUpdateModal = (item: ProficiencyModel) => {
    setUpdateModal(!updateModal);
    setCurrentItem(item);
  };

  const handleDelete = async (id: number) => {
    try {
      await deleteProficiency(id);
      toast.success(t("Proficiency.AddOrEdit.Input.Toast.Success.Delete"));
      deleteProficiencyLocally(id);
    } catch (e: any) {
      toast.error(t("Proficiency.AddOrEdit.Input.Toast.ErrorMessage"));
    }
  };

  //Search Data
  const searchData = async (e: any) => {
    const key = e.target.value;
    await getProficiencyAsyc(key);
  };

  // Filtered Items
  const filteredItems = data?.Items?.filter((item: ProficiencyModel) => {
    return item.Name.toLowerCase().includes(query.toLowerCase());
  });
  // useEffect(() => {
  //   if (result?.Items?.length > 2) {
  //     setResult({
  //       ...result,
  //       Items: result?.Items?.slice(0, 2)
  //     });
  //   }
  // }, [result]);
  if ((result?.Items?.length ?? 0) > 2) {
    setResult({
        ...result,
        Items: result?.Items?.slice(0, 2),
    });
}
  useEffect(() => {
    getProficiencyAsyc();
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
    upsertProficiencyLocally,
    onPageChange,
    result,
  };
};
