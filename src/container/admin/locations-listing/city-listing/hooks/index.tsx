import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Config } from "@/config";
import { SortOrder } from "@/enums/sort-order.enum";
import { useTranslation } from "react-i18next";
import {
  IndustryTypeModel,
  SortByIndustryType,
} from "@/interfaces/industry-type-listing";
import {
  useDeleteIndustryTypeMutation,
  useGetAllIndustryTypeMutation,
} from "@/services/industry-type-listing";
import useDebounce from "@/hooks/useDebounce";
import CityModel, {
  SortByCity,
} from "@/interfaces/location-listing/city-listing";
import {
  useDeleteCityMutation,
  useGetAllCityMutation,
} from "@/services/locations-listing/city-listing";
import { useCountryListing } from "../../country-listing/hooks";
import CountryModel from "@/interfaces/location/country.model";

export const useIndustryTypeListing = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [isConfirm, setIsConfirm] = useState(0);
  const [filters, setFilters] = useState({
    fetchCount: 0,
    totalPages: 0,
    CurrentPage: 1,
    PageSize: Config.Filter.PageSize,
    SearchTerm: "",
    SortBy: SortByCity.Name,
    SortOrder: SortOrder.ASC,
  });
  const [formData, setFormData] = useState({} as CityModel);
  const debouncedValue = useDebounce(filters.SearchTerm, 500);

  const [getAllCity, { data, isLoading }] = useGetAllCityMutation();
  const [deleteCity] = useDeleteCityMutation();

  useEffect(() => {
    getCityAsync();
  }, [filters.fetchCount, debouncedValue]);

  const getCityAsync = async () => {
    const res = await getAllCity(filters).unwrap();
    setFilters((pre) => ({ ...pre, totalPages: res.TotalPages }));
  };

  const handleDelete = (id: number) => {
    setIsConfirm(id);
  };

  const onCloseConfirm = () => {
    setIsConfirm(0);
  };

  const onConfirmSuccess = async () => {
    try {
      await deleteCity(isConfirm).unwrap();
      toast.success(t("CityListing.Toast.Delete.Success"));
      setFilters((pre) => ({ ...pre, fetchCount: pre.fetchCount + 1 }));
      setIsConfirm(0);
    } catch (e: any) {
      toast.error(t("CityListing.Toast.Delete.Error"));
    }
  };

  const addNewCity = () => {
    setIsOpen(true);
    setIsEdit(false);
  };

  const handleEdit = ({ Id, CityName, CountryId }: CityModel) => {
    setFormData({ Id, CityName, CountryId });
    setIsOpen(true);
    setIsEdit(true);
  };

  const handleClose = () => {
    setIsOpen(false);
    setIsEdit(false);
  };

  const onSuccess = () => {
    setFilters((pre) => ({ ...pre, fetchCount: pre.fetchCount + 1 }));
  };

  const onPageChange = (page: number) => {
    setFilters((pre) => ({
      ...pre,
      CurrentPage: page,
      fetchCount: pre.fetchCount + 1,
    }));
  };
  const { countries } = useCountryListing();

  const getCountryName = (countryId: number) => {
    const country = countries?.find((c: CountryModel) => c.Id === countryId);
    return country ? country.CountryName : "";
  };
  return {
    isLoading,
    data,
    formData,
    filters,
    addNewCity,
    handleEdit,
    handleDelete,
    handleClose,
    onSuccess,
    isEdit,
    countries,
    isOpen,
    isConfirm,
    onCloseConfirm,
    onConfirmSuccess,
    onPageChange,
    getCountryName,
    setFilters,
  };
};
