import { createAsyncThunk } from "@reduxjs/toolkit";
import { proficiencyService } from "@/services/proficiency";
import ProficiencyModel from "@/interfaces/setup/proficiency.model";
import ProficiencyFilterModel from "@/interfaces/setup/proficiency-filter.model";

export const getAllProficiency = createAsyncThunk(
  "proficiency/getAllProficiency",
  async (model:ProficiencyFilterModel, thunkAPI) => {
    try {
      const response = await proficiencyService.getAllProficiency(model);
      return response;
    } catch (error) {
      return error;
      // return ErrorMessage(error, thunkAPI);
    }
  }
);
export const getProficiencyById = createAsyncThunk(
  "proficiency/getProficiencyById",
  async (args: number, thunkAPI) => {
    try {
      const response = await proficiencyService.getProficiencyById(args);
      return response;
    } catch (error) {
      return error;
      // return ErrorMessage(error, thunkAPI);
    }
  }
);
export const deleteProficiencyById = createAsyncThunk(
  "proficiency/deleteProficiencyById",
  async (args: number, thunkAPI) => {
    try {
      const response = await proficiencyService.deleteProficiencyById(args);
      return response;
    } catch (error) {
      return error;
      // return ErrorMessage(error, thunkAPI);
    }
  }
);
export const updateProficiencyById = createAsyncThunk(
  "proficiency/updateProficiencyById",
  async (model: ProficiencyModel, thunkAPI) => {
    try {
      const response = await proficiencyService.updateProficiencyById(model);
      return response;
    } catch (error) {
      return error;
      // return ErrorMessage(error, thunkAPI);
    }
  }
);
export const createProficiency = createAsyncThunk(
  "proficiency/createProficiency",
  async (model: ProficiencyModel, thunkAPI) => {
    try {
      const response = await proficiencyService.createProficiency(model);
      return response;
    } catch (error) {
      return error;
      // return ErrorMessage(error, thunkAPI);
    }
  }
);
