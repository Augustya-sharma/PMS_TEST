import React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Container, Stack } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import excel from "../excelresize.jpg";
import TrailChart from "../trailchart";
import ChartTable from "../charttable";
import { Link } from "react-router-dom";
import Newexcel from "../../Reviewericons/Newexcel.svg";
import Expand from "../../Reviewericons/Expand.svg";

export default function ChartTabs() {
  return (
    <>
      {" "}
      <Container
        sx={{ bgcolor: "#fff", paddingBottom: "88px", marginTop: "56px" }}
      >
        <Grid
          container
          spacing={5}
          style={{ justifyContent: "space-between" }}
          // columns={16}
          // sx={{ marginLeft: "-1", marginTop: 2,marginBottom:"24px",}}
        >
          <Grid item xs={4}>
            <Typography
              gutterBottom
              component="div"
              sx={{
                textAlign: "left",
                fontSize: "20px",
                fontFamily: "regular",
              }}
            >
              Bell Curve
            </Typography>
          </Grid>
          {/* <Grid item xs={6}>
                <Typography
                  gutterBottom
                  component="div"
                  sx={{ fontSize: 16, textAlign: "center" }}
                >
                  Comparison
                </Typography>
              </Grid> */}
          <Stack
            direction="row"
            // justifyContent="space-between"
            alignItems="center"
            spacing={1}
            // marginLeft="414px"
          >
            <div>
              <Grid item xs={2}>
                <FormControl
                  variant="standard"
                  sx={{ minWidth: 80, paddingTop: "20px" }}
                >
                  <Select sx={{ border: "none" }} defaultValue={30} label="Age">
                    <MenuItem value={10}>All Sub Sections</MenuItem>
                    <MenuItem value={20}>Mid-Year</MenuItem>
                    <MenuItem value={30}>2021</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </div>
            <div style={{ paddingTop: "30px" }}>
              <Grid>
                <img
                  src={Newexcel}
                  style={{
                    width: "50px",
                    height: "20px",
                    // paddingTop: "44px",
                    // paddingLeft: "297px",
                  }}
                />
                <img src={Expand} style={{ width: "50px", height: "20px" }} />
              </Grid>
            </div>
          </Stack>
        </Grid>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            width: "100%",
            justifyContent: "center",
          }}
        >
          <TrailChart />
        </div>
        <ChartTable />
      </Container>
    </>
  );
}
