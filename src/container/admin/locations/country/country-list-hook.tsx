import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Config } from "@/config";
import { SortOrder } from "@/enums/sort-order.enum";
import { BaseListModel } from "@/interfaces/base-list.model";
import { useTranslation } from "react-i18next";
import LanguageModel from "@/interfaces/language/language.model";
import {
  useDeleteLanguagesMutation,
  useGetallLanguagesMutation,
} from "@/services/languages";
import LanguageFilterModel from "@/interfaces/language/language-filter.model";
import { SortByLanguage } from "@/enums/language/language.enum";
import CountryModel from "@/interfaces/location/country.model";
import {
  useDeleteCountryMutation,
  useGetallCountryMutation,
} from "@/services/locations/country";
import CountryFilterModel from "@/interfaces/location/country-filter.model";
import { SortByCountry } from "@/enums/country/country.enum";

export const useCountry = () => {
  const { t } = useTranslation();
  const [addModal, setAddModal] = useState(false);
  const [updateModal, setUpdateModal] = useState(false);
  const [currentItem, setCurrentItem] = useState<CountryModel>();

  const [query, setQuery] = useState("");

  const [getAllContry, { data, isLoading }] = useGetallCountryMutation();

  const [deleteCountry, { isLoading: isDeleteing }] =
    useDeleteCountryMutation();
  const [currentPage, setCurrentPage] = useState(1);
  const onPageChange = async (page: number) => {
    setCurrentPage(page);
  };
  const [result, setResult] = useState<
    BaseListModel<CountryModel> | undefined
  >();
  const getLanguageAsyc = async (searchText: string = "") => {
    const payload: CountryFilterModel = {
      CurrentPage: currentPage,
      PageSize: Config.Filter.PageSize,
      SearchTerm: searchText,
      SortBy: SortByCountry.Name,
      SortOrder: SortOrder.ASC,
    };
    const response = await getAllContry(payload).unwrap();
    setResult(response);
  };

  const upsertCountryLocally = (model: CountryModel) => {
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

  const deleteCountryLocally = (id: number) => {
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
  const toggleUpdateModal = (item: CountryModel) => {
    setUpdateModal(!updateModal);
    setCurrentItem(item);
  };

  const handleDelete = async (id: number) => {
    try {
      await deleteCountry(id);
      toast.success(t("Country.AddOrEdit.Input.Toast.Success.Delete"));
      deleteCountryLocally(id);
    } catch (e: any) {
      toast.error(t("Country.AddOrEdit.Input.Toast.ErrorMessage"));
    }
  };

  //Search Data
  const searchData = async (e: any) => {
    const key = e.target.value;
    await getLanguageAsyc(key);
  };

  // Filtered Items
  const filteredItems = data?.Items?.filter((item: CountryModel) => {
    return item.CountryName.toLowerCase().includes(query.toLowerCase());
  });
  useEffect(() => {
    if (result?.Items?.length > 2) {
      setResult({
        ...result,
        Items: result?.Items?.slice(0, 2)
      });
    }
  }, [result]);
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
    upsertCountryLocally,
    onPageChange,
    result,
  };
};
