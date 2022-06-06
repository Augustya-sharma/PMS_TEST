import CalenderViewList from "../../components/calender/CalenderViewList"
import { useDeleteCalenderMutation, useGetCalenderQuery } from "../../service"
import { useNavigate } from "react-router-dom"
import { CALENDER } from "../../constants/routes/Routing"

const CalendarViewPage = () => {
  
  const {data} = useGetCalenderQuery('')

  const [deleteCalendar, {isError, error}] = useDeleteCalenderMutation()
  console.log(isError, error,'error')
  
  const deleteCalendarHandler = (id:string) => {
    deleteCalendar (
      id
    )
  }
  let navigate = useNavigate();
  const updateCalendarHandler = (id:string) => {
    navigate(`${CALENDER}/${id}`);
  }
  
  console.log(data)
  return (
   <>
   <CalenderViewList 
   calendarData={data}
   onDelete = {deleteCalendarHandler}
   onUpdate = {updateCalendarHandler}
   deleteCalendarAlert= {error}
   error = {isError}/>
   </>
    )
}
export default CalendarViewPage