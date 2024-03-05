import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import AwardModel from "../../interfaces/Award/Awards";
import { getAllAwards } from "./award";

const createDefaultState = (): AwardModel => {
  return {
    id: 0,
    AwardTitle: "",
    Year: 0,
  };
};

const awardSlice = createSlice({
  name: "award",
  initialState: createDefaultState() as AwardModel,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllAwards.pending, (state) => {
        return {
          ...state,
          status: "pending",
          error: null,
          isLoading: true,
          unapprovedApprovalData: null,
          isError: false,
        };
      })
      .addCase(getAllAwards.fulfilled, (state, action: PayloadAction<any>) => {
        return {
          ...state,
          status: "succeeded",
          error: null,
          isLoading: false,
          unapprovedApprovalData: action.payload,
          isError: false,
        };
      })
      .addCase(getAllAwards.rejected, (state, action: PayloadAction<any>) => {
        return {
          ...state,
          status: "failed",
          error: action.payload as string,
          isLoading: false,
          unapprovedApprovalData: null,
          isError: true,
        };
      });
  },
});

export default awardSlice.reducer;
export const awardSelector = (state: any) => state.award;
export const {} = awardSlice.actions;
