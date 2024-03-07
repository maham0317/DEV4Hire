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

const createDefaultState = (): NetworkAndCommunitiesStateModel => {
  return {
    status: "",
    error: null,
    isLoading: false,
    isError: false,
    data: null,
  };
};

const NetworkAndCommunitiesSlice = createSlice({
  name: "NetworkAndCommunitiess",
  initialState: createDefaultState() as NetworkAndCommunitiesStateModel,
  reducers: {},
  extraReducers: (builder: any) => {
    builder
      .addCase(getAllNetworkAndCommunities.pending, (state: any) => {
        return {
          ...state,
          status: "pending",
          error: null,
          isLoading: true,
          isError: false,
        };
      })
      .addCase(
        getAllNetworkAndCommunities.fulfilled,
        (state: any, action: PayloadAction<NetworkAndCommunitiesModel>) => {
          return {
            ...state,
            status: "succeeded",
            error: null,
            isLoading: false,
            data: action.payload,
            isError: false,
          };
        }
      )
      .addCase(
        getAllNetworkAndCommunities.rejected,
        (state: any, action: PayloadAction<NetworkAndCommunitiesModel>) => {
          return {
            ...state,
            status: "failed",
            error: action.payload,
            isLoading: false,
            data: null,
            isError: true,
          };
        }
      )
      .addCase(getNetworkAndCommunitiesById.pending, (state: any) => {
        return {
          ...state,
          status: "pending",
          error: null,
          isLoading: true,
          isError: false,
        };
      })
      .addCase(
        getNetworkAndCommunitiesById.fulfilled,
        (state: any, action: PayloadAction<NetworkAndCommunitiesModel>) => {
          return {
            ...state,
            status: "succeeded",
            error: null,
            isLoading: false,
            data: action.payload,
            isError: false,
          };
        }
      )
      .addCase(
        getNetworkAndCommunitiesById.rejected,
        (state: any, action: PayloadAction<NetworkAndCommunitiesModel>) => {
          return {
            ...state,
            status: "failed",
            error: action.payload,
            isLoading: false,
            data: null,
            isError: true,
          };
        }
      )
      .addCase(deleteNetworkAndCommunitiesById.pending, (state: any) => {
        return {
          ...state,
          status: "pending",
          error: null,
          isLoading: true,
          isError: false,
        };
      })
      .addCase(
        deleteNetworkAndCommunitiesById.fulfilled,
        (state: any, action: PayloadAction<NetworkAndCommunitiesModel>) => {
          return {
            ...state,
            status: "succeeded",
            error: null,
            isLoading: false,
            data: action.payload,
            isError: false,
          };
        }
      )
      .addCase(
        deleteNetworkAndCommunitiesById.rejected,
        (state: any, action: PayloadAction<NetworkAndCommunitiesModel>) => {
          return {
            ...state,
            status: "failed",
            error: action.payload,
            isLoading: false,
            data: null,
            isError: true,
          };
        }
      )
      .addCase(updateNetworkAndCommunitiesById.pending, (state: any) => {
        return {
          ...state,
          status: "pending",
          error: null,
          isLoading: true,
          isError: false,
        };
      })
      .addCase(
        updateNetworkAndCommunitiesById.fulfilled,
        (state: any, action: PayloadAction<NetworkAndCommunitiesModel>) => {
          return {
            ...state,
            status: "succeeded",
            error: null,
            isLoading: false,
            data: action.payload,
            isError: false,
          };
        }
      )
      .addCase(
        updateNetworkAndCommunitiesById.rejected,
        (state: any, action: PayloadAction<NetworkAndCommunitiesModel>) => {
          return {
            ...state,
            status: "failed",
            error: action.payload,
            isLoading: false,
            data: null,
            isError: true,
          };
        }
      )
      .addCase(createNetworkAndCommunities.pending, (state: any) => {
        return {
          ...state,
          status: "pending",
          error: null,
          isLoading: true,
          isError: false,
        };
      })
      .addCase(
        createNetworkAndCommunities.fulfilled,
        (state: any, action: PayloadAction<NetworkAndCommunitiesModel>) => {
          return {
            ...state,
            status: "succeeded",
            error: null,
            isLoading: false,
            data: action.payload,
            isError: false,
          };
        }
      )
      .addCase(
        createNetworkAndCommunities.rejected,
        (state: any, action: PayloadAction<NetworkAndCommunitiesModel>) => {
          return {
            ...state,
            status: "failed",
            error: action.payload,
            isLoading: false,
            data: null,
            isError: true,
          };
        }
      );
  },
});

export default NetworkAndCommunitiesSlice.reducer;
export const NetworkAndCommunitiesSelector = (state: any) => state.award;
export const {} = NetworkAndCommunitiesSlice.actions;
