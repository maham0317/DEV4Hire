import api from "@/services/ApiClient";
import ProficiencyModel from "@/interfaces/setup/proficiency.model";
import { apiService } from "../../api";
import { BaseListModel } from "@/interfaces/base-list.model";
import CountryModel from "@/interfaces/location/country.model";
import CountryFilterModel from "@/interfaces/location/country-filter.model";
const City = "City";

export const CityApi = apiService
  .enhanceEndpoints({ addTagTypes: [City] })
  .injectEndpoints({
    endpoints: (builder) => ({
      getallCity: builder.mutation<
        BaseListModel<CountryModel>,
        CountryFilterModel
      >({
        query: (data) => ({
          url: "locations/allcities",
          method: "POST",
          body: data,
        }),
      }),

      createCity: builder.mutation({
        query: (data) => ({
          url: "locations/addcity",
          method: "POST",
          body: data,
        }),
        invalidatesTags: ["City"],
      }),
      updateCity: builder.mutation({
        query: (id) => ({
          url: `locations/updateasynccity/${id}`,
          method: "PUT",
          //   body: data,
        }),
        invalidatesTags: ["City"],
      }),
      deleteCity: builder.mutation({
        query: (id) => ({
          url: `location/deletecity/${id}`,
          method: "DELETE",
        }),
        invalidatesTags: ["City"],
      }),
    }),
  });
export const {
  useGetallCityMutation,
  useUpdateCityMutation,
  useCreateCityMutation,
  useDeleteCityMutation,
} = CityApi;

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
