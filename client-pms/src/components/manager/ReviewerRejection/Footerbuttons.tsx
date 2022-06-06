import React from "react";

import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { useAppraiserRejectsReviewerContext } from "../../../context/AppraiserRejectsReviewer";
import { Link } from "react-router-dom";
import { useAppraiserAcceptReviewerMutation } from "../../../service/employee/appraisal/appraisal";

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
    const { updateMutation, trainingRecommendationComments, otherRecommendation, otherRecommendationComments, checkboxIdHandler, checkboxHandler, employee_id, trainingRecommendationFormValues, overallFeed, areaImprovement, isLoading, empData } = useAppraiserRejectsReviewerContext()


    const [appraiserAcceptReviewer] = useAppraiserAcceptReviewerMutation()
    // if (isLoading) {
    //   <p>Loading...</p>
    // }
    return (
        // <Footer>
        <Stack justifyContent="center" spacing={3} direction="row">
            <>
                {/*<Link to={`/dashboardreview`}>*/}
                <>
                    <Button
                        variant="contained"
                        style={{
                            backgroundColor: "#008E97",
                            fontSize: "16px",
                            fontWeight: 400,
                            textTransform: "none",
                            borderRadius: "7px",
                        }}
                        onClick={() => appraiserAcceptReviewer(employee_id)}

                    >
                        <Typo1>Accept</Typo1>
                    </Button>
                </>


                {/*</Link>*/}
                <Link to={`/dashboardreview`}>
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
                                "appraisal.other_recommendation": checkboxIdHandler(
                                    checkboxHandler(otherRecommendation)
                                ),
                                "appraisal.training_recommendation":
                                    trainingRecommendationFormValues,
                                "appraisal.training_recommendation_comments":
                                    trainingRecommendationComments,
                                "appraisal.other_recommendation_comments": otherRecommendationComments,
                                "appraisal.feedback_questions": overallFeed,
                                "appraisal.area_of_improvement": areaImprovement,
                                id: employee_id,
                            })
                        }}
                    >
                        <Typo1>Save</Typo1>
                    </Button>
                </Link>



                <Link to={`/dashboardreview`}>
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
                                "appraisal.other_recommendation": checkboxIdHandler(
                                    checkboxHandler(otherRecommendation)
                                ),
                                "appraisal.training_recommendation":
                                    trainingRecommendationFormValues,
                                "appraisal.training_recommendation_comments":
                                    trainingRecommendationComments,
                                "appraisal.other_recommendation_comments": otherRecommendationComments,
                                "appraisal.feedback_questions": overallFeed,
                                "appraisal.area_of_improvement": areaImprovement,
                                "reviewerIsChecked": false,
                                "reviewerIsDisabled": false,
                                "reviewer.reviewer_status": 'appraiser-rejected',
                                "appraiserIsDisabled": false,
                                "appraiser_status": "reviewer-rejected",
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
            </>
        </Stack>
        // </Footer>

    );
}

export default Footerbuttons;
