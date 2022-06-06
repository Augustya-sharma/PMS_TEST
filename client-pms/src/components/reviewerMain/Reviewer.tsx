import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Timeline1 from "../reviewerMain/Timeline";
import PerformanceRatingreview from "../reviewerMain/performanceratingchart/performanceratingreview";
import Teamreview from "../reviewerMain/teamtablereview/teamreview";
import Curveandgrid from "../reviewerMain/charts/curveandgrid";

function ReviewerMain() {
  return (
    <>
   <Box style={{background:"#F1F1F1",height:"122rem"}}>
      <div style={{ display: "flex", alignItems: "center", }}>
        <Typography
          sx={{ marginLeft: "26Px", marginTop: "30px" }}
          gutterBottom
          component="div"
          color="#004C75"
          fontSize="22px"
          fontFamily="regular"
        >
          Dashboard
        </Typography>
        <Typography
          sx={{
            marginTop: "28px",
            paddingLeft: "19px",
            color: "#52C8F8",
            fontSize: "13px",
            fontFamily: "regular",
          }}
        >
          <u>View Previous PA</u>
        </Typography>
      </div>
      <div>
        <Timeline1/>
      </div>
      <div>
        <PerformanceRatingreview />
      </div>

      <div style={{marginTop:"25px"}}>
        <Teamreview />
      </div>

      <Curveandgrid />
      </Box>
    </>
   
  );
}

export default ReviewerMain;
