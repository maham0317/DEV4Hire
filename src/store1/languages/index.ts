import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import LanguageModel from "../../interfaces1/language/language.model";
import {
  createLanguages,
  deleteLanguagesById,
  getAllLanguages,
  getLanguagesById,
  updateLanguagesById,
} from "./languages";
import { StateModel } from "../../interfaces1/state/state.model";
import { addCases } from "..";

const createDefaultState = (): StateModel<LanguageModel> => {
  return {
    status: "pending",
    error: null,
    isLoading: true,
    data: null,
  };
};

const languagesSlice = createSlice({
  name: "languages",
  initialState: createDefaultState() as StateModel<LanguageModel>,
  reducers: {},
  extraReducers: (builder: any) => {
    // add cases for all API calls
    addCases<LanguageModel>(builder, getAllLanguages);
    addCases<LanguageModel>(builder, getLanguagesById);
    addCases<LanguageModel>(builder, deleteLanguagesById);
    addCases<LanguageModel>(builder, updateLanguagesById);
    addCases<LanguageModel>(builder, createLanguages);
  },
});

export default languagesSlice.reducer;
export const languagesSelector = (state: any) => state.languages;
export const {} = languagesSlice.actions;
