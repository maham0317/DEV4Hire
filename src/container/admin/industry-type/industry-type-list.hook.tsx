import { IndustryTypeModel } from "@/interfaces/industry/industry.model";
import {
  useGetAllIndustryTypeQuery,
  useDeleteIndustryTypeMutation,
} from "@/services/industry-type";
import { useState } from "react";
import { toast } from "react-toastify";

export const useIndustry = () => {
  const [addModal, setAddModal] = useState(false);
  const [updateModal, setUpdateModal] = useState(false);
  const [currentItem, setCurrentItem] = useState<
    IndustryTypeModel | undefined
  >();
  const [query, setQuery] = useState<string>("");
  const { data, isLoading: loading } = useGetAllIndustryTypeQuery();
  const [deleteIndustryType, { isLoading: isDeleting }] =
    useDeleteIndustryTypeMutation();

  // Modal
  const toggleAddModal = () => {
    setAddModal(!addModal);
  };

  const toggleUpdateModal = (item: IndustryTypeModel) => {
    setUpdateModal(!updateModal);
    setCurrentItem(item);
  };

  const handleDelete = async (id: number) => {
    try {
      const res = await deleteIndustryType(id);
      if (res) {
        toast.success("Item deleted successfully");
      } else {
        toast.error("There was an error");
      }
    } catch (error) {
      console.error("Error deleting item:", error);
      toast.error("An error occurred while deleting the item");
    }
  };

  // Search data
  const searchData = (e: React.ChangeEvent<HTMLInputElement>) => {
    const key = e.target.value;
    setQuery(key);
  };

  // Filtered items
  const filteredItems = data?.filter((item: IndustryTypeModel) => {
    return item.IndustryName.toLowerCase().includes(query.toLowerCase());
  });

  return {
    toggleAddModal,
    toggleUpdateModal,
    handleDelete,
    data,
    loading,
    searchData,
    query,
    addModal,
    updateModal,
    currentItem,
    filteredItems,
  };
};
