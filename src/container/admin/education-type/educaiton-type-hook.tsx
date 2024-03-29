import { useState } from "react";

import EducationTypeModel from "../../../interfaces/setup/education-type.model";
import { toast } from "react-toastify";
import {
  useDeleteEducationTypeMutation,
  useGetAllEducationTypeQuery,
} from "../../../services/education-type";
export const useEducation = () => {
  const [addModal, setAddModal] = useState(false);
  const [updateModal, setUpdateModal] = useState(false);
  const [currentItem, setCurrentItem] = useState<EducationTypeModel>();
  const [query, setQuery] = useState("");

  const { data, isLoading: loading } = useGetAllEducationTypeQuery();
  const [deleteEducationType, { isLoading: isDeleteing }] =
    useDeleteEducationTypeMutation();

  //Modal
  const toggleAddeModal = () => {
    setAddModal(!addModal);
  };
  const toggleUpdateModal = (item: EducationTypeModel) => {
    setUpdateModal(!updateModal);
    setCurrentItem(item);
  };
  const handleDelete = async (id: number) => {
    var res = await deleteEducationType(id);
    if (res) toast.success("Item deleted successfully");
    else toast.error("there is error");
  };
  //Search Data
  const searchData = (e: any) => {
    const key = e.target.value;
    setQuery(key);
  };
  // Filtered Items
  const filteredItems = data?.filter((item: EducationTypeModel) => {
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
  };
};
