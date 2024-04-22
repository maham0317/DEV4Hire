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
import {SortByLanguage} from "@/enums/language/language.enum"
import { useTranslation } from "react-i18next";
export const useLanguage = () => {
  const [addModal, setAddModal] = useState(false);
  const [updateModal, setUpdateModal] = useState(false);
  const [currentItem, setCurrentItem] = useState<LanguageModel>();
  const { t } = useTranslation();
  const [query, setQuery] = useState("");

  const [getAllLanguage, { data, isLoading: loading }] =
  useGetallLanguagesMutation();

  const [deleteLanguage, { isLoading: isDeleteing }] =
  useDeleteLanguagesMutation();
  const [result, setResult] = useState<
    BaseListModel<LanguageModel> | undefined
  >();
  const callApiAsyc = async () => {
    const payload: LanguageFilterModel = {
      CurrentPage: 1,
      PageSize: Config.Filter.PageSize,
      SearchTerm: "",
      SortBy: SortByLanguage.Name,
      SortOrder: SortOrder.ASC,
    };
    var data = await getAllLanguage(payload);
    setResult(data);
  };

  useEffect(() => {
    callApiAsyc();
  }, []);

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
      toast.success(t("Language.AddOrEdit.Input.Toast.DeleteMessage"));
      callApiAsyc();
    } catch (e: any) {
      toast.error(t("Language.AddOrEdit.Input.Toast.ErrorMessage"));
    }
  };

  //Search Data
  const searchData = (e: any) => {
    const key = e.target.value;
    setQuery(key);
  };

  // Filtered Items
  const filteredItems = data?.Items?.filter((item: LanguageModel) => {
    return item.LanguageName.toLowerCase().includes(query.toLowerCase());
  });

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
    callApiAsyc,
  };
};
