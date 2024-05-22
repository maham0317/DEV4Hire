// import { PayloadAction, createSlice } from "@reduxjs/toolkit";
// import ProficiencyModel from "@/interfaces/setup/proficiency.model";
// import {
//   getAllProficiency,
//   getProficiencyById,
//   deleteProficiencyById,
//   updateProficiencyById,
//   createProficiency,
// } from "@/store/proficiency/proficiency";
// import { StateModel } from "@/interfaces/state/state.model";
// import { addCases } from "..";

// const createDefaultState = (): StateModel<ProficiencyModel> => {
//   return {
//     status: "pending",
//     error: null,
//     isLoading: true,
//     data: null,
//   };
// };

// const proficiencySlice = createSlice({
//   name: "proficiency",
//   initialState: createDefaultState() as StateModel<ProficiencyModel>,
//   reducers: {},
//   extraReducers: (builder: any) => {
//     // add cases for all API calls
//     addCases<ProficiencyModel>(builder, getAllProficiency);
//     addCases<ProficiencyModel>(builder, getProficiencyById);
//     addCases<ProficiencyModel>(builder, deleteProficiencyById);
//     addCases<ProficiencyModel>(builder, updateProficiencyById);
//     addCases<ProficiencyModel>(builder, createProficiency);
//   },
// });
// export default proficiencySlice.reducer;
// export const proficiencySelector = (state: any) => state.proficiency;
// export const {} = proficiencySlice.actions;
