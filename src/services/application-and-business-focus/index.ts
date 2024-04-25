import { BaseListModel } from "@/interfaces/base-list.model";
import { apiService } from "../api";
import api from "@/services/ApiClient";
import ApplicationFilterModel from "@/interfaces/user/user-application-filter.model";
import { ApplicationAndBusinessFocusModel } from "@/interfaces/application-and-business-focus/application-and-business-focus.model";
const ApplicationAndBusinessFocus = "ApplicationAndBusinessFocus";
export const applicationandbusinessfocusapi = apiService
  .enhanceEndpoints({ addTagTypes: [ApplicationAndBusinessFocus] })
  .injectEndpoints({
    endpoints: (builder) => ({
      getAllProfileApplicationAndBusinessFocus: builder.mutation<
        BaseListModel<ApplicationAndBusinessFocusModel>,
        ApplicationFilterModel
      >({
        query: (data) => ({
          url: "profileapplicationandbusinessfocus/list",
          method: "POST",
          body: data,
        }),
      }),

      createProfileApplicationAndBusinessFocus: builder.mutation({
        query: (data) => ({
          url: "profileapplicationandbusinessfocus/create",
          method: "POST",
          body: data,
        }),
        invalidatesTags: ["ApplicationAndBusinessFocus"],
      }),
      updateProfileApplicationAndBusinessFocus: builder.mutation({
        query: (data) => ({
          url: `profileapplicationandbusinessfocus/update`,
          method: "PUT",
          body: data,
        }),
        invalidatesTags: ["ApplicationAndBusinessFocus"],
      }),
      deleteProfileApplicationAndBusinessFocus: builder.mutation({
        query: (id) => ({
          url: `profileapplicationandbusinessfocus/delete/${id}`,
          method: "DELETE",
        }),
        invalidatesTags: ["ApplicationAndBusinessFocus"],
      }),
    }),
  });
export const {
  useGetAllProfileApplicationAndBusinessFocusMutation,
  useCreateProfileApplicationAndBusinessFocusMutation,
  useDeleteProfileApplicationAndBusinessFocusMutation,
  useUpdateProfileApplicationAndBusinessFocusMutation,
} = applicationandbusinessfocusapi;

export async function getAllApplicationAndBusinessFocus(
  model: ApplicationFilterModel
): Promise<any> {
  let url = `profileapplicationandbusinessfocus/list`;
  const response: any = await api.post(url);
  return response.data;
}
export async function getApplicationAndBusinessFocusById(
  id: number
): Promise<any> {
  let url = `profileapplicationandbusinessfocus/list/${id}`;
  const response: any = await api.get(url);
  return response.data;
}

export async function deleteApplicationAndBusinessFocusById(
  id: number
): Promise<any> {
  let url = `profileapplicationandbusinessfocus/delete/${id}`;
  const response: any = await api.delete(url);
  return response.data;
}

export async function updateApplicationAndBusinessFocusById(
  model: ApplicationAndBusinessFocusModel
): Promise<any> {
  let url = `profileapplicationandbusinessfocus/update`;
  const response: any = await api.put(url, model);
  return response.data;
}

export async function createApplicationAndBusinessFocus(
  model: ApplicationAndBusinessFocusModel
): Promise<any> {
  let url = `profileapplicationandbusinessfocus/create`;
  const response: any = await api.post(url, model);
  return response.data;
}

export const proficiencyService = {
  getAllApplicationAndBusinessFocus,
  getApplicationAndBusinessFocusById,
  deleteApplicationAndBusinessFocusById,
  updateApplicationAndBusinessFocusById,
  createApplicationAndBusinessFocus,
};
