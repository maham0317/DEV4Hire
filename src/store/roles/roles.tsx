import { createAsyncThunk } from "@reduxjs/toolkit";
import { roleServices } from "../../services/workroles";

//Get
export const getAllWorkRole: any = createAsyncThunk(
  "workrole/GetAllWorkRole",
  async (args, thunkAPI) => {
    try {
      const response = await roleServices.getAllWorkRole();
      return response;
    } catch (error) {
      return error;
    }
  }
);

//UPDATE
export const updateWorkRole = createAsyncThunk(
  "workrole/updateWorkRole",
  async (args: number, thunkAPI) => {
    try {
      const response = await roleServices.updateWorkRole(args);
      return response;
    } catch (error) {
      return error;
    }
  }
);

//CREATE
export const createWorkrole: any = createAsyncThunk(
  "workrole/createWorkRole",
  async (args, thunkAPI) => {
    try {
      const response = await roleServices.createWorkrole();
      return response;
    } catch (error) {
      return error;
    }
  }
);

//DELETE
export const deleteWorkrole: any = createAsyncThunk(
  "workrole/deleteWorkRole",
  async (args: number, thunkAPI) => {
    try {
      const response = await roleServices.deleteWorkrole(args);
      return response;
    } catch (error) {
      return error;
    }
  }
);
//GET BY ID
export const getWorkRolebyid = createAsyncThunk(
  "workrole/getWorkRolebyid",
  async (args: number, thunkAPI) => {
    try {
      const response = await roleServices.getWorkRoleByid(args);
      return response;
    } catch (error) {
      return error;
    }
  }
);
