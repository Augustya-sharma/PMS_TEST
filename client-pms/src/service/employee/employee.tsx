import {pmsApi} from "../root";

const EMPLOYEE_URL = `/api/v1/employee`

const apiWithTag = pmsApi.enhanceEndpoints({addTagTypes: ['Employee']})
const employeeApi = apiWithTag.injectEndpoints({
    endpoints: (builder) => ({
        // Create Template

        getEmployee: builder.query<any, any>({
            query: (status) => ({
                url: `${EMPLOYEE_URL}/filter/${status}`,
                method: 'GET',
            }),
            providesTags : ['Employee'],
        }),

        getEmployeeByStatus: builder.query<any, any>({
            query: (status) => ({
                url: `${EMPLOYEE_URL}filter/${status}`,
                method: 'GET',
            }),

        })
    })
})


export const {useGetEmployeeQuery,useGetEmployeeByStatusQuery} = employeeApi