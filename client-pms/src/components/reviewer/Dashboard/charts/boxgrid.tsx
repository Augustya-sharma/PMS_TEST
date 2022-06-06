import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Container, Stack } from "@mui/material";
import { Rotate90DegreesCcw } from "@mui/icons-material";
import Verticalnewarrow from "../Reviewericons/Verticalnewarrow.svg";
import Triangle from "../Reviewericons/Triangle.svg";
import Triangle2 from "../Reviewericons/Triangle2.svg";
import Horizontalarrow from "../Reviewericons/Horizontalarrow.svg";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(0),
  textAlign: "center",

  color: theme.palette.text.secondary,
}));

const Text = styled("div")({
  position: "absolute",
  transform: "rotate(270deg)",
  top: "23%",
  fontSize: "12px",
  color: "#33333",
  opacity: "75%",
  fontFamily: "regular",
});

const Text1 = styled("div")({
  position: "absolute",
  transform: "rotate(270deg)",
  top: "48%",
  fontSize: "12px",
  color: "#33333",
  opacity: "75%",
  right: "82.5%",
  fontFamily: "regular",
});

const Text2 = styled("div")({
  position: "absolute",
  transform: "rotate(270deg)",
  top: "70%",
  fontSize: "12px",
  color: "#33333",
  opacity: "75%",
  // right: "97%",
  fontFamily: "regular",
});

const Text3 = styled("div")({
  position: "absolute",
  transform: "rotate(270deg)",
  top: "48%",
  fontSize: "12px",
  color: "#33333",
  right: "91%",
  fontFamily: "regular",
});

const Para = styled("div")({
  // paddingLeft: "178px",
  display: "flex",
  justifyContent: "center",
  // paddingRight: "60px",
  position: "absolute",
  left: "50%",
  fontSize: "12px",
  color: "#33333",
  fontFamily: "regular",
});
const Texthori = styled("div")({
  position: "absolute",
  // paddingLeft: "83px",
  fontSize: "12px",
  color: "#33333",
  opacity: "75%",
  fontFamily: "regular",
  top: "81%",
  left: "28%",
});

const Texthori1 = styled("div")({
  position: "absolute",
  // paddingLeft: "243px",
  fontSize: "12px",
  color: "#33333",
  opacity: "75%",
  fontFamily: "regular",
  top: "81%",
  left: "52%",
});

const Texthori2 = styled("div")({
  position: "absolute",
  // paddingLeft: "425px",
  fontSize: "12px",
  color: "#33333",
  opacity: "75%",
  fontFamily: "regular",
  top: "81%",
  left: "79%",
});

