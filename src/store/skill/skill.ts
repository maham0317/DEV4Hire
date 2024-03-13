import { createAsyncThunk } from "@reduxjs/toolkit";
import { SkillService } from "../../services/skill";
import SkillTypeModel from "../../interfaces/skill/skill-type.model";

export const getAllSkill = createAsyncThunk(
  "skill/getAllSkill",
  async (args, thunkAPI) => {
    try {
      const response = await SkillService.getAllSkill();
      return response;
    } catch (error) {
      return error;
      // return ErrorMessage(error, thunkAPI);
    }
  }
);
export const getSkillById = createAsyncThunk(
  "skill/getSkillById",
  async (args: number, thunkAPI) => {
    try {
      const response = await SkillService.getSkillById(args);
      return response;
    } catch (error) {
      return error;
      // return ErrorMessage(error, thunkAPI);
    }
  }
);
export const deleteSkillById = createAsyncThunk(
  "skill/deleteSkillById",
  async (args: number, thunkAPI) => {
    try {
      const response = await SkillService.deleteSkillById(args);
      return response;
    } catch (error) {
      return error;
      // return ErrorMessage(error, thunkAPI);
    }
  }
);
export const updateSkillById = createAsyncThunk(
  "skill/updateSkillById",
  async (args: number, thunkAPI) => {
    try {
      const response = await SkillService.updateSkillById(args);
      return response;
    } catch (error) {
      return error;
      // return ErrorMessage(error, thunkAPI);
    }
  }
);
export const createSkill = createAsyncThunk(
  "skill/createSkill",
  async (args: SkillTypeModel, thunkAPI) => {
    try {
      const response = await SkillService.createSkill(args);
      return response;
    } catch (error) {
      return error;
      // return ErrorMessage(error, thunkAPI);
    }
  }
);
