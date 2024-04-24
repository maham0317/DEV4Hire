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
import {SortBySkill} from "@/enums//skill/skill.enum"
import { useTranslation } from "react-i18next";
export const useSkill = () => {
  const [addModal, setAddModal] = useState(false);
  const [updateModal, setUpdateModal] = useState(false);
  const [currentItem, setCurrentItem] = useState<SkillTypeModel>();
  const { t } = useTranslation();
  const [query, setQuery] = useState("");

  const [getAllSkill, { data, isLoading: loading }] =
  useGetallSkillMutation();

  const [deleteSkill, { isLoading: isDeleteing }] =
  useDeleteSkillMutation();
  const [result, setResult] = useState<
    BaseListModel<SkillTypeModel> | undefined
  >();
  const callApiAsyc = async () => {
    const payload: SkillFilterModel = {
      CurrentPage: 1,
      PageSize: Config.Filter.PageSize,
      SearchTerm: "",
      SortBy: SortBySkill.Name,
      SortOrder: SortOrder.ASC,
    };
    var data = await getAllSkill(payload);
    setResult(data);
  };

  useEffect(() => {
    callApiAsyc();
  }, []);

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
      callApiAsyc();
    } catch (e: any) {
      toast.error(t("Skill.AddOrEdit.Input.Toast.ErrorMessage"));
    }
  };

  //Search Data
  const searchData = (e: any) => {
    const key = e.target.value;
    setQuery(key);
  };

  // Filtered Items
  const filteredItems = data?.Items?.filter((item: SkillTypeModel) => {
    return item.SkillName.toLowerCase().includes(query.toLowerCase());
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
