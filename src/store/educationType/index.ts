import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import EducationTypeModel, {
  EducationTypeStateModel,
} from "../../interfaces/Setup/EducationType";
import {
  createEducationType,
  deleteEducationTypeById,
  getAllEducationType,
  getEducationTypeById,
  updateEducationTypeById,
} from "./educationType";

const createDefaultState = (): EducationTypeStateModel => {
  return {
    status: "",
    error: null,
    isLoading: false,
    isError: false,
    data: null,
  };
};

const educationTypeSlice = createSlice({
  name: "educationType",
  initialState: createDefaultState() as EducationTypeStateModel,
  reducers: {},
  extraReducers: (builder: any) => {
    builder
      // Get All EducationType
      .addCase(getAllEducationType.pending, (state: any) => {
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
        getAllEducationType.fulfilled,
        (state: any, action: PayloadAction<EducationTypeModel>) => {
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
        getAllEducationType.rejected,
        (state: any, action: PayloadAction<EducationTypeModel>) => {
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

      //Get EducationType By Id
      .addCase(getEducationTypeById.pending, (state: any) => {
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
        getEducationTypeById.fulfilled,
        (state: any, action: PayloadAction<EducationTypeModel>) => {
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
        getEducationTypeById.rejected,
        (state: any, action: PayloadAction<EducationTypeModel>) => {
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

      //Delete EducationType By Id
      .addCase(deleteEducationTypeById.pending, (state: any) => {
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
        deleteEducationTypeById.fulfilled,
        (state: any, action: PayloadAction<EducationTypeModel>) => {
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
        deleteEducationTypeById.rejected,
        (state: any, action: PayloadAction<EducationTypeModel>) => {
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

      //Update EducationType By Id
      .addCase(updateEducationTypeById.pending, (state: any) => {
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
        updateEducationTypeById.fulfilled,
        (state: any, action: PayloadAction<EducationTypeModel>) => {
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
        updateEducationTypeById.rejected,
        (state: any, action: PayloadAction<EducationTypeModel>) => {
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

      //Create EducationType By Id
      .addCase(createEducationType.pending, (state: any) => {
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
        createEducationType.fulfilled,
        (state: any, action: PayloadAction<EducationTypeModel>) => {
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
        createEducationType.rejected,
        (state: any, action: PayloadAction<EducationTypeModel>) => {
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

export default educationTypeSlice.reducer;
export const educationTypeSelector = (state: any) => state.educationType;
export const {} = educationTypeSlice.actions;
