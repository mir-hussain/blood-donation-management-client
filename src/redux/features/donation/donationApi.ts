import { baseApi } from "@/redux/api/baseApi";

export const donationApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getDonationById: builder.query({
      query: (id) => `donation/${id}`,
    }),
    updateDonation: builder.mutation({
      query: ({ id, ...data }) => ({
        url: `donation/${id}`,
        method: "PUT",
        body: data,
      }),
    }),
    deleteDonation: builder.mutation({
      query: (id) => ({
        url: `donation/${id}`,
        method: "DELETE",
      }),
    }),
    createDonation: builder.mutation({
      query: (newDonation) => ({
        url: "donation",
        method: "POST",
        body: newDonation,
      }),
    }),
    getDonations: builder.query({
      query: (filters) => ({
        url: "donation",
        params: filters,
      }),
    }),
  }),
});

export const {
  useGetDonationByIdQuery,
  useUpdateDonationMutation,
  useDeleteDonationMutation,
  useCreateDonationMutation,
  useGetDonationsQuery,
} = donationApi;
