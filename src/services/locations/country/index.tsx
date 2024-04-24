import api from "@/services/ApiClient";
import ProficiencyModel from "@/interfaces/setup/proficiency.model";
import { apiService } from "../../api";
import { BaseListModel } from "@/interfaces/base-list.model";
import CountryModel from "@/interfaces/location/country.model";
import CountryFilterModel from "@/interfaces/location/country-filter.model";
const Country = "Country";

export const CountryApi = apiService
  .enhanceEndpoints({ addTagTypes: [Country] })
  .injectEndpoints({
    endpoints: (builder) => ({
      getallCountry: builder.mutation<
        BaseListModel<CountryModel>,
        CountryFilterModel
      >({
        query: (data) => ({
          url: "locations/allcountries",
          method: "POST",
          body: data,
        }),
      }),

      createCountry: builder.mutation({
        query: (data) => ({
          url: "locations/addcountry",
          method: "POST",
          body: data,
        }),
        invalidatesTags: ["Country"],
      }),
      updateCountry: builder.mutation({
        query: (data) => ({
          url: `locations/updatecountry`,
          method: "PUT",
          body: data,
        }),
        invalidatesTags: ["Country"],
      }),
      deleteCountry: builder.mutation({
        query: (id) => ({
          url: `locations/deletecountry/${id}`,
          method: "DELETE",
        }),
        invalidatesTags: ["Country"],
      }),
    }),
  });
export const {
  useGetallCountryMutation,
  useUpdateCountryMutation,
  useCreateCountryMutation,
  useDeleteCountryMutation,
} = CountryApi;

export async function getallLocation(model: CountryFilterModel): Promise<any> {
  let url = `locations/allcountries`;
  const response: any = await api.post(url);
  return response.data;
}
export async function getLocationById(id: number): Promise<any> {
  let url = `locations/getcountrybyid/${id}`;
  const response: any = await api.get(url);
  return response.data;
}

export async function deleteLocationById(id: number): Promise<any> {
  let url = `lcations/deletecountry/${id}`;
  const response: any = await api.delete(url);
  return response.data;
}

export async function updateLocationById(id: number): Promise<any> {
  let url = `locations/updateasyncountry/${id}`;
  const response: any = await api.put(url);
  return response.data;
}

export async function createLocation(model: CountryModel): Promise<any> {
  let url = `locations/addcountry`;
  const response: any = await api.post(url, model);
  return response.data;
}

export const locationService = {
  getallLocation,
  getLocationById,
  deleteLocationById,
  updateLocationById,
  createLocation,
};
