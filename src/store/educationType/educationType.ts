import { createAsyncThunk } from "@reduxjs/toolkit";
import { educationService } from "../../services/educationType";
import EducationTypeModel from "../../interfaces/setup/education-type.model";

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
      return response;
    } catch (error) {
      return error;
      // return ErrorMessage(error, thunkAPI);
    }
  }
);
