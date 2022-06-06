import React from "react";

import {styled} from "@mui/material/styles";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import {useReviewerContext} from "../../../context/reviewerContextContext";
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
    const {updateMutation, otherRecommendation,otherRecommendationComments ,checkboxIdHandler, checkboxHandler, employee_id, trainingRecommendationComments,trainingRecommendationFormValues, overallFeed, areaImprovement, isLoading, empData} = useReviewerContext()

    // if (isLoading) {
    //   <p>Loading...</p>
    // }
    return (
        // <Footer>
        <Stack justifyContent="center" spacing={3} direction="row">
            <Link to={`/reviewer`}>
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
                            obj: empData.data.appraisal.objective_description,
                            // "reviewer.other_recommendation": checkboxIdHandler(
                            //     checkboxHandler(otherRecommendation)
                            // ),
                            // "reviewer.training_recommendation":
                            // trainingRecommendationFormValues,
                            // "reviewer.feedback_questions": overallFeed,
                            // "reviewer.area_of_improvement": areaImprovement,
                            "reviewer.other_recommendation_comments": otherRecommendationComments,
                            "reviewer.training_recommendation_comments": trainingRecommendationComments,
                            id: employee_id,
                        })
                    }}
                >
                    <Typo1>Save</Typo1>
                </Button>
            </Link>

            <Link to={`/reviewer`}>
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
                            // "reviewer.other_recommendation": checkboxIdHandler(
                            //     checkboxHandler(otherRecommendation)
                            // ),
                            // "reviewer.training_recommendation":
                            // trainingRecommendationFormValues,
                            // "reviewer.feedback_questions": overallFeed,
                            // "reviewer.area_of_improvement": areaImprovement,
                            "reviewerIsChecked": true,
                            "reviewerIsDisabled": true,
                            "reviewer.reviewer_status": 'rejected',
                            "appraiserIsDisabled": false,
                            "appraisal.appraiser_status": "reviewer-rejected",
                            "reviewer.training_recommendation_comments": trainingRecommendationComments,
                            "reviewer.other_recommendation_comments": otherRecommendationComments,
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
                <Link to={`/reviewer`}>
                    Back to Assessment
                </Link>

            </Button>
        </Stack>
        // </Footer>
    );
}

export default Footerbuttons;
