import * as React from "react";
import { useState, useEffect } from "react";
import { styled } from "@mui/system";
import { TextField } from "@mui/material";
import Blueadd from "../ReviewerRejection/Icons/Blueadd.svg";
import Blueminus from "../ReviewerRejection/Icons/Blueminus.svg";
import Stack from "@mui/material/Stack";
import { Box } from "@mui/system";
import Grid from "@mui/material/Grid";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { IconButton } from "@mui/material";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import RemoveIcon from "@mui/icons-material/Remove";
import { useAppraiserRejectsReviewerContext } from "../../../context/AppraiserRejectsReviewer";

const Contain = styled("div")({
  marginRight: "20px",
  marginLeft: "25px",
  marginTop: "10px",
});
const TrainingRecommendations = styled("div")({
  marginLeft: "25px",
  marginTop: "10px",
  color: "#008E97",
  fontSize: "13px",
  opacity: 0.85,
});

const Tfbox = styled("div")({
  width: "400px",
  backgroundColor: "#FFFFFF",
  "& .MuiInputLabel-root": {
    color: "#333333",
    opacity: "0.5",
    fontSize: "13px",
    fontWeight: "400",
    textTransform: "none",
  },
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


const RTrecommandation = (props: any) => {
  const { training1Data } = props;

  // @ts-ignore
  const { reviewerTrainingRecommendationComments} = useAppraiserRejectsReviewerContext();


  const [trainingComments, setTrainingComments] = useState('')


  useEffect(() => {
    setTrainingComments(trainingComments)
  }, [reviewerTrainingRecommendationComments])


  return (
    <div>
      <TrainingRecommendations>
        Reviewer Training Recommendation(s)
      </TrainingRecommendations>
      <Contain>        
        <Box>
          <Tf>
            <TextField fullWidth disabled
              label='Reviewer Training Recommendation Comments'
              size='small'
              name="comments"
              value={trainingComments || ""}/>
          </Tf>
        </Box>
      </Contain>
    </div>
  );
};

export default RTrecommandation;