export default function FormRow() {
  return (
    <React.Fragment>
      <Text>
        <p>High</p>
      </Text>
      <Texthori>
        <p>Low</p>
      </Texthori>
      <Stack direction="row" justifyContent="center" alignItems="center">
        {/* <Grid item xs={4}  sx={{ width: "40px" }}> */}
        <Container sx={{ marginLeft: "10px", width: "40%" }}>
          <Typography
            textAlign={"center"}
            gutterBottom
            component="div"
            justifyContent="center"
            sx={{
              display: "flex",
              bgcolor: "#C00000",
              fontSize: "10px",
              fontfamily: "regular",
              color: "#fff",
              alignItems: "center",
              height: "34px",
            }}
          >
            POTENTIAL TALENTS
          </Typography>
          <Typography
            variant="h5"
            gutterBottom
            component="div"
            sx={{
              bgcolor: "#FDF2EF",
              marginTop: -1,
              padding: 5,
              textAlign: "center",
            }}
          >
            20
          </Typography>
        </Container>
        {/* </Grid> */}
        {/* <Grid item xs={4}> */}
        <Container sx={{ marginLeft: "-40px", width: "40%" }}>
          <Typography
            textAlign={"center"}
            gutterBottom
            component="div"
            justifyContent="center"
            sx={{
              display: "flex",
              bgcolor: "#00B0F0",
              fontSize: "10px",
              fontfamily: "regular",
              color: "#fff",
              alignItems: "center",
              height: "34px",
            }}
          >
            SOLID TALENTS
          </Typography>
          <Typography
            variant="h5"
            gutterBottom
            component="div"
            sx={{
              bgcolor: "#EDF9FE",
              marginTop: -1,
              padding: 5,
              textAlign: "center",
            }}
          >
            120
          </Typography>
        </Container>
        {/* </Grid> */}
        {/* <Grid item xs={4}> */}
        <Container sx={{ marginLeft: "-40px", width: "40%" }}>
          <Typography
            textAlign={"center"}
            gutterBottom
            component="div"
            justifyContent="center"
            sx={{
              display: "flex",
              bgcolor: "#00B0F0 ",
              fontSize: "10px",
              fontfamily: "regular",
              color: "#fff",
              alignItems: "center",
              height: "34px",
            }}
          >
            STARS
            <br />
            (A FUTURE LEADER)
          </Typography>
          <Typography
            variant="h5"
            gutterBottom
            component="div"
            textAlign={"center"}
            sx={{ bgcolor: "#EDF9FE", marginTop: -1, padding: 5 }}
          >
            5
          </Typography>
        </Container>
        {/* </Grid> */}
      </Stack>

      {/* 2nd Box */}
      <Text1>
        <p>Moderate</p>
      </Text1>
      <Texthori1>
        <p>Medium</p>
      </Texthori1>
      <Text3>
        <p>Potential</p>
      </Text3>

      <Stack direction="row" justifyContent="center" alignItems="center">
        {/* <Grid item xs={4}  sx={{ width: "40px" }}> */}
        <Container sx={{ marginLeft: "10px", width: "40%" }}>
          <Typography
            textAlign={"center"}
            gutterBottom
            component="div"
            justifyContent="center"
            sx={{
              display: "flex",
              bgcolor: "#C00000",
              fontSize: "10px",
              fontfamily: "regular",
              color: "#fff",
              alignItems: "center",
              height: "34px",
            }}
          >
            INCONSISTENT PERFORMERS
          </Typography>
          <Typography
            variant="h5"
            gutterBottom
            component="div"
            sx={{
              bgcolor: "#FDF2EF",
              marginTop: -1,
              padding: 5,
              textAlign: "center",
            }}
          >
            70
          </Typography>
        </Container>
        {/* </Grid> */}
        {/* <Grid item xs={4}> */}
        <Container sx={{ marginLeft: "-40px", width: "40%" }}>
          <Typography
            textAlign={"center"}
            gutterBottom
            component="div"
            justifyContent="center"
            sx={{
              display: "flex",
              bgcolor: "#00B050",
              fontSize: "10px",
              fontfamily: "regular",
              color: "#fff",
              alignItems: "center",
              height: "34px",
            }}
          >
            SOLID PERFORMERS WITH POTENTIAL
          </Typography>
          <Typography
            variant="h5"
            gutterBottom
            component="div"
            sx={{
              bgcolor: "#F6FAF2",
              marginTop: -1,
              padding: 5,
              textAlign: "center",
            }}
          >
            65
          </Typography>
        </Container>
        {/* </Grid> */}
        {/* <Grid item xs={4}> */}
        <Container sx={{ marginLeft: "-40px", width: "40%" }}>
          <Typography
            textAlign={"center"}
            gutterBottom
            component="div"
            justifyContent="center"
            sx={{
              display: "flex",
              bgcolor: "#00B0F0 ",
              fontSize: "10px",
              fontfamily: "regular",
              color: "#fff",
              alignItems: "center",
              height: "34px",
            }}
          >
            HIGH PERFORMERS WITH POTENTIAL
          </Typography>
          <Typography
            variant="h5"
            gutterBottom
            component="div"
            textAlign={"center"}
            sx={{ bgcolor: "#EDF9FE", marginTop: -1, padding: 5 }}
          >
            80
          </Typography>
        </Container>
        {/* </Grid> */}
      </Stack>

      {/* 3rd Box */}

      <Text2>
        <p>Low</p>
      </Text2>
      <Texthori2>
        <p>High</p>
      </Texthori2>
      <Stack direction="row" justifyContent="center" alignItems="center">
        {/* <Grid item xs={4}  sx={{ width: "40px" }}> */}
        <Container sx={{ marginLeft: "10px", width: "40%" }}>
          <Typography
            textAlign={"center"}
            gutterBottom
            component="div"
            justifyContent="center"
            sx={{
              display: "flex",
              bgcolor: "#C00000",
              fontSize: "10px",
              fontfamily: "regular",
              color: "#fff",
              alignItems: "center",
              height: "34px",
            }}
          >
            LOW PERFORMERS
          </Typography>
          <Typography
            variant="h5"
            gutterBottom
            component="div"
            sx={{
              bgcolor: "#FDF2EF",
              marginTop: -1,
              padding: 5,
              textAlign: "center",
            }}
          >
            20
          </Typography>
        </Container>
        {/* </Grid> */}
        {/* <Grid item xs={4}> */}
        <Container sx={{ marginLeft: "-40px", width: "40%" }}>
          <Typography
            textAlign={"center"}
            gutterBottom
            component="div"
            justifyContent="center"
            sx={{
              display: "flex",
              bgcolor: "#00B050",
              fontSize: "10px",
              fontfamily: "regular",
              color: "#fff",
              alignItems: "center",
              height: "34px",
            }}
          >
            SOLID PERFORMERS
          </Typography>
          <Typography
            variant="h5"
            gutterBottom
            component="div"
            sx={{
              bgcolor: "#F6FAF2",
              marginTop: -1,
              padding: 5,
              textAlign: "center",
            }}
          >
            47
          </Typography>
        </Container>
        {/* </Grid> */}
        {/* <Grid item xs={4}> */}
        <Container sx={{ marginLeft: "-40px", width: "40%" }}>
          <Typography
            textAlign={"center"}
            gutterBottom
            component="div"
            justifyContent="center"
            sx={{
              display: "flex",
              bgcolor: "#00B050 ",
              fontSize: "10px",
              fontfamily: "regular",
              color: "#fff",
              alignItems: "center",
              height: "34px",
            }}
          >
            HIGH PERFORMERS
          </Typography>
          <Typography
            variant="h5"
            gutterBottom
            component="div"
            textAlign={"center"}
            sx={{ bgcolor: "#F6FAF2", marginTop: -1, padding: 5 }}
          >
            55
          </Typography>
        </Container>
        {/* </Grid> */}
      </Stack>
      <div style={{ paddingLeft: "37px", paddingTop: "25px" }}>
        <img
          src={Horizontalarrow}
          alt="icon"
          style={{ maxWidth: "0px", minWidth: "95%" }}
        />
        <Para>
          <p>Performance</p>
        </Para>
      </div>

      <div
        style={{
          position: "absolute",
          left: "60px",
          top: "305px",
          transform: "translate(-50%, -50%)",
        }}
      >
        <img
          src={Verticalnewarrow}
          alt="icon"
          style={{ maxHeight: "0px", minHeight: "445px" }}
        />
      </div>
    </React.Fragment>
  );
}

