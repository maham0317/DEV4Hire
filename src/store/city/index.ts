import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import CityModel, { CityStateModel } from "../../interfaces/Location/City";
import {
  getAllCities,
  getCityById,
  deleteCityById,
  updateCityById,
  createCity,
} from "./city";
import { addCases } from "..";
import { StateModel } from "../../interfaces/State/StateModel";

const createDefaultState = (): StateModel<CityModel> => {
  return {
    status: "pending",
    error: null,
    isLoading: true,
    data: null,
  };
};

const citySlice = createSlice({
  name: "city",
  initialState: createDefaultState() as StateModel<CityModel>,
  reducers: {},
  extraReducers: (builder: any) => {
    // add cases for all API calls
    addCases<CityModel>(builder, getAllCities);
    addCases<CityModel>(builder, getCityById);
    addCases<CityModel>(builder, deleteCityById);
    addCases<CityModel>(builder, updateCityById);
    addCases<CityModel>(builder, createCity);
  },
});
export default citySlice.reducer;
export const citySelector = (state: any) => state.city;
export const {} = citySlice.actions;
