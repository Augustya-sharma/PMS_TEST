import * as React from "react";
import { styled } from "@mui/material/styles";
import HeaderTabs from "./HeaderTabs";
import Table2 from "./Table2";
import RTrecommandation from "./RTrecommandation";
import Checkboxs from "./Checkboxs";
import Footerbuttons from "./Footerbuttons";
import Performancefeedbacksummary from "./Performancefeedbacksummary";
import AppraiserOtherRecommendations from "./AppraiserOtherRecommendations";
import { Navcancelbuttons } from "./Navcancelbuttons";
import ROtherRecommandation from "./ROtherRecommandation";
import ReviewerRating from "./Rating/ReviewerRating";

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
const Reviewer = (props: any) => {
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
      <Container1>
        {employeeData && checkIfRejected("rating") && (
          // <HeaderTabs employee1Data={employeeData} rating1Data={ratingData} />
            <ReviewerRating/>

        )}

        {/* {employeeData && checkIfRejected('rating') &&<Navcancelbuttons/>} */}

        <Container2>
          <Performancefeedbacksummary employeeData={employeeData} />


          {employeeData && checkIfRejected("training_recommendation(s)") && (
            <Table2 />
          )}
          {employeeData && checkIfRejected("training_recommendation(s)") && (
            <RTrecommandation training1Data={trainingData} />
          )}

          {employeeData && checkIfRejected("other_recommendation(s)") && (
            <AppraiserOtherRecommendations />
          )}

          {employeeData && checkIfRejected("other_recommendation(s)") && (
            <ROtherRecommandation />
          )}

          {/*{employeeData && checkIfRejected("other_recommendation(s)") && (*/}
          {/*  <Checkboxs other1Data={otherData} />*/}
          {/*)}*/}

          <Footer>
            <Footerbuttons />
          </Footer>
        </Container2>
      </Container1>
    </div>
  );
};

export default Reviewer;
