import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Config } from "@/config";
import { SortOrder } from "@/enums/sort-order.enum";
import {
  useDeleteProfileAwardMutation,
  useGetAllProfileAwardMutation,
  useUpdateProfileAwardMutation,
} from "@/services/award";
import { AwardModel } from "@/interfaces/award/award.model";
import AwardFilterModel from "@/interfaces/award/award.filter.model";
import { SortByAward } from "@/enums/awards/award.enum";

export const useAward = () => {
  const [query, setQuery] = useState("");
  const [updateModal, setUpdateModal] = useState(false);
  const [currentItem, setCurrentItem] = useState<AwardModel>();
  const [addModal, setAddModal] = useState(false);

  const [getAllAwards, { data, isLoading }] = useGetAllProfileAwardMutation();
  const [deleteAward] = useDeleteProfileAwardMutation();
  const [updateAward] = useUpdateProfileAwardMutation();

  const [result, setResult] = useState<BaseListModel<AwardModel>>();

  useEffect(() => {
    callApiAsync();
  }, []);

  const callApiAsync = async () => {
    try {
      const payload: AwardFilterModel = {
        CurrentPage: 1,
        PageSize: Config.Filter.PageSize,
        SearchTerm: "",
        SortBy: SortByAward.Name,
        SortOrder: SortOrder.ASC,
      };
      const data = await getAllAwards(payload);
      setResult(data);
    } catch (error) {
      console.error("Error fetching award  data:", error);
      toast.error("Error fetching award  data");
    }
  };

  const toggleAddModal = () => {
    setAddModal(!addModal);
  };
  const searchData = (e: any) => {
    const key = e.target.value;
    setQuery(key);
  };
  const handleDelete = async (id: number) => {
    try {
      await deleteAward(id);
      toast.success("Awards deleted successfully");
      callApiAsync();
    } catch (error) {
      console.error("Error deleting awards:", error);
      toast.error("Error deleting awards");
    }
  };

  const toggleUpdateModal = (item: AwardModel) => {
    setCurrentItem(item);
    setUpdateModal(true);
  };

  const filteredItems = data?.Items.filter((item: AwardModel) => {
    return item.AwardTitle.toLowerCase().includes(query.toLowerCase());
  });

  const updateawards = async (data: AwardModel) => {
    try {
      await updateAward(data);
      toast.success("Award updated successfully");
      callApiAsync();
    } catch (error) {
      console.error("Error updating Award:", error);
      toast.error("Error updating Award");
    }
  };

  return {
    toggleAddModal,
    toggleUpdateModal,
    data,
    addModal,
    query,
    currentItem,
    filteredItems,
    callApiAsync,
    updateModal,
    handleDelete,
    updateawards,
    searchData,
  };
};
