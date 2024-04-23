import api from "@/services/ApiClient";
import ProficiencyModel from "@/interfaces/setup/proficiency.model";
import { apiService } from "../api";
import { BaseListModel } from "@/interfaces/base-list.model";
import ProficiencyFilterModel from "@/interfaces/setup/proficiency-filter.model";
const  Proficiency = "Proficiency";

export const ProficiencyApi = apiService
  .enhanceEndpoints({ addTagTypes: [Proficiency] })
  .injectEndpoints({
    endpoints: (builder) => ({
      getallProficiency: builder.mutation<
        BaseListModel<ProficiencyModel>,
        ProficiencyFilterModel
      >({
        query: (data) => ({
          url: "proficiency/list",
          method: "POST",
          body: data,
        }),
      }),
      createProficiency: builder.mutation({
        query: (data) => ({
          url: "proficiency/create",
          method: "POST",
          body: data,
        }),
        invalidatesTags: ["Proficiency"],
      }),
      updateProficiency: builder.mutation({
        query: (data) => ({
          url: `proficiency/update`,
          method: "PUT",
          body: data,
        }),
        invalidatesTags: ["Proficiency"],
      }),
      deleteProficiency: builder.mutation({
        query: (id) => ({
          url: `proficiency/delete/${id}`,
          method: "DELETE",
        }),
        invalidatesTags: ["Proficiency"],
      }),
    }),
  });
export const {
  useGetallProficiencyMutation,
  useUpdateProficiencyMutation,
  useCreateProficiencyMutation,
  useDeleteProficiencyMutation,
} = ProficiencyApi;

export async function getAllProficiency(model: ProficiencyFilterModel): Promise<any> {
  let url = `proficiency/list`;
  const response: any = await api.post(url);
  return response.data;
}
export async function getProficiencyById(id: number): Promise<any> {
  let url = `proficiency/list/${id}`;
  const response: any = await api.get(url);
  return response.data;
}

export async function deleteProficiencyById(id: number): Promise<any> {
  let url = `proficiency/delete/${id}`;
  const response: any = await api.delete(url);
  return response.data;
}

export async function updateProficiencyById(model:ProficiencyModel): Promise<any> {
  let url = `proficiency/update`;
  const response: any = await api.put(url,model);
  return response.data;
}

export async function createProficiency(model: ProficiencyModel): Promise<any> {
  let url = `proficiency/create`;
  const response: any = await api.post(url,model);
  return response.data;
}

export const proficiencyService = {
  getAllProficiency,
  getProficiencyById,
  deleteProficiencyById,
  updateProficiencyById,
  createProficiency,
};
