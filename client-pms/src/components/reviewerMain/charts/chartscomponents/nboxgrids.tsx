import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/material";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import excel from "../excelresize.jpg";
import NestedGrid from "../boxgrid";
import Newexcel from "../../Reviewericons/Newexcel.svg";
import Expand from "../../Reviewericons/Expand.svg";

export default function NBoxGrids() {
  return (
    <div>
      <Container sx={{ bgcolor: "#fff",position:"relative",paddingBottom:"12px" }}>
        <Grid container spacing={5} columns={16} sx={{ marginTop: 2 }}>
          <Grid item xs={10}>
            <Typography
              fontSize="20px"
              fontFamily="regular"
              gutterBottom
              component="div"
              sx={{ textAlign: "start", marginright: "-5" }}
            >
              9-Box Grid
            </Typography>
          </Grid>

          <Grid item xs={6} sx={{ display: "flex", justifyContent: "end" }}>
            <img
              src={Newexcel}
              style={{ paddingLeft: 15, width: "50px", height: "20px" }}
            />
            <img src={Expand} 
            style={{ paddingLeft: 10, width: "50px", height: "20px" }}
            />
          </Grid>
        </Grid>
        <div style={{paddingLeft:"53px"}}>
          <NestedGrid />
        </div>
      </Container>
    </div>
  );
}
