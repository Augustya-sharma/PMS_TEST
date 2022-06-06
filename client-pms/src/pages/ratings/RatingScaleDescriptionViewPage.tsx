import React from "react";
import { useGetRatingScaleQuery } from "../../service";
import RatingScaleDescriptionViewList from "../../components/ratings/ratingScaleDescriptionViewList";
import { useDeleteRatingScaleMutation } from "../../service/ratings/ratings";
import { useNavigate} from "react-router-dom";

const RatingScaleDescriptionViewPage = () => {
  const { data } = useGetRatingScaleQuery("");
  const [deleteRatingScale, {isError}] = useDeleteRatingScaleMutation()

  const deleteRatingScaleHandler = (id:string) => {
    deleteRatingScale (
      id
    )
  }

  let navigate = useNavigate();
  const updateRatingScaleHandler = (id:string) => {
   
    navigate(`/ratingScaleDescription/${id}`);
      
    
  }

  

  return (
    <div>
      <RatingScaleDescriptionViewList
        ratingScaleData={data}
        onDelete = {deleteRatingScaleHandler} 
        onUpdate = {updateRatingScaleHandler}
        error = {isError}
      />
    </div>
  );
};

export default RatingScaleDescriptionViewPage;
