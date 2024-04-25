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

  const [getAllCity, { data, isLoading: loading }] = useGetallCityMutation();

  const [deleteCity, { isLoading: isDeleteing }] = useDeleteCityMutation();
  const [result, setResult] = useState<BaseListModel<CityModel> | undefined>();
  const callApiAsyc = async () => {
    const payload: CityFilterModel = {
      CurrentPage: 1,
      PageSize: Config.Filter.PageSize,
      SearchTerm: "",
      SortBy: SortByCity.Name,
      SortOrder: SortOrder.ASC,
    };
    var data = await getAllCity(payload);
    setResult(data);
  };

  useEffect(() => {
    callApiAsyc();
  }, []);

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
      toast.success("city delete sucessfully");
      callApiAsyc();
    } catch (e: any) {
      toast.error("there is some error");
    }
  };

  //Search Data
  const searchData = (e: any) => {
    const key = e.target.value;
    setQuery(key);
  };

  // Filtered Items
  const filteredItems = data?.Items?.filter((item: CityModel) => {
    return item.CityName.toLowerCase().includes(query.toLowerCase());
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
