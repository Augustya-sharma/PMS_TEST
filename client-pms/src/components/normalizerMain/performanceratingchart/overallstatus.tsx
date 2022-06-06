import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useGetEmployeeQuery } from "../../../service";

export default function OverallStatus() {
  const { data, isLoading } = useGetEmployeeQuery("all");

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const checkAppraisalStatus = (status: string) => {
    return data.data.filter((item: any) => {
      return item.appraisal.status === status;
    }).length;
  };

  const calculatePercentage = (num: number) => {
    return (num * 100) / data.data.length;
  };

  console.log(
    calculatePercentage(checkAppraisalStatus("completed")),
    "checkAppraisalStatus"
  );

  return (
    <div style={{ paddingBottom: "14px" }}>
      <Box
        sx={{
          // flexGrow: 1,
          backgroundColor: "#fdf9f2",
          // padding: 3,
          marginTop: 3,
          // marginBottom: 3,
          width: "98%!important",
          marginLeft: "13px",
        }}
      >
        {/* #fdf9f2 */}
        <Grid container spacing={1.5}>
          <Grid item xs={4.5}>
            <Typography
              component="div"
              paddingLeft="13px"
              fontSize="20px"
              fontFamily="regular"
              color="#333333"
            >
              Overall Status
            </Typography>
            <Typography
              gutterBottom
              component="div"
              align="left"
              marginLeft={6}
              fontSize="14px"
              fontFamily="regular"
              color="#333333"
              style={{ opacity: "64%" }}
            >
              {data.data.length} Employees
            </Typography>
          </Grid>
          <Grid item xs={2.5}>
            <Typography
              gutterBottom
              component="div"
              align="right"
              // fontWeight={500}
              marginBottom={2}
              marginRight={2}
              paddingTop="18px"
            >
              <span
                style={{
                  color: "#00B050",
                  fontSize: "13px",
                  fontFamily: "regular",
                }}
              >
                COMPLETED{" "}
              </span>{" "}
              <span
                style={{
                  paddingLeft: 10,
                  fontSize: "18px",
                  color: "#333333",
                  opacity: "80%",
                }}
              >
                {" "}
                {checkAppraisalStatus("completed")}
              </span>
              <span
                style={{
                  paddingLeft: 15,
                  fontSize: 18,
                  color: "#333333",
                  opacity: "75%",
                }}
              >
                ({calculatePercentage(checkAppraisalStatus("completed"))})%
              </span>
            </Typography>
          </Grid>
          <Grid item xs={2.5}>
            <Typography
              gutterBottom
              component="div"
              align="center"
              height={40}
              // fontWeight={500}
              marginBottom={2}
              marginRight={2}
              borderLeft={1}
              borderColor={"#d4d9d6"}
              paddingTop="18px"
            >
              <span
                style={{
                  color: "#F6C609",
                  fontSize: "13px",
                  fontFamily: "regular",
                }}
              >
                IN PROGRESS
              </span>{" "}
              <span
                style={{
                  paddingLeft: 10,
                  fontSize: "18px",
                  color: "#333333",
                  opacity: "80%",
                }}
              >
                {checkAppraisalStatus("in-progress")}
              </span>
              <span
                style={{
                  paddingLeft: 15,
                  fontSize: 18,
                  color: "#333333",
                  opacity: "75%",
                }}
              >
               ({calculatePercentage(checkAppraisalStatus("in-progress"))})%
              </span>
            </Typography>
          </Grid>
          <Grid item xs={2.5}>
            <Typography
              gutterBottom
              component="div"
              align="center"
              // fontWeight={500}
              marginBottom={2}
              marginRight={2}
              borderLeft={1}
              borderColor={"#d4d9d6"}
              height={40}
              paddingTop="18px"
            >
              <span
                style={{
                  color: "#C00000",
                  fontSize: "13px",
                  fontFamily: "regular",
                }}
              >
                {" "}
                NOT STARTED{" "}
              </span>{" "}
              <span
                style={{
                  paddingLeft: 10,
                  fontSize: "18px",
                  color: "#333333",
                  opacity: "80%",
                }}
              >
                {" "}
                {checkAppraisalStatus("not-started")}
              </span>
              <span
                style={{
                  paddingLeft: 15,
                  fontSize: 18,
                  color: "#333333",
                  opacity: "75%",
                }}
              >
                ({calculatePercentage(checkAppraisalStatus("not-started"))})%
              </span>
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
