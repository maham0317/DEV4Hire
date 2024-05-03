import { useEffect, useState } from "react";
import LanguageModel from "@/interfaces/language/language.model";
import { toast } from "react-toastify";
import {
  useDeleteLanguagesMutation,
  useGetallLanguagesMutation,
} from "@/services/languages/index";
import LanguageFilterModel from "@/interfaces/language/language-filter.model";
import { Config } from "@/config";
import { SortOrder } from "@/enums/sort-order.enum";
import { BaseListModel } from "@/interfaces/base-list.model";
import { SortByLanguage } from "@/enums/language/language.enum";
import { useTranslation } from "react-i18next";
export const useLanguage = () => {
  const [addModal, setAddModal] = useState(false);
  const [updateModal, setUpdateModal] = useState(false);
  const [currentItem, setCurrentItem] = useState<LanguageModel>();
  const { t } = useTranslation();
  const [query, setQuery] = useState("");

  const [getAllLanguage, { data, isLoading }] = useGetallLanguagesMutation();

  const [deleteLanguage, { isLoading: isDeleteing }] =
    useDeleteLanguagesMutation();

  const [result, setResult] = useState<
    BaseListModel<LanguageModel> | undefined
  >();

  const [currentPage, setCurrentPage] = useState(1);

  const onPageChange = async (page: number) => {
    setCurrentPage(page);
  };

  const getLanguageAsyc = async (searchText: string = "") => {
    const payload: LanguageFilterModel = {
      CurrentPage: currentPage,
      PageSize: Config.Filter.PageSize,
      SearchTerm: searchText,
      SortBy: SortByLanguage.Name,
      SortOrder: SortOrder.ASC,
    };

    const response = await getAllLanguage(payload).unwrap();
    setResult(response);
  };

  const upsertLanguagesLocally = (model: LanguageModel) => {
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

  const deleteLanguagesLocally = (id: number) => {
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
  const toggleUpdateModal = (item: LanguageModel) => {
    setUpdateModal(!updateModal);
    setCurrentItem(item);
  };

  const handleDelete = async (id: number) => {
    try {
      await deleteLanguage(id);
      toast.success(t("Language.AddOrEdit.Input.Toast.Success.Delete"));
      deleteLanguagesLocally(id);
    } catch (e: any) {
      toast.error(t("Language.AddOrEdit.Input.Toast.ErrorMessage"));
    }
  };

  //Search Data
  const searchData = async (e: any) => {
    const key = e.target.value;
    await getLanguageAsyc(key);
  };

  // Filtered Items
  const filteredItems = data?.Items?.filter((item: LanguageModel) => {
    return item.LanguageName.toLowerCase().includes(query.toLowerCase());
  });
  useEffect(() => {
    getLanguageAsyc();
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
    result,
    upsertLanguagesLocally,
    onPageChange,
  };
};
