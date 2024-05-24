import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Config } from "@/config";
import { SortOrder } from "@/enums/sort-order.enum";
import { useTranslation } from "react-i18next";
import useDebounce from "@/hooks/useDebounce";
import SkillTypeModel, {
  SortBySortBySkillType,
} from "@/interfaces/skill-listing";
import {
  useDeleteSkillMutation,
  useGetAllSkillMutation,
} from "@/services/skill-listing";

export const useSkillListing = () => {
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
    SortBy: SortBySortBySkillType.Name,
    SortOrder: SortOrder.ASC,
  });
  const [formData, setFormData] = useState({} as SkillTypeModel);
  const debouncedValue = useDebounce(filters.SearchTerm, 500);

  const [getAllSkill, { data, isLoading }] = useGetAllSkillMutation();
  const [deleteSkill] = useDeleteSkillMutation();

  useEffect(() => {
    getSkillAsync();
  }, [filters.fetchCount, debouncedValue]);

  const getSkillAsync = async () => {
    try {
      const res = await getAllSkill(filters).unwrap();
      setFilters((prev) => ({ ...prev, totalPages: res.TotalPages }));
    } catch (error) {
      toast.error(t("SkillListing.Toast.Fetch.Error"));
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
      await deleteSkill(isConfirm).unwrap();
      toast.success(t("SkillListing.Toast.Delete.Success"));
      setFilters((pre) => ({ ...pre, totalPages: pre.fetchCount + 1 }));
      setIsConfirm(0);
    } catch (e: any) {
      toast.error(t("SkillListing.Toast.Delete.Error"));
    }
  };

  const addNewSkill = () => {
    setIsOpen(true);
    setIsEdit(false);
    setFormData({} as SkillTypeModel);
  };

  const handleEdit = ({ Id, SkillName }: SkillTypeModel) => {
    setFormData({ Id: 0, SkillName });
    setIsOpen(true);
    setIsEdit(true);
  };

  const handleClose = () => {
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
    addNewSkill,
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
