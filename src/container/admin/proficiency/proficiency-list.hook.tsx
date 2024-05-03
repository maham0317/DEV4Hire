import { useEffect, useState } from "react";
import ProficiencyModel from "@/interfaces/setup/proficiency.model";
import { toast } from "react-toastify";
import {
  useDeleteProficiencyMutation,
  useGetallProficiencyMutation,
} from "@/services/proficiency/index";
import ProficiencyFilterModel from "@/interfaces/setup/proficiency-filter.model";
import { Config } from "@/config";
import { SortOrder } from "@/enums/sort-order.enum";
import { BaseListModel } from "@/interfaces/base-list.model";
import { SortByProficiency } from "@/enums/proficiency/proficiency.enum";
import { useTranslation } from "react-i18next";
export const useProficiency = () => {
  const [addModal, setAddModal] = useState(false);
  const [updateModal, setUpdateModal] = useState(false);
  const [currentItem, setCurrentItem] = useState<ProficiencyModel>();
  const { t } = useTranslation();
  const [query, setQuery] = useState("");

  const [getAllProficiency, { data, isLoading }] =
    useGetallProficiencyMutation();

  const [deleteProficiency, { isLoading: isDeleteing }] =
    useDeleteProficiencyMutation();
  const [result, setResult] = useState<
    BaseListModel<ProficiencyModel> | undefined
  >();
  const [currentPage, setCurrentPage] = useState(1);
  const onPageChange = async (page: number) => {
    setCurrentPage(page);
  };
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
    // Insert model at the start of the array
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
      toast.success(t("Proficiency.AddOrEdit.Input.Toast.DeleteMessage"));
      deleteProficiencyLocally(id);
    } catch (e: any) {
      toast.error(t("Proficiency.AddOrEdit.Input.Toast.ErrorMessage"));
    }
  };

  //Search Data
  const searchData = async (e: any) => {
    const key = e.target.value;
    // setQuery(key);

    // Synchronous check for filtered items
    // const hasMatchingItem = result?.Items?.some(
    //   (x) => key && x.WorkRoleName.includes(key)
    // );

    // If there are matching items, return early
    // if (hasMatchingItem) return;
    // Asynchronous fetch if no matching item found
    await getProficiencyAsyc(key);
  };

  // Filtered Items
  const filteredItems = data?.Items?.filter((item: ProficiencyModel) => {
    return item.Name.toLowerCase().includes(query.toLowerCase());
  });

  useEffect(() => {
    getProficiencyAsyc();
  }, [currentPage]);

  return {
    toggleAddeModal,
    toggleUpdateModal,
    handleDelete,
    isLoading,
    searchData,
    query,
    addModal,
    updateModal,
    currentItem,
    filteredItems,
    upsertProficiencyLocally,
    onPageChange,
    result,
  };
};
