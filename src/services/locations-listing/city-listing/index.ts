import { apiService } from "@/services/api";
import { BaseListModel } from "@/interfaces/base-list.model";
import CityModel, {
  CityFilterModel,
} from "@/interfaces/location-listing/city-listing";

const cityApi = apiService
  .enhanceEndpoints({ addTagTypes: ["City"] })
  .injectEndpoints({
    endpoints: (builder) => ({
      getAllCity: builder.mutation<BaseListModel<CityModel>, CityFilterModel>({
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
    // this func will refetch the todos when page focused
    //refetchOnFocus: true,
  });

export const {
  useGetAllCityMutation,
  useCreateCityMutation,
  useUpdateCityMutation,
  useDeleteCityMutation,
  useGetCityByIdQuery,
} = cityApi;
