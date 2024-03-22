import { createAsyncThunk } from "@reduxjs/toolkit";
import { applicationAndBusinessFocusService } from "../../services/application-and-business-focus";
import { ApplicationAndBusinessFocusModel } from "../../interfaces/application-and-business-focus/application-and-business-focus.model";

export const getAllApplicationAndBusinessFocus = createAsyncThunk(
  "applicationAndBusinessFocus/getAllApplicationAndBusinessFocus",
  async (args, thunkAPI) => {
    try {
      const response =
        await applicationAndBusinessFocusService.getAllApplicationAndBusinessFocus();
      return response;
    } catch (error) {
      return error;
      // return ErrorMessage(error, thunkAPI);
    }
  }
);
export const getApplicationAndBusinessFocusById = createAsyncThunk(
  "applicationAndBusinessFocus/getApplicationAndBusinessFocusById",
  async (args: number, thunkAPI) => {
    try {
      const response =
        await applicationAndBusinessFocusService.getApplicationAndBusinessFocusById(
          args
        );
      return response;
    } catch (error) {
      return error;
      // return ErrorMessage(error, thunkAPI);
    }
  }
);
export const deleteApplicationAndBusinessFocusById = createAsyncThunk(
  "applicationAndBusinessFocus/deleteApplicationAndBusinessFocusById",
  async (args: number, thunkAPI) => {
    try {
      const response =
        await applicationAndBusinessFocusService.deleteApplicationAndBusinessFocusById(
          args
        );
      return response;
    } catch (error) {
      return error;
      // return ErrorMessage(error, thunkAPI);
    }
  }
);

export const updateApplicationAndBusinessFocus = createAsyncThunk(
  "applicationAndBusinessFocus/updateApplicationAndBusinessFocus",
  async (model: ApplicationAndBusinessFocusModel, thunkAPI) => {
    try {
      const response =
        await applicationAndBusinessFocusService.updateApplicationAndBusinessFocus(
          model
        );
      return response;
    } catch (error) {
      return error;
      // return ErrorMessage(error, thunkAPI);
    }
  }
);

export const createApplicationAndBusinessFocus = createAsyncThunk(
  "applicationAndBusinessFocus/createApplicationAndBusinessFocus",
  async (model: ApplicationAndBusinessFocusModel, thunkAPI) => {
    try {
      const response =
        await applicationAndBusinessFocusService.createApplicationAndBusinessFocus(
          model
        );
      return response;
    } catch (error) {
      return error;
      // return ErrorMessage(error, thunkAPI);
    }
  }
);
