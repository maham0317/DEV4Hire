import { BaseListModel } from "@/interfaces/base-list.model";
import { apiService } from "../api";
import api from "@/services/ApiClient";
import NetworkAndCommunitiesModel from "@/interfaces/network-and-community/network-and-community.model";
import NetworkAndCommunityFilterModel from "@/interfaces/network-and-community/network-and-community-filter.model";

const NetworkAndCommunity = "NetworkAndCommunity";
export const networandcommunityapi = apiService
  .enhanceEndpoints({ addTagTypes: [NetworkAndCommunity] })
  .injectEndpoints({
    endpoints: (builder) => ({
      getAllProfileNetworkAndCommunity: builder.mutation<
        BaseListModel<NetworkAndCommunitiesModel>,
        NetworkAndCommunityFilterModel
      >({
        query: (data) => ({
          url: "profilenetworkandcommunity/list",
          method: "POST",
          body: data,
        }),
      }),

      createNetworkAndCommunity: builder.mutation({
        query: (data) => ({
          url: "profilenetworkandcommunity/create",
          method: "POST",
          body: data,
        }),
        invalidatesTags: ["NetworkAndCommunity"],
      }),
      updateNetworkAndCommunity: builder.mutation({
        query: (data) => ({
          url: `profilenetworkandcommunity/update`,
          method: "PUT",
          body: data,
        }),
        invalidatesTags: ["NetworkAndCommunity"],
      }),
      deleteNetworkAndCommunity: builder.mutation({
        query: (id) => ({
          url: `profilenetworkandcommunity/delete/${id}`,
          method: "DELETE",
        }),
        invalidatesTags: ["NetworkAndCommunity"],
      }),
    }),
  });
export const {
  useGetAllProfileNetworkAndCommunityMutation,
  useCreateNetworkAndCommunityMutation,
  useDeleteNetworkAndCommunityMutation,
  useUpdateNetworkAndCommunityMutation,
} = networandcommunityapi;
export async function getAllNetworkAndCommunity(
  model: NetworkAndCommunityFilterModel
): Promise<any> {
  let url = `profilenetworkandcommunity/list`;
  const response: any = await api.post(url);
  return response.data;
}
export async function getNetworkAndCommunityById(id: number): Promise<any> {
  let url = `profilenetworkandcommunity/list/${id}`;
  const response: any = await api.get(url);
  return response.data;
}

export async function deleteNetworkAndCommunityById(id: number): Promise<any> {
  let url = `profilenetworkandcommunity/delete/${id}`;
  const response: any = await api.delete(url);
  return response.data;
}

export async function updateNetworkAndCommunityById(
  model: NetworkAndCommunitiesModel
): Promise<any> {
  let url = `profilenetworkandcommunity/update`;
  const response: any = await api.put(url, model);
  return response.data;
}

export async function createNetworkAndCommunity(
  model: NetworkAndCommunitiesModel
): Promise<any> {
  let url = `profilenetworkandcommunity/create`;
  const response: any = await api.post(url, model);
  return response.data;
}

export const proficiencyService = {
  getAllNetworkAndCommunity,
  getNetworkAndCommunityById,
  deleteNetworkAndCommunityById,
  updateNetworkAndCommunityById,
  createNetworkAndCommunity,
};
