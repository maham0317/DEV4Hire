import api from "@/services/ApiClient";
import SkillTypeModel from "@/interfaces/skill/skill.model";
import { apiService } from "../api";
import { BaseListModel } from "@/interfaces/base-list.model";
import SkillFilterModel from "@/interfaces/skill/skill-filter.model";
const Skill = "Skill";
export const skillApi = apiService
  .enhanceEndpoints({ addTagTypes: [Skill] })
  .injectEndpoints({
    endpoints: (builder) => ({
      getallSkill: builder.mutation<
        BaseListModel<SkillTypeModel>,
        SkillFilterModel
      >({
        query: (data) => ({
          url: "skill/list",
          method: "POST",
          body: data,
        }),
      }),
      getProficiencyById: builder.query<SkillTypeModel, Number>({
        query: (id) => ({
          url: `skill/list/${id}`,
          transformResponse: (response: { data: SkillTypeModel }) =>
            response.data,
          transformErrorResponse: (response: { status: string | number }) =>
            response.status,
        }),
      }),

      createSkill: builder.mutation({
        query: (data) => ({
          url: "skill/create",
          method: "POST",
          body: data,
        }),
        invalidatesTags: ["Skill"],
      }),
      updateSkill: builder.mutation({
        query: (data) => ({
          url: `skill/update`,
          method: "PUT",
          body: data,
        }),
        invalidatesTags: ["Skill"],
      }),
      deleteSkill: builder.mutation({
        query: (id) => ({
          url: `skill/delete/${id}`,
          method: "DELETE",
        }),
        invalidatesTags: ["Skill"],
      }),
    }),
  });
export const {
  useGetallSkillMutation,
  useUpdateSkillMutation,
  useCreateSkillMutation,
  useDeleteSkillMutation,
} = skillApi;

// export async function getAllSkill(model: SkillFilterModel): Promise<any> {
//   let url = `skill/list`;
//   const response: any = await api.post(url,model);
//   return response.data;
// }
// export async function getSkillById(id: number): Promise<any> {
//   let url = `skill/list/${id}`;
//   const response: any = await api.get(url);
//   return response.data;
// }
// export async function deleteSkillById(id: number): Promise<any> {
//   let url = `skill/delete/${id}`;
//   const response: any = await api.delete(url);
//   return response.data;
// }
// export async function updateSkillById(model:SkillTypeModel): Promise<any> {
//   let url = `skill/update`;
//   const response: any = await api.put(url,model);
//   return response.data;
// }
// export async function createSkill(model:SkillTypeModel): Promise<any> {
//   let url = `skill/create`;
//   const response: any = await api.post(url,model);
//   return response.data;
// }
// export const SkillService = {
//   getAllSkill,
//   getSkillById,
//   deleteSkillById,
//   updateSkillById,
//   createSkill,
// };
