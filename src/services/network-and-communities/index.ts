import { BaseListModel } from "@/interfaces/base-list.model";
import { apiService } from "../api";
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
      getNetworkAndCommunityById: builder.query<
        NetworkAndCommunitiesModel,
        Number
      >({
        query: (id) => ({
          url: `profilenetworkandcommunity/list/${id}`,
          transformResponse: (response: { data: NetworkAndCommunitiesModel }) =>
            response.data,
          transformErrorResponse: (response: { status: string | number }) =>
            response.status,
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
