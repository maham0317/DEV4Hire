import { createAsyncThunk } from "@reduxjs/toolkit";
import { SkillService } from "../../services/skill";
import SkillTypeModel from "../../interfaces/Skill/SkillType";

export const getAllSkill = createAsyncThunk(
  "Skill/getAllSkill",
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
  "Skill/getSkillById",
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
  "Skill/deleteSkillById",
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
  "Skill/updateSkillById",
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
  "Skill/createSkill",
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
