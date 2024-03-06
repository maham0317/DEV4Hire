import { createAsyncThunk } from "@reduxjs/toolkit";
import { awardService } from "../../services/award";
 
export const getAllAwards = createAsyncThunk(
  "award/GetAllAwards",
  async (args, thunkAPI) => {
    try {
      const response = await awardService.getAllAwards();
      return response;
    } catch (error) {
      return error;
      // return ErrorMessage(error, thunkAPI);
    }
  }
);
