import { useEffect, useState } from "react";
import SkillTypeModel from "@/interfaces/skill/skill.model";
import { toast } from "react-toastify";
import {
  useDeleteSkillMutation,
  useGetallSkillMutation,
} from "@/services/skill/index";
import SkillFilterModel from "@/interfaces/skill/skill-filter.model";
import { Config } from "@/config";
import { SortOrder } from "@/enums/sort-order.enum";
import { BaseListModel } from "@/interfaces/base-list.model";
import { SortBySkill } from "@/enums//skill/skill.enum";
import { useTranslation } from "react-i18next";
export const useSkill = () => {
  const [addModal, setAddModal] = useState(false);
  const [updateModal, setUpdateModal] = useState(false);
  const [currentItem, setCurrentItem] = useState<SkillTypeModel>();
  const { t } = useTranslation();
  const [query, setQuery] = useState("");
  const [getAllSkill, { data, isLoading }] = useGetallSkillMutation();

  const [deleteSkill, { isLoading: isDeleteing }] = useDeleteSkillMutation();
  const [result, setResult] = useState<
    BaseListModel<SkillTypeModel> | undefined
  >();
  const [currentPage, setCurrentPage] = useState(1);
  const onPageChange = async (page: number) => {
    setCurrentPage(page);
    await getSkillAsyc();
  };
  const getSkillAsyc = async (searchText: string = "") => {
    const payload: SkillFilterModel = {
      CurrentPage: currentPage,
      PageSize: Config.Filter.PageSize,
      SearchTerm: searchText,
      SortBy: SortBySkill.Name,
      SortOrder: SortOrder.ASC,
    };
    debugger;
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
      toast.success(t("Skill.AddOrEdit.Input.Toast.DeleteMessage"));
      deleteSkillsLocally(id);
    } catch (e: any) {
      toast.error(t("Skill.AddOrEdit.Input.Toast.ErrorMessage"));
    }
  };
  //Search Data
  const searchData = async (e: any) => {
    const key = e.target.value;
    setQuery(key);

    // Synchronous check for filtered items
    const hasMatchingItem = result?.Items?.some(
      (x) => key && x.SkillName.includes(key)
    );

    // If there are matching items, return early
    if (hasMatchingItem) return;
    // Asynchronous fetch if no matching item found
    await getSkillAsyc(key);
  };

  //Search Data
  // const searchData = (e: any) => {
  //   const key = e.target.value;
  //   setQuery(key);
  // };

  // Filtered Items
  const filteredItems = data?.Items?.filter((item: SkillTypeModel) => {
    return item.SkillName.toLowerCase().includes(query.toLowerCase());
  });
  useEffect(() => {
    getSkillAsyc();
  }, []);
  return {
    toggleAddeModal,
    toggleUpdateModal,
    handleDelete,
    data,
    searchData,
    isLoading,
    query,
    addModal,
    updateModal,
    currentItem,
    filteredItems,
    upsertSkillsLocally,
    onPageChange,
    TotalPages: result?.TotalPages,
  };
};
