import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import SkillTypeModel, {
  SkillTypeStateModel,
} from "../../interfaces/Skill/SkillType";
import {
  getAllSkill,
  getSkillById,
  deleteSkillById,
  updateSkillById,
  createSkill,
} from "./skill";

const createDefaultState = (): SkillTypeStateModel => {
  return {
    status: "",
    error: null,
    isLoading: false,
    isError: false,
    data: null,
  };
};

const skillSlice = createSlice({
  name: "skill",
  initialState: createDefaultState() as SkillTypeStateModel,
  reducers: {},
  extraReducers: (builder: any) => {
    builder
      .addCase(getAllSkill.pending, (state: any) => {
        return {
          ...state,
          status: "pending",
          error: null,
          isLoading: true,
          isError: false,
        };
      })
      .addCase(
        getAllSkill.fulfilled,
        (state: any, action: PayloadAction<SkillTypeModel>) => {
          return {
            ...state,
            status: "succeeded",
            error: null,
            isLoading: false,
            data: action.payload,
            isError: false,
          };
        }
      )
      .addCase(
        getAllSkill.rejected,
        (state: any, action: PayloadAction<SkillTypeModel>) => {
          return {
            ...state,
            status: "failed",
            error: action.payload,
            isLoading: false,
            data: null,
            isError: true,
          };
        }
      )
      .addCase(getSkillById.pending, (state: any) => {
        return {
          ...state,
          status: "pending",
          error: null,
          isLoading: true,
          isError: false,
        };
      })
      .addCase(
        getSkillById.fulfilled,
        (state: any, action: PayloadAction<SkillTypeModel>) => {
          return {
            ...state,
            status: "succeeded",
            error: null,
            isLoading: false,
            data: action.payload,
            isError: false,
          };
        }
      )
      .addCase(
        getSkillById.rejected,
        (state: any, action: PayloadAction<SkillTypeModel>) => {
          return {
            ...state,
            status: "failed",
            error: action.payload,
            isLoading: false,
            data: null,
            isError: true,
          };
        }
      )
      .addCase(deleteSkillById.pending, (state: any) => {
        return {
          ...state,
          status: "pending",
          error: null,
          isLoading: true,
          isError: false,
        };
      })
      .addCase(
        deleteSkillById.fulfilled,
        (state: any, action: PayloadAction<SkillTypeModel>) => {
          return {
            ...state,
            status: "succeeded",
            error: null,
            isLoading: false,
            data: action.payload,
            isError: false,
          };
        }
      )
      .addCase(
        deleteSkillById.rejected,
        (state: any, action: PayloadAction<SkillTypeModel>) => {
          return {
            ...state,
            status: "failed",
            error: action.payload,
            isLoading: false,
            data: null,
            isError: true,
          };
        }
      )
      .addCase(updateSkillById.pending, (state: any) => {
        return {
          ...state,
          status: "pending",
          error: null,
          isLoading: true,
          isError: false,
        };
      })
      .addCase(
        updateSkillById.fulfilled,
        (state: any, action: PayloadAction<SkillTypeModel>) => {
          return {
            ...state,
            status: "succeeded",
            error: null,
            isLoading: false,
            data: action.payload,
            isError: false,
          };
        }
      )
      .addCase(
        updateSkillById.rejected,
        (state: any, action: PayloadAction<SkillTypeModel>) => {
          return {
            ...state,
            status: "failed",
            error: action.payload,
            isLoading: false,
            data: null,
            isError: true,
          };
        }
      )
      .addCase(createSkill.pending, (state: any) => {
        return {
          ...state,
          status: "pending",
          error: null,
          isLoading: true,
          isError: false,
        };
      })
      .addCase(
        createSkill.fulfilled,
        (state: any, action: PayloadAction<SkillTypeModel>) => {
          return {
            ...state,
            status: "succeeded",
            error: null,
            isLoading: false,
            data: action.payload,
            isError: false,
          };
        }
      )
      .addCase(
        createSkill.rejected,
        (state: any, action: PayloadAction<SkillTypeModel>) => {
          return {
            ...state,
            status: "failed",
            error: action.payload,
            isLoading: false,
            data: null,
            isError: true,
          };
        }
      );
  },
});
export default skillSlice.reducer;
export const skillSelector = (state: any) => state.skill;
export const {} = skillSlice.actions;
