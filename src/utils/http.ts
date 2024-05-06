import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Pair } from "@/interfaces";

const baseUrl = 'https://65efcc68ead08fa78a50f929.mockapi.io/api/v1/';

// Define a service using a base URL and expected endpoints
export const pairsApi = createApi({
  reducerPath: 'pairsApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getPairs: builder.query<Pair[], void>({
      query: () => `pairs`,
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetPairsQuery } = pairsApi