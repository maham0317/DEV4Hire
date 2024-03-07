import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { AwardModel, AwardStateModel} from "../../interfaces/Award/Awards";
import { getAllAwards } from "./award";

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
  extraReducers: (builder) => {
    builder
      .addCase(getAllAwards.pending, (state) => {
        return {
          ...state,
          status: "pending",
          error: null,
          isLoading: true,
          isError: false,
        };
      })
      .addCase(getAllAwards.fulfilled, (state, action: PayloadAction<AwardModel>) => {
        return {
          ...state,
          status: "succeeded",
          error: null,
          isLoading: false,
          awardData: action.payload,
          isError: false,
        };
      })
      .addCase(getAllAwards.rejected, (state, action: PayloadAction<any>) => {
        return {
          ...state,
          status: "failed",
          error: action.payload as string,
          isLoading: false,
          awardData: null,
          isError: true,
        };
      });
  },
});

export default awardSlice.reducer;
export const awardSelector = (state: any) => state.award;
export const {} = awardSlice.actions;
