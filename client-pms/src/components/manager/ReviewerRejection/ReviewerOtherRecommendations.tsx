import React, { useEffect, useState } from 'react';
import { styled } from "@mui/material/styles";
import { Box } from "@mui/system";
import { TextField } from "@mui/material";
import { useAppraiserRejectsReviewerContext } from '../../../context/AppraiserRejectsReviewer';

const Typo7 = styled("div")({
    marginLeft: "25px",
    // position: "absolute",
    marginTop: '290x',
    color: '#008E97',
    fontSize: '13px',
    opacity: 0.85
});
const Contain = styled("div")({
    marginRight: "20px",
    marginLeft: "25px",
    marginTop: "10px",
  });
const Tf = styled("div")({
    fontSize: "13x",
  
    backgroundColor: "#FFFFFF",
    "& .MuiInputLabel-root": {
      color: "#333333",
      opacity: "0.5",
      fontSize: "13px",
      fontWeight: "400",
      textTransform: "none",
    },
  });

const ReviewerOtherRecommendations = (props: any) => {
    // @ts-ignoreotherRecommendation
    const { reviewerOtherRecommendationComments } = useAppraiserRejectsReviewerContext();
    const [otherComments, setOtherComments] = useState('');
    useEffect(() => {
        setOtherComments(otherComments)
      }, [reviewerOtherRecommendationComments])
    return (
        <div>
            <Typo7>
                <p>Reviewer Other Recommendation(s) Comments</p>
            </Typo7>
            <Contain>
                <Box>
                    <Tf>
                        <TextField fullWidth disabled
                            label='Reviewer Other Recommendation Comments'
                            size='small'
                            name="comments"
                            value={otherComments || ""} />
                    </Tf>
                </Box>
            </Contain>
        </div>
    )
}

export default ReviewerOtherRecommendations;
