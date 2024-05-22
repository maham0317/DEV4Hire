import { createSlice } from "@reduxjs/toolkit";
import { IndustryRoleModel } from "@/interfaces/industry-type/industry-type.model";
import {
  getAllIndustryRole,
  getIndustryRoleById,
  deleteIndustryRoleById,
  updateIndustryRoleById,
  createIndustryRole,
} from "@/store/industry-role/industry-role";
import { StateModel } from "@/interfaces/state/state.model";
import { addCases } from "..";

const createDefaultState = (): StateModel<IndustryRoleModel> => {
  return {
    status: "pending",
    error: null,
    isLoading: true,
    data: null,
  };
};

const industryRoleSlice = createSlice({
  name: "industryRole",
  initialState: createDefaultState() as StateModel<IndustryRoleModel>,
  reducers: {},
  extraReducers: (builder: any) => {
    // add cases for all API calls
    addCases<IndustryRoleModel>(builder, getAllIndustryRole);
    addCases<IndustryRoleModel>(builder, getIndustryRoleById);
    addCases<IndustryRoleModel>(builder, deleteIndustryRoleById);
    addCases<IndustryRoleModel>(builder, updateIndustryRoleById);
    addCases<IndustryRoleModel>(builder, createIndustryRole);
  },
});

export default industryRoleSlice.reducer;
export const industryRoleSelector = (state: any) => state.industryRole;
export const {} = industryRoleSlice.actions;
