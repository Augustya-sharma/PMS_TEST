import React from 'react'
import { FeedBackQuestionnaire } from '../../components'
import { useCreateFeedBackMutation } from '../../service/feedBackQuestionnaire/FeedBackQuestionnaire'
import { useParams, useNavigate } from "react-router-dom";
import { FEEDBACK_QUESTIONNAIRE_VIEW_lIST } from '../../constants/routes/Routing'


const FeedBackQuestionnairePage = () => {
  const navigate = useNavigate()

  console.log('feedback')

  const [createFeedBack,{isLoading,data,error,isError}] = useCreateFeedBackMutation()
  const createFeedBackHandler =  (name:string) =>{
    createFeedBack({
      name
    })
    .then((res: any) => {
      res.error ? <> </> :   navigate(`${FEEDBACK_QUESTIONNAIRE_VIEW_lIST}`);
  })
  
  }
  
  return (
    <>
    <FeedBackQuestionnaire  feedbackError1={isError} onSubmit={createFeedBackHandler}/>
    </>
  )
}

export default FeedBackQuestionnairePage