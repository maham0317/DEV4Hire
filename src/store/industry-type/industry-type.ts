import { createAsyncThunk } from "@reduxjs/toolkit";
import { industryTypeService } from "../../services/industry-type";
import { 
  IndustryTypeModel,
  IndustryTypeWithRolesModel,
} from "../../interfaces/industry/industry.model";

export const getAllIndustryType = createAsyncThunk(
  "industryType/getAllIndustryType",
  async (args, thunkAPI) => {
    try {
      const response = await industryTypeService.getAllIndustryType();
      return response;
    } catch (error) {
      return error;
      // return ErrorMessage(error, thunkAPI);
    }
  }
);
export const getIndustryTypeById = createAsyncThunk(
  "industryType/getIndustryTypeById",
  async (args: number, thunkAPI) => {
    try {
      const response = await industryTypeService.getIndustryTypeById(args);
      return response;
    } catch (error) {
      return error;
      // return ErrorMessage(error, thunkAPI);
    }
  }
);
export const deleteIndustryTypeById = createAsyncThunk(
  "industryType/deleteIndustryTypeById",
  async (args: number, thunkAPI) => {
    try {
      const response = await industryTypeService.deleteIndustryTypeById(args);
      return response;
    } catch (error) {
      return error;
      // return ErrorMessage(error, thunkAPI);
    }
  }
);

export const updateIndustryType = createAsyncThunk(
  "industryType/updateIndustryType",
  async (model: IndustryTypeModel, thunkAPI) => {
    try {
      const response = await industryTypeService.updateIndustryType(model);
      return response;
    } catch (error) {
      return error;
      // return ErrorMessage(error, thunkAPI);
    }
  }
);

export const createIndustryType:any = createAsyncThunk(
  "industryType/createIndustryType",
  async (model: IndustryTypeModel, thunkAPI) => {
    try {
      const response = await industryTypeService.createIndustryType(model);
      return response;
    } catch (error) {
      return error;
      // return ErrorMessage(error, thunkAPI);
    }
  }
);
// export const createIndustryTypeWithRole = createAsyncThunk(
//   "industryType/createIndustryTypeWithRole",
//   async (model: IndustryTypeWithRolesModel, thunkAPI) => {
//     try {
//       const response = await industryTypeService.createIndustryTypeWithRole(
//         model
//       );
//       return response;
//     } catch (error) {
//       return error;
//       // return ErrorMessage(error, thunkAPI);
//     }
//   }
// );
