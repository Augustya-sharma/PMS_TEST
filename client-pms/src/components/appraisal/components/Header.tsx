import React from "react";
import { Container, Grid, Paper, Typography, Box, Stack } from "@mui/material";
import { styled } from "@mui/material/styles";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";

const Item = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
const Name = styled("div")({
  fontSize: "17px",
  fontWeight: 400,
  color: "#004C75",
  textAlign: "left",
  paddingBottom:"5px"
});
const Speciality = styled("div")({
  fontSize: "12px",
  fontWeight: 400,
  color: "#333333",
  opacity: 0.5,
  textAlign: "left",
});
const Grade = styled("div")({
  fontSize: "12px",
  fontWeight: 400,
  color: "#004C75",
  //opacity: 0.5,
  textAlign: "left",
  paddingTop: "3px",
});
const Employeecode = styled("div")({
  fontSize: "12px",
  // fontWeight: 400,
  color: "#333333",
  opacity: 0.5,
  textAlign: "left",
  paddingBottom:"5px"
});
const Appraisaldate = styled("div")({
  fontSize: "12px",
  fontWeight: 400,
  color: "#004C75",
  marginTop: "5px",
  textAlign: "left",
  // fontFamily:"regular"
});
const Link = styled("div")({
  fontSize: "13px",
  fontWeight: 400,
  color: "#52C8F8",
  textDecoration: "underline",
  textAlign: "left",
  marginTop: "3px",
});
const Pastrating = styled("div")({
  fontSize: "12px",
  fontWeight: 400,
  color: "#333333",
  opacity: 0.5,
  textAlign: "left",
  paddingBottom:"5px"
});
const Pastratingvalue = styled("div")({
  fontSize: "12px",
  fontWeight: 400,
  color: "#333333",
  // paddingTop:'2px',
  textAlign: "left",
});
const Dividerroot = styled("div")({
  "& .MuiDivider-root": {
    marginTop: "10px",
    marginBottom: "15px",
    marginLeft: "0px",
  },
});

const Header = (props: any) => {
  const { appraisalData } = props;
  console.log(appraisalData, "aaaaaaaaaaaaaaaaaaaa");
  return (
    <div >
      <Box
        sx={{
          height: "66px",
          width: "100%",
          // marginLeft: "20px",
          marginTop: "0px",
          // background: "#004c75",
          borderRadius: "5px",
          boxShadow: "0px 0px 3px 3px rgba(0, 0, 0, 0.1)",
        }}
      >
        <div>
          <Dividerroot>
            <Stack
              direction="row"
              divider={<Divider orientation="vertical" flexItem />}
              spacing={2}
            >
              <Item>
                <Box width="28rem" height="50px">
                  <Stack direction="row" spacing={1}>
                    <Avatar>H</Avatar>
                    <Box>
                      <Stack direction="row" spacing={1}>
                        <Name>{appraisalData && appraisalData.data.name}</Name>
                        <Grade>
                           (Grade{appraisalData && appraisalData.data.grade})
                        </Grade>
                      </Stack>
                      <Speciality>
                        {appraisalData && appraisalData.data.position}
                      </Speciality>
                    </Box>
                  </Stack>
                </Box>
              </Item>

              <Item width="50rem">
                <Employeecode>
                  Employee Code:{" "}
                  {appraisalData && appraisalData.data.employeeCode}
                </Employeecode>

                <Appraisaldate>
                  Appraisal Date :29/07/21 - Appraisal Period 1 Year
                </Appraisaldate>
              </Item>
              <Item width="30rem">
                <Stack direction="row" spacing={1}>
                  <Pastrating>Past Ratings </Pastrating>
                  <Pastratingvalue>4.0</Pastratingvalue>
                </Stack>
                <Link>Line Manager Details</Link>
              </Item>
            </Stack>
          </Dividerroot>
        </div>
      </Box>
    </div>
  );
};

export default Header;
