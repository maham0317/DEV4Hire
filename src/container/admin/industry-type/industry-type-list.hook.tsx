import { Config } from "@/config";
import { SortByIndustryType } from "@/enums/industry-type/industry-type.enum";
import { SortOrder } from "@/enums/sort-order.enum";
import { BaseListModel } from "@/interfaces/base-list.model";
import IndustryTypeFilterModel from "@/interfaces/industry-type/industry-type-filter.model";
import { IndustryTypeModel } from "@/interfaces/industry-type/industry-type.model";
import {
  useGetAllIndustryTypeMutation,
  useDeleteIndustryTypeMutation,
} from "@/services/industry-type";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export const useIndustry = () => {
  const [addModal, setAddModal] = useState(false);
  const [updateModal, setUpdateModal] = useState(false);
  const [currentItem, setCurrentItem] = useState<IndustryTypeModel>();

  const [query, setQuery] = useState("");
  const [getAllIndustryType, { data, isLoading: loading }] =
    useGetAllIndustryTypeMutation();
  const [deleteIndustryType, { isLoading: isDeleteing }] =
    useDeleteIndustryTypeMutation();
  const [result, setResult] = useState<
    BaseListModel<IndustryTypeModel> | undefined
  >();

  const callApiAsyc = async () => {
    const payload: IndustryTypeFilterModel = {
      CurrentPage: 1,
      PageSize: Config.Filter.PageSize,
      SearchTerm: "",
      SortBy: SortByIndustryType.Name,
      SortOrder: SortOrder.ASC,
    };
    var data = await getAllIndustryType(payload);
    setResult(data);
  };

  useEffect(() => {
    callApiAsyc();
  }, []);

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
      await deleteIndustryType(id);
      toast.success("Industry Type Delete Successfully");
      callApiAsyc();
    } catch (e: any) {
      toast.error("There is some error");
    }
  };

  // Search data
  const searchData = (e: React.ChangeEvent<HTMLInputElement>) => {
    const key = e.target.value;
    setQuery(key);
  };

  // Filtered items

  const filteredItems = data?.Items?.filter((item: IndustryTypeModel) => {
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
    callApiAsyc,
  };
};
