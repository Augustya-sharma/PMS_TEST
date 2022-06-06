import React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { Avatar, Box, Container, Typography } from "@mui/material";
import Header from "./components/Header";
import Body from "./components/Body";
import { styled } from "@mui/material/styles";
import Headleft from "./components/Icons/Headleft.svg";
import Greendot from "./components/Icons/Greendot.svg";
import IconButton from "@material-ui/core/IconButton";
import Leftarrow from "../../assets/Images/Leftarrow.svg";
import { Link } from "react-router-dom";

const Profilecontainer = styled("div")({
  paddingTop: "20px",
});
const Bodycontainer = styled("div")({
  marginTop: "5px",
});
const Heading1 = styled("div")({
  fontSize: "24px",
  // fontWeight: 400,
  color: "#004C75",
  marginLeft: "18px",
  marginTop: "20px",
  fontFamily: "regular",
});
const Autosave = styled("div")({
  fontSize: "11px",
  fontWeight: 400,
  color: "#333333",
  marginLeft: "94%",
  marginTop: "30px",
  //opacity: 0.5,
});
const Autosaveicon = styled("div")({
  opacity: 0.5,
  marginLeft: "5px",
});

const CreateAppr = (props: any) => {
  const { ratings, appraisal, mutation, calendarData } = props;
  console.log(appraisal, "appraisal");

  return (
    <div
      style={{
        background: "#F1F1F1",
        // height: "calc(100vh - 65%)",
        height: "52rem",
      }}
    >
      {/* <Heading1>
        <img src={Headleft} alt="icon" /> 
        
        Mid-year Performance Appraisal 
      </Heading1> */}

      <Heading1>
        <Typography
          style={{
            color: "#004C75",
            fontSize: "24px",
          }}
          component="div"
          sx={{ flexGrow: 1 }}
        >
          <span style={{ marginRight: "8px" }}>
            <IconButton>
            <Link to = {`/dashboardreview`}> 
              <img src={Leftarrow} alt="button" />
              </Link>
            </IconButton>
          </span>
         
         <label>Mid-Year Performance Appraisal </label>
        </Typography>
      </Heading1>
      <Container
        sx={{
          background: "#fff",
          maxWidth: "96% !important",
          // height: "calc(100vh - 40px)",
          height: "45rem",
          // marginLeft: "27px",
          // marginRight: "25px",
          marginTop: "10px",
        }}
      >
        <Profilecontainer>
          <Header appraisalData={appraisal} />
        </Profilecontainer>
        <Autosave>
          <Stack direction="row">
            <img src={Greendot} alt="icon" />
            <Autosaveicon> Auto save</Autosaveicon>
          </Stack>
        </Autosave>
        <Box
          sx={{
            marginTop: "0px",
          }}
        >
          <Body
            appraiser1Data={appraisal}
            ratingsData={ratings}
            mutation={mutation}
          />
        </Box>
      </Container>
    </div>
  );
};

export default CreateAppr;
