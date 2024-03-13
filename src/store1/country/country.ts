import { createAsyncThunk } from "@reduxjs/toolkit";
import { countryService } from "../../services1/country";
import CountryModel from "../../interfaces1/location/country.model";

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
export const deleteCountryById = createAsyncThunk(
  "country/deleteCountryById",
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
export const updateCountryById = createAsyncThunk(
  "country/updateCountryById",
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
