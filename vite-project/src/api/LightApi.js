import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const lightApi = createApi({
  reducerPath: "lightApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000",
  }),
  endpoints: (builder) => ({
    getShow: builder.query({
      query: () => "/api/show",
    }),
    getAllShowData: builder.query({
      query: (id) => `/api/show/${id}/data`,
    }),
    createShow: builder.mutation({
      query: (showData) => ({
        url: "api/show",
        method: "POST",
        body: showData,
      }),
    }),
    createInput: builder.mutation({
      query: (fileData) => ({
        url: "/api/input",
        method: "POST",
        body: fileData,
      }),
    }),
    getLightsBySetId: builder.query({
      query: (setId) => `/api/sets/${setId}/lights`,
    }),
    getSet: builder.query({
      query: () => "/api/set",
    }),
  }),
});

export const {
  useGetShowQuery,
  useGetAllShowDataQuery,
  useCreateShowMutation,
  useCreateInputMutation,
  useGetLightsBySetIdQuery,
  useGetSetQuery,
} = lightApi;
