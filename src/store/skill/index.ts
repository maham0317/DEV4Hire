// import { PayloadAction, createSlice } from "@reduxjs/toolkit";
// import SkillTypeModel from "@/interfaces/skill/skill.model";
// import {
//   getAllSkill,
//   getSkillById,
//   deleteSkillById,
//   updateSkillById,
//   createSkill,
// } from "@/store/skill/skill";
// import { StateModel } from "@/interfaces/state/state.model";
// import { addCases } from "..";

// const createDefaultState = (): StateModel<SkillTypeModel> => {
//   return {
//     status: "pending",
//     error: null,
//     isLoading: true,
//     data: null,
//   };
// };

// const skillSlice = createSlice({
//   name: "skill",
//   initialState: createDefaultState() as StateModel<SkillTypeModel>,
//   reducers: {},
//   extraReducers: (builder: any) => {
//     // add cases for all API calls
//     addCases<SkillTypeModel>(builder, getAllSkill);
//     addCases<SkillTypeModel>(builder, getSkillById);
//     addCases<SkillTypeModel>(builder, deleteSkillById);
//     addCases<SkillTypeModel>(builder, updateSkillById);
//     addCases<SkillTypeModel>(builder, createSkill);
//   },
// });
// export default skillSlice.reducer;
// export const skillSelector = (state: any) => state.skill;
// export const {} = skillSlice.actions;
