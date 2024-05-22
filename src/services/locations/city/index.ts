import api from "@/services/ApiClient";
import { apiService } from "../../api";
import { BaseListModel } from "@/interfaces/base-list.model";
import CountryModel from "@/interfaces/location/country.model";
import CountryFilterModel from "@/interfaces/location/country-filter.model";
import CityModel from "@/interfaces/location/city.model";
const City = "City";

export const CityApi = apiService
  .enhanceEndpoints({ addTagTypes: [City] })
  .injectEndpoints({
    endpoints: (builder) => ({
      getallCity: builder.mutation<
        BaseListModel<CityModel>,
        CountryFilterModel
      >({
        query: (data) => ({
          url: "locations/allcities",
          method: "POST",
          body: data,
        }),
      }),
      getCityById: builder.query<CityModel, Number>({
        query: (id) => ({
          url: `locations/getcitybyid/${id}`,
          transformResponse: (response: { data: CityModel }) => response.data,
          transformErrorResponse: (response: { status: string | number }) =>
            response.status,
        }),
      }),
      //   getallCityById: builder.mutation({
      //     query: (data) => ({
      //       url: `locations/updatecity`,
      //       method: "PUT",
      //       body: data,
      //   }),
      // }),
      createCity: builder.mutation({
        query: (data) => ({
          url: "locations/addcity",
          method: "POST",
          body: data,
        }),
        invalidatesTags: ["City"],
      }),
      updateCity: builder.mutation({
        query: (data) => ({
          url: `locations/updatecity`,
          method: "PUT",
          body: data,
        }),
        invalidatesTags: ["City"],
      }),
      deleteCity: builder.mutation({
        query: (id) => ({
          url: `locations/deletecity/${id}`,
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
  useGetCityByIdQuery,
} = CityApi;

// export async function getallCities(): Promise<any> {
//   let url = `locations/allcountries`;
//   const response: any = await api.post(url);
//   return response.data;
// }
// export async function getCityById(id: number): Promise<any> {
//   let url = `locations/getcountrybyid/${id}`;
//   const response: any = await api.get(url);
//   return response.data;
// }

// export async function deleteCityById(id: number): Promise<any> {
//   let url = `lcations/deletecountry/${id}`;
//   const response: any = await api.delete(url);
//   return response.data;
// }

// export async function updateCityById(model: CityModel): Promise<any> {
//   let url = `locations/updateasyncountry}`;
//   const response: any = await api.put(url, model);
//   return response.data;
// }

// export async function createCity(model: CityModel): Promise<any> {
//   let url = `locations/addcountry`;
//   const response: any = await api.post(url, model);
//   return response.data;
// }

// export const cityService = {
//   getallCities,
//   getCityById,
//   deleteCityById,
//   updateCityById,
//   createCity,
// };
