import { AccountCircle } from "@mui/icons-material";
import { Box, Container, Grid, IconButton } from "@mui/material";
import { styled } from "@mui/material/styles";
import React from "react";
import Logo from "../../../../assets/Images/Logo.svg";
import Header from "./header";
import ObjectiveType from "./ObjectiveType";
import OtherRecommendation from "./OtherRecommendation";
import TrainingRecommendation from "./TrainingRecommendation";

const Item = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Page = styled("div")(({ theme }) => ({
  color: "#a7a9aa",
}));

const Root = styled("div")(
  ({ theme }) => `
    table {
      font-family: IBM Plex Sans, sans-serif;
      font-size: 0.875rem;
      border-collapse: collapse;
      width: 100%;
    }
  
    td,
    th {
      border: 1px solid #e0e0e0;
      text-align: left;
      padding: 6px;
    }
  
    th {
     
    }
    `
);
const PageTable = styled("div")(
  ({ theme }) => `
    table {
      font-family: IBM Plex Sans, sans-serif;
      font-size: 0.875rem;
      border-collapse: collapse;
      width: 100%;
      color: "#a7a9aa"
    }
  
    td,
    th {
      border: 1px solid #e0e0e0;
      text-align: left;
      padding: 6px;
      color: "#a7a9aa"
    }
  
    th {
      background-color: #f2f6f8;
      color: "#a7a9aa"
    }
    `
);

const MidyearPAreport = (props: any) => {
  const { paData } = props;
  console.log(paData, "PA   DATA");

  return (
    <React.Fragment>
        <div style={{backgroundColor:"#F1F1F1",height:"1500px"}}>
      <Container
        sx={{
          maxWidth: "96.5% !important",
          background: "#fff",
          height: "calc(100vh - -1050px)",
          marginBottom: "40px",
        }}
      >
        <Header headerData={paData} />

        <ObjectiveType objDescData={paData} />

        {/*<Header headerData = {paData} />*/}
        <Page>
          <h4>Training Recommendation(s)</h4>
        </Page>
        <PageTable>
          <TrainingRecommendation trainingData={paData} />
        </PageTable>

        <Page>
          <OtherRecommendation otherData={paData} />
        </Page>
      </Container>
      </div>
      
    </React.Fragment>
  );
};

export default MidyearPAreport;
