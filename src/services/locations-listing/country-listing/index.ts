import { apiService } from "@/services/api";
import { BaseListModel } from "@/interfaces/base-list.model";
import CountryModel, {
  CountryFilterModel,
} from "@/interfaces/location-listing/country-listing";

const countryApi = apiService
  .enhanceEndpoints({ addTagTypes: ["Country"] })
  .injectEndpoints({
    endpoints: (builder) => ({
      getAllCountry: builder.mutation<
        BaseListModel<CountryModel>,
        CountryFilterModel
      >({
        query: (data) => ({
          url: "locations/allcountries",
          method: "POST",
          body: data,
        }),
      }),
      getCountryById: builder.query<CountryModel, Number>({
        query: (id) => ({
          url: `locations/getcountrybyid/${id}`,
          transformResponse: (response: { data: CountryModel }) =>
            response.data,
          transformErrorResponse: (response: { status: string | number }) =>
            response.status,
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
    // this func will refetch the todos when page focused
    //refetchOnFocus: true,
  });

export const {
  useGetAllCountryMutation,
  useCreateCountryMutation,
  useUpdateCountryMutation,
  useDeleteCountryMutation,
  useGetCountryByIdQuery,
} = countryApi;
