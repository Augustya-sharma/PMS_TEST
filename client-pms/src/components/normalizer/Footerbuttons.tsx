import React from "react";

import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { useReviewerContext } from "../../context/reviewerContextContext";
import { useNormalizerContext } from "../../context/normalizerContext";
import {Link} from "react-router-dom";

const Typo1 = styled("div")({
  // fontSize: '16px',
  // fontWeight: 400
  paddingRight: "5px",
});
const Footer = styled("div")({
  marginLeft: "450px",
  marginTop: "120px",
  paddingBottom: "45px",
  display: "flex",
  justifyContent: "center",
});

const Footerbuttons = (props: any) => {
  //@ts-ignore
  const {updateMutation, otherRecommendation, otherRecommendationComments,checkboxIdHandler, checkboxHandler, employee_id, trainingRecommendationFormValues, overallFeed,areaImprovement, trainingRecommendationComments,isLoading} = useNormalizerContext()

  // if (isLoading) {
  //   <p>Loading...</p>
  // }
  return (
    // <Footer>normalizer
    <Stack justifyContent="center" spacing={3} direction="row">
        <Link to={`/normalizer`}>
      <Button
        variant="contained"
        style={{
          backgroundColor: "#008E97",
          fontSize: "16px",
          fontWeight: 400,
          textTransform: "none",
          borderRadius: "7px",
        }}
        onClick={() => {
          updateMutation({
            "normalizer.other_recommendation": checkboxIdHandler(
              checkboxHandler(otherRecommendation)
            ),
            "normalizer.training_recommendation":
              trainingRecommendationFormValues,
              "normalizer.training_recommendation_comments" : trainingRecommendationComments,
              "normalizer.other_recommendation_comments" : otherRecommendationComments,
              "normalizer.feedback_questions": overallFeed,
              "normalizer.area_of_improvement": areaImprovement,
            id: employee_id,
          })
        }}
      >
        <Typo1>Save</Typo1>
      </Button>
        </Link>

        <Link to={`/normalizer`}>
      <Button
        variant="outlined"
        style={{
          color: "#008E97",
          fontSize: "16px",
          border: "1px solid ##008E97",
          fontWeight: 400,
          textTransform: "none",
          borderRadius: "7px",
        }}
        onClick={() => {
          updateMutation({
            "normalizer.other_recommendation": checkboxIdHandler(
              checkboxHandler(otherRecommendation)
            ),
            "normalizer.training_recommendation":
              trainingRecommendationFormValues,
              "normalizer.training_recommendation_comments" : trainingRecommendationComments,
              "normalizer.other_recommendation_comments" : otherRecommendationComments,
              "normalizer.feedback_questions": overallFeed,
              "normalizer.area_of_improvement": areaImprovement,
              "normalizerIsChecked": true,
              "normalizerIsDisabled": true,
              "normalizer.normalizer_status": 'rejected',
              "appraisal.appraiser_status": "normalizer-rejected",

            id: employee_id,
          })
        }}
      >
        Save and Submit
      </Button>
        </Link>


      <Button
        variant="text"
        style={{
          color: "#008E97",
          fontSize: "16px",
          fontWeight: 400,
          textTransform: "none",
          borderRadius: "7px",
        }}
      >
          <Link to={`/normalizer`}>
        Back to Assessment
          </Link>
      </Button>
    </Stack>
    // </Footer>
  );
}

export default Footerbuttons;
