import { baseApi } from "@/redux/api/baseApi";

export const doctorApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => `users`,
      providesTags: ["users"],
    }),
    createAdmin: builder.mutation({
      query: (data) => ({
        url: `/admin`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["users"],
    }),
  }),
});

export const { useGetUsersQuery, useCreateAdminMutation } = doctorApi;
