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

  const [getAllWorkRole, { data, isLoading }] = useGetallWorkRoleMutation();

  const [deleteWorkRole, { isLoading: isDeleteing }] =
    useDeleteWorkRoleMutation();

  const [result, setResult] = useState<
    BaseListModel<WorkRoleModel> | undefined
  >();

  const [currentPage, setCurrentPage] = useState(1);
  const onPageChange = async (page: number) => {
    setCurrentPage(page);
    await getWorkRolesAsyc();
  };

  const getWorkRolesAsyc = async (searchText: string = "") => {
    const payload: WorkRoleFilterModel = {
      CurrentPage: currentPage,
      PageSize: Config.Filter.PageSize,
      SearchTerm: searchText,
      SortBy: SortByWorkRole.Name,
      SortOrder: SortOrder.ASC,
    };
    debugger;
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
  const searchData = async (e: any) => {
    const key = e.target.value;
    setQuery(key);

    // Synchronous check for filtered items
    const hasMatchingItem = result?.Items?.some(
      (x) => key && x.WorkRoleName.includes(key)
    );

    // If there are matching items, return early
    if (hasMatchingItem) return;
    // Asynchronous fetch if no matching item found
    await getWorkRolesAsyc(key);
  };

  // Filtered Items
  const filteredItems = result?.Items?.filter((item: WorkRoleModel) => {
    return item.WorkRoleName.toLowerCase().includes(query.toLowerCase());
  });

  useEffect(() => {
    getWorkRolesAsyc();
  }, []);

  return {
    toggleAddeModal,
    toggleUpdateModal,
    handleDelete,
    isLoading,
    searchData,
    query,
    addModal,
    updateModal,
    currentItem,
    filteredItems,
    upsertWorkRoleLocally,
    onPageChange,
    TotalPages: result?.TotalPages,
  };
};
