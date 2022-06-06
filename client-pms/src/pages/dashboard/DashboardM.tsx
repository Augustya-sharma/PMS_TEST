import React from 'react'
import MyTeam from '../../components/manager/MyTeam'
import OverallStatus from '../../components/manager/OverallStatus'
import {useStartEmployeeAppraisalMutation} from "../../service";

const Dashboard = () => {

    const [startAppraisal] = useStartEmployeeAppraisalMutation()
  return (
   <>
   {/*<OverallStatus/>*/}
   <MyTeam startAppraisal={startAppraisal} />
   </>
  )
}

export default Dashboard
