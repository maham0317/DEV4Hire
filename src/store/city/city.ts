import { createAsyncThunk } from "@reduxjs/toolkit";
import { cityService } from "../../services/city";
import CityModel from "../../interfaces/Location/City";

export const getAllCities = createAsyncThunk(
  "city/getAllCities",
  async (args, thunkAPI) => {
    try {
      const response = await cityService.getAllCities();
      return response;
    } catch (error) {
      return error;
      // return ErrorMessage(error, thunkAPI);
    }
  }
);
export const getCityById = createAsyncThunk(
  "city/getCityById",
  async (args: number, thunkAPI) => {
    try {
      const response = await cityService.getCityById(args);
      return response;
    } catch (error) {
      return error;
      // return ErrorMessage(error, thunkAPI);
    }
  }
);
export const deleteCityById = createAsyncThunk(
  "city/deleteCityById",
  async (args: number, thunkAPI) => {
    try {
      const response = await cityService.deleteCityById(args);
      return response;
    } catch (error) {
      return error;
      // return ErrorMessage(error, thunkAPI);
    }
  }
);
export const updateCityById = createAsyncThunk(
  "city/updateCityById",
  async (args: number, thunkAPI) => {
    try {
      const response = await cityService.updateCityById(args);
      return response;
    } catch (error) {
      return error;
      // return ErrorMessage(error, thunkAPI);
    }
  }
);
export const createCity = createAsyncThunk(
  "city/createCity",
  async (args: CityModel, thunkAPI) => {
    try {
      const response = await cityService.createCity(args);
      return response;
    } catch (error) {
      return error;
      // return ErrorMessage(error, thunkAPI);
    }
  }
);
