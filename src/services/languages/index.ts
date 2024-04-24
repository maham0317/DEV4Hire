import api from "@/services/ApiClient";
import LanguageModel from "@/interfaces/language/language.model";
import { apiService } from "../api";
import { BaseListModel } from "@/interfaces/base-list.model";
import LanguageFilterModel from "@/interfaces/language/language-filter.model";
const Language = "Language";

export const languagesApi = apiService
  .enhanceEndpoints({ addTagTypes: [Language] })
  .injectEndpoints({
    endpoints: (builder) => ({
      getallLanguages: builder.mutation<
        BaseListModel<LanguageModel>,
        LanguageFilterModel
      >({
        query: (data) => ({
          url: "languages/list",
          method: "POST",
          body: data,
        }),
      }),
      createLanguage: builder.mutation({
        query: (data) => ({
          url: "languages/create",
          method: "POST",
          body: data,
        }),
        invalidatesTags: ["Language"],
      }),
      updateLanguages: builder.mutation({
        query: (data) => ({
          url: `languages/update`,
          method: "PUT",
          body: data,
        }),
        invalidatesTags: ["Language"],
      }),
      deleteLanguages: builder.mutation({
        query: (id) => ({
          url: `Languages/delete/${id}`,
          method: "DELETE",
        }),
        invalidatesTags: ["Language"],
      }),
    }),
  });
export const {
  useGetallLanguagesMutation,
  useUpdateLanguagesMutation,
  useCreateLanguageMutation,
  useDeleteLanguagesMutation,
} = languagesApi;

export async function getAllLanguages(model: LanguageFilterModel): Promise<any> {
  let url = `languages/list`;
  const response: any = await api.post(url, model);
  return response.data;
}

export async function getLanguagesById(id: number): Promise<any> {
  let url = `languages/list/${id}`;
  const response: any = await api.get(url);
  return response.data;
}

export async function deleteLanguagesById(id: number): Promise<any> {
  let url = `languages/delete/${id}`;
  const response: any = await api.delete(url);
  return response.data;
}

export async function updateLanguagesById(model: LanguageModel): Promise<any> {
  let url = `languages/update`;
  const response: any = await api.put(url,model);
  return response.data;
}

export async function createLanguages(model: LanguageModel): Promise<any> {
  let url = `languages/create`;
  const response: any = await api.post(url,model);
  return response.data;
}

export const languagesService = {
  getAllLanguages,
  getLanguagesById,
  deleteLanguagesById,
  updateLanguagesById,
  createLanguages,
};
