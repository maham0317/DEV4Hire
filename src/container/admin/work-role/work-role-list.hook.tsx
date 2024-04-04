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
export const useWorkRole = () => {
  const [addModal, setAddModal] = useState(false);
  const [updateModal, setUpdateModal] = useState(false);
  const [currentItem, setCurrentItem] = useState<WorkRoleModel>();

  const [query, setQuery] = useState("");

  const [getAllWorkRole, { data, isLoading: loading }] =
    useGetallWorkRoleMutation();
  const [deleteWorkRole, { isLoading: isDeleteing }] =
    useDeleteWorkRoleMutation();
  const [result, setResult] = useState<
    BaseListModel<WorkRoleModel> | undefined
  >();

  useEffect(() => {
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
    debugger;
    var res = await deleteWorkRole(id);
    if (res) toast.success("Item deleted successfully");
    else toast.error("there is error");
  };

  //Search Data
  const searchData = (e: any) => {
    const key = e.target.value;
    setQuery(key);
  };
  console.log("data", data);
  // Filtered Items
  const filteredItems = data?.Items?.filter((item: WorkRoleModel) => {
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
