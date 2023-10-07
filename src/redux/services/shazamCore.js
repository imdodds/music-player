import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const shazamCoreApi = createApi({
  reducerPath: 'shazamCoreApi',
  baseQuery: fetchBaseQuery({ 
    baseUrl: 'https://shazam-core7.p.rapidapi.com',
    prepareHeaders: (headers) => {
      headers.set('X-RAPIDAPI-KEY', process.env.REACT_APP_RAPIDAPI_KEY);

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTopCharts: builder.query({ query: () => 'charts/get-top-songs-in-world' }),
  }),
});

export const { useGetTopChartsQuery } = shazamCoreApi;