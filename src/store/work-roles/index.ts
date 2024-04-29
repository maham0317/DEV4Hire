// // Import necessary dependencies
// import { createSlice } from "@reduxjs/toolkit";
// import {
//   createWorkrole,
//   updateWorkRole,
//   getAllWorkRole,
//   deleteWorkrole,
//   getWorkRolebyid,
// } from "@/store/work-roles/work-roles";
// import WorkRoleModel from "@/interfaces/work-role/work-role.model";
// import { addCases } from "..";
// import { StateModel } from "@/interfaces/state/state.model";

// // Define the initial state
// const createDefaultState = (): StateModel<WorkRoleModel> => {
//   return {
//     status: "pending",
//     error: null,
//     isLoading: true,
//     data: null,
//   };
// };
// // Create the slice
// const workRoleSlice = createSlice({
//   name: "workrole",
//   initialState: createDefaultState() as StateModel<WorkRoleModel>,
//   reducers: {},
//   extraReducers: (builder: any) => {
//     // add cases for all API calls
//     addCases<WorkRoleModel>(builder, getAllWorkRole);
//     addCases<WorkRoleModel>(builder, getWorkRolebyid);
//     addCases<WorkRoleModel>(builder, deleteWorkrole);
//     addCases<WorkRoleModel>(builder, updateWorkRole);
//     addCases<WorkRoleModel>(builder, createWorkrole);
//   },
// });

// // Export the reducer and actions
// export default workRoleSlice.reducer;
// export const workRoleSelector = (state: any) => state.workrole;
// export const {} = workRoleSlice.actions;
