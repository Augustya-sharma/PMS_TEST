/* eslint-disable */
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import React, { useEffect, useState } from "react";
import { Agent } from "http";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { Link } from "react-router-dom";
import Container from "@mui/material/Container";
import { maxWidth } from "@mui/system";
import { CREATE_CALENDER } from "../../constants/routes/Routing";
import { Alert, formLabelClasses } from "@mui/material";
import dayjs from "dayjs";
import PAMaster from "../../components/UI/PAMaster";
import { styled } from "@mui/material/styles";

const ButtonMap = styled("div")({
  "&.Mui-disabled": {
    backgroundColor: "red",
  },
});

const AppraisalCalender = (props: any) => {
  const {
    calendarDataa,
    tab,
    setTabs,
    createAppraisalCalenderHandler,
    addCaleander,
    singleTemplateData,
    isSuccessCalendar,
    calendarError,
  } = props;
  console.log(calendarDataa, "hi");
  const [year, setYear] = React.useState("");
  console.log(year);
  const [yearNumber, setYearNumber] = React.useState("");
  const [textfeildError, settextfeildError] = useState(false);
  const [save1, setSave1] = useState(isSuccessCalendar);
  const [hideAlert, setHideAlert] = useState(false);
  const [createMap, setCreateMap] = useState(false);

  console.log(calendarError, "'calendarError");

  const hideAlertHandler = () => {
    setTimeout(() => {
      setHideAlert(false);
    }, 3000);
  };

  const errorHandler = () => {
    setSave1(false);

    if (year === undefined) {
      settextfeildError(true);
      setSave1(false);
    } else if (year == "") {
      settextfeildError(true);
      setSave1(false);
    } else if (year != "") {
      settextfeildError(false);
      setSave1(true);
      setHideAlert(true);
      hideAlertHandler();
      setCreateMap(true);
    } else {
      setSave1(false);
    }
  };

  // useEffect(() => {
  //     if (isSuccessCalendar) {
  //         setHideAlert(true)
  //         hideAlertHandler()
  //     }
  // }, [isSuccessCalendar])

  // If calendr is not presnt then don't creatre appraisal calnder
  //

  useEffect(() => {
    console.log(singleTemplateData, "singleTemplateData={singleTemplateData}");
    if (singleTemplateData) {
      setYear(singleTemplateData.template.calendar);
    }
  }, [singleTemplateData]);

  return (
    <>
      {textfeildError && (
        <Alert severity="error">Please select Calendar</Alert>
      )}
      {calendarError && (
        <Alert severity="error">All the fields in Weightage,Position, Other recommendation ,Training Recommendation are required to be filled!! </Alert>
      )}

      {hideAlert && save1 && <Alert severity="info">Saved as a draft</Alert>}

      <Container sx={{ width: "800px" }}>
        <div style={{ paddingLeft: "130px", fontFamily: "regular" }}>
          {/* <Box sx={{ display: "flex ", marginLeft: "144px" }}> */}
          {/* <TextField id="outlined-basic" variant="outlined" sx={{ width: "300px" }}
                               value={yearNumber} label="2022" onChange={(e) => setYearNumber(e.target.value)} />*/}

          {/* <FormControl > */}
          <p style={{paddingLeft: "150px"}}>Select calendar year</p>

          <TextField
            select
            sx={{ width: "75%" }}
            label="Select text"
            id="demo-simple-select-label"
            variant="outlined"
            size="small"
            value={year}
            
            onChange={(e: { target: { value: any } }) => {
              setYear(e.target.value);
              
            }}
            error={!year && textfeildError}
            helperText={!year && textfeildError ? "*Name required." : " "}
          >
            {calendarDataa &&
              calendarDataa.data.map((i: any) => {
                return (
                  <MenuItem sx={{height:"16px"}} value={i._id}>
                    <div>{i.name}</div>
                  </MenuItem>
                );
              })}
          </TextField>
        </div>

        <div>
          <Box sx={{ display: "flex", justifyContent: "space-evenly" }}>
            <Stack
              spacing={2}
              paddingRight="24px"
              paddingTop="40px"
              direction="row"
            >
              <Button
                style={{
                  textTransform: "none",
                  backgroundColor: "#004C75",
                  fontSize: "16px",
                  fontFamily: "regular",
                  padding: "6px 30px",
                }}
                onClick={() => {
                  errorHandler();
                  addCaleander({
                    calendar: year,
                  });
                }}
                variant="contained"
                // onClick={() => setTabs(tab + 1)}
              >
                Save as Draft
              </Button>
              {/* {calendarError === false && (<Link to={CREATE_CALENDER}> */}

              <Button
                onClick={() => {
                  createAppraisalCalenderHandler(year);
                  addCaleander({
                    calendar: year,
                  });
                }}
                style={{
                  textTransform: "none",
                  backgroundColor: "#004C75",
                  fontSize: "16px",
                  fontFamily: "regular",
                  padding: "6px 30px",
                }}
                variant="contained"
              >
                Create Calendar
              </Button>

              {/* </Link>)} */}
            </Stack>
          </Box>
        </div>
      </Container>
    </>
  );
};

export default AppraisalCalender;
