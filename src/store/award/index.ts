import { createSlice } from "@reduxjs/toolkit";
import { AwardModel } from "../../interfaces/Award/Awards";
import {
  createAward,
  deleteAwardById,
  getAllAwards,
  getAwardById,
  updateAwardById,
} from "./award";
import { StateModel } from "../../interfaces/State/StateModel";
import { addCases } from "..";

const createDefaultState = () : StateModel<AwardModel> => {
  return {
    status: "pending",
    error: null,
    isLoading: true,
    data: null
  };
};

const awardSlice = createSlice({
  name: "award",
  initialState: createDefaultState() as StateModel<AwardModel>,
  reducers: {},
  extraReducers: (builder: any) => {
    // add cases for all API calls
    addCases<AwardModel>(builder, getAllAwards);
    addCases<AwardModel>(builder, getAwardById);
    addCases<AwardModel>(builder, deleteAwardById);
    addCases<AwardModel>(builder, updateAwardById);
    addCases<AwardModel>(builder, createAward);
  },
});



export default awardSlice.reducer;
export const awardSelector = (state: any) => state.award;
export const { } = awardSlice.actions;
