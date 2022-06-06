import React from 'react'
import MidyearPAreport from '../../components/midyearperformanceappraisal/midyearPAreport/midYearPAreport/MidyearPAreport'
import { useGetEmployeeAppraisalQuery, useGetRatingScaleQuery } from '../../service'
import { useParams } from 'react-router-dom'

const MidYearPAReportPage = () => {
  const { employee_id } = useParams()
  const { data, isLoading } = useGetEmployeeAppraisalQuery(employee_id)
  

  if(isLoading) {
    return <p>Loading... </p>
  }

  
  return (
    <div><MidyearPAreport  paData = {data}
  /></div>
  )
}

export default MidYearPAReportPage