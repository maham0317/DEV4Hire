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

  const [getAllCountry, { data, isLoading: loading }] =
    useGetallCountryMutation();

  const [deleteCountry, { isLoading: isDeleteing }] =
    useDeleteCountryMutation();
  const [result, setResult] = useState<
    BaseListModel<CountryModel> | undefined
  >();
  const callApiAsyc = async () => {
    const payload: CountryFilterModel = {
      CurrentPage: 1,
      PageSize: Config.Filter.PageSize,
      SearchTerm: "",
      SortBy: SortByCountry.Name,
      SortOrder: SortOrder.ASC,
    };
    var data = await getAllCountry(payload);
    setResult(data);
  };

  useEffect(() => {
    callApiAsyc();
  }, []);

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
      toast.success("Country delete successfully");
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
  const filteredItems = data?.Items?.filter((item: CountryModel) => {
    return item.CountryName.toLowerCase().includes(query.toLowerCase());
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
