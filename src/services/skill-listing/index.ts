import { apiService } from "../api";
import { BaseListModel } from "@/interfaces/base-list.model";
import SkillTypeModel, {
  SkillTypeFilterModel,
} from "@/interfaces/skill-listing";

const skillApi = apiService
  .enhanceEndpoints({ addTagTypes: ["Skill"] })
  .injectEndpoints({
    endpoints: (builder) => ({
      getAllSkill: builder.mutation<
        BaseListModel<SkillTypeModel>,
        SkillTypeFilterModel
      >({
        query: (data) => ({
          url: "skill/list",
          method: "POST",
          body: data,
        }),
      }),
      getSkillById: builder.query<SkillTypeModel, Number>({
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
    // this func will refetch the todos when page focused
    //refetchOnFocus: true,
  });

export const {
  useGetAllSkillMutation,
  useCreateSkillMutation,
  useUpdateSkillMutation,
  useDeleteSkillMutation,
  useGetSkillByIdQuery,
} = skillApi;
