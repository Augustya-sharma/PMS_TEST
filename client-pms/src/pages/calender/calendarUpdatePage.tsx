import React from 'react'
import Calendar from '../../components/calender/Calender'
import {useGetSingleCalenderQuery, useUpdateCalendarMutation } from '../../service'
import { useParams,useNavigate } from 'react-router-dom'
import {CALENDER_VIEWPAGE} from '../../constants/routes/Routing'
import NewCalendar from '../../components/calender/newCalendar'

const CalendarUpdatePage = () => {
    const navigate = useNavigate()
    const {id} = useParams()
    const {data} = useGetSingleCalenderQuery(id)
 const [updateCalendar,{isError}] = useUpdateCalendarMutation()
 const updateCalendarHandler = 
 (name: any, start_date: any, end_date: any,
    start_date_appraiser: any, end_date_appraiser: any,
    start_date_reviewer: any, end_date_reviewer: any,
    start_date_normalizer: any, end_date_normalizer: any,
    start_date_F2FMeeting: any, end_date_F2FMeeting: any,
    start_date_employee_acknowledgement: any, end_date_employee_acknowledgement: any,
    start_date_mediation:any,end_date_mediation:any,
    start_date_re_normalization:any,end_date_re_normalization:any,
    start_date_closing:any,end_date_closing:any)=> {
     updateCalendar ({
         name: name[0].name,
         start_date: name[0].start_date,
         end_date: name[0].end_date,
         start_date_appraiser:name[0]. start_date_appraiser,
         end_date_appraiser:name[0].end_date_appraiser,
         start_date_reviewer: name[0].start_date_reviewer,
         end_date_reviewer:name[0].end_date_reviewer,
         start_date_normalizer:name[0]. start_date_normalizer,
         end_date_normalizer:name[0]. end_date_normalizer,
         start_date_F2FMeeting:name[0].start_date_F2FMeeting,
         end_date_F2FMeeting:name[0].end_date_F2FMeeting,
         start_date_employee_acknowledgement:name[0].start_date_employee_acknowledgement,
         end_date_employee_acknowledgement:name[0].end_date_employee_acknowledgement,
         start_date_mediation:name[0].start_date_mediation,
         end_date_mediation:name[0].end_date_mediation,
         start_date_re_normalization:name[0]. start_date_re_normalization,
         end_date_re_normalization:name[0]. end_date_re_normalization,
         start_date_closing:name[0]. start_date_closing,
         end_date_closing:name[0]. end_date_closing,
         id
     }
        )
        .then((res: any) => {
            res.error ? <> </> : navigate(`${CALENDER_VIEWPAGE}`)
         })
        // navigate(`${CALENDER_VIEWPAGE}`)
 }

  return (
  <NewCalendar  defaultValue = {data} onSubmit = {updateCalendarHandler}
   error2={isError}
  />
  )
}

export default CalendarUpdatePage
