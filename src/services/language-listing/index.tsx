import { apiService } from "../api";
import { BaseListModel } from "@/interfaces/base-list.model";
import LanguageModel, {
  LanguageFilterModel,
} from "@/interfaces/language-listing";

const industryTypeApi = apiService
  .enhanceEndpoints({ addTagTypes: ["Language"] })
  .injectEndpoints({
    endpoints: (builder) => ({
      getAllLanguage: builder.mutation<
        BaseListModel<LanguageModel>,
        LanguageFilterModel
      >({
        query: (data) => ({
          url: "languages/list",
          method: "POST",
          body: data,
        }),
      }),
      getLanguageById: builder.query<LanguageModel, Number>({
        query: (id) => ({
          url: `languages/list/${id}`,
          transformResponse: (response: { data: LanguageModel }) =>
            response.data,
          transformErrorResponse: (response: { status: string | number }) =>
            response.status,
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
      updateLanguage: builder.mutation({
        query: (data) => ({
          url: `languages/update`,
          method: "PUT",
          body: data,
        }),
        invalidatesTags: ["Language"],
      }),
      deleteLanguage: builder.mutation({
        query: (id) => ({
          url: `languages/delete/${id}`,
          method: "DELETE",
        }),
        invalidatesTags: ["Language"],
      }),
    }),
    // this func will refetch the todos when page focused
    //refetchOnFocus: true,
  });

export const {
  useGetAllLanguageMutation,
  useCreateLanguageMutation,
  useUpdateLanguageMutation,
  useDeleteLanguageMutation,
  useGetLanguageByIdQuery,
} = industryTypeApi;
