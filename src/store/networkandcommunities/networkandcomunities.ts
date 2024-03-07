import { createAsyncThunk } from "@reduxjs/toolkit";
import { NetworkAndCommunitiesService } from "../../services/networkandcommunities";
import NetworkAndCommunitiesModel from "../../interfaces/NetworkAndCommunity/NetworkAndCommunity";

export const getAllNetworkAndCommunities = createAsyncThunk(
  "NetworkAndCommunities/getAllNetworkAndCommunities",
  async (args, thunkAPI) => {
    try {
      const response =
        await NetworkAndCommunitiesService.getAllNetworkAndCommunities();
      return response;
    } catch (error) {
      return error;
      // return ErrorMessage(error, thunkAPI);
    }
  }
);
export const getNetworkAndCommunitiesById = createAsyncThunk(
  "NetworkAndCommunities/getNetworkAndCommunitiesById",
  async (args: number, thunkAPI) => {
    try {
      const response =
        await NetworkAndCommunitiesService.getNetworkAndCommunitiesById(args);
      return response;
    } catch (error) {
      return error;
      // return ErrorMessage(error, thunkAPI);
    }
  }
);
export const deleteNetworkAndCommunitiesById = createAsyncThunk(
  "NetworkAndCommunities/deleteNetworkAndCommunitiesById",
  async (args: number, thunkAPI) => {
    try {
      const response =
        await NetworkAndCommunitiesService.deleteNetworkAndCommunitiesById(
          args
        );
      return response;
    } catch (error) {
      return error;
      // return ErrorMessage(error, thunkAPI);
    }
  }
);
export const updateNetworkAndCommunitiesById = createAsyncThunk(
  "NetworkAndCommunities/updateNetworkAndCommunitiesById",
  async (args: number, thunkAPI) => {
    try {
      const response =
        await NetworkAndCommunitiesService.updateNetworkAndCommunitiesById(
          args
        );
      return response;
    } catch (error) {
      return error;
      // return ErrorMessage(error, thunkAPI);
    }
  }
);
export const createNetworkAndCommunities = createAsyncThunk(
  "NetworkAndCommunities/createNetworkAndCommunities",
  async (args: NetworkAndCommunitiesModel, thunkAPI) => {
    try {
      const response =
        await NetworkAndCommunitiesService.createNetworkAndCommunities(args);
      return response;
    } catch (error) {
      return error;
      // return ErrorMessage(error, thunkAPI);
    }
  }
);
