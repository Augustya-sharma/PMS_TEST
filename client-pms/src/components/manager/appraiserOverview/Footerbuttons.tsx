import React from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { CREATE_APPRAISAL, DASHBOARDM } from "../../../constants/routes/Routing";
import { useAppraisalContext } from "../../../context/appraiserOverviewContext";
import { Alert } from "@mui/material";


const Typo1 = styled("div")({
  // fontSize: '16px',
  // fontWeight: 400
  paddingRight: "5px",
});

function Footerbuttons() {
  // @ts-ignore
  const { updateMutation, otherRecommendation, employee_id,checkboxIdHandler, checkboxHandler, trainingRecommendation, trainingRecommendationFormValues, performanceImprovement, performanceSpecific, overallFeed, errorHandler, areaImprovement, handleClick
  } = useAppraisalContext();
  // const {employee_id} = useParams()
  const [emptyAlert, setEmptyAlert] = useState<any>("")
  const [emptyAlert1, setEmptyAlert1] = useState<any>(false)
  console.log(updateMutation, "````11111`````2222222````");
  
  console.log(areaImprovement, 'tttttttttttt')

  return (
    <>
    <Stack justifyContent="center" spacing={3} direction="row">
      {/* <Link to={`/dashboardreview`}> */}
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
              "appraisal.other_recommendation": checkboxIdHandler(
                checkboxHandler(otherRecommendation)
              ),
              "appraisal.training_recommendation":
                trainingRecommendationFormValues,
              "appraisal.feedback_questions": overallFeed,
              "appraisal.area_of_improvement": areaImprovement,
                "appraisal.appraiser_status": 'draft',
              id: employee_id,
            });
            errorHandler();
            handleClick();
          }}
        >
          <Typo1>Save</Typo1>
        </Button>
      {/* </Link> */}


      <Link to={`/dashboardreview`}>
        <Button
          variant="outlined"
          onClick={() => {
           
            updateMutation({
              "appraisal.other_recommendation": checkboxIdHandler(
                checkboxHandler(otherRecommendation)
              ),
              "appraisal.training_recommendation":
                trainingRecommendationFormValues,
              "appraisal.feedback_questions": overallFeed,
              "appraisal.area_of_improvement": areaImprovement,
                "appraisal.appraiser_status": 'submited',
                "reviewerIsDisabled": false,

              id: employee_id,
            });
            errorHandler();
          }}
          style={{
            color: "#008E97",
            fontSize: "16px",
            border: "1px solid #008E97",
            fontWeight: 400,
            textTransform: "none",
            borderRadius: "7px",
          }}
        >
          Save and Submit
        </Button>
      </Link>
      <Link to={`${CREATE_APPRAISAL}/employee/${employee_id}`}>
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
          Back to Assessment
        </Button>
      </Link>
    </Stack>
    </>
  );
}

export default Footerbuttons;
