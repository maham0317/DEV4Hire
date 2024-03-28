import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import EducationTypeModel from "../../interfaces/setup/education-type.model";
import {
  createEducationType,
  deleteEducationTypeById,
  getAllEducationType,
  getEducationTypeById,
  updateEducationTypeById,
} from "./education-type";
import { addCases } from "..";
import { StateModel } from "../../interfaces/state/state.model";
import { RootState } from "../store";
interface EducationStateModel {
  status: String;
  error: Object | null;
  isLoading: Boolean;
  data: EducationTypeModel | null;
  dataList: EducationTypeModel[] | null;
}
const createDefaultState = (): EducationStateModel => {
  return {
    status: "pending",
    error: null,
    isLoading: true,
    data: null,
    dataList: [],
  };
};
const educationTypeSlice = createSlice({
  name: "educationType",
  initialState: createDefaultState() as EducationStateModel,
  reducers: {},
  extraReducers: (builder: any) => {
    // add cases for all API calls
    // addCases<EducationTypeModel>(builder, getAllEducationType);
    // addCases<EducationTypeModel>(builder, getEducationTypeById);
    // addCases<EducationTypeModel>(builder, deleteEducationTypeById);
    // addCases<EducationTypeModel>(builder, updateEducationTypeById);
    builder
      .addCase(createEducationType.pending, (state: any) => {
        return {
          ...state,
          loading: "pending",
          error: null,
          isLoading: true,
          datalist: null,
        };
      })
      .addCase(
        createEducationType.fulfilled,
        (state: any, action: PayloadAction<any>) => {
          return {
            ...state,
            status: "succeeded",
            isLoading: false,
            error: null,
            //datalist: action.payload,
          };
        }
      )
      .addCase(
        createEducationType.rejected,
        (state: any, action: PayloadAction<any>) => {
          return {
            ...state,
            status: "failed",
            error: action.payload as string,
          };
        }
      )
      .addCase(getAllEducationType.pending, (state: any) => {
        return {
          ...state,
          loading: "pending",
          error: null,
          isLoading: true,
          datalist: null,
        };
      })
      .addCase(
        getAllEducationType.fulfilled,
        (state: any, action: PayloadAction<any>) => {
          state.dataList = action.payload;
          state.status = "succeeded";
          state.isLoading = false;
          // return {
          //   ...state,
          //   status: "succeeded",
          //   isLoading: false,
          //   error: null,
          //   data: action.payload,
          //   datalist: [{ Id: 1, Name: "YAsir", IsActive: true }],
          // };
        }
      )
      .addCase(
        getAllEducationType.rejected,
        (state: any, action: PayloadAction<any>) => {
          return {
            ...state,
            status: "failed",
            error: action.payload as string,
          };
        }
      );
    //addCases<EducationTypeModel>(builder, createEducationType);
  },
});

export default educationTypeSlice.reducer;
export const educationTypeSelector = (state: RootState) => state;
export const {} = educationTypeSlice.actions;
