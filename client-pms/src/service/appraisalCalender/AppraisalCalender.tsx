import {pmsApi} from "../root";

const APPRAISAL_CALENDER_URL = `/api/v1/appraisal-calender`

const apiWithTag = pmsApi.enhanceEndpoints({addTagTypes: ['AppraisalCalender']})
const calenderApi = apiWithTag.injectEndpoints({
    endpoints: (builder) => ({


        getAppraisalCalender: builder.query<any, any>({
            query: () => ({
                url: `${APPRAISAL_CALENDER_URL}`,
                method: 'GET',
            }),
            providesTags: ['AppraisalCalender'],
        }),
        getSiAppraisalCalender: builder.query<any, any>({
            query: (id) => ({
                url: `${APPRAISAL_CALENDER_URL}/${id}`,

            }),
            providesTags: ['AppraisalCalender'],
        }),
        createAppraisalCalender: builder.mutation<any, any>({
            query: (data) => ({
                url: `${APPRAISAL_CALENDER_URL}`,
                method: "POST",
                body: data
            }),
            invalidatesTags: ['AppraisalCalender'],
        }),
        deleteAppraisalCalender: builder.mutation<any, any>({
            query: (id) => ({
                url: `${APPRAISAL_CALENDER_URL}/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['AppraisalCalender'],
        }),
        startAppraisalCalender: builder.mutation<any, any>({
            query: (id) => ({
                url: `${APPRAISAL_CALENDER_URL}/start/${id}`,
                method: 'PATCH',
            }),
            invalidatesTags: ['AppraisalCalender'],
        }),
        updateAppraisalCalender: builder.mutation<any, any>({
            query: (data) => ({
                url: `${APPRAISAL_CALENDER_URL}/${data.id}`,
                method: "PATCH",
                body: data
            }),
            invalidatesTags: ['AppraisalCalender']
        }),
    })

})

export const {
    useGetAppraisalCalenderQuery,
    useGetSiAppraisalCalenderQuery,
    useCreateAppraisalCalenderMutation,
    useDeleteAppraisalCalenderMutation,
    useUpdateAppraisalCalenderMutation,
    useStartAppraisalCalenderMutation,
} = calenderApi