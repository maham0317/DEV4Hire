import { createSlice } from "@reduxjs/toolkit";
import { ApplicationAndBusinessFocusModel } from "../../interfaces/application-and-business-focus/application-and-business-focus.model";
import {
  getAllApplicationAndBusinessFocus,
  getApplicationAndBusinessFocusById,
  deleteApplicationAndBusinessFocusById,
  updateApplicationAndBusinessFocusById,
  createApplicationAndBusinessFocus,
} from "./application-and-business-focus";
import { StateModel } from "../../interfaces/state/state.model";
import { addCases } from "..";

const createDefaultState = (): StateModel<ApplicationAndBusinessFocusModel> => {
  return {
    status: "pending",
    error: null,
    isLoading: true,
    data: null,
  };
};

const applicationAndBusinessFocusSlice = createSlice({
  name: "applicationAndBusinessFocus",
  initialState:
    createDefaultState() as StateModel<ApplicationAndBusinessFocusModel>,
  reducers: {},
  extraReducers: (builder: any) => {
    // add cases for all API calls
    addCases<ApplicationAndBusinessFocusModel>(
      builder,
      getAllApplicationAndBusinessFocus
    );
    addCases<ApplicationAndBusinessFocusModel>(
      builder,
      getApplicationAndBusinessFocusById
    );
    addCases<ApplicationAndBusinessFocusModel>(
      builder,
      deleteApplicationAndBusinessFocusById
    );
    addCases<ApplicationAndBusinessFocusModel>(
      builder,
      updateApplicationAndBusinessFocusById
    );
    addCases<ApplicationAndBusinessFocusModel>(
      builder,
      createApplicationAndBusinessFocus
    );
  },
});

export default applicationAndBusinessFocusSlice.reducer;
export const applicationAndBusinessFocusSliceSelector = (state: any) =>
  state.applicationAndBusinessFocus;
export const {} = applicationAndBusinessFocusSlice.actions;
