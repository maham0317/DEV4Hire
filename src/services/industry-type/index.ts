import { IndustryTypeModel } from "@/interfaces/industry/industry.model";
import api from "@/services/ApiClient";
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

const controller = "industrytype";

export async function getAllIndustryType(): Promise<any> {
  let url = `${controller}/list`;
  const response: any = await api.get(url);
  return response.data;
}
export async function getIndustryTypeById(id: number): Promise<any> {
  let url = `${controller}/list/${id}`;
  const response: any = await api.get(url);
  return response.data;
}

export async function deleteIndustryTypeById(id: number): Promise<any> {
  let url = `${controller}/delete/${id}`;
  const response: any = await api.delete(url);
  return response.data;
}

export async function updateIndustryType(
  model: IndustryTypeModel
): Promise<any> {
  let url = `${controller}/update/${model}`;
  const response: any = await api.put(url, model);
  return response.data;
}

export async function createIndustryType(
  model: IndustryTypeModel
): Promise<any> {
  let url = `${controller}/create`;
  const response: any = await api.post(url, model);
  return response.data;
}

// export async function createIndustryTypeWithRole(
//   model: IndustryTypeWithRolesModel
// ): Promise<any> {
//   let url = `controller/createwithroles`;
//   const response: any = await api.post(url);
//   return response.data;
// }

export const industryTypeService = {
  getAllIndustryType,
  getIndustryTypeById,
  deleteIndustryTypeById,
  updateIndustryType,
  createIndustryType,
  // createIndustryTypeWithRole,
};
