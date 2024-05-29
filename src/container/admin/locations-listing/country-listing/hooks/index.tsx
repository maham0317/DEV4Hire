import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Config } from "@/config";
import { SortOrder } from "@/enums/sort-order.enum";
import { useTranslation } from "react-i18next";
import useDebounce from "@/hooks/useDebounce";
import {
  useDeleteCountryMutation,
  useGetAllCountryMutation,
} from "@/services/locations-listing/country-listing";
import CountryModel, {
  SortByCountry,
} from "@/interfaces/location-listing/country-listing";

export const useCountryListing = () => {
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
    SortBy: SortByCountry.Name,
    SortOrder: SortOrder.ASC,
  });
  const [formData, setFormData] = useState({} as CountryModel);
  const debouncedValue = useDebounce(filters.SearchTerm, 500);

  const [getAllCountry, { data, isLoading }] = useGetAllCountryMutation();
  const [deleteCountry] = useDeleteCountryMutation();
  useEffect(() => {
    getCountryAsync();
  }, [filters.fetchCount, debouncedValue]);

  const getCountryAsync = async () => {
    const res = await getAllCountry(filters).unwrap();
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
      await deleteCountry(isConfirm).unwrap();
      toast.success(t("CountryListing.Toast.Delete.Success"));
      setFilters((pre) => ({ ...pre, fetchCount: pre.fetchCount + 1 }));
      setIsConfirm(0);
    } catch (e: any) {
      toast.error(t("CountryListing.Toast.Delete.Error"));
    }
  };

  const addNewCountry = () => {
    setIsOpen(true);
    setIsEdit(false);
  };

  const handleEdit = ({ Id, CountryName, Cities }: CountryModel) => {
    setFormData({ Id, CountryName, Cities });
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
  const countries = data?.Items?.filter((item: CountryModel) => {
    return item.CountryName;
  });

  return {
    isLoading,
    data,
    formData,
    filters,
    addNewCountry,
    handleEdit,
    handleDelete,
    handleClose,
    onSuccess,
    isEdit,
    isOpen,
    isConfirm,
    countries,
    onCloseConfirm,
    onConfirmSuccess,
    onPageChange,
    setFilters,
  };
};
