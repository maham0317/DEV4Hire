import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Config } from "@/config";
import { SortOrder } from "@/enums/sort-order.enum";
import { BaseListModel } from "@/interfaces/base-list.model";
import { useTranslation } from "react-i18next";
import SkillTypeModel from "@/interfaces/skill/skill.model";
import {
  useDeleteSkillMutation,
  useGetallSkillMutation,
} from "@/services/skill";
import SkillFilterModel from "@/interfaces/skill/skill-filter.model";
import { SortBySkill } from "@/enums/skill/skill.enum";

export const useSkill = () => {
  const { t } = useTranslation();
  const [addModal, setAddModal] = useState(false);
  const [updateModal, setUpdateModal] = useState(false);
  const [currentItem, setCurrentItem] = useState<SkillTypeModel>();

  const [query, setQuery] = useState("");

  const [getAllSkill, { data, isLoading }] = useGetallSkillMutation();

  const [deleteSkill, { isLoading: isDeleteing }] = useDeleteSkillMutation();
  const [currentPage, setCurrentPage] = useState(1);
  const onPageChange = async (page: number) => {
    setCurrentPage(page);
  };
  const [result, setResult] = useState<
    BaseListModel<SkillTypeModel> | undefined
  >();
  const getSkillAsyc = async (searchText: string = "") => {
    const payload: SkillFilterModel = {
      CurrentPage: currentPage,
      PageSize: Config.Filter.PageSize,
      SearchTerm: searchText,
      SortBy: SortBySkill.Name,
      SortOrder: SortOrder.ASC,
    };
    const response = await getAllSkill(payload).unwrap();
    setResult(response);
  };

  const upsertSkillsLocally = (model: SkillTypeModel) => {
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

  const deleteSkillsLocally = (id: number) => {
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
  const toggleUpdateModal = (item: SkillTypeModel) => {
    setUpdateModal(!updateModal);
    setCurrentItem(item);
  };

  const handleDelete = async (id: number) => {
    try {
      await deleteSkill(id);
      toast.success(t("Skill.AddOrEdit.Input.Toast.Success.Delete"));
      deleteSkillsLocally(id);
    } catch (e: any) {
      toast.error(t("Skill.AddOrEdit.Input.Toast.ErrorMessage"));
    }
  };

  //Search Data
  const searchData = async (e: any) => {
    const key = e.target.value;
    await getSkillAsyc(key);
  };

  // Filtered Items
  const filteredItems = data?.Items?.filter((item: SkillTypeModel) => {
    return item.SkillName.toLowerCase().includes(query.toLowerCase());
  });
  useEffect(() => {
    getSkillAsyc();
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
    upsertSkillsLocally,
    onPageChange,
    result,
  };
};
