/* eslint-disable */
import React from 'react';
import { useCreateOtherRecommendationMutation } from '../../service';
import { useGetOtherRecommendationQuery } from '../../service';
import { useParams, useNavigate } from "react-router-dom";
import { OtherRecommendation } from "../../components";
import { OTHER_RECOMMENDATION_VIEW_PAGE } from '../../constants/routes/Routing';

const OtherRecommendationPage = () => {

    const { id } = useParams()
    console.log(id)
    const navigate = useNavigate()

    const { refetch } = useGetOtherRecommendationQuery('')
    const [createOther, { isLoading, data, error, isError }] = useCreateOtherRecommendationMutation()
    console.log(error, isError, 'error')
    const createOtherHandler = (name: string) => {
        createOther({ name })
        .then((res: any) => {
            res.error ? <> </> : navigate(`${OTHER_RECOMMENDATION_VIEW_PAGE}`)
        })
        // .then(() => refetch())

        // if (!error) {
        //     console.log('error running')
        //     navigate(`${OTHER_RECOMMENDATION_VIEW_PAGE}`)
        // }


    }
    console.log(error, isError, 'errrorrr')


    return (
        <div>

            <OtherRecommendation
                onSubmit={createOtherHandler}
                error={isError}
            />

        </div>

    );
}

export default OtherRecommendationPage;
