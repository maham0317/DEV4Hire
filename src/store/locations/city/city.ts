import { createAsyncThunk } from "@reduxjs/toolkit";
import { cityService } from "@/services/locations/city";
import CityModel from "@/interfaces/location/city.model";

export const getAllCity = createAsyncThunk(
  "city/getAllCities",
  async (args, thunkAPI) => {
    try {
      const response = await cityService.getallCities();
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
export const updateCity = createAsyncThunk(
  "city/updateCity",
  async (model: CityModel, thunkAPI) => {
    try {
      const response = await cityService.updateCityById(model);
      return response;
    } catch (error) {
      return error;
      // return ErrorMessage(error, thunkAPI);
    }
  }
);
export const createCity = createAsyncThunk(
  "city/createCity",
  async (model: CityModel, thunkAPI) => {
    try {
      const response = await cityService.createCity(model);
      return response;
    } catch (error) {
      return error;
      // return ErrorMessage(error, thunkAPI);
    }
  }
);
