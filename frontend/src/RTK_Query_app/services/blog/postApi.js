import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const postsApi = createApi({
  reducerPath: "postsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://127.0.0.1:5000/api/v1" }),
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => "posts",
    }),
    getFeaturedPost: builder.query({
      query: () => "posts/featured_post",
    }),
  }),
});

export const { useGetPostsQuery, useGetFeaturedPostQuery } = postsApi;
