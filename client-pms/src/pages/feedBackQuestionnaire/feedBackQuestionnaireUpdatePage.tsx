import React from 'react'
import { FeedBackQuestionnaire } from '../../components'
import { useGetSingleFeedBackQuery,useUpdateFeedBackMutation } from '../../service'
import { useNavigate, useParams } from 'react-router-dom'
import { FEEDBACK_QUESTIONNAIRE_VIEW_lIST } from '../../constants/routes/Routing'


export const FeedBackQuestionnaireUpdatePage = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  const {data} = useGetSingleFeedBackQuery(id)
  const [updateFeedback, {isError}] = useUpdateFeedBackMutation()
  
  const updateFeedbackHandler = (name: string) => {

    updateFeedback({
      name,
      id
    })
    .then((res: any) => {
      res.error ? <> </> : navigate(`${FEEDBACK_QUESTIONNAIRE_VIEW_lIST}`)
  })
    // if (name && isError === false) {
    //   navigate(`${FEEDBACK_QUESTIONNAIRE_VIEW_lIST}`)
    // }
   
  }


  return (
    <div><FeedBackQuestionnaire defaultValue = {data} onSubmit={updateFeedbackHandler} 
    feedbackError2={isError}/></div>
  )
}
