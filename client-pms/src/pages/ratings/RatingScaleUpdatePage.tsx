import React from "react";
import { RatingScaleDescription } from "../../components";
import { useNavigate, useParams } from "react-router-dom";
import { useGetSingleRatingScaleQuery } from "../../service/ratings/ratings";
import { useUpdateRatingScaleMutation } from "../../service/ratings/ratings";
import { useGetRatingsQuery } from "../../service";
import { RATING_SCALE_DESCRIPTION_VIEW_PAGE} from "../../constants/routes/Routing";

const RatingScaleUpdatePage = () => {
  const navigate = useNavigate();

  const {data:ratingdata} = useGetRatingsQuery('')

  
  const { id } = useParams();

  const { data, isLoading } = useGetSingleRatingScaleQuery(id);

  const [updateRatingScale,{isError}] = useUpdateRatingScaleMutation();

  const updateRatingScaleHandler = (
    rating: any,
    rating_scale: any,
    definition: any
  ) => {
    console.log(rating[0].rating,'rating dataaaaaa')
    updateRatingScale({

      rating: rating[0].rating,
      rating_scale: rating[0].rating_scale,
      definition: rating[0].definition,
      id,
    }).then((res: any) => {
          res.error ? <> </> : navigate(RATING_SCALE_DESCRIPTION_VIEW_PAGE)
      })
    // navigate(`${RATING_SCALE_DESCRIPTION_VIEW_PAGE}`);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <RatingScaleDescription
        defaultValue={data}
        onSubmit={updateRatingScaleHandler}
        ratingsData={ratingdata}
        error2 = {isError}
      />
    </div>
  );
};

export default RatingScaleUpdatePage;
