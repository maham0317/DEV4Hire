import { createAsyncThunk } from "@reduxjs/toolkit";
import { proficiencyService } from "@/services/proficiency";
import ProficiencyModel from "@/interfaces/setup/proficiency.model";
import ProficiencyFilterModel from "@/interfaces/setup/proficiency-filter.model";
import { locationService } from "@/services/locations";
import CountryFilterModel from "@/interfaces/location/country-filter.model";
import CountryModel from "@/interfaces/location/country.model";

export const getallLocation = createAsyncThunk(
  "locations/getAllCountries",
  async (model: CountryFilterModel, thunkAPI) => {
    try {
      const response = await locationService.getallLocation(model);
      return response;
    } catch (error) {
      return error;
      // return ErrorMessage(error, thunkAPI);
    }
  }
);
export const getLocationById = createAsyncThunk(
  "locations/getCountryById",
  async (args: number, thunkAPI) => {
    try {
      const response = await locationService.getLocationById(args);
      return response;
    } catch (error) {
      return error;
      // return ErrorMessage(error, thunkAPI);
    }
  }
);
export const deleteLocationById = createAsyncThunk(
  "locations/deleteCountryById",
  async (args: number, thunkAPI) => {
    try {
      const response = await locationService.deleteLocationById(args);
      return response;
    } catch (error) {
      return error;
      // return ErrorMessage(error, thunkAPI);
    }
  }
);
export const updateLocationById = createAsyncThunk(
  "locations/updateCountryById",
  async (model: CountryModel, thunkAPI) => {
    try {
      const response = await locationService.updateLocationById(model);
      return response;
    } catch (error) {
      return error;
      // return ErrorMessage(error, thunkAPI);
    }
  }
);
export const createLocation = createAsyncThunk(
  "locations/createCountry",
  async (model: CountryModel, thunkAPI) => {
    try {
      const response = await locationService.createLocation(model);
      return response;
    } catch (error) {
      return error;
      // return ErrorMessage(error, thunkAPI);
    }
  }
);
