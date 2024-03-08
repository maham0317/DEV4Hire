import { createAsyncThunk } from "@reduxjs/toolkit";
import { countryService } from "../../services/country";
import CountryModel from "../../interfaces/Location/Country";

export const getAllCountries = createAsyncThunk(
  "country/getAllCountries",
  async (args, thunkAPI) => {
    try {
      const response = await countryService.getAllCountries();
      return response;
    } catch (error) {
      return error;
      // return ErrorMessage(error, thunkAPI);
    }
  }
);
export const getCountryById = createAsyncThunk(
  "country/getCountryById",
  async (args: number, thunkAPI) => {
    try {
      const response = await countryService.getCountryById(args);
      return response;
    } catch (error) {
      return error;
      // return ErrorMessage(error, thunkAPI);
    }
  }
);
export const deleteCountry = createAsyncThunk(
  "country/deleteCountry",
  async (args: number, thunkAPI) => {
    try {
      const response = await countryService.deleteCountryById(args);
      return response;
    } catch (error) {
      return error;
      // return ErrorMessage(error, thunkAPI);
    }
  }
);
export const updateCountry = createAsyncThunk(
  "country/updateCountry",
  async (args: number, thunkAPI) => {
    try {
      const response = await countryService.updateCountryById(args);
      return response;
    } catch (error) {
      return error;
      // return ErrorMessage(error, thunkAPI);
    }
  }
);
export const createCountry = createAsyncThunk(
  "country/createCountry",
  async (args: CountryModel, thunkAPI) => {
    try {
      const response = await countryService.createCountry(args);
      return response;
    } catch (error) {
      return error;
      // return ErrorMessage(error, thunkAPI);
    }
  }
);
