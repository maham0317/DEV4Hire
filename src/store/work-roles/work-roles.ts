// import { createAsyncThunk } from "@reduxjs/toolkit";
// import { workRoleServices } from "@/services/work-roles";
// import WorkRoleModel from "@/interfaces/work-role/work-role.model";
// import WorkRoleFilterModel from "@/interfaces/work-role/work-role-filter.model";

// //Get
// export const getAllWorkRole: any = createAsyncThunk(
//   "workrole/GetAllWorkRole",
//   async (model: WorkRoleFilterModel, thunkAPI) => {
//     try {
//       const response = await workRoleServices.getAllWorkRole(model);
//       return response;
//     } catch (error) {
//       return error;
//     }
//   }
// );
// //GET BY ID
// export const getWorkRolebyid = createAsyncThunk(
//   "workrole/getWorkRolebyid",
//   async (args: number, thunkAPI) => {
//     try {
//       const response = await workRoleServices.getWorkRoleByid(args);
//       return response;
//     } catch (error) {
//       return error;
//     }
//   }
// );

// //DELETE
// export const deleteWorkrole: any = createAsyncThunk(
//   "workrole/deleteWorkRole",
//   async (args: number, thunkAPI) => {
//     try {
//       const response = await workRoleServices.deleteWorkrole(args);
//       return response;
//     } catch (error) {
//       return error;
//     }
//   }
// );

// //UPDATE
// export const updateWorkRole = createAsyncThunk(
//   "workrole/updateWorkRole",
//   async (model: WorkRoleModel, thunkAPI) => {
//     try {
//       const response = await workRoleServices.updateWorkRole(model);
//       return response;
//     } catch (error) {
//       return error;
//     }
//   }
// );

// //CREATE
// export const createWorkrole: any = createAsyncThunk(
//   "workrole/createWorkRole",
//   async (model: WorkRoleModel, thunkAPI) => {
//     try {
//       const response = await workRoleServices.createWorkrole(model);
//       return response;
//     } catch (error) {
//       return error;
//     }
//   }
// );
