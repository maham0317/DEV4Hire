import { useEffect, useState } from "react";
import WorkRoleModel from "@/interfaces/work-role/work-role.model";
import { toast } from "react-toastify";
import {
  useDeleteWorkRoleMutation,
  useGetallWorkRoleMutation,
} from "@/services/work-roles/index";
import WorkRoleFilterModel from "@/interfaces/work-role/work-role-filter.model";
import { Config } from "@/config";
import { SortByWorkRole } from "@/enums/work-role/work-role.enum";
import { SortOrder } from "@/enums/sort-order.enum";
import { BaseListModel } from "@/interfaces/base-list.model";
import { useTranslation } from "react-i18next";
import {
  useDeleteCountryMutation,
  useGetallCountryMutation,
} from "@/services/locations/country";
import CountryModel from "@/interfaces/location/country.model";
import CountryFilterModel from "@/interfaces/location/country-filter.model";
import { SortByCountry } from "@/enums/country/country.enum";

export const useCountry = () => {
  const [addModal, setAddModal] = useState(false);
  const [updateModal, setUpdateModal] = useState(false);
  const [currentItem, setCurrentItem] = useState<CountryModel>();
  const { t } = useTranslation();
  const [query, setQuery] = useState("");

  const [getAllContry, { data, isLoading }] = useGetallCountryMutation();

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

    const response = await getAllContry(payload).unwrap();
    setResult(response);
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
    // setQuery(key);

    // Synchronous check for filtered items
    // const hasMatchingItem = result?.Items?.some(
    //   (x) => key && x.WorkRoleName.includes(key)
    // );

    // If there are matching items, return early
    // if (hasMatchingItem) return;
    // Asynchronous fetch if no matching item found
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
    isLoading,
    searchData,
    data,
    query,
    addModal,
    updateModal,
    currentItem,
    filteredItems,
    upsertCountryLocally,
    onPageChange,
    result,
  };
};
