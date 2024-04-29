import { BaseListModel } from "@/interfaces/base-list.model";
import { IndustryTypeModel } from "../../interfaces/industry-type/industry-type.model";
import { apiService } from "../api";
import IndustryTypeFilterModel from "@/interfaces/industry-type/industry-type-filter.model";
import BaseFilterModel from "@/interfaces/base-filter.model";
const industryTypeApi = apiService
  .enhanceEndpoints({ addTagTypes: ["IndustryType"] })
  .injectEndpoints({
    endpoints: (builder) => ({
      // getAllIndustryType: builder.query<IndustryTypeModel[], void>({
      //   query: () => "industrytype/list",
      //   providesTags: ["IndustryType"],
      //   transformResponse: (res: IndustryTypeModel[]) => {
      //     console.log("list-----", res);
      //     return res;
      //   },
      getAllIndustryType: builder.mutation<
        BaseListModel<IndustryTypeModel>,
        IndustryTypeFilterModel
      >({
        query: (data) => ({
          url: "industrytype/list",
          method: "POST",
          body: data,
        }),
      }),
      getIndustryTypeById: builder.query<IndustryTypeModel, Number>({
        query: (id) => ({
          url: `industrytype/list/${id}`,
          transformResponse: (response: { data: IndustryTypeModel }) =>
            response.data,
          transformErrorResponse: (response: { status: string | number }) =>
            response.status,
        }),
      }),
      createIndustryType: builder.mutation({
        query: (data) => ({
          url: "industrytype/create",
          method: "POST",
          body: data,
        }),
        // async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        //   queryFulfilled
        //     .then((result) => {
        //       toast.success("Education type created successfully");
        //     })
        //     .catch((error) => {
        //       toast.error("Ther is some error");
        //     });
        // },
        // this invalidatesTags mean will re-run func getAllEducationType, so after we modifying data, the data will be fresh or up to date
        invalidatesTags: ["IndustryType"],
      }),
      updateIndustryType: builder.mutation({
        query: (data) => ({
          url: `industrytype/update`,
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
    // this func will refetch the todos when page focused
    //refetchOnFocus: true,
  });

export const {
  useGetAllIndustryTypeMutation,
  useCreateIndustryTypeMutation,
  useUpdateIndustryTypeMutation,
  useDeleteIndustryTypeMutation,
  useGetIndustryTypeByIdQuery,
} = industryTypeApi;
