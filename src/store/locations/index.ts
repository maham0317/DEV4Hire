import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { StateModel } from "@/interfaces/state/state.model";
import { addCases } from "..";
import CountryModel from "@/interfaces/location/country.model";
import {
  createLocation,
  deleteLocationById,
  getLocationById,
  getallLocation,
  updateLocationById,
} from "@/services/locations";

const createDefaultState = (): StateModel<CountryModel> => {
  return {
    status: "pending",
    error: null,
    isLoading: true,
    data: null,
  };
};

const locationSlice = createSlice({
  name: "locations",
  initialState: createDefaultState() as StateModel<CountryModel>,
  reducers: {},
  extraReducers: (builder: any) => {
    // add cases for all API calls
    addCases<CountryModel>(builder, getallLocation);
    addCases<CountryModel>(builder, getLocationById);
    addCases<CountryModel>(builder, deleteLocationById);
    addCases<CountryModel>(builder, updateLocationById);
    addCases<CountryModel>(builder, createLocation);
  },
});
export default locationSlice.reducer;
export const locationSelector = (state: any) => state.location;
export const {} = locationSlice.actions;
