import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import NetworkAndCommunitiesModel, {
  NetworkAndCommunitiesStateModel,
} from "../../interfaces/NetworkAndCommunity/NetworkAndCommunity";
import {
  getAllNetworkAndCommunities,
  getNetworkAndCommunitiesById,
  deleteNetworkAndCommunitiesById,
  updateNetworkAndCommunitiesById,
  createNetworkAndCommunities,
} from "./networkandcomunities";
import { StateModel } from "../../interfaces/State/StateModel";
import { addCases } from "..";

const createDefaultState = (): StateModel<NetworkAndCommunitiesModel> => {
  return {
    status: "pending",
    error: null,
    isLoading: true,
    data: null,
  };
};

const NetworkAndCommunitiesSlice = createSlice({
  name: "networkAndCommunities",
  initialState: createDefaultState() as StateModel<NetworkAndCommunitiesModel>,
  reducers: {},
  extraReducers: (builder: any) => {
    // add cases for all API calls
    addCases<NetworkAndCommunitiesModel>(builder, getAllNetworkAndCommunities);
    addCases<NetworkAndCommunitiesModel>(builder, getNetworkAndCommunitiesById);
    addCases<NetworkAndCommunitiesModel>(
      builder,
      deleteNetworkAndCommunitiesById
    );
    addCases<NetworkAndCommunitiesModel>(
      builder,
      updateNetworkAndCommunitiesById
    );
    addCases<NetworkAndCommunitiesModel>(builder, createNetworkAndCommunities);
  },
});

export default NetworkAndCommunitiesSlice.reducer;
export const NetworkAndCommunitiesSelector = (state: any) =>
  state.networkAndCommunitiess;
export const {} = NetworkAndCommunitiesSlice.actions;
