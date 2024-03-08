import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import CityModel, { CityStateModel } from "../../interfaces/Location/City";
import {
  getAllCities,
  getCityById,
  deleteCity,
  updateCity,
  createCity,
} from "./city";

const createDefaultState = (): CityStateModel => {
  return {
    status: "",
    error: null,
    isLoading: false,
    isError: false,
    data: null,
  };
};

const citySlice = createSlice({
  name: "city",
  initialState: createDefaultState() as CityStateModel,
  reducers: {},
  extraReducers: (builder: any) => {
    builder
      .addCase(getAllCities.pending, (state: any) => {
        return {
          ...state,
          status: "pending",
          error: null,
          isLoading: true,
          isError: false,
        };
      })
      .addCase(
        getAllCities.fulfilled,
        (state: any, action: PayloadAction<CityModel>) => {
          return {
            ...state,
            status: "succeeded",
            error: null,
            isLoading: false,
            data: action.payload,
            isError: false,
          };
        }
      )
      .addCase(
        getAllCities.rejected,
        (state: any, action: PayloadAction<CityModel>) => {
          return {
            ...state,
            status: "failed",
            error: action.payload,
            isLoading: false,
            data: null,
            isError: true,
          };
        }
      )
      .addCase(getCityById.pending, (state: any) => {
        return {
          ...state,
          status: "pending",
          error: null,
          isLoading: true,
          isError: false,
        };
      })
      .addCase(
        getCityById.fulfilled,
        (state: any, action: PayloadAction<CityModel>) => {
          return {
            ...state,
            status: "succeeded",
            error: null,
            isLoading: false,
            data: action.payload,
            isError: false,
          };
        }
      )
      .addCase(
        getCityById.rejected,
        (state: any, action: PayloadAction<CityModel>) => {
          return {
            ...state,
            status: "failed",
            error: action.payload,
            isLoading: false,
            data: null,
            isError: true,
          };
        }
      )
      .addCase(deleteCity.pending, (state: any) => {
        return {
          ...state,
          status: "pending",
          error: null,
          isLoading: true,
          isError: false,
        };
      })
      .addCase(
        deleteCity.fulfilled,
        (state: any, action: PayloadAction<CityModel>) => {
          return {
            ...state,
            status: "succeeded",
            error: null,
            isLoading: false,
            data: action.payload,
            isError: false,
          };
        }
      )
      .addCase(
        deleteCity.rejected,
        (state: any, action: PayloadAction<CityModel>) => {
          return {
            ...state,
            status: "failed",
            error: action.payload,
            isLoading: false,
            data: null,
            isError: true,
          };
        }
      )
      .addCase(updateCity.pending, (state: any) => {
        return {
          ...state,
          status: "pending",
          error: null,
          isLoading: true,
          isError: false,
        };
      })
      .addCase(
        updateCity.fulfilled,
        (state: any, action: PayloadAction<CityModel>) => {
          return {
            ...state,
            status: "succeeded",
            error: null,
            isLoading: false,
            data: action.payload,
            isError: false,
          };
        }
      )
      .addCase(
        updateCity.rejected,
        (state: any, action: PayloadAction<CityModel>) => {
          return {
            ...state,
            status: "failed",
            error: action.payload,
            isLoading: false,
            data: null,
            isError: true,
          };
        }
      )
      .addCase(createCity.pending, (state: any) => {
        return {
          ...state,
          status: "pending",
          error: null,
          isLoading: true,
          isError: false,
        };
      })
      .addCase(
        createCity.fulfilled,
        (state: any, action: PayloadAction<CityModel>) => {
          return {
            ...state,
            status: "succeeded",
            error: null,
            isLoading: false,
            data: action.payload,
            isError: false,
          };
        }
      )
      .addCase(
        createCity.rejected,
        (state: any, action: PayloadAction<CityModel>) => {
          return {
            ...state,
            status: "failed",
            error: action.payload,
            isLoading: false,
            data: null,
            isError: true,
          };
        }
      );
  },
});
export default citySlice.reducer;
export const citySelector = (state: any) => state.city;
export const {} = citySlice.actions;
