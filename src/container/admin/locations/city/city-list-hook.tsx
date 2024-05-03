import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Config } from "@/config";
import { SortOrder } from "@/enums/sort-order.enum";
import { BaseListModel } from "@/interfaces/base-list.model";
import { useTranslation } from "react-i18next";
import CityModel from "@/interfaces/location/city.model";
import CityFilterModel from "@/interfaces/location/city-filter.model";
import { SortByCity } from "@/enums/city/city.enum";
import {
  useDeleteCityMutation,
  useGetallCityMutation,
} from "@/services/locations/city";

export const useCity = () => {
  const [addModal, setAddModal] = useState(false);
  const [updateModal, setUpdateModal] = useState(false);
  const [currentItem, setCurrentItem] = useState<CityModel>();
  const { t } = useTranslation();
  const [query, setQuery] = useState("");

  const [getAllCity, { data, isLoading }] = useGetallCityMutation();

  const [deleteCity, { isLoading: isDeleteing }] = useDeleteCityMutation();

  const [result, setResult] = useState<BaseListModel<CityModel> | undefined>();

  const [currentPage, setCurrentPage] = useState(1);
  const onPageChange = async (page: number) => {
    setCurrentPage(page);
  };

  const getCityAsyc = async (searchText: string = "") => {
    const payload: CityFilterModel = {
      CurrentPage: currentPage,
      PageSize: Config.Filter.PageSize,
      SearchTerm: searchText,
      SortBy: SortByCity.Name,
      SortOrder: SortOrder.ASC,
    };
    const response = await getAllCity(payload).unwrap();
    setResult(response);
  };

  const upsertCityLocally = (model: CityModel) => {
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

  const deleteCityLocally = (id: number) => {
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
  const toggleUpdateModal = (item: CityModel) => {
    setUpdateModal(!updateModal);
    setCurrentItem(item);
  };

  const handleDelete = async (Id: number) => {
    try {
      await deleteCity(Id);
      toast.success(t("City.AddOrEdit.Input.Toast.DeleteMessage"));
      deleteCityLocally(id);
    } catch (e: any) {
      toast.error(t("City.AddOrEdit.Input.Toast.ErrorMessage"));
    }
  };

  //Search Data
  const searchData = async (e: any) => {
    const key = e.target.value;
    await getCityAsyc(key);
  };

  // Filtered Items
  const filteredItems = data?.Items?.filter((item: CityModel) => {
    return item.CityName.toLowerCase().includes(query.toLowerCase());
  });

  useEffect(() => {
    getCityAsyc();
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
    upsertCityLocally,
    onPageChange,
  };
};
