import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Config } from "@/config";
import { SortOrder } from "@/enums/sort-order.enum";
import { BaseListModel } from "@/interfaces/base-list.model";
import { useTranslation } from "react-i18next";
import CountryModel from "@/interfaces/location/country.model";
import CountryFilterModel from "@/interfaces/location/country-filter.model";
import { SortByCountry } from "@/enums/country/country.enum";
import {
  useDeleteCountryMutation,
  useGetallCountryMutation,
} from "@/services/locations/country";
export const useCountry = () => {
  const [addModal, setAddModal] = useState(false);
  const [updateModal, setUpdateModal] = useState(false);
  const [currentItem, setCurrentItem] = useState<CountryModel>();
  const { t } = useTranslation();
  const [query, setQuery] = useState("");

  const [getAllCountry, { data, isLoading }] = useGetallCountryMutation();

  const [deleteCountry, { isLoading: isDeleteing }] =
    useDeleteCountryMutation();
  const [result, setResult] = useState<
    BaseListModel<CountryModel> | undefined
  >();

  const [currentPage, setCurrentPage] = useState(1);
  const onPageChange = async (page: number) => {
    setCurrentPage(page);
  };
  const getCountryAsyc = async (searchText: string = "") => {
    const payload: CountryFilterModel = {
      CurrentPage: currentPage,
      PageSize: Config.Filter.PageSize,
      SearchTerm: searchText,
      SortBy: SortByCountry.Name,
      SortOrder: SortOrder.ASC,
    };
    const response = await getAllCountry(payload).unwrap();
    setResult(response);
  };

  //Modal
  const toggleAddeModal = () => {
    setAddModal(!addModal);
  };
  const toggleUpdateModal = (item: CountryModel) => {
    setUpdateModal(!updateModal);
    setCurrentItem(item);
  };
  const upsertCountryLocally = (model: CountryModel) => {
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
    await getCountryAsyc(key);
  };

  // Filtered Items
  const filteredItems = data?.Items?.filter((item: CountryModel) => {
    return item.CountryName.toLowerCase().includes(query.toLowerCase());
  });
  useEffect(() => {
    getCountryAsyc();
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
