import * as React from "react";
import { styled } from "@mui/material/styles";
import HeaderTabs from "../ReviewerRejection//HeaderTabs";
import Table2 from "../ReviewerRejection//Table2";
import RTrecommandation from "../ReviewerRejection//RTrecommandation";
import Checkboxs from "../ReviewerRejection//Checkboxs";
import Footerbuttons from "../ReviewerRejection/Footerbuttons";
import Performancefeedbacksummary from "../ReviewerRejection//Performancefeedbacksummary";
import ReviewerOtherRecommendations from "../ReviewerRejection//ReviewerOtherRecommendations";
import { Navcancelbuttons } from "./Navcancelbuttons";
import Stack from "@mui/material/Stack";
import Headleft from "../ReviewerRejection/Icons/Headleft.svg";
import { IconButton } from "@mui/material";
import  Header from"../ReviewerRejection/Header";
import ReviewerRating from "./Rating/ReviewerRating";
import ATRecommendation from "./ATRecommendation";

const Container1 = styled("div")({
  // position: "relative",
  background: "#fff",
  // width: "96%",
  // height: "1907px",
  marginLeft: "25px",
  marginRight: "25px",
  marginTop: "10px",
  textTransform: "none",
});
const Container2 = styled("div")({
  // marginLeft: "25px",
  // marginRight:"25px",
  background: "#F2F9FA",
  // width: "100%",
  //height: "1280px",
  // marginLeft: "25px",
  marginTop: "0px",
});

const Footer = styled("div")({
  // marginLeft: "450px",
  paddingTop: "200px",
  paddingBottom: "45px",
});
const Heading1 = styled("div")({
  fontSize: "24px",
  fontWeight: 400,
  color: "#004C75",
  marginLeft: "20px",
  marginTop: "20px",
  fontFamily: "regular",
});
const Rejection = (props: any) => {
  const { employeeData, trainingData, ratingData, otherData } = props;
  console.log(employeeData, "empdata");
  // console.log(employeeData.data.reviewer.reviewer_rejected_value.filter((j:any) => j.value === "rating")[0].isChecked,'employeeData')

  const checkIfRejected = (value: string) => {
    if (employeeData !== undefined) {
      return employeeData.data.reviewer.reviewer_rejected_value.filter(
        (j: any) => j.value === value
      )[0].isChecked;
    }
  };

  return (
    <div style={{ backgroundColor: "#F1F1F1" }}>
      <Heading1>
        <Stack
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
          spacing={0}
        >
          <IconButton>
            <img src={Headleft} alt="icon" />
          </IconButton>

          <p style={{ paddingLeft: "10px" }}> Mid-Year Performance Appraisal</p>

          <p style={{ paddingLeft: "25px" }}>
            <img
              src={Headleft}
              alt="icon"
              height="12px"
              style={{ transform: "rotateZ(-180deg)" }}
            />
            <label
              style={{
                fontSize: "18px",
                color: "#004C75",
                opacity: "80%",
                paddingLeft: "15px",
              }}
            >
              Overview
            </label>
          </p>
        </Stack>
      </Heading1>
      <Container1>

         {/* <Header/> */}

        {employeeData && checkIfRejected("rating") && (
          // <HeaderTabs employee1Data={employeeData} rating1Data={ratingData} />
            <ReviewerRating/>
        )}

        {/* {employeeData && checkIfRejected('rating') &&<Navcancelbuttons/>} */}

        <Container2>
          <Performancefeedbacksummary employeeData={employeeData} />

          
          {/*{employeeData && checkIfRejected("training_recommendation(s)") && (*/}
          {/*  <Table2 />*/}
          {/*)}*/}
          {employeeData && checkIfRejected("training_recommendation(s)") && (
            <RTrecommandation training1Data={trainingData} />
          )}
          
          {employeeData && checkIfRejected("training_recommendation(s)") && (
            <ATRecommendation training1Data={trainingData} />
          )}
          {employeeData && checkIfRejected("training_recommendation(s)") && (
            <ReviewerOtherRecommendations />
          )}
          {employeeData && checkIfRejected("other_recommendation(s)") && (
            <Checkboxs other1Data={otherData} />
          )}

          <Footer>
            <Footerbuttons />
          </Footer>
        </Container2>
      </Container1>
    </div>
  );
};

export default Rejection;
