import { baseApi } from "@/redux/api/baseApi";

export const requestBloodApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getRequestById: builder.query({
      query: (id) => `request/${id}`,
    }),
    updateRequest: builder.mutation({
      query: ({ id, ...data }) => ({
        url: `request/${id}`,
        method: "PUT",
        body: data,
      }),
    }),
    deleteRequest: builder.mutation({
      query: (id) => ({
        url: `request/${id}`,
        method: "DELETE",
      }),
    }),
    createRequest: builder.mutation({
      query: (newRequest) => ({
        url: "request",
        method: "POST",
        body: newRequest,
      }),
    }),
    getRequests: builder.query({
      query: (filters) => ({
        url: "request",
        params: filters,
      }),
    }),
  }),
});

export const {
  useGetRequestByIdQuery,
  useUpdateRequestMutation,
  useDeleteRequestMutation,
  useCreateRequestMutation,
  useGetRequestsQuery,
} = requestBloodApi;
