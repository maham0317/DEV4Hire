import { IndustryTypeModel } from "../../interfaces/industry-type/industry-type.model";
import { apiService } from "../api";

const industryTypeApi = apiService
  .enhanceEndpoints({ addTagTypes: ["IndustryType"] })
  .injectEndpoints({
    endpoints: (builder) => ({
      getAllIndustryType: builder.query<IndustryTypeModel[], void>({
        query: () => "industrytype/list",
        providesTags: ["IndustryType"],
        transformResponse: (res: IndustryTypeModel[]) => {
          console.log("list-----", res);
          return res;
        },
      }),
      allIndustryType: builder.mutation({
        query: (data) => ({
          url: `industrytype/list`,
          method: "POST",
          body: data,
        }),
        invalidatesTags: ["IndustryType"],
      }),
      createIndustryType: builder.mutation({
        query: (data) => ({
          url: "industrytype/create",
          method: "POST",
          body: data,
        }),
        invalidatesTags: ["IndustryType"],
      }),
      updateIndustryType: builder.mutation({
        query: (data) => ({
          url: "industrytype/update",
          method: "PUT",
          body: data,
        }),
        invalidatesTags: ["IndustryType"],
      }),
      deleteIndustryType: builder.mutation({
        query: (id) => ({
          url: `industrytype/delete/${id}`,
          method: "DELETE",
        }),
        invalidatesTags: ["IndustryType"],
      }),
    }),
  });

export const {
  useGetAllIndustryTypeQuery,
  useAllIndustryTypeMutation,
  useCreateIndustryTypeMutation,
  useUpdateIndustryTypeMutation,
  useDeleteIndustryTypeMutation,
} = industryTypeApi;
