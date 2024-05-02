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
import { FetchBaseQueryError } from "@reduxjs/toolkit/dist/query";
import { SerializedError } from "@reduxjs/toolkit";
import { useAppDispatch } from "@/hooks/appDispatch";
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

  const dispatch = useAppDispatch();

  const [result, setResult] = useState<
    BaseListModel<WorkRoleModel> | undefined
  >();

  const getWorkRolesAsyc = async () => {
    const payload: WorkRoleFilterModel = {
      CurrentPage: 1,
      PageSize: Config.Filter.PageSize,
      SearchTerm: "",
      SortBy: SortByWorkRole.Name,
      SortOrder: SortOrder.ASC,
    };
    const response = await getAllWorkRole(payload).unwrap();
    setResult(response);
  };

  const upsertWorkRoleLocally = (model: WorkRoleModel) => {
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

  const deleteWorkRoleLocally = (id: number) => {
    if (!result || !result.Items) {
      return;
    }
    let updatedItems = result.Items.filter((item) => item.Id !== id);
    setResult({
      ...result,
      Items: updatedItems,
    });
  };

  useEffect(() => {
    getWorkRolesAsyc();
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
      deleteWorkRoleLocally(id);
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
  const filteredItems = result?.Items?.filter((item: WorkRoleModel) => {
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
    upsertWorkRoleLocally,
  };
};
