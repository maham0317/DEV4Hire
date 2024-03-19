import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import CountryModel from "../../interfaces/location/country.model";

import {
  getAllCountries,
  getCountryById,
  deleteCountryById,
  updateCountryById,
  createCountry,
} from "./country";
import { addCases } from "..";
import { StateModel } from "../../interfaces/state/state.model";

const createDefaultState = (): StateModel<CountryModel> => {
  return {
    status: "pending",
    error: null,
    isLoading: true,
    data: null,
  };
};

const countrySlice = createSlice({
  name: "country",
  initialState: createDefaultState() as StateModel<CountryModel>,
  reducers: {},
  extraReducers: (builder: any) => {
    // add cases for all API calls
    addCases<CountryModel>(builder, getAllCountries);
    addCases<CountryModel>(builder, getCountryById);
    addCases<CountryModel>(builder, deleteCountryById);
    addCases<CountryModel>(builder, updateCountryById);
    addCases<CountryModel>(builder, createCountry);
  },
});
export default countrySlice.reducer;
export const countrySelector = (state: any) => state.country;
export const {} = countrySlice.actions;
