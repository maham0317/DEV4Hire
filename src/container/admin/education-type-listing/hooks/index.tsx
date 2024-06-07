import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Config } from "@/config";
import { SortOrder } from "@/enums/sort-order.enum";
import { useTranslation } from "react-i18next";
import useDebounce from "@/hooks/useDebounce";
import EducationTypeModel, {
  SortByEducationType,
} from "@/interfaces/education-type-listing";
import {
  useDeleteEducationTypeMutation,
  useGetAllEducationTypeMutation,
} from "@/services/education-type-listing";

export const useEducationTypeListing = () => {
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
    SortBy: SortByEducationType.Name,
    SortOrder: SortOrder.ASC,
  });
  const [formData, setFormData] = useState<EducationTypeModel| {}>({});
  const debouncedValue = useDebounce(filters.SearchTerm, 500);

  const [getAllEducationType, { data, isLoading }] =
    useGetAllEducationTypeMutation();
  const [deleteEducationType] = useDeleteEducationTypeMutation();

  useEffect(() => {
    getEducationTypeAsync();
  }, [filters.fetchCount, debouncedValue]);

  const getEducationTypeAsync = async () => {
    const res = await getAllEducationType(filters).unwrap();
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
      await deleteEducationType(isConfirm).unwrap();
      toast.success(t("EducationTypeListing.Toast.Delete.Success"));
      setFilters((pre) => ({ ...pre, fetchCount: pre.fetchCount + 1 }));
      setIsConfirm(0);
    } catch (e: any) {
      toast.error(t("EducationTypeListing.Toast.Delete.Error"));
    }
  };

  const addNewEducation = () => {
    setIsOpen(true);
    setIsEdit(false);
  };

  const handleEdit = (model: EducationTypeModel) => {
    setFormData(model);
    setIsOpen(true);
    setIsEdit(true);
  };

  const handleClose = () => {
    setFormData({})
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
    addNewEducation,
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
