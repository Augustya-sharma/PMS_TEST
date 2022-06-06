/* eslint-disable */
import React from 'react';
import {
    useCreateOtherRecommendationMutation,
    useGetOtherRecommendationQuery,
    useGetSingleOtherRecommendationQuery
} from '../../service';
import {useDeleteOtherRecommendationMutation} from '../../service';
import {useEditOtherRecommendationMutation} from '../../service';
import {useNavigate, useParams} from "react-router-dom";
import {OtherRecommendation} from "../../components";
import { OTHER_RECOMMENDATION_VIEW_PAGE } from '../../constants/routes/Routing';

const OtherRecommendationEditPage = () => {
    const navigate = useNavigate()

    const {id} = useParams()
    console.log(id)


    const {refetch} = useGetOtherRecommendationQuery('')
    // const [createOther, {isLoading, data, error}] = useCreateOtherRecommendationMutation()
    const {data, isLoading} = useGetSingleOtherRecommendationQuery(id)
    const [editOther, {isLoading: editLoading, data: editData, error: editError, isError}] = useEditOtherRecommendationMutation()

    const editOtherHandler = (name: string) => {
        console.log('Clicked', name)

        editOther(
            {name, id}
        )
        .then((res: any) => {
            res.error ? <> </> : navigate(`${OTHER_RECOMMENDATION_VIEW_PAGE}`)
        })
        // .then(() => refetch())
        // if (editData && isError === false) {
        //     navigate(`${OTHER_RECOMMENDATION_VIEW_PAGE}`)
        // }
    
    }
    console.log(data)

    if (isLoading) {
        return <div>Loading...</div>
    }

    return (
        <div>

        

           

            <OtherRecommendation
                onSubmit={editOtherHandler}
                defaultValue={data}
                error1 = {isError}/>
        </div>

    );
};

export default OtherRecommendationEditPage;
