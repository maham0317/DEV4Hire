import { useEffect, useState } from "react";
import ProficiencyModel from "@/interfaces/setup/proficiency.model";
import { toast } from "react-toastify";
import {
    useDeleteProficiencyMutation,
    useGetallProficiencyMutation,
} from "@/services/proficiency/index";
import ProficiencyFilterModel from "@/interfaces/setup/proficiency-filter.model";
import { Config } from "@/config";
import { SortOrder } from "@/enums/sort-order.enum";
import { BaseListModel } from "@/interfaces/base-list.model";
import {SortByProficiency} from "@/enums/proficiency/proficiency.enum"
import { useTranslation } from "react-i18next";
export const useProficiency = () => {
  const [addModal, setAddModal] = useState(false);
  const [updateModal, setUpdateModal] = useState(false);
  const [currentItem, setCurrentItem] = useState<ProficiencyModel>();
  const { t } = useTranslation();
  const [query, setQuery] = useState("");

  const [getAllProficiency, { data, isLoading: loading }] =
  useGetallProficiencyMutation();

  const [deleteProficiency, { isLoading: isDeleteing }] =
  useDeleteProficiencyMutation();
  const [result, setResult] = useState<
    BaseListModel<ProficiencyModel> | undefined
  >();
  const callApiAsyc = async () => {
    const payload: ProficiencyFilterModel = {
      CurrentPage: 1,
      PageSize: Config.Filter.PageSize,
      SearchTerm: "",
      SortBy: SortByProficiency.Name,
      SortOrder: SortOrder.ASC,
    };
    var data = await getAllProficiency(payload);
    setResult(data);
  };

  useEffect(() => {
    callApiAsyc();
  }, []);

  //Modal
  const toggleAddeModal = () => {
    setAddModal(!addModal);
  };
  const toggleUpdateModal = (item: ProficiencyModel) => {
    setUpdateModal(!updateModal);
    setCurrentItem(item);
  };

  const handleDelete = async (id: number) => {
    try {
      await deleteProficiency(id);
      toast.success(t("Proficiency.AddOrEdit.Input.Toast.DeleteMessage"));
      callApiAsyc();
    } catch (e: any) {
      toast.error(t("Proficiency.AddOrEdit.Input.Toast.ErrorMessage"));
    }
  };

  //Search Data
  const searchData = (e: any) => {
    const key = e.target.value;
    setQuery(key);
  };

  // Filtered Items
  const filteredItems = data?.Items?.filter((item: ProficiencyModel) => {
    return item.Name.toLowerCase().includes(query.toLowerCase());
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
