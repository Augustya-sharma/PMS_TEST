import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Timelinereview from "./Timelinerevview";
import PerformanceRatingreview from "../../reviewer/Dashboard/performanceratingchart/performanceratingreview";
import Teamreview from "../../reviewer/Dashboard/teamtablereview/teamreview";
import Curveandgrid from "./charts/curveandgrid";
import Snackbar from '@mui/material/Snackbar';
import {useState, createContext, useContext, useEffect} from "react";
import AppraiserDashboardContext from "./AppraiserDashboardContext";


function Dashboardreview() {
  const [statusSort, setstatusSort] = useState<any>('')
  return (
    <>
    <Snackbar
        // open={open}
        autoHideDuration={6000}
        // onClose={handleClose}
        message="Note archived"
        // action={action}
      />
   <div style={{background:"#F1F1F1",height:"2010px"}}>
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
      <AppraiserDashboardContext  >
      <div>
        <Timelinereview />
      </div>
      <div>
        <PerformanceRatingreview  setstatusSort={ setstatusSort} />
      </div>

      <div style={{marginTop:"25px"}}>
        <Teamreview statusSort={statusSort} />
      </div>

      <Curveandgrid />
      </AppraiserDashboardContext>
      </div>
      
    </>
   
  );
}

export default Dashboardreview;
