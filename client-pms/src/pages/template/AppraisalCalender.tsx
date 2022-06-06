import React from 'react';
import CreateCalender from "../../components/Template/CreateCalender";
import {
  useGetAppraisalCalenderQuery, 
  useStartAppraisalCalenderMutation, 
  useDeleteAppraisalCalenderMutation
} from "../../service";
import {useUpdateAppraisalCalenderMutation} from "../../service/appraisalCalender/AppraisalCalender";



const AppraisalCalenderPage = () => {

    const {data} = useGetAppraisalCalenderQuery('')
    const [ deleteAppraisalCalender,{error} ] = useDeleteAppraisalCalenderMutation ()
    const [start ] = useStartAppraisalCalenderMutation()
    const [updateCalender ]  = useUpdateAppraisalCalenderMutation()

    console.log(data)

    const deleteAppraisalCalenderHandler = (id: string) => {
        console.log('clicked')
        deleteAppraisalCalender(
            id
        )
        // .then(() => refetch())
      }

    const pauseAppraisalCalenderHandler = (id: string) => {
        console.log('clicked')
        updateCalender({
            status: 'inactive',
            id
        })
        // .then(() => refetch())
    }
    return (
        <div>

            <CreateCalender data ={data} onDelete={deleteAppraisalCalenderHandler} start={start} onPause={pauseAppraisalCalenderHandler}/>

        </div>
    );
};


export default AppraisalCalenderPage;