// export default function NestedGrid() {
//   return (
//     <>
//       {/* <div style={{ position: "absolute", top: "173%", right: "43.7%" }}>
//         <img
//           src={Triangle}
//           style={{ paddingRight: "10px", maxHeight: "0px", minHeight: "15px" }}
//         /
//       </div>
//       <div style={{ position: "absolute", top: "245%", right: "43.7%" }}>
//         <img
//           src={Triangle2}
//           style={{ paddingRight: "10px", maxHeight: "0px", minHeight: "15px" }}
//         />
//       </div>
//       <div style={{ position: "absolute", top: "175%", right: "45%" }}>
//         <img
//           src={Verticalarrow}
//           alt="icon"
//           style={{ maxHeight: "0px", minHeight: "430px" }}
//         />
//       </div> */}

//       <Box sx={{ flexGrow: 1, position: "relative" }}>
//         <Grid width="110%" container spacing={1}>
//           <Text>
//             <p>High</p>
//           </Text>
//           <Texthori>
//             <p>Low</p>
//           </Texthori>
//           <Grid container item spacing={3}>
//             <FormRow />
//           </Grid>

//           <Text1>
//             <p>Moderate</p>
//           </Text1>
//           <Texthori1>
//             <p>Medium</p>
//           </Texthori1>
//           <Text3>
//             <p>Potential</p>
//           </Text3>
//           <Grid container item spacing={3}>
//             <FormRow />
//           </Grid>

//           <Text2>
//             <p>Low</p>
//           </Text2>
//           <Texthori2>
//             <p>High</p>
//           </Texthori2>
//           <Grid container item spacing={3}>
//             <FormRow />
//           </Grid>
//         </Grid>

//       </Box>
//       <div style={{ paddingLeft: "37px", paddingTop: "25px" }}>
//         <img
//           src={Horizontalarrow}
//           alt="icon"
//           style={{ maxWidth: "0px", minWidth: "92%" }}
//         />
//         <Para>
//           <p>Performance</p>
//         </Para>
//       </div>

//       <div
//         style={{
//           position: "absolute",
//           left: "60px",
//           top: "325px",
//           transform: "translate(-50%, -50%)",
//         }}
//       >
//         <img
//           src={Verticalnewarrow}
//           alt="icon"
//           style={{ maxHeight: "0px", minHeight: "455px" }}
//         />
//       </div>
//     </>
//   );
// }
