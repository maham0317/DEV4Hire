import { createAsyncThunk } from "@reduxjs/toolkit";
import { industryRoleService } from "../../services/industry-role";
import { IndustryRoleModel } from "../../interfaces/industry/industry.model";

export const getAllIndustryRole = createAsyncThunk(
  "industryRole/getAllIndustryRole",
  async (args, thunkAPI) => {
    try {
      const response = await industryRoleService.getAllIndustryRole();
      return response;
    } catch (error) {
      return error;
      // return ErrorMessage(error, thunkAPI);
    }
  }
);
export const getIndustryRoleById = createAsyncThunk(
  "industryRole/getIndustryRoleById",
  async (args: number, thunkAPI) => {
    try {
      const response = await industryRoleService.getIndustryRoleById(args);
      return response;
    } catch (error) {
      return error;
      // return ErrorMessage(error, thunkAPI);
    }
  }
);
export const deleteIndustryRoleById = createAsyncThunk(
  "industryRole/deleteIndustryRoleById",
  async (args: number, thunkAPI) => {
    try {
      const response = await industryRoleService.deleteIndustryRoleById(args);
      return response;
    } catch (error) {
      return error;
      // return ErrorMessage(error, thunkAPI);
    }
  }
);

export const updateIndustryRoleById = createAsyncThunk(
  "industryRole/updateIndustryRoleById",
  async (args: number, thunkAPI) => {
    try {
      const response = await industryRoleService.updateIndustryRoleById(args);
      return response;
    } catch (error) {
      return error;
      // return ErrorMessage(error, thunkAPI);
    }
  }
);

export const createIndustryRole = createAsyncThunk(
  "industryRole/createIndustryRole",
  async (args: IndustryRoleModel, thunkAPI) => {
    try {
      const response = await industryRoleService.createIndustryRole(args);
      return response;
    } catch (error) {
      return error;
      // return ErrorMessage(error, thunkAPI);
    }
  }
);
