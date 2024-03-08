import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import CountryModel, {
  CountryStateModel,
} from "../../interfaces/Location/Country";

import {
  getAllCountries,
  getCountryById,
  deleteCountry,
  updateCountry,
  createCountry,
} from "./country";

const createDefaultState = (): CountryStateModel => {
  return {
    status: "",
    error: null,
    isLoading: false,
    isError: false,
    data: null,
  };
};

const countrySlice = createSlice({
  name: "country",
  initialState: createDefaultState() as CountryStateModel,
  reducers: {},
  extraReducers: (builder: any) => {
    builder
      .addCase(getAllCountries.pending, (state: any) => {
        return {
          ...state,
          status: "pending",
          error: null,
          isLoading: true,
          isError: false,
        };
      })
      .addCase(
        getAllCountries.fulfilled,
        (state: any, action: PayloadAction<CountryModel>) => {
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
        getAllCountries.rejected,
        (state: any, action: PayloadAction<CountryModel>) => {
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
      .addCase(getCountryById.pending, (state: any) => {
        return {
          ...state,
          status: "pending",
          error: null,
          isLoading: true,
          isError: false,
        };
      })
      .addCase(
        getCountryById.fulfilled,
        (state: any, action: PayloadAction<CountryModel>) => {
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
        getCountryById.rejected,
        (state: any, action: PayloadAction<CountryModel>) => {
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
      .addCase(deleteCountry.pending, (state: any) => {
        return {
          ...state,
          status: "pending",
          error: null,
          isLoading: true,
          isError: false,
        };
      })
      .addCase(
        deleteCountry.fulfilled,
        (state: any, action: PayloadAction<CountryModel>) => {
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
        deleteCountry.rejected,
        (state: any, action: PayloadAction<CountryModel>) => {
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
      .addCase(updateCountry.pending, (state: any) => {
        return {
          ...state,
          status: "pending",
          error: null,
          isLoading: true,
          isError: false,
        };
      })
      .addCase(
        updateCountry.fulfilled,
        (state: any, action: PayloadAction<CountryModel>) => {
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
        updateCountry.rejected,
        (state: any, action: PayloadAction<CountryModel>) => {
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
      .addCase(createCountry.pending, (state: any) => {
        return {
          ...state,
          status: "pending",
          error: null,
          isLoading: true,
          isError: false,
        };
      })
      .addCase(
        createCountry.fulfilled,
        (state: any, action: PayloadAction<CountryModel>) => {
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
        createCountry.rejected,
        (state: any, action: PayloadAction<CountryModel>) => {
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
export default countrySlice.reducer;
export const countrySelector = (state: any) => state.country;
export const {} = countrySlice.actions;
