import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { AwardModel, AwardStateModel} from "../../interfaces/Award/Awards";
import {
  createAward,
  deleteAwardById,
  getAllAwards,
  getAwardById,
  updateAwardById,
} from "./award";

const createDefaultState = (): AwardStateModel => {
  return {
    status: "pending",
    error: null,
    isLoading: true,
    isError: false,
    awardData: null
  };
};

const awardSlice = createSlice({
  name: "award",
  initialState: createDefaultState() as AwardStateModel,
  reducers: {},
  extraReducers: (builder: any) => {
    builder
      // Get All Awards
      .addCase(getAllAwards.pending, (state: any) => {
        return {
          ...state,
          status: "pending",
          error: null,
          isLoading: true,
          isError: false,
          data: null,
        };
      })
      .addCase(
        getAllAwards.fulfilled,
        (state: any, action: PayloadAction<AwardModel>) => {
          return {
            ...state,
            status: "succeeded",
            error: null,
            isLoading: false,
          awardData: action.payload,
            isError: false,
            data: action.payload,
          };
        }
      )
      .addCase(
        getAllAwards.rejected,
        (state: any, action: PayloadAction<AwardModel>) => {
          return {
            ...state,
            status: "failed",
            error: action.payload,
            isLoading: false,
            isError: true,
            data: null,
          };
        }
      )

      //Get Award By Id
      .addCase(getAwardById.pending, (state: any) => {
        return {
          ...state,
          status: "pending",
          error: null,
          isLoading: true,
          isError: false,
          data: null,
        };
      })
      .addCase(
        getAwardById.fulfilled,
        (state: any, action: PayloadAction<AwardModel>) => {
          return {
            ...state,
            status: "succeeded",
            error: null,
            isLoading: false,
            isError: false,
            data: action.payload,
          };
        }
      )
      .addCase(
        getAwardById.rejected,
        (state: any, action: PayloadAction<AwardModel>) => {
          return {
            ...state,
            status: "failed",
            error: action.payload,
            isLoading: false,
          awardData: null,
            isError: true,
            data: null,
          };
        }
      )

      //Delete Award By Id
      .addCase(deleteAwardById.pending, (state: any) => {
        return {
          ...state,
          status: "pending",
          error: null,
          isLoading: true,
          isError: false,
          data: null,
        };
      })
      .addCase(
        deleteAwardById.fulfilled,
        (state: any, action: PayloadAction<AwardModel>) => {
          return {
            ...state,
            status: "succeeded",
            error: null,
            isLoading: false,
            isError: false,
            data: action.payload,
          };
        }
      )
      .addCase(
        deleteAwardById.rejected,
        (state: any, action: PayloadAction<AwardModel>) => {
          return {
            ...state,
            status: "failed",
            error: action.payload,
            isLoading: false,
            isError: true,
            data: null,
          };
        }
      )

      //Update Award By Id
      .addCase(updateAwardById.pending, (state: any) => {
        return {
          ...state,
          status: "pending",
          error: null,
          isLoading: true,
          isError: false,
          data: null,
        };
      })
      .addCase(
        updateAwardById.fulfilled,
        (state: any, action: PayloadAction<AwardModel>) => {
          return {
            ...state,
            status: "succeeded",
            error: null,
            isLoading: false,
            isError: false,
            data: action.payload,
          };
        }
      )
      .addCase(
        updateAwardById.rejected,
        (state: any, action: PayloadAction<AwardModel>) => {
          return {
            ...state,
            status: "failed",
            error: action.payload,
            isLoading: false,
            isError: true,
            data: null,
          };
        }
      )

      //Create Award By Id
      .addCase(createAward.pending, (state: any) => {
        return {
          ...state,
          status: "pending",
          error: null,
          isLoading: true,
          isError: false,
          data: null,
        };
      })
      .addCase(
        createAward.fulfilled,
        (state: any, action: PayloadAction<AwardModel>) => {
          return {
            ...state,
            status: "succeeded",
            error: null,
            isLoading: false,
            isError: false,
            data: action.payload,
          };
        }
      )
      .addCase(
        createAward.rejected,
        (state: any, action: PayloadAction<AwardModel>) => {
          return {
            ...state,
            status: "failed",
            error: action.payload,
            isLoading: false,
            isError: true,
            data: null,
          };
        }
      );
  },
});

export default awardSlice.reducer;
export const awardSelector = (state: any) => state.award;
export const {} = awardSlice.actions;
