import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import NetworkAndCommunitiesModel from "@/interfaces/network-and-community/network-and-community.model";
import { Config } from "@/config";
import { SortOrder } from "@/enums/sort-order.enum";
import {
  useDeleteNetworkAndCommunityMutation,
  useGetAllProfileNetworkAndCommunityMutation,
  useUpdateNetworkAndCommunityMutation,
} from "@/services/network-and-communities";
import NetworkAndCommunityFilterModel from "@/interfaces/network-and-community/network-and-community-filter.model";
import { SortByNetworkAndCommunity } from "@/enums/network-and-community/network-and-community.enum";
import { BaseListModel } from "@/interfaces/base-list.model";

export const useNetworkAndCommunity = () => {
  const [query, setQuery] = useState("");
  const [updateModal, setUpdateModal] = useState(false);
  const [currentItem, setCurrentItem] =
    useState<NetworkAndCommunitiesModel | null>(null);
  const [addModal, setAddModal] = useState(false);
  const [result, setResult] =
    useState<BaseListModel<NetworkAndCommunitiesModel>>();

  const [getAllProfileNetworkAndCommunity, { data, isLoading }] =
    useGetAllProfileNetworkAndCommunityMutation();
  const [deleteNetworkAndCommunity] = useDeleteNetworkAndCommunityMutation();
  const [updateNetworkAndCommunity] = useUpdateNetworkAndCommunityMutation();

  useEffect(() => {
    callApiAsync();
  }, []);

  const callApiAsync = async () => {
    try {
      const payload: NetworkAndCommunityFilterModel = {
        CurrentPage: 1,
        PageSize: Config.Filter.PageSize,
        SearchTerm: "",
        SortBy: SortByNetworkAndCommunity.Name,
        SortOrder: SortOrder.ASC,
      };
      const data = await getAllProfileNetworkAndCommunity(payload);
      setResult(data);
    } catch (error) {
      toast.error("Error fetching network and community data");
    }
  };

  const toggleAddModal = () => {
    setAddModal(!addModal);
  };

  const handleDelete = async (id: number) => {
    try {
      await deleteNetworkAndCommunity(id);
      toast.success("Network or community deleted successfully");
      callApiAsync();
    } catch (error) {
      console.error("Error deleting network or community:", error);
      toast.error("Error deleting network or community");
    }
  };

  const toggleUpdateModal = (item: NetworkAndCommunitiesModel) => {
    setCurrentItem(item);
    setUpdateModal(true);
  };

  const filteredItems = data?.Items.filter(
    (item: NetworkAndCommunitiesModel) => {
      return item.NetworkOrCommunity.toLowerCase().includes(
        query.toLowerCase()
      );
    }
  );

  const updatenetworkandcommunity = async (
    data: NetworkAndCommunitiesModel
  ) => {
    try {
      await updateNetworkAndCommunity(data);
      toast.success("Network or community updated successfully");
      callApiAsync();
    } catch (error) {
      console.error("Error updating network or community:", error);
      toast.error("Error updating network or community");
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
    updatenetworkandcommunity,
  };
};
