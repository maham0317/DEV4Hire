import { createAsyncThunk } from "@reduxjs/toolkit";
import { awardService } from "../../services/award";
import { AwardModel } from "../../interfaces/Award/Awards";

export const getAllAwards = createAsyncThunk(
  "award/getAllAwards",
  async (args, thunkAPI) => {
    try {
      const response = await awardService.getAllAwards();
      return response;
    } catch (error) {
      return error;
      // return ErrorMessage(error, thunkAPI);
    }
  }
);

export const getAwardById = createAsyncThunk(
  "award/getAwardById",
  async (args: number, thunkAPI) => {
    try {
      const response = await awardService.getAwardById(args);
      return response;
    } catch (error) {
      return error;
      // return ErrorMessage(error, thunkAPI);
    }
  }
);

export const deleteAwardById = createAsyncThunk(
  "award/deleteAwardById",
  async (args: number, thunkAPI) => {
    try {
      const response = await awardService.deleteAwardById(args);
      return response;
    } catch (error) {
      return error;
      // return ErrorMessage(error, thunkAPI);
    }
  }
);

export const updateAwardById = createAsyncThunk(
  "award/updateAwardById",
  async (args: number, thunkAPI) => {
    try {
      const response = await awardService.updateAwardById(args);
      return response;
    } catch (error) {
      return error;
      // return ErrorMessage(error, thunkAPI);
    }
  }
);

export const createAward = createAsyncThunk(
  "award/createAward",
  async (args: AwardModel, thunkAPI) => {
    try {
      const response = await awardService.createAward(args);
      return response;
    } catch (error) {
      return error;
      // return ErrorMessage(error, thunkAPI);
    }
  }
);
