import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import EducationTypeModel, {
  EducationTypeStateModel,
} from "../../interfaces/setup/educationType";
import {
  createEducationType,
  deleteEducationTypeById,
  getAllEducationType,
  getEducationTypeById,
  updateEducationTypeById,
} from "./educationType";
import { addCases } from "..";
import { StateModel } from "../../interfaces/state/stateModel";

const createDefaultState = (): StateModel<EducationTypeModel> => {
  return {
    status: "pending",
    error: null,
    isLoading: true,
    data: null,
  };
};
const educationTypeSlice = createSlice({
  name: "educationType",
  initialState: createDefaultState() as StateModel<EducationTypeModel>,
  reducers: {},
  extraReducers: (builder: any) => {
    // add cases for all API calls
    addCases<EducationTypeModel>(builder, getAllEducationType);
    addCases<EducationTypeModel>(builder, getEducationTypeById);
    addCases<EducationTypeModel>(builder, deleteEducationTypeById);
    addCases<EducationTypeModel>(builder, updateEducationTypeById);
    addCases<EducationTypeModel>(builder, createEducationType);
  },
});

export default educationTypeSlice.reducer;
export const educationTypeSelector = (state: any) => state.educationType;
export const {} = educationTypeSlice.actions;
