/* eslint-disable */
import React from 'react';
import { useGetTrainingRecommendationQuery } from '../../service';
import { useCreateTrainingRecommendationMutation } from '../../service';
import { TrainingRecommendation } from "../../components";
import { useNavigate } from "react-router-dom";
import { TRAINING_VIEW } from '../../constants/routes/Routing'



const TrainingRecommendationPage = () => {

  const navigate = useNavigate()

  const { refetch } = useGetTrainingRecommendationQuery('')
  const [createTraining, { isLoading, data, error, isError }] = useCreateTrainingRecommendationMutation()
  const createTrainingHandler = (title: string, definition: string) => {
    console.log('Clicked')
    createTraining(
      {
        title,
        definition
      }
    )
    .then((res: any) => {
      res.error ? <> </> : navigate(`${TRAINING_VIEW}`)
  })

    // .then(() => refetch())

    // if (data && isError === false) {
    //   navigate(`${TRAINING_VIEW}`)

    // }


  }
  return (<div>

    <TrainingRecommendation

      onSubmit={createTrainingHandler}
      dataError={isError}

    />

  </div>)
};

export default TrainingRecommendationPage;
