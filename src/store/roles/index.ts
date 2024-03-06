// Import necessary dependencies
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { createWorkrole, updateWorkRole, getAllWorkRole } from "./roles";
import WorkRoleModel from "../../interfaces/WorkRole/WorkRole";

// Define the initial state
const createDefaultState = (): any => {
  return {
    Id: 0,
    WorkRoleName: '',
    WorkRoleDesc: '',
  };
};

// Create the slice
const roleSlice = createSlice({
  name: "roles",
  initialState: createDefaultState() as WorkRoleModel,
  reducers: {},
  extraReducers: (builder) => {
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
    builder.addCase(getAllWorkRole.fulfilled, (state, action: PayloadAction<any>) => {
      return {
        ...state,
        status: "succeeded",
        error: null,
        isLoading: false,
        unapprovedApprovalData: action.payload,
        isError: false,
      };
    });
    builder.addCase(getAllWorkRole.rejected, (state, action: PayloadAction<any>) => {
      return {
        ...state,
        status: "failed",
        error: action.payload as string,
        isLoading: false,
        unapprovedApprovalData: null,
        isError: true,
      };
    });
    //CREATE workrole

    builder.addCase(createWorkrole.pending, (state: any) => {
      return {
        ...state,
        status: "pending",
        error: null,
        isLoading: true,
        isError: false,
      };
    });


    builder.addCase(createWorkrole.fulfilled, (state, action: PayloadAction<any>) => {
      return {
        ...state,
        status: "succeeded",
        error: null,
        isLoading: false,

      };
    });


    builder.addCase(createWorkrole.rejected, (state, action: PayloadAction<any>) => {
      return {
        ...state,
        status: "failed",
        error: action.payload as string,
        isLoading: false,

      };
    });
  },
});

// Export the reducer and actions
export default roleSlice.reducer;
export const { } = roleSlice.actions;
