import React from "react";
import { styled } from "@mui/material/styles";
import Tabcontents from "./ObjectivesTabs";
import Performancefeedbacksummary from "./Performancefeedbacksummary";
import RTrecommandation from "./TrainingRecommendation";
import Checkboxs from "./OtherRecommendation";
import Footerbuttons from "./Footerbuttons";
import { Link } from "react-router-dom";
import { useNavigate, useParams } from "react-router-dom";
import { useAppraisalContext } from "../../../context/appraiserOverviewContext";
import {
  CREATE_APPRAISAL,
  REVIEWER_PAGE,
} from "./../../../constants/routes/Routing";
import Divider from "@mui/material/Divider";
import Timeline1 from "./Timeline1";
import Header from "./Header";
import { positions } from "@mui/system";
import Headleft from "../../appraisal/components/Icons/Headleft.svg";
import { IconButton } from "@mui/material";
import Stack from "@mui/material/Stack";

const Container1 = styled("div")({
  background: "#fff",
  // width: "96%",
  marginLeft: "25px",
  marginRight: "25px",
  marginTop: "20px",
  textTransform: "none",
});
const Container3 = styled("div")({
  background: "#fff",
  // width: "96%",
  marginLeft: "25px",
  marginRight: "25px",
  // marginTop: "20px",
  textTransform: "none",
  position: "relative",
});
const Container2 = styled("div")({
  background: "rgb(0 142 151/0.05)",
  width: "100%",
  marginTop: "15px",
});
const Footer = styled("div")({
  // marginLeft: "450px",
  marginTop: "120px",
  paddingBottom: "45px",
});
const Divide = styled("div")({
  marginTop: "-21px",
  marginLeft: "24px",
  marginRight: "24px",
  paddingbottom: "35px",
});

const Heading1 = styled("div")({
  fontSize: "24px",
  fontWeight: 400,
  color: "#004C75",
  marginLeft: "20px",
  marginTop: "20px",
  fontFamily: "regular",
});

const AppraiserOverview = (props: any) => {
  const { employee1Data, training1Data, other1Data, mutation, calendarData } =
    props;
  console.log(employee1Data, "11111");
  const { employee_id } = useParams();

  const appraisal = useAppraisalContext();

  console.log(appraisal, "appraisal from overrrrrr```````````");

  return (
    <div style={{ backgroundColor: "#F1F1F1", height: "auto" }}>
      <Heading1>
        <Stack
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
          spacing={0}
        >
          <IconButton>
            <Link
              to={`${CREATE_APPRAISAL}/employee/${employee_id}`}
              // onClick={() => startAppraisal(j._id)}
            >
              <img src={Headleft} alt="icon" />
            </Link>
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
      <Container3>
        <Timeline1 calendarData={calendarData} />
      </Container3>

      <Container1>
        <div style={{ paddingTop: "20px" }}>
          <Header appraisalData={employee1Data} />
        </div>
        <div style={{ paddingTop: "10px" }}>
          <Tabcontents employeeData={employee1Data} />
        </div>
        <Divide>
          <Divider />
        </Divide>

        <Container2>
          <Performancefeedbacksummary />
          <RTrecommandation training2Data={training1Data} />
          <Checkboxs other2Data={other1Data} />
          <Footer>
            <Footerbuttons />
          </Footer>
        </Container2>
      </Container1>
    </div>
  );
};

export default AppraiserOverview;
