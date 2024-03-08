import { createAsyncThunk } from "@reduxjs/toolkit";
import { NetworkAndCommunitiesService } from "../../services/networkandcommunities";
import NetworkAndCommunitiesModel from "../../interfaces/networkAndCommunity/networkAndCommunity";

export const getAllNetworkAndCommunities = createAsyncThunk(
  "networkAndCommunities/getAllNetworkAndCommunities",
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
  "networkAndCommunities/getNetworkAndCommunitiesById",
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
  "networkAndCommunities/deleteNetworkAndCommunitiesById",
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
  "networkAndCommunities/updateNetworkAndCommunitiesById",
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
  "networkAndCommunities/createNetworkAndCommunities",
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
