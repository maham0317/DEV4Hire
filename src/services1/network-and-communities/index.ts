import NetworkAndCommunitiesModel from "../../interfaces1/network-and-community/network-and-community.model";
import api from "../ApiClient";

export async function getAllNetworkAndCommunities(): Promise<any> {
  let url = `networkandcommunities/list`;
  const response: any = await api.get(url);
  return response.data;
}

export async function getNetworkAndCommunitiesById(id: number): Promise<any> {
  let url = `networkandcommunities/list/${id}`;
  const response: any = await api.get(url);
  return response.data;
}

export async function deleteNetworkAndCommunitiesById(
  id: number
): Promise<any> {
  let url = `networkandcommunities/delete/${id}`;
  const response: any = await api.delete(url);
  return response.data;
}

export async function updateNetworkAndCommunitiesById(
  id: number
): Promise<any> {
  let url = `networkandcommunities/update/${id}`;
  const response: any = await api.put(url);
  return response.data;
}

export async function createNetworkAndCommunities(
  args: NetworkAndCommunitiesModel
): Promise<any> {
  let url = `networkandcommunities/create`;
  const response: any = await api.post(url);
  return response.data;
}

export const NetworkAndCommunitiesService = {
  getAllNetworkAndCommunities,
  getNetworkAndCommunitiesById,
  deleteNetworkAndCommunitiesById,
  updateNetworkAndCommunitiesById,
  createNetworkAndCommunities,
};
