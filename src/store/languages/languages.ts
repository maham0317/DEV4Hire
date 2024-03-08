import { createAsyncThunk } from "@reduxjs/toolkit";
import { languagesService } from "../../services/languages";
import LanguageModel from "../../interfaces/language/language";

export const getAllLanguages = createAsyncThunk(
  "languages/getAllLanguages",
  async (args, thunkAPI) => {
    try {
      const response = await languagesService.getAllLanguages();
      return response;
    } catch (error) {
      return error;
      // return ErrorMessage(error, thunkAPI);
    }
  }
);

export const getLanguagesById = createAsyncThunk(
  "languages/getLanguagesById",
  async (args: number, thunkAPI) => {
    try {
      const response = await languagesService.getLanguagesById(args);
      return response;
    } catch (error) {
      return error;
      // return ErrorMessage(error, thunkAPI);
    }
  }
);

export const deleteLanguagesById = createAsyncThunk(
  "languages/deleteLanguagesById",
  async (args: number, thunkAPI) => {
    try {
      const response = await languagesService.deleteLanguagesById(args);
      return response;
    } catch (error) {
      return error;
      // return ErrorMessage(error, thunkAPI);
    }
  }
);

export const updateLanguagesById = createAsyncThunk(
  "languages/updateLanguagesById",
  async (args: number, thunkAPI) => {
    try {
      const response = await languagesService.updateLanguagesById(args);
      return response;
    } catch (error) {
      return error;
      // return ErrorMessage(error, thunkAPI);
    }
  }
);

export const createLanguages = createAsyncThunk(
  "languages/createLanguages",
  async (args: LanguageModel, thunkAPI) => {
    try {
      const response = await languagesService.createLanguages(args);
      return response;
    } catch (error) {
      return error;
      // return ErrorMessage(error, thunkAPI);
    }
  }
);
