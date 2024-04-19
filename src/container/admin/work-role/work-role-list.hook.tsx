import { useEffect, useState } from "react";
import WorkRoleModel from "@/interfaces/work-role/work-role.model";
import { toast } from "react-toastify";
import {
  useDeleteWorkRoleMutation,
  useGetallWorkRoleMutation,
} from "@/services/work-roles/index";
import WorkRoleFilterModel from "@/interfaces/work-role/work-role-filter.model";
import { Config } from "@/config";
import { SortByWorkRole } from "@/enums/work-role/work-role.enum";
import { SortOrder } from "@/enums/sort-order.enum";
import { BaseListModel } from "@/interfaces/base-list.model";
import { useTranslation } from "react-i18next";
export const useWorkRole = () => {
  const [addModal, setAddModal] = useState(false);
  const [updateModal, setUpdateModal] = useState(false);
  const [currentItem, setCurrentItem] = useState<WorkRoleModel>();
  const { t } = useTranslation();
  const [query, setQuery] = useState("");

  const [getAllWorkRole, { data, isLoading: loading }] =
    useGetallWorkRoleMutation();

  const [deleteWorkRole, { isLoading: isDeleteing }] =
    useDeleteWorkRoleMutation();
  const [result, setResult] = useState<
    BaseListModel<WorkRoleModel> | undefined
  >();
  const callApiAsyc = async () => {
    const payload: WorkRoleFilterModel = {
      CurrentPage: 1,
      PageSize: Config.Filter.PageSize,
      SearchTerm: "",
      SortBy: SortByWorkRole.Name,
      SortOrder: SortOrder.ASC,
    };
    var data = await getAllWorkRole(payload);
    setResult(data);
  };

  useEffect(() => {
    callApiAsyc();
  }, []);

  //Modal
  const toggleAddeModal = () => {
    setAddModal(!addModal);
  };
  const toggleUpdateModal = (item: WorkRoleModel) => {
    setUpdateModal(!updateModal);
    setCurrentItem(item);
  };

  const handleDelete = async (id: number) => {
    try {
      await deleteWorkRole(id);
      toast.success(t("WorkRole.AddOrEdit.Input.Toast.DeleteMessage"));
      callApiAsyc();
    } catch (e: any) {
      toast.error(t("WorkRole.AddOrEdit.Input.Toast.ErrorMessage"));
    }
  };

  //Search Data
  const searchData = (e: any) => {
    const key = e.target.value;
    setQuery(key);
  };

  // Filtered Items
  const filteredItems = data?.Items?.filter((item: WorkRoleModel) => {
    return item.WorkRoleName.toLowerCase().includes(query.toLowerCase());
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
