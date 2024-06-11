import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Config } from "@/config";
import { SortOrder } from "@/enums/sort-order.enum";
import { useTranslation } from "react-i18next";
import useDebounce from "@/hooks/useDebounce";
import LanguageModel, { SortByLanguage } from "@/interfaces/language-listing";
import {
  useDeleteLanguageMutation,
  useGetAllLanguageMutation,
} from "@/services/language-listing";

export const useLanguageListing = () => {
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
    SortBy: SortByLanguage.Name,
    SortOrder: SortOrder.ASC,
  });
  const [formData, setFormData] = useState({} as LanguageModel);
  const debouncedValue = useDebounce(filters.SearchTerm);

  const [getAllLanguage, { data, isLoading }] = useGetAllLanguageMutation();
  const [deleteLanguage] = useDeleteLanguageMutation();

  useEffect(() => {
    getLanguageAsync();
  }, [filters.fetchCount, debouncedValue]);

  const getLanguageAsync = async () => {
    try {
      const res = await getAllLanguage(filters).unwrap();
      setFilters((prev) => ({ ...prev, totalPages: res.TotalPages }));
    } catch (e) {
      console.log(e)
    }
  };

  const handleDelete = (id: number) => {
    setIsConfirm(id);
  };

  const onCloseConfirm = () => {
    setIsConfirm(0);
  };

  const onConfirmSuccess = async () => {
    try {
      await deleteLanguage(isConfirm).unwrap();
      toast.success(t("LanguageListing.Toast.Delete.Success"));
      setFilters((pre) => ({ ...pre, fetchCount: pre.fetchCount + 1 }));
      setIsConfirm(0);
    } catch (e: any) {
      toast.error(t("LanguageListing.Toast.Delete.Error"));
    }
  };

  const addNewLanguage = () => {
    setIsOpen(true);
    setIsEdit(false);
  };

  const handleEdit = (model: LanguageModel) => {
    setFormData(model);
    setIsOpen(true);
    setIsEdit(true);
  };

  const handleClose = () => {
    setFormData({} as LanguageModel);
    setIsOpen(false);
    setIsEdit(false);
  };

  const onSuccess = () => {
    setFilters((prev) => ({ ...prev, fetchCount: prev.fetchCount + 1 }));
  };

  const onPageChange = (page: number) => {
    setFilters((pre) => ({
      ...pre,
      CurrentPage: page,
      fetchCount: pre.fetchCount + 1,
    }));
  };

  return {
    isLoading,
    data,
    formData,
    filters,
    addNewLanguage,
    handleEdit,
    handleDelete,
    handleClose,
    onSuccess,
    isEdit,
    isOpen,
    isConfirm,
    onCloseConfirm,
    onConfirmSuccess,
    onPageChange,
    setFilters,
  };
};
