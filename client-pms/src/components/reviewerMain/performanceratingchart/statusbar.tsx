import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import CircuarProgressbar from "./circularprogressbar";
import Typography from "@mui/material/Typography";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import BarChartUsing from "./barchart";

function StatusBar() {
  return (
    <div>
      <Container sx={{ marginTop: 3 }} maxWidth="xl">
        <Box sx={{ flexGrow: 1, bgcolor: "#fff" }}>
          <Grid container spacing={1}>
            <Grid item xs={9}>
              <BarChartUsing />
            </Grid>
            <Grid item xs={2} sx={{ borderLeft: 1, borderColor: "#d4d9d6" }}>
              <Typography
                gutterBottom
                component="div"
                align="center"
                // fontWeight={500}
                marginBottom={2}
                marginRight={2}
                fontSize="14px"
                fontFamily="regular"
              >
                Rejected Appraisal
              </Typography>
              <Typography
                gutterBottom
                component="div"
                align="center"
                // fontWeight={400}
                // marginRight={2}
                color="#00B050"
                fontFamily="regular"
                fontSize="12px"
              >


                Completed <FiberManualRecordIcon style={{ height:"12px" }} /> |

                20
              </Typography>
              <Typography
                gutterBottom
                component="div"
                align="center"
                // fontWeight={400}
                // marginRight={2}
                color="#F6C609"
                fontFamily="regular"
                fontSize="12px"
              >


                In Progress <FiberManualRecordIcon style={{ height:"12px" }} />{" "}

                | 20
              </Typography>
            </Grid>
            <Grid item xs={1}>
              <CircuarProgressbar />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
}
export default StatusBar;
