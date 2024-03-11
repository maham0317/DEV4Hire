import { PayloadAction } from "@reduxjs/toolkit";
import { StateModel } from "../interfaces/State/StateModel";

export const addCases = <T>(builder: any, apiAction: any) => {
  builder
    .addCase(apiAction.pending, (state: any): StateModel<T> => {
      return {
        ...state,
        status: "pending",
        error: null,
        isLoading: true,
        data: null,
      };
    })
    .addCase(
      apiAction.fulfilled,
      (state: any, action: PayloadAction<T>): StateModel<T> => {
        return {
          ...state,
          status: "succeeded",
          error: null,
          isLoading: false,
          data: action.payload,
        };
      }
    )
    .addCase(
      apiAction.rejected,
      (state: any, action: PayloadAction<T>): StateModel<T> => {
        return {
          ...state,
          status: "failed",
          error: action.payload,
          isLoading: false,
          data: null,
        };
      }
    );
};
