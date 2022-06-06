/* eslint-disable */
import React from 'react';
import { useGetTrainingRecommendationQuery } from '../../service';
import {useDeleteTrainingRecommendationMutation } from '../../service'
import {useNavigate, useParams} from "react-router-dom";
import TrainingRecommendationViewList from "../../components/recommendation/TrainingRecommendationList";
import { TRAINING_RECOMMENDATION_PAGE } from '../../constants/routes/Routing';

const TrainingView = () => {
    const { data , refetch } = useGetTrainingRecommendationQuery('')

    const [ deleteTraining , {isError} ] = useDeleteTrainingRecommendationMutation() 


    const deleteTrainingRecommendationHandler = (id: string) => {
      console.log('clicked')
      deleteTraining(
          id
      )
      // .then(() => refetch())
  }

  let navigate = useNavigate();

  
  const updateTrainingRecommendationHandler = (id: string) => {
    console.log('clicked')
   
  
    navigate(`${TRAINING_RECOMMENDATION_PAGE}/${id}`);

}




  console.log(typeof data, 'type')
  return <div>
       <TrainingRecommendationViewList
     trainingData={data} 
     onDelete = {deleteTrainingRecommendationHandler} 
     onUpdate = {updateTrainingRecommendationHandler}
     error = {isError}
    />
  </div>;
};

export default TrainingView;
