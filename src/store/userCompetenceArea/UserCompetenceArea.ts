import { createAsyncThunk } from "@reduxjs/toolkit";
import { CompetenceAreaServices } from "../../services/usercompetencearea";

//Get
export const getAllWorkRole: any = createAsyncThunk(
    "competencearea/GetAllCompetenceArea",
    async (args, thunkAPI) => {
        try {
            const response = await CompetenceAreaServices.getAllCompetenceArea();
            return response;
        } catch (error) {
            return error;
        }
    }
);

//Create
export const createCompetenceArea: any = createAsyncThunk(
    "competencearea/CreateCompetenceArea",
    async (args, thunkAPI) => {
        try {
            const response = await CompetenceAreaServices.createCompetenceArea();
            return response;
        } catch (error) {
            return error;
        }
    }
);
//GetbyId
export const getCompetenceAreaById: any = createAsyncThunk(
    "competencearea/GetCompetenceAreaById",
    async (args, thunkAPI) => {
        try {
            const response = await CompetenceAreaServices.getcompetenceAreaById(args);
            return response;
        } catch (error) {
            return error;
        }
    }
);
//UpdateById
export const updateCompetenceAreaById: any = createAsyncThunk(
    "competencearea/updateCompetenceAreaById",
    async (args, thunkAPI) => {
        try {
            const response = await CompetenceAreaServices.updatecompetenceAreaById(args);
            return response;
        } catch (error) {
            return error;
        }
    }
);
//DeleteById
export const deleteCompetenceAreaById: any = createAsyncThunk(
    "competencearea/updateCompetenceAreaById",
    async (args, thunkAPI) => {
        try {
            const response = await CompetenceAreaServices.deletecompetenceAreaById(args);
            return response;
        } catch (error) {
            return error;
        }
    }
);