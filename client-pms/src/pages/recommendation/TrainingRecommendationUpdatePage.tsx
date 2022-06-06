import React from 'react';
import {useNavigate, useParams} from "react-router-dom";
import { useGetTrainingRecommendationQuery } from '../../service';
import { useGetSingleTrainingRecommendationQuery } from '../../service';
import { useUpdateTrainingRecommendationMutation } from '../../service';
import {TrainingRecommendation} from "../../components";
import { TRAINING_VIEW } from '../../constants/routes/Routing';



const TrainingRecommendationUpdatePage = () => {
    const navigate = useNavigate()

    
    const {id} = useParams()
    console.log(id)

    

    const {data,refetch, isLoading} = useGetSingleTrainingRecommendationQuery(id)
    console.log(data, 'Training data')

    const [updateTraining, { isLoading: trainingLoading, data: trainingData, error ,isError}] = useUpdateTrainingRecommendationMutation()



    const editHandler = (title:string,definition:string) => {

        updateTraining(
            {
                title,
                definition,
                id
            }
        )
        .then((res: any) => {
            res.error ? <> </> : navigate(`${TRAINING_VIEW}`)
        })
       
        // if (trainingData && isError === false) {
        //     navigate(`${TRAINING_VIEW}`)
      
        //   }
      

    }

    if (isLoading) {
        return <div>Loading...</div>
    }

    return (
        <div>
            
            <TrainingRecommendation
                defaultValue={data}
                onSubmit={editHandler}
                dataError1={isError}
                />
        </div>

    );
};

export default TrainingRecommendationUpdatePage;


