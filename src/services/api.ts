import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
//import axios, { AxiosError, AxiosRequestConfig } from "axios";
import { Config } from "../config";

// const axiosBaseQuery =
//   (
//     { baseUrl }: { baseUrl: string } = { baseUrl: Config.API_URL }
//   ): BaseQueryFn<
//     {
//       url: string;
//       method?: AxiosRequestConfig["method"];
//       data?: AxiosRequestConfig["data"];
//       params?: AxiosRequestConfig["params"];
//       headers?: AxiosRequestConfig["headers"];
//     },
//     unknown,
//     unknown
//   > =>
//   async ({ url, method, data, params, headers }) => {
//     try {
//       const result = await axios({
//         url: baseUrl + url,
//         method,
//         data,
//         params,
//         headers,
//       });
//       return { data: result.data };
//     } catch (axiosError) {
//       const err = axiosError as AxiosError;
//       return {
//         error: {
//           status: err.response?.status,
//           data: err.response?.data || err.message,
//         },
//       };
//     }
//   };

export const apiService = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: Config.API_URL,
  }),
  endpoints: () => ({}),
});
