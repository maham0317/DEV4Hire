import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { createWorkrole, deleteWorkrole, getAllWorkRole, getWorkRolebyid, updateWorkRole } from "./roles";
import { WorkRoleModel, WorkRoleStateModel } from "../../interfaces/WorkRole/WorkRole";

const createDefaultState = (): WorkRoleStateModel => {
  return {
    status: "pending", 
    error: null,
    isLoading: true,
    isError: false,
    workRole: null
  };  
};

const WorkRoleSlice = createSlice({
  name: "workRole",
  initialState: createDefaultState() as WorkRoleStateModel,
  reducers: {},
  extraReducers: (builder: any) => {
    builder
      .addCase(getAllWorkRole.pending, (state: any) => {
        return {
          ...state,
          status: "pending",
          error: null,
          isLoading: true,
          isError: false,
        };
      })
      .addCase(
        getAllWorkRole.fulfilled,
        (state: any, action: PayloadAction<WorkRoleModel>) => {
          return {
            ...state,
            status: "succeeded",
            error: null,
            isLoading: false,
            isError: false,
            workRole: action.payload,
          };
        }
      )
      .addCase(
        getAllWorkRole.rejected,
        (state: any, action: PayloadAction<WorkRoleModel>) => {
          return {
            ...state,
            status: "failed",
            error: action.payload,
            isLoading: false,
            isError: true,
          };
        }
      )
      .addCase(getWorkRolebyid.pending, (state: any) => {
        return {
          ...state,
          status: "pending",
          error: null,
          isLoading: true,
          isError: false,
        };
      })
      // Add other cases for getWorkRolebyid, deleteWorkrole, updateWorkRole, and createWorkrole
  },
});

export default WorkRoleSlice.reducer;
export const WorkRoleSelector = (state: any) => state.workRole;
export const { } = WorkRoleSlice.actions;
