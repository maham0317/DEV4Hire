import { useEffect, useState } from "react";

import WorkRoleModel from "@/interfaces/work-role/work-role.model";
import { toast } from "react-toastify";
import {
  useDeleteWorkRoleMutation,
  useGetallWorkRoleMutation,
} from "@/services/work-roles/index";
import WorkRoleFilterModel from "@/interfaces/work-role/work-role-filter.model";
import { Config } from "@/config";
export const useWorkRole = () => {
  const [addModal, setAddModal] = useState(false);
  const [updateModal, setUpdateModal] = useState(false);
  const [currentItem, setCurrentItem] = useState<WorkRoleModel>();
  const [query, setQuery] = useState("");

  const [getAllEducationType, { data, isLoading: loading }] =
    useGetallWorkRoleMutation();
  const [deleteWorkRole, { isLoading: isDeleteing }] =
    useDeleteWorkRoleMutation();

  useEffect(() => {
    const callApiAsyc = async () => {
      const payload: WorkRoleFilterModel = {
        CurrentPage: 1,
        PageSize: Config.Filter.PageSize,
        SearchTerm: "",
        SortBy: SortByWorkRole.Name,
        SortOrder: SortOrder.ASC,
      };
      await getAllEducationType(payload);
    };
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
    var res = await deleteWorkRole(id);
    if (res) toast.success("Item deleted successfully");
    else toast.error("there is error");
  };
  //Search Data
  const searchData = (e: any) => {
    const key = e.target.value;
    setQuery(key);
  };
  // Filtered Items
  const filteredItems = data?.filter((item: WorkRoleModel) => {
    return item.WorkRoleName.toLowerCase().includes(query.toLowerCase());
  });

  // const payload: BaseFilterModel = {
  //   CurrentPage: 1,
  //   PageSize: 1,
  //   SearchTerm: "",
  //   SortOrder: "Asc",
  // };

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
  };
};
