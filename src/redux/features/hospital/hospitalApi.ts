import { baseApi } from "@/redux/api/baseApi";

export const hospitalApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getHospitalById: builder.query({
      query: (id) => `hospital/${id}`,
    }),
    updateHospital: builder.mutation({
      query: ({ id, ...data }) => ({
        url: `hospital/${id}`,
        method: "PUT",
        body: data,
      }),
    }),
    deleteHospital: builder.mutation({
      query: (id) => ({
        url: `hospital/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["hospital"],
    }),
    createHospital: builder.mutation({
      query: (newHospital) => ({
        url: "hospital",
        method: "POST",
        body: newHospital,
      }),
      invalidatesTags: ["hospital"],
    }),
    getHospitals: builder.query({
      query: (filters) => ({
        url: "hospital",
        params: filters,
      }),
      providesTags: ["hospital"],
    }),
  }),
});

export const {
  useGetHospitalByIdQuery,
  useUpdateHospitalMutation,
  useDeleteHospitalMutation,
  useCreateHospitalMutation,
  useGetHospitalsQuery,
} = hospitalApi;
