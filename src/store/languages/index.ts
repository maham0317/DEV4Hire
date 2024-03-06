import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import LanguageModel, {
  LanguageStateModel,
} from "../../interfaces/Language/Language";
import {
  createLanguages,
  deleteLanguagesById,
  getAllLanguages,
  getLanguagesById,
  updateLanguagesById,
} from "./languages";

const createDefaultState = (): LanguageStateModel => {
  return {
    status: "",
    error: null,
    isLoading: false,
    isError: false,
    data: null,
  };
};

const languagesSlice = createSlice({
  name: "languages",
  initialState: createDefaultState() as LanguageStateModel,
  reducers: {},
  extraReducers: (builder: any) => {
    builder
      // Get All Languages
      .addCase(getAllLanguages.pending, (state: any) => {
        return {
          ...state,
          status: "pending",
          error: null,
          isLoading: true,
          isError: false,
          data: null,
        };
      })
      .addCase(
        getAllLanguages.fulfilled,
        (state: any, action: PayloadAction<LanguageModel>) => {
          return {
            ...state,
            status: "succeeded",
            error: null,
            isLoading: false,
            isError: false,
            data: action.payload,
          };
        }
      )
      .addCase(
        getAllLanguages.rejected,
        (state: any, action: PayloadAction<LanguageModel>) => {
          return {
            ...state,
            status: "failed",
            error: action.payload,
            isLoading: false,
            isError: true,
            data: null,
          };
        }
      )

      //Get Languages By Id
      .addCase(getLanguagesById.pending, (state: any) => {
        return {
          ...state,
          status: "pending",
          error: null,
          isLoading: true,
          isError: false,
          data: null,
        };
      })
      .addCase(
        getLanguagesById.fulfilled,
        (state: any, action: PayloadAction<LanguageModel>) => {
          return {
            ...state,
            status: "succeeded",
            error: null,
            isLoading: false,
            isError: false,
            data: action.payload,
          };
        }
      )
      .addCase(
        getLanguagesById.rejected,
        (state: any, action: PayloadAction<LanguageModel>) => {
          return {
            ...state,
            status: "failed",
            error: action.payload,
            isLoading: false,
            isError: true,
            data: null,
          };
        }
      )

      //Delete Languages By Id
      .addCase(deleteLanguagesById.pending, (state: any) => {
        return {
          ...state,
          status: "pending",
          error: null,
          isLoading: true,
          isError: false,
          data: null,
        };
      })
      .addCase(
        deleteLanguagesById.fulfilled,
        (state: any, action: PayloadAction<LanguageModel>) => {
          return {
            ...state,
            status: "succeeded",
            error: null,
            isLoading: false,
            isError: false,
            data: action.payload,
          };
        }
      )
      .addCase(
        deleteLanguagesById.rejected,
        (state: any, action: PayloadAction<LanguageModel>) => {
          return {
            ...state,
            status: "failed",
            error: action.payload,
            isLoading: false,
            isError: true,
            data: null,
          };
        }
      )

      //Update Languages By Id
      .addCase(updateLanguagesById.pending, (state: any) => {
        return {
          ...state,
          status: "pending",
          error: null,
          isLoading: true,
          isError: false,
          data: null,
        };
      })
      .addCase(
        updateLanguagesById.fulfilled,
        (state: any, action: PayloadAction<LanguageModel>) => {
          return {
            ...state,
            status: "succeeded",
            error: null,
            isLoading: false,
            isError: false,
            data: action.payload,
          };
        }
      )
      .addCase(
        updateLanguagesById.rejected,
        (state: any, action: PayloadAction<LanguageModel>) => {
          return {
            ...state,
            status: "failed",
            error: action.payload,
            isLoading: false,
            isError: true,
            data: null,
          };
        }
      )

      //Create Languages By Id
      .addCase(createLanguages.pending, (state: any) => {
        return {
          ...state,
          status: "pending",
          error: null,
          isLoading: true,
          isError: false,
          data: null,
        };
      })
      .addCase(
        createLanguages.fulfilled,
        (state: any, action: PayloadAction<LanguageModel>) => {
          return {
            ...state,
            status: "succeeded",
            error: null,
            isLoading: false,
            isError: false,
            data: action.payload,
          };
        }
      )
      .addCase(
        createLanguages.rejected,
        (state: any, action: PayloadAction<LanguageModel>) => {
          return {
            ...state,
            status: "failed",
            error: action.payload,
            isLoading: false,
            isError: true,
            data: null,
          };
        }
      );
  },
});

export default languagesSlice.reducer;
export const languagesSelector = (state: any) => state.languages;
export const {} = languagesSlice.actions;
