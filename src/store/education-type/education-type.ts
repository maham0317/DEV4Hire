import { createAsyncThunk } from "@reduxjs/toolkit";
import { educationService } from "../../services/education-type";
import EducationTypeModel from "../../interfaces/setup/education-type.model";
import { toast } from "react-toastify";

export const getAllEducationType = createAsyncThunk(
  "educationtype/getAllEducationType",
  async (args, thunkAPI) => {
    try {
      const response = await educationService.getAllEducationType();
      return response;
    } catch (error) {
      return error;
      // return ErrorMessage(error, thunkAPI);
    }
  }
);

export const getEducationTypeById = createAsyncThunk(
  "educationtype/getEducationTypeById",
  async (args: number, thunkAPI) => {
    try {
      const response = await educationService.getEducationTypeById(args);
      return response;
    } catch (error) {
      return error;
      // return ErrorMessage(error, thunkAPI);
    }
  }
);

export const deleteEducationTypeById = createAsyncThunk(
  "educationtype/deleteEducationTypeById",
  async (args: number, thunkAPI) => {
    try {
      const response = await educationService.deleteEducationTypeById(args);
      thunkAPI.dispatch(getAllEducationType());
      return response;
    } catch (error) {
      return error;
      // return ErrorMessage(error, thunkAPI);
    }
  }
);

export const updateEducationTypeById = createAsyncThunk(
  "educationtype/updateEducationTypeById",
  async (args: number, thunkAPI) => {
    try {
      const response = await educationService.updateEducationTypeById(args);
      return response;
    } catch (error) {
      return error;
      // return ErrorMessage(error, thunkAPI);
    }
  }
);

export const createEducationType = createAsyncThunk(
  "educationtype/createEducationType",
  async (args: EducationTypeModel, thunkAPI) => {
    try {
      const response = await educationService.createEducationType(args);
      toast.success("Item saved successfully");
      thunkAPI.dispatch(getAllEducationType());
      return response;
    } catch (error) {
      console.log("error", error);
      toast.error("There is some error");
      throw error;
      return error;
      // return ErrorMessage(error, thunkAPI);
    }
  }
);
