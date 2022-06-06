import { RatingScaleDescription } from "../../components"
import { useCreateRatingScaleMutation } from "../../service/ratings/ratings"
import { useGetRatingsQuery } from "../../service"
import { useNavigate} from "react-router-dom";
import { RATING_SCALE_DESCRIPTION_VIEW_PAGE } from "../../constants/routes/Routing";

const RatingScaleDescriptionPage = () => {
    
    const [createRatingScale, { isLoading, data, error, isError }] = useCreateRatingScaleMutation()
    const {data:ratingdata} = useGetRatingsQuery('')


    console.log(error, 'error message')
    let navigate = useNavigate();
    const createRatingScaleHandler = (rating: string, rating_scale: string, definition: string) => {
        console.log('clicked')
        createRatingScale(rating)
        .then((res: any) => {
          res.error ? <> </> : navigate(RATING_SCALE_DESCRIPTION_VIEW_PAGE)
      })
    }
     
  return (
    <div><RatingScaleDescription   ratingsData={ratingdata} onSubmit={createRatingScaleHandler} error1= {isError}/></div>
  )
}


export default RatingScaleDescriptionPage
