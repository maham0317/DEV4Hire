import { createAsyncThunk } from "@reduxjs/toolkit";
import { proficiencyService } from "../../services1/proficiency";
import ProficiencyModel from "../../interfaces1/setup/proficiency.model";

export const getAllProficiency = createAsyncThunk(
  "proficiency/getAllProficiency",
  async (args, thunkAPI) => {
    try {
      const response = await proficiencyService.getAllProficiency();
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
  async (args: number, thunkAPI) => {
    try {
      const response = await proficiencyService.updateProficiencyById(args);
      return response;
    } catch (error) {
      return error;
      // return ErrorMessage(error, thunkAPI);
    }
  }
);
export const createProficiency = createAsyncThunk(
  "proficiency/createProficiency",
  async (args: ProficiencyModel, thunkAPI) => {
    try {
      const response = await proficiencyService.createProficiency(args);
      return response;
    } catch (error) {
      return error;
      // return ErrorMessage(error, thunkAPI);
    }
  }
);
