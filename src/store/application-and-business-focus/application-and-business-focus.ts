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

export const updateApplicationAndBusinessFocusById = createAsyncThunk(
  "applicationAndBusinessFocus/updateApplicationAndBusinessFocusById",
  async (args: number, thunkAPI) => {
    try {
      const response =
        await applicationAndBusinessFocusService.updateApplicationAndBusinessFocusById(
          args
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
  async (args: ApplicationAndBusinessFocusModel, thunkAPI) => {
    try {
      const response =
        await applicationAndBusinessFocusService.createApplicationAndBusinessFocus(
          args
        );
      return response;
    } catch (error) {
      return error;
      // return ErrorMessage(error, thunkAPI);
    }
  }
);
