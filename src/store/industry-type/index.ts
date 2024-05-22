// import { createSlice } from "@reduxjs/toolkit";
// import {
//   IndustryTypeModel,
//   IndustryTypeWithRolesModel,
// } from "@/interfaces/industry-type/industry-type.model";
// import {
//   getAllIndustryType,
//   getIndustryTypeById,
//   deleteIndustryTypeById,
//   updateIndustryType,
//   createIndustryType,
// } from "@/store//industry-type/industry-type";
// import { StateModel } from "@/interfaces/state/state.model";
// import { addCases } from "..";
// import { RootState } from "../store";

// const createDefaultState = (): StateModel<IndustryTypeModel> => {
//   return {
//     status: "pending",
//     error: null,
//     isLoading: true,
//     data: null,
//   };
// };

// const industryTypeSlice = createSlice({
//   name: "industryType",
//   initialState: createDefaultState() as StateModel<IndustryTypeModel>,
//   reducers: {},
//   extraReducers: (builder: any) => {
//     // add cases for all API calls
//     addCases<IndustryTypeModel>(builder, getAllIndustryType);
//     addCases<IndustryTypeModel>(builder, getIndustryTypeById);
//     addCases<IndustryTypeModel>(builder, deleteIndustryTypeById);
//     addCases<IndustryTypeModel>(builder, updateIndustryType);
//     addCases<IndustryTypeModel>(builder, createIndustryType);
//     // addCases<IndustryTypeWithRolesModel>(builder, createIndustryTypeWithRole);
//   },
// });

// export default industryTypeSlice.reducer;
// export const industryTypeSelector = (state: RootState) => state.industrytype;
// export const {} = industryTypeSlice.actions;
