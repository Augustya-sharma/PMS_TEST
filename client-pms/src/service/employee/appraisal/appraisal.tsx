import {pmsApi} from "../../root";


const APPRAISAL_URL = `/api/v1/employee`


const apiWithTag = pmsApi.enhanceEndpoints({addTagTypes: ['Employee']})

const appraisalApi = apiWithTag.injectEndpoints({
    endpoints: (builder) => ({
        // Create Template

        getEmployeeAppraisal: builder.query<any, any>({
            query: (id) => ({
                url: `${APPRAISAL_URL}/${id}`,
                method: 'GET',
            }),
            providesTags: ['Employee'],
        }),

        createEmployeeAppraisal: builder.mutation<any, any>({
            query: (data) => ({
                url: `${APPRAISAL_URL}/appraisal/${data.id}`,
                method: 'PATCH',
                body: data,
            }),
            invalidatesTags: ['Employee'],
        }),
        updateEmployeeAppraisal: builder.mutation<any, any>({
            query: (data) => ({
                url: `${APPRAISAL_URL}/${data.id}`,
                method: 'PATCH',
                body: data,
            }),
            invalidatesTags: ['Employee'],
        }),
        startEmployeeAppraisal: builder.mutation<any, any>({
            query: (id) => ({
                url: `${APPRAISAL_URL}/template/${id}`,
                method: 'PATCH',
            }),
            invalidatesTags: ['Employee'],
        }),
        acceptReviewer: builder.mutation<any, any>({
            query: (data) => ({
                url: `${APPRAISAL_URL}/accept-reviewer`,
                method: 'PATCH',
                body: data,
            }),
            invalidatesTags: ['Employee'],
        }),
        acceptNormalizer: builder.mutation<any, any>({
            query: (data) => ({
                url: `${APPRAISAL_URL}/accept-normalizer`,
                method: 'PATCH',
                body: data,
            }),
            invalidatesTags: ['Employee'],
        }),
        acceptAppraisalEmployee: builder.mutation<any, any>({
            query: (data) => ({
                url: `${APPRAISAL_URL}/accept-appraisal/${data}`,
                method: 'PATCH',
            }),
            invalidatesTags: ['Employee'],
        }),
        rejectReviewerAppraisalEmployee: builder.mutation<any, any>({
            query: (data) => ({
                url: `${APPRAISAL_URL}/reject-reviewer-values/${data.id}`,
                body: data,
                method: 'PATCH',
            }),
            invalidatesTags: ['Employee'],
        }),

        rejectNormalizerAppraisalEmployee: builder.mutation<any, any>({
            query: (data) => ({
                url: `${APPRAISAL_URL}/reject-normalizer-values/${data.id}`,
                body: data,
                method: 'PATCH',
            }),
            invalidatesTags: ['Employee'],
        }),


        reviewerRejection: builder.mutation<any, any>({
            query: (data) => ({
                url: `${APPRAISAL_URL}/reviewer-rejection/${data.employee_id}`,
                body: data,
                method: 'PATCH',
            }),
            invalidatesTags: ['Employee'],
        }),
        normalizerRejection: builder.mutation<any, any>({
            query: (data) => ({
                url: `${APPRAISAL_URL}/normalizer-rejection/${data.employee_id}`,

                body: data,
                method: 'PATCH',
            }),
            invalidatesTags: ['Employee'],
        }),
        appraiserAcceptReviewer: builder.mutation<any, any>({
            query: (id) => ({
                url: `${APPRAISAL_URL}/appraiser-accept-reviewer/${id}`,
                method: 'PATCH',
            }),
            invalidatesTags: ['Employee'],
        }),

        appraiserAcceptNormalizer: builder.mutation<any, any>({
            query: (id) => ({
                url: `${APPRAISAL_URL}/appraiser-accept-normalizer/${id}`,
                method: 'PATCH',
            }),
            invalidatesTags: ['Employee'],
        }),

    })
})


export const {
    useGetEmployeeAppraisalQuery,
    useCreateEmployeeAppraisalMutation,
    useUpdateEmployeeAppraisalMutation,
    useStartEmployeeAppraisalMutation,
    useAcceptReviewerMutation,
    useAcceptNormalizerMutation,
    useAcceptAppraisalEmployeeMutation,
    useRejectReviewerAppraisalEmployeeMutation,

    useRejectNormalizerAppraisalEmployeeMutation,

    useReviewerRejectionMutation,
    useNormalizerRejectionMutation,
    useAppraiserAcceptReviewerMutation,
    useAppraiserAcceptNormalizerMutation,




} = appraisalApi
