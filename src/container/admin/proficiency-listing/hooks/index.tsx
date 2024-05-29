import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Config } from "@/config";
import { SortOrder } from "@/enums/sort-order.enum";
import { useTranslation } from "react-i18next";
import useDebounce from "@/hooks/useDebounce";
import ProficiencyModel, {
  SortByProficiency,
} from "@/interfaces/proficiency-listing";
import {
  useDeleteProficiencyMutation,
  useGetAllProficiencyMutation,
} from "@/services/proficiency-listing";

export const useProficiencyListing = () => {
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
    SortBy: SortByProficiency.Name,
    SortOrder: SortOrder.ASC,
  });
  const [formData, setFormData] = useState({} as ProficiencyModel);
  const debouncedValue = useDebounce(filters.SearchTerm, 500);

  const [getAllProficiency, { data, isLoading }] =
    useGetAllProficiencyMutation();
  const [deleteProficiency] = useDeleteProficiencyMutation();

  useEffect(() => {
    getProficiencyAsync();
  }, [filters.fetchCount, debouncedValue]);

  const getProficiencyAsync = async () => {
    const res = await getAllProficiency(filters).unwrap();
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
      await deleteProficiency(isConfirm).unwrap();
      toast.success(t("ProficiencyListing.Toast.Delete.Success"));
      setFilters((pre) => ({ ...pre, fetchCount: pre.fetchCount + 1 }));
      setIsConfirm(0);
    } catch (e: any) {
      toast.error(t("ProficiencyListing.Toast.Delete.Error"));
    }
  };

  const addNewProficiency = () => {
    setIsOpen(true);
    setIsEdit(false);
  };

  const handleEdit = ({ Name }: ProficiencyModel) => {
    setFormData({ Id: 0, Name });
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

  return {
    isLoading,
    data,
    formData,
    filters,
    addNewProficiency,
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
