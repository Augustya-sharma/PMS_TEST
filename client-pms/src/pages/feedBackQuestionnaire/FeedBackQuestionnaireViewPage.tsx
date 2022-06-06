import React from 'react'
import FeedBackQuestionnaireViewList from '../../components/feedBackQuestionnarie/FeedBackQuestionnaireViewList'
import { useDeleteFeedBackMutation, useGetFeedBackQuery } from '../../service'
import { useNavigate } from 'react-router-dom'
import { FEEDBACK_QUESTIONNAIRE } from '../../constants/routes/Routing'

const FeedBackQuestionnaireViewPage = () => {
  const {data} = useGetFeedBackQuery('')

  const [deleteFeedBack] = useDeleteFeedBackMutation()

  const deleteFeedBackHandler = (id : string) => {
    deleteFeedBack (
      id
    )
  }
  let navigate = useNavigate();
  const updateFeedBackHandler = (id:string) => {
    navigate(`${FEEDBACK_QUESTIONNAIRE}/${id}`);
  }
  return (
    <>
    <FeedBackQuestionnaireViewList 
    FeedbackData ={data} 
    onDelete = {deleteFeedBackHandler}
    onUpdate = {updateFeedBackHandler} />
    </>
  )
}

export default FeedBackQuestionnaireViewPage
