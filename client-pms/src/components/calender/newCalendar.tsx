import React, { SyntheticEvent, useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import Stack from "@mui/material/Stack";
import { Container, TextField } from "@mui/material";
import { Button } from "@mui/material";
import { Grid } from "@mui/material";
import Box from "@mui/material/Box";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import { textAlign } from "@mui/system";
import Typography from "@mui/material/Typography";
import { CALENDER_VIEWPAGE, MASTER_NAV } from "../../constants/routes/Routing";
import { Link } from "react-router-dom";
import PAMaster from "../../components/UI/PAMaster";
import { useEffect } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/system";
import Downarrowicon from "../../assets/Images/Downarrowicon.svg";
import Uparrowicon from "../../assets/Images/Uparrowicon.svg";
import Deleteredicon from "../../assets/Images/Deleteredicon.svg";
import Addmore from "../../assets/Images/Addmore.svg";
import Tooltip from "@mui/material/Tooltip";
// import DatePicker from "react-datepicker";
// import { DatePicker } from "./extendCalendar";
import { Scrollbar } from "react-scrollbars-custom";
import { Alert } from "@mui/material";
import { AnyArray } from "immer/dist/internal";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Co2Sharp, FormatListNumberedRtlTwoTone } from "@mui/icons-material";
import { stubFalse } from "lodash";
import { AlertDialog } from "..";

import { addDays, eachDayOfInterval } from "date-fns";

import { parseISO } from "date-fns/esm/fp";
import { isAfter, isBefore, subDays } from "date-fns";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const Text = styled("div")({
  "& .MuiOutlinedInput-root": {
    height: "30px",
  },
});

const MyAccordion = (props: any) => {
  const { onSubmit, defaultValue, error1, error2 } = props;
  console.log(error2, "error2");
  const [startDateAppraiser, setStartDateAppraiser] = useState<any>("");
  // const [editerror, setEditerror] = useState<any>(error2);
  // const [editerror1, setEditerror1] = useState<any>(false);

  const [startDate, setStartDate] = useState<any>("");
  const [endDate, setEndDate] = useState<any>("");
  const [dupError, setDupError] = useState<any>(error1);
  const [dupErrorEdit, setDupErrorEdit] = useState<any>(error2);
  const [emptyError, setEmptyError] = useState<any>(false);
  const [textFieldError, setTextFieldError] = useState<any>("");
  const [hideAlert, setHideAlert] = useState(false);

  const [show, setShow] = useState<any>(false);
  const [showAdd, setShowAdd] = useState<any>(false);
  const [data1, setData1] = useState([]);
  const [error, setError] = useState<any>(false);
  const [errorMessage, setErrorMessage] = useState<any>("");
  const [dateError, setDateError] = useState<any>("");
  const [dateErrorMessage, setDateErrorMessage] = useState<any>("");
  const [index1, setIndex1] = useState<any>("");
  const [activeIndex, setActiveIndex] = useState(0);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [anchorallEl, setAnchorallEl] = React.useState<null | HTMLElement>(
    null
  );
  const [open1, setOpen1] = useState(false);
  const [name, setName] = useState("");
  const [newIndex, setNewIndex] = useState("");
  const [newName, setNewName] = useState("");

  useEffect(() => {
    if (defaultValue) {
      setShowAdd(true);
    } else {
      setShowAdd(false);
    }
  }, [defaultValue]);

  const hideAlertHandler = () => {
    setTimeout(() => {
      setHideAlert(false);
    }, 5000);
  };

  const handleClickOpen = (e: any, index: any, nameAlert: any) => {
    setOpen1(true);
    setNewIndex(index);
    setNewName(nameAlert);
  };

  const handleClickClose = () => {
    setOpen1(false);
  };

  const handleClickIdClose = (index: any) => {
    //     if (newId) {
    // //onDelete(newId)
    //       setOpen1(false);
    //       console.log(newId)
    //     }
    if (newIndex) {
      handleClose(newIndex);
      setOpen1(false);
    }
  };

  const open = Boolean(anchorEl);

  const [dateList, setDateList] = useState<any>([
    {
      name: "",
      start_date: "",
      end_date: "",
      start_date_appraiser: "",
      end_date_appraiser: "",
      start_date_reviewer: "",
      end_date_reviewer: "",
      start_date_normalizer: "",
      end_date_normalizer: "",
      start_date_F2FMeeting: "",
      end_date_F2FMeeting: "",
      start_date_employee_acknowledgement: "",
      end_date_employee_acknowledgement: "",
      start_date_mediation: "",
      end_date_mediation: "",
      start_date_re_normalization: "",
      end_date_re_normalization: "",
      start_date_closing: "",
      end_date_closing: "",
      isOpen: false,
    },
  ]);
  const addDate = () => {
    if (name === "") {
      setTextFieldError("Enter Calendar text field");
    } else {
      setDateList([
        ...dateList,
        {
          name: "",
          start_date: "",
          end_date: "",
          start_date_appraiser: "",
          end_date_appraiser: "",
          start_date_reviewer: "",
          end_date_reviewer: "",
          start_date_normalizer: "",
          end_date_normalizer: "",
          start_date_F2FMeeting: "",
          end_date_F2FMeeting: "",
          start_date_employee_acknowledgement: "",
          end_date_employee_acknowledgement: "",
          start_date_mediation: "",
          end_date_mediation: "",
          start_date_re_normalization: "",
          end_date_re_normalization: "",
          start_date_closing: "",
          end_date_closing: "",
          isOpen: false,
        },
      ]);
    }
  };

  // const today = dateList[0].start_date;
  // const aWeekFromNow = dateList[0].end_date;
  // const thisWeek = eachDayOfInterval(
  //   { start: today, end: aWeekFromNow },
  // );
  // //let thisWeek = dateList[0].start_date;

  // console.log(thisWeek, 'dddddddd');

  const [validate, setValidate] = useState<any>(true);
  useEffect(() => {
    if (dateList.length === 0) {
      return noData();
    }
  }, []);

  const [users, setUsers] = useState<any>([]);
  useEffect(() => {
    setUsers(dateList);
  });
  const handleOnCheck = (e: any) => {
    const { name, checked } = e.target;
  };
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const allopen = Boolean(anchorallEl);
  const handleallClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorallEl(event.currentTarget);
    //removeDate(i);
  };

  const handleClose = (index: any) => {
    console.log(index, "index");
    //setAnchorEl(null);
    const newDateList = [...dateList];
    newDateList.splice(index, 1);
    setDateList(newDateList);
  };

  const removeDate = (i: any) => {
    const newDateList = [...dateList];
    newDateList.splice(i);
    setDateList(newDateList);

    // setAnchorallEl(null);
    // if(DateList.length===0){
    //   return 'Add calender';
    // }
  };
  const noData = () => {
    "data req";
  };
  useEffect(() => {
    if (dateList.length === 0) {
      return noData();
    }
  }, [dateList]);

  const handleDateChange = (i: any, e: any) => {
    setActiveIndex(i);
    const newDateList = [...dateList];
    //@ts-ignore
    newDateList[i][e.target.name] = e.target.value;

    setDateList(newDateList);

    //
  };

  useEffect(() => {
    if (error1 === true) {
      setDupError(true);
      setHideAlert(true);
      hideAlertHandler();
    }
  }, [error1]);

  useEffect(() => {
    if (error1 === false) {
      setDupError(false);
    }
  }, [error1]);

  useEffect(() => {
    if (error2 === true) {
      setDupErrorEdit(true);
      setHideAlert(true);
      hideAlertHandler();
    }
  }, [error2]);

  useEffect(() => {
    if (error2 === false) {
      setDupErrorEdit(false);
    }
  }, [error2]);

  useEffect(() => {
    if (textFieldError != "") {
      setDupError(false);
      setDupErrorEdit(false);
    }
  }, [textFieldError]);

  console.log(name, "name");

  useEffect(() => {
    if (name === "") {
      setDupError(false);
    }
  }, [name]);

  // useEffect(() => {
  //   console.log(defaultValue.name,'dddddddddd')
  //   if (defaultValue && defaultValue.data.name === "") {
  //     setDupErrorEdit(false)
  //   }
  // },[defaultValue])

  // useEffect(()=> {
  //   const res = dateList.map((i:any)=> {
  //     if (i.name === "") {
  //       setDupError(false)
  //     }

  //   })
  // },[dateList,onSubmit])

  const checkD = (startDate: any, endDate: any) => {
    return isAfter(parseISO(startDate), parseISO(endDate));
  };

  useEffect(() => {
    const checkData = dateList.map((j: any) => {
      // console.log(j, "jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj");
      let status = false;
      if (isAfter(parseISO(j.start_date), parseISO(j.end_date))) {
        setErrorMessage("Start Date must be smaller than the End Date! ");
        status = true;
      }
      if (
        isAfter(parseISO(j.start_date_reviewer), parseISO(j.end_date_reviewer))
      ) {
        setErrorMessage(
          "Reviewer Start Date must be smaller than the Reviewer End Date! "
        );
        status = true;
      }
      if (
        isAfter(
          parseISO(j.start_date_appraiser),
          parseISO(j.end_date_appraiser)
        )
      ) {
        setErrorMessage(
          "Appraiser Start Date must be smaller than the Appraiser End Date! "
        );
        status = true;
      }
      if (
        isAfter(
          parseISO(j.start_date_normalizer),
          parseISO(j.end_date_normalizer)
        )
      ) {
        setErrorMessage(
          "Normalizer Start Date must be smaller than the Normalizer End Date! "
        );
        status = true;
      }
      if (
        isAfter(
          parseISO(j.start_date_F2FMeeting),
          parseISO(j.end_date_F2FMeeting)
        )
      ) {
        setErrorMessage(
          "F2F Meeting Start Date must be smaller than the F2F Meeting End Date! "
        );
        status = true;
      }
      if (
        isAfter(
          parseISO(j.start_date_employee_acknowledgement),
          parseISO(j.end_date_employee_acknowledgement)
        )
      ) {
        setErrorMessage(
          "Employee Acknowledgement Start Date must be smaller than the Employee Acknowledgement End Date! "
        );
        status = true;
      }
      if (
        isAfter(
          parseISO(j.start_date_mediation),
          parseISO(j.end_date_mediation)
        )
      ) {
        setErrorMessage(
          "Mediation Start Date must be smaller than the Mediation End Date! "
        );
        status = true;
      }
      if (
        isAfter(
          parseISO(j.start_date_re_normalization),
          parseISO(j.end_date_re_normalization)
        )
      ) {
        setErrorMessage(
          "Re_Normalization Start Date must be smaller than the Re_Normalization End Date! "
        );
        status = true;
      }
      if (
        isAfter(parseISO(j.start_date_closing), parseISO(j.end_date_closing))
      ) {
        setErrorMessage(
          "Closing Start Date must be smaller than the Closing End Date! "
        );
        status = true;
      }
      return status;
    });

    // return (
    //     // console.log()
    //     // isAfter(parseISO(j.start_date), parseISO(j.end_date)),
    //     //     isAfter(parseISO(j.start_date_appraiser), parseISO(j.end_date_appraiser)),
    //     console.log(checkD(parseISO(j.start_date_reviewer), parseISO(j.end_date_reviewer))),
    //     isAfter(parseISO(j.start_date_reviewer), parseISO(j.end_date_reviewer))
    //         // isAfter(parseISO(j.start_date_normalizer), parseISO(j.end_date_normalizer))
    //         // isAfter(parseISO(j.start_date_F2FMeeting), parseISO(j.end_date_F2FMeeting)),
    //         // isAfter(parseISO(j.start_date_employee_acknowledgement), parseISO(j.end_date_employee_acknowledgement)),
    //         // isAfter(parseISO(j.start_date_mediation), parseISO(j.end_date_mediation)),
    //         // isAfter(parseISO(j.start_date_re_normalization), parseISO(j.end_date_re_normalization)),
    //         // isAfter(parseISO(j.start_date_closing), parseISO(j.end_date_closing))
    // )

    console.log(checkData, "checkData");

    if (checkData.find((k: any) => k === true)) {
      setError(true);
    } else {
      setError(false);
    }
  }, [dateList]);

  useEffect(() => {
    const checkData1 = dateList.map((j: any) => {
      // console.log(j, "jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj");

      let status = false;
      if (
        isAfter(parseISO(j.end_date_appraiser), parseISO(j.start_date_reviewer))
      ) {
        setDateErrorMessage(
          "Reviewer Start Date must be greater than the Appraiser End Date! "
        );
        status = true;
      }
      if (
        isAfter(
          parseISO(j.end_date_reviewer),
          parseISO(j.start_date_normalizer)
        )
      ) {
        setDateErrorMessage(
          "Normalizer Start Date must be greater than the Reviewer End Date! "
        );
        status = true;
      }
      if (
        isAfter(
          parseISO(j.end_date_normalizer),
          parseISO(j.start_date_F2FMeeting)
        )
      ) {
        setDateErrorMessage(
          "F2FMeeting Start Date must be greater than the Normalizer End Date! "
        );
        status = true;
      }
      if (
        isAfter(
          parseISO(j.end_date_F2FMeeting),
          parseISO(j.start_date_employee_acknowledgement)
        )
      ) {
        setDateErrorMessage(
          "Employee Acknowledgement Start Date must be greater than the F2FMeeting End Date! "
        );
        status = true;
      }
      if (
        isAfter(
          parseISO(j.end_date_employee_acknowledgement),
          parseISO(j.start_date_mediation)
        )
      ) {
        setDateErrorMessage(
          "Date Mediation Start Date must be greater than the Employee Acknowledgement End Date! "
        );
        status = true;
      }
      if (
        isAfter(
          parseISO(j.end_date_mediation),
          parseISO(j.start_date_re_normalization)
        )
      ) {
        setDateErrorMessage(
          "Re_Normalization Start Date must be greater than the Date Mediation End Date! "
        );
        status = true;
      }
      if (
        isAfter(
          parseISO(j.end_date_re_normalization),
          parseISO(j.start_date_closing)
        )
      ) {
        setDateErrorMessage(
          "Closing Start Date must be greater than the Re_Normalization End Date! "
        );
        status = true;
      }
      return status;

      // isAfter(parseISO(j.start_date_normalizer), parseISO(j.end_date_normalizer))
    });

    console.log(checkData1, "checkData");

    if (checkData1.find((k: any) => k === true)) {
      setDateError("Date smaller");
    } else {
      setDateError(false);
    }
  }, [dateList]);

  // const handleMultipleDatee = (sd: any, ed: any) => {
  //   // console.log(Date.parse(sd), "sd",Date.parse(ed), "ed");
  //   console.log(isAfter(parseISO(sd), parseISO(ed)), "sd");

  //   console.log(isBefore(parseISO(sd), parseISO(ed)), "ed");

  //   console.log(sd > ed);

  //   if (sd && ed && isAfter(parseISO(sd), parseISO(ed))) {
  //     return false

  //     // setError(true);
  //     // console.log(error, "errrrrr");
  //   } else if (isBefore(parseISO(sd), parseISO(ed))) {
  //     // setError(false);
  //     return true

  //   }
  // };

  const sliceHandler = (i: any) => {
    const result = i.slice(0, 10);
    return result;
  };

  useEffect(() => {
    if (defaultValue) {
      setDateList([
        {
          name: defaultValue.data.name,
          // start_date:defaultValue.data.start_date ,
          start_date: sliceHandler(defaultValue.data.start_date),
          end_date: sliceHandler(defaultValue.data.end_date),
          start_date_appraiser: sliceHandler(
            defaultValue.data.start_date_appraiser
          ),
          end_date_appraiser: sliceHandler(
            defaultValue.data.end_date_appraiser
          ),
          start_date_reviewer: sliceHandler(
            defaultValue.data.start_date_reviewer
          ),
          end_date_reviewer: sliceHandler(defaultValue.data.end_date_reviewer),
          start_date_normalizer: sliceHandler(
            defaultValue.data.start_date_normalizer
          ),
          end_date_normalizer: sliceHandler(
            defaultValue.data.end_date_normalizer
          ),
          start_date_F2FMeeting: sliceHandler(
            defaultValue.data.start_date_F2FMeeting
          ),
          end_date_F2FMeeting: sliceHandler(
            defaultValue.data.end_date_F2FMeeting
          ),
          start_date_employee_acknowledgement: sliceHandler(
            defaultValue.data.start_date_employee_acknowledgement
          ),
          end_date_employee_acknowledgement: sliceHandler(
            defaultValue.data.end_date_employee_acknowledgement
          ),
          start_date_mediation: sliceHandler(
            defaultValue.data.start_date_mediation
          ),
          end_date_mediation: sliceHandler(
            defaultValue.data.end_date_mediation
          ),
          start_date_re_normalization: sliceHandler(
            defaultValue.data.start_date_re_normalization
          ),
          end_date_re_normalization: sliceHandler(
            defaultValue.data.end_date_re_normalization
          ),
          start_date_closing: sliceHandler(
            defaultValue.data.start_date_closing
          ),
          end_date_closing: sliceHandler(defaultValue.data.end_date_closing),
          isOpen: false,
        },
      ]);
    }
  }, [defaultValue]);

  // console.log(dateList, "Datetetetetete");
  // console.log(editerror, "error2222");
  const handleOpen = (index: any, openData: any) => {
    setDateList(
      dateList.map((previousState: any, ix: any) => {
        if (ix === index) {
          return {
            ...previousState,
            isOpen: !previousState.isOpen,
          };
        }

        // if (ix !== index) {
        //   return {
        //     ...previousState,
        //     isOpen: false,
        //   };
        // }
        return previousState;
      })
    );
  };
  // const editerrorHandler = (singleDate: any) => {
  //   if (singleDate.name === "") {
  //     setEditerror(false);
  //   } else {
  //     setEditerror(true);
  //   }
  // };
  // const errorHandler = () => {
  //   if (editerror === true) {
  //     onSubmit(dateList);
  //     //setEditerror1(true)
  //   } else {
  //     setEditerror(false);
  //     setEditerror1(false);
  //   }
  // };

  const errorTextField = () => {
    console.log(dateList, "dateeeeeeeeee");
    if (name === "") {
      setTextFieldError("Enter text field");
    } else {
      setTextFieldError("");
    }
  };

  const calenderEmpty = () => {
    const res = dateList.map((i: any) => {
      if (
        i.name === "" ||
        i.start_date === "" ||
        i.end_date === "" ||
        i.start_date_appraiser === "" ||
        i.end_date_appraiser === "" ||
        i.start_date_reviewer === "" ||
        i.end_date_reviewer === "" ||
        i.start_date_normalizer === "" ||
        i.end_date_normalizer === "" ||
        i.start_date_employee_acknowledgement === "" ||
        i.end_date_employee_acknowledgement === "" ||
        i.start_date_mediation === "" ||
        i.end_date_mediation === "" ||
        i.start_date_re_normalization === "" ||
        i.end_date_re_normalization === "" ||
        i.start_date_F2FMeeting === "" ||
        i.end_date_F2FMeeting === "" ||
        i.start_date_closing === "" ||
        i.end_date_closing === ""
      ) {
        setEmptyError(true);
        setHideAlert(true);

        hideAlertHandler();
      } else if (
        i.name != "" ||
        i.start_date != "" ||
        i.end_date != "" ||
        i.start_date_appraiser != "" ||
        i.end_date_appraiser != "" ||
        i.start_date_reviewer != "" ||
        i.end_date_reviewer != "" ||
        i.start_date_normalizer != "" ||
        i.end_date_normalizer != "" ||
        i.start_date_employee_acknowledgement != "" ||
        i.end_date_employee_acknowledgement != "" ||
        i.start_date_mediation != "" ||
        i.end_date_mediation != "" ||
        i.start_date_re_normalization != "" ||
        i.end_date_re_normalization != "" ||
        i.start_date_F2FMeeting != "" ||
        i.end_date_F2FMeeting != "" ||
        i.start_date_closing != "" ||
        i.end_date_closing != ""
      ) {
        setEmptyError(false);
        onSubmit(dateList);
      }
    });
  };

  useEffect(() => {
    if (name != "") {
      setTextFieldError("");
    }
  }, [name]);

  useEffect(() => {
    if (textFieldError != "") {
      setEmptyError(false);
    }
  }, [textFieldError]);

  return (
    <>
      <PAMaster name={"Calendar"} />

      <Container
        sx={{
          maxWidth: "96% !important",
          width: "100%",
          height: "calc(100vh - 165px)",
          background: "#fff",
        }}
      >
        <div style={{ paddingTop: "10px" }}>
          {hideAlert && dupError && (
            <Alert severity="error">Entered Calendar already exists!</Alert>
          )}

          {hideAlert && dupErrorEdit && (
            <Alert severity="error">Entered Calendar already exists!</Alert>
          )}

          {hideAlert && emptyError && (
            <Alert severity="error">Enter all Calendar text fields!</Alert>
          )}

          {/* {editerror === false && (
            <Alert severity="error">
              Either text field must be empty or entered Calendar already
              exists!
            </Alert>
          )} */}

          {/* {editerror1 && (
            <Alert severity="error">
              Either text field must be empty or entered Calendar already
              exists!
            </Alert>
          )} */}
        </div>
        <Box>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            spacing={2}
            paddingTop="20px"
          >
            <h2
              style={{
                color: "#004C75",
                fontSize: "18px",
                fontWeight: "500",
                position: "absolute",
                left: "43%",
              }}
            >
              Add Calendar
            </h2>

            <div
              style={{ position: "absolute", left: "84%", marginTop: "10px" }}
            >
              <Stack
                direction="row"
                spacing={2}
                sx={{ verticalAlign: "middle" }}
              >
                {showAdd || (
                  <Button
                    style={{
                      textTransform: "none",

                      borderColor: "#014D76",
                      borderRadius: 8,
                      padding: "6px 12px",
                      marginTop: "5px",
                      fontFamily: "sans-serif",

                      backgroundColor: "#014D76",
                    }}
                    variant="contained"
                    onClick={() => addDate()}
                  >
                    Add
                  </Button>
                )}

                <Link to={`${CALENDER_VIEWPAGE}`}>
                  <Button
                    style={{
                      textTransform: "none",
                      color: "#014D76",
                      borderColor: "#014D76",
                      borderRadius: 8,
                      padding: "6px 12px",
                      marginTop: "5px",
                      fontFamily: "sans-serif",
                    }}
                    variant="outlined"
                  >
                    View List
                  </Button>
                </Link>
              </Stack>
            </div>
          </Stack>
        </Box>
        {error && <Alert severity="error">{errorMessage}</Alert>}
        {dateError && <Alert severity="error">{dateErrorMessage}</Alert>}

        <TableContainer
          sx={{ marginTop: "40px", height: "calc(100vh - 360px)" }}
        >
          <Table size="small">
            <TableHead>
              <TableRow sx={{ padding: "2px" }}>
                <TableCell></TableCell>
                <TableCell
                  align="left"
                  sx={{
                    color: "#005477",
                    fontSize: "15px",
                  }}
                >
                  #
                </TableCell>
                <TableCell
                  align="left"
                  sx={{
                    color: "#005477",
                    fontSize: "15px",
                  }}
                >
                  Description
                </TableCell>
                <TableCell
                  align="left"
                  sx={{
                    color: "#005477",
                    fontSize: "15px",
                  }}
                >
                  Start Date
                </TableCell>
                <TableCell
                  align="left"
                  sx={{
                    color: "#005477",
                    fontSize: "15px",
                  }}
                >
                  End Date
                </TableCell>
              </TableRow>
            </TableHead>

            {dateList &&
              dateList.map((singleDate: any, index: number) => {
                return (
                  <>
                    <TableHead>
                      <TableRow
                        sx={{
                          backgroundColor: "#F7F9FA",
                          border: "1px solid #EDF9FE",
                          boxShadow: "1px 1px 5px 1px rgba(0, 0, 0, 0.1)",
                          borderRadius: "5px",
                        }}
                      >
                        <TableCell
                          sx={{
                            color: "#005477",
                            fontSize: "13px",
                          }}
                        >
                          <div>
                            <Tooltip title="Remove">
                              <IconButton
                                //onClick={() => handleClose(index)}
                                onClick={(e: any) =>
                                  handleClickOpen(e, index, singleDate.name)
                                }
                              >
                                <img src={Deleteredicon} alt="" />
                              </IconButton>
                            </Tooltip>
                          </div>
                          <AlertDialog
                            isAlertOpen={open1}
                            handleAlertOpen={(e: any, index: any, name: any) =>
                              handleClickOpen(e, index, singleDate.name)
                            }
                            handleAlertClose={handleClickClose}
                            handleAlertIdClose={(index: any) => {
                              handleClickIdClose(index);
                            }}
                          >
                            Are you sure you wish to delete this item?
                          </AlertDialog>
                        </TableCell>
                        <TableCell
                          align="left"
                          sx={{
                            color: "#005477",
                            fontSize: "13px",
                          }}
                        >
                          <Typography>
                            <p style={{ fontSize: "20px" }}>{index + 1}</p>
                          </Typography>
                        </TableCell>
                        <TableCell
                          align="left"
                          sx={{
                            color: "#005477",
                            fontSize: "13px",
                          }}
                        >
                          <TextField
                            size="small"
                            type="text"
                            placeholder="Appraisal Calendar"
                            autoComplete="off"
                            // size="small"
                            // id="outlined-basic"
                            // label="Appraisal Calendar"
                            name="name"
                            helperText={
                              name === singleDate.name && textFieldError
                            }
                            error={name === singleDate.name && textFieldError}
                            value={singleDate.name}
                            onChange={(e) => {
                              handleDateChange(index, e);
                              // editerrorHandler(singleDate);
                              setName(singleDate.name);
                            }}
                            // variant="outlined"
                            style={{
                              width: "250px",
                              color: "#7b7b7b",
                              height: "37px",
                              // border: "1px solid #c6c6c6",
                              // borderRadius: "3px",
                              background: "none",
                            }}
                          />
                        </TableCell>
                        <TableCell
                          align="left"
                          sx={{
                            color: "#005477",
                            fontSize: "13px",
                          }}
                        >
                          <input
                            type="date"
                            name="start_date"
                            style={{
                              width: "250px",
                              color: "#7b7b7b",
                              height: "37px",
                              border: "1px solid #c6c6c6",
                              borderRadius: "3px",
                              background: "none",
                            }}
                            // min={singleDate.end_date}
                            max={singleDate.end_date}
                            value={singleDate.start_date}
                            // value={ moment(singleDate.start_date).format("DD-MMM-YYYY") }
                            data-date=""
                            data-date-format="DD MMMM YYYY"
                            onKeyDown={(e) => {
                              e.preventDefault();
                            }}
                            onChange={(e) => {
                              handleDateChange(index, e);
                              // handleMultipleDate(
                              //   singleDate.start_date,
                              //   singleDate.end_date,
                              //   e
                              // );
                              setIndex1(index);
                            }}
                          />
                        </TableCell>
                        <TableCell
                          align="left"
                          sx={{
                            color: "#005477",
                            fontSize: "13px",
                          }}
                        >
                          <input
                            type="date"
                            name="end_date"
                            style={{
                              width: "250px",
                              color: "#7b7b7b",
                              height: "37px",
                              border: "1px solid #c6c6c6",
                              borderRadius: "3px",
                              background: "none",
                            }}
                            // min={minValue}
                            // max={maxValue}
                            // min={singleDate.start_date}
                            min={singleDate.start_date}
                            value={singleDate.end_date}
                            onKeyDown={(e) => {
                              e.preventDefault();
                            }}
                            onChange={(e) => {
                              handleDateChange(index, e);
                              // handleMultipleDate(
                              //   singleDate.start_date,
                              //   singleDate.end_date,
                              //   e
                              // );
                              setIndex1(index);
                            }}
                          />
                        </TableCell>
                        <TableCell
                          align="left"
                          sx={{
                            color: "#005477",
                            fontSize: "13px",
                          }}
                        >
                          <div style={{ margin: "25px" }}>
                            <img
                              src={show ? Uparrowicon : Downarrowicon}
                              onClick={() => {
                                handleOpen(index, singleDate);
                                setShow(!show);
                              }}
                            />
                            {/* setShow(!show) */}
                          </div>
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    {singleDate.isOpen && (
                      <TableBody>
                        <TableRow>
                          <TableCell></TableCell>
                          <TableCell align="left">
                            <Typography>
                              <p
                                style={{
                                  fontSize: "16px",
                                }}
                              >
                                I
                              </p>
                            </Typography>
                          </TableCell>
                          <TableCell align="left">
                            <p>Appraiser</p>
                          </TableCell>
                          <TableCell align="left">
                            <label>
                              <input
                                style={{
                                  width: "250px",
                                  color: "#7b7b7b",
                                  height: "25px",
                                  border: "1px solid #c6c6c6",
                                  borderRadius: "5px",
                                  background: "none",
                                }}
                                type="date"
                                name="start_date_appraiser"
                                min={singleDate.start_date}
                                max={singleDate.end_date}
                                value={singleDate.start_date}
                                // value={startDateAppraiser}
                                onKeyDown={(e) => {
                                  e.preventDefault();
                                }}
                                onChange={(e) => {
                                  setStartDateAppraiser(
                                    singleDate.start_date_appraiser
                                  );
                                  handleDateChange(index, e);
                                  // handleMultipleDate(
                                  //   singleDate.start_date_appraiser,
                                  //   singleDate.end_date_appraiser,
                                  //   e
                                  // );
                                  setIndex1(index);
                                  // if (singleDate.start_date_appraiser === "") {
                                  //   setStartDateAppraiser(singleDate.start_date_appraiser);
                                  //   return;
                                  // }

                                  // const startDateAppraiser = singleDate.start_date_appraiser;
                                  // console.log(e, 'eeeeeee')
                                  // console.log(startDateAppraiser, 'rrrrrrr')
                                  // // var result = isAfter( singleDate.start_date_appraiser, singleDate.end_date_appraiser)
                                  // // console.log(result,'result')

                                  // if (startDateAppraiser > singleDate.end_date_appraiser) {
                                  //   // setStartDateAppraiser(singleDate.end_date_appraiser);
                                  //   // const result = subDays(parseISO(singleDate.end_date_appraiser), 1)
                                  //   setStartDateAppraiser(singleDate.end_date_appraiser);

                                  // } else {
                                  //   setStartDateAppraiser(startDateAppraiser);
                                  // }
                                }}
                              />
                            </label>
                          </TableCell>
                          <TableCell align="left">
                            <label>
                              <input
                                style={{
                                  width: "250px",
                                  color: "#7b7b7b",
                                  height: "25px",
                                  border: "1px solid #c6c6c6",
                                  borderRadius: "5px",
                                  background: "none",
                                }}
                                type="date"
                                name="end_date_appraiser"
                                min={singleDate.start_date_appraiser}
                                max={singleDate.end_date}
                                value={singleDate.end_date_appraiser}
                                onKeyDown={(e) => {
                                  e.preventDefault();
                                }}
                                onChange={(e) => {
                                  handleDateChange(index, e);
                                  // handleMultipleDate(
                                  //   singleDate.start_date_appraiser,
                                  //   singleDate.end_date_appraiser,
                                  //   e
                                  // );
                                  setIndex1(index);
                                }}
                              />
                            </label>
                          </TableCell>
                          <TableCell></TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell></TableCell>
                          <TableCell align="left">
                            <Typography>
                              <p
                                style={{
                                  fontSize: "16px",
                                }}
                              >
                                II
                              </p>
                            </Typography>
                          </TableCell>
                          <TableCell align="left">
                            <p>Reviewer</p>
                          </TableCell>
                          <TableCell align="left">
                            <label>
                              <input
                                style={{
                                  width: "250px",
                                  color: "#7b7b7b",
                                  height: "25px",
                                  border: "1px solid #c6c6c6",
                                  borderRadius: "5px",
                                  background: "none",
                                }}
                                type="date"
                                name="start_date_reviewer"
                                min={singleDate.end_date_appraiser}
                                max={singleDate.end_date}
                                value={singleDate.start_date_reviewer}
                                onKeyDown={(e) => {
                                  e.preventDefault();
                                }}
                                onChange={(e) => {
                                  handleDateChange(index, e);
                                  // handleMultipleDate(
                                  //   singleDate.start_date_reviewer,
                                  //   singleDate.end_date_reviewer,
                                  //   e
                                  // );
                                  setIndex1(index);
                                }}
                              />
                            </label>
                          </TableCell>
                          <TableCell align="left">
                            <label>
                              <input
                                style={{
                                  width: "250px",
                                  color: "#7b7b7b",
                                  height: "25px",
                                  border: "1px solid #c6c6c6",
                                  borderRadius: "5px",
                                  background: "none",
                                }}
                                type="date"
                                name="end_date_reviewer"
                                min={singleDate.end_date_appraiser}
                                max={singleDate.end_date}
                                value={singleDate.end_date_reviewer}
                                onKeyDown={(e) => {
                                  e.preventDefault();
                                }}
                                onChange={(e) => {
                                  handleDateChange(index, e);
                                  // handleMultipleDate(
                                  //   singleDate.start_date_reviewer,
                                  //   singleDate.end_date_reviewer,
                                  //   e
                                  // );
                                  setIndex1(index);
                                }}
                              />
                            </label>
                          </TableCell>
                          <TableCell></TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell></TableCell>
                          <TableCell align="left">
                            <Typography>
                              <p
                                style={{
                                  fontSize: "16px",
                                }}
                              >
                                III
                              </p>
                            </Typography>
                          </TableCell>
                          <TableCell align="left">
                            <p>Normalizer</p>
                          </TableCell>
                          <TableCell align="left">
                            <label>
                              <input
                                style={{
                                  width: "250px",
                                  color: "#7b7b7b",
                                  height: "25px",
                                  border: "1px solid #c6c6c6",
                                  borderRadius: "5px",
                                  background: "none",
                                }}
                                type="date"
                                name="start_date_normalizer"
                                min={singleDate.end_date_reviewer}
                                max={singleDate.end_date}
                                value={singleDate.start_date_normalizer}
                                onKeyDown={(e) => {
                                  e.preventDefault();
                                }}
                                onChange={(e) => {
                                  handleDateChange(index, e);
                                  // handleMultipleDate(
                                  //   singleDate.start_date_normalizer,
                                  //   singleDate.end_date_normalizer,
                                  //   e
                                  // );
                                  setIndex1(index);
                                }}
                              />
                            </label>
                          </TableCell>
                          <TableCell align="left">
                            <label>
                              <input
                                style={{
                                  width: "250px",
                                  color: "#7b7b7b",
                                  height: "25px",
                                  border: "1px solid #c6c6c6",
                                  borderRadius: "5px",
                                  background: "none",
                                }}
                                type="date"
                                name="end_date_normalizer"
                                min={singleDate.end_date_reviewer}
                                max={singleDate.end_date}
                                value={singleDate.end_date_normalizer}
                                onKeyDown={(e) => {
                                  e.preventDefault();
                                }}
                                onChange={(e) => {
                                  handleDateChange(index, e);
                                  // handleMultipleDate(
                                  //   singleDate.start_date_normalizer,
                                  //   singleDate.end_date_normalizer,
                                  //   e
                                  // );
                                  setIndex1(index);
                                }}
                              />
                            </label>
                          </TableCell>
                          <TableCell></TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell></TableCell>
                          <TableCell align="left">
                            <Typography>
                              <p
                                style={{
                                  fontSize: "16px",
                                }}
                              >
                                IV
                              </p>
                            </Typography>
                          </TableCell>
                          <TableCell align="left">
                            <p>F2F Meeting</p>
                          </TableCell>
                          <TableCell align="left">
                            <label>
                              <input
                                style={{
                                  width: "250px",
                                  color: "#7b7b7b",
                                  height: "25px",
                                  border: "1px solid #c6c6c6",
                                  borderRadius: "5px",
                                  background: "none",
                                }}
                                type="date"
                                name="start_date_F2FMeeting"
                                min={singleDate.end_date_normalizer}
                                max={singleDate.end_date}
                                value={singleDate.start_date_F2FMeeting}
                                onKeyDown={(e) => {
                                  e.preventDefault();
                                }}
                                onChange={(e) => {
                                  handleDateChange(index, e);
                                  // handleMultipleDate(
                                  //   singleDate.start_date_F2FMeeting,
                                  //   singleDate.end_date_F2FMeeting,
                                  //   e
                                  // );
                                  setIndex1(index);
                                }}
                              />
                            </label>
                          </TableCell>
                          <TableCell align="left">
                            <label>
                              <input
                                style={{
                                  width: "250px",
                                  color: "#7b7b7b",
                                  height: "25px",
                                  border: "1px solid #c6c6c6",
                                  borderRadius: "5px",
                                  background: "none",
                                }}
                                type="date"
                                name="end_date_F2FMeeting"
                                min={singleDate.end_date_normalizer}
                                max={singleDate.end_date}
                                value={singleDate.end_date_F2FMeeting}
                                onKeyDown={(e) => {
                                  e.preventDefault();
                                }}
                                onChange={(e) => {
                                  handleDateChange(index, e);
                                  // handleMultipleDate(
                                  //   singleDate.start_date_F2FMeeting,
                                  //   singleDate.end_date_F2FMeeting,
                                  //   e
                                  // );
                                  setIndex1(index);
                                }}
                              />
                            </label>
                          </TableCell>
                          <TableCell></TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell></TableCell>
                          <TableCell align="left">
                            <Typography>
                              <p
                                style={{
                                  fontSize: "16px",
                                }}
                              >
                                V
                              </p>
                            </Typography>
                          </TableCell>
                          <TableCell align="left">
                            <p>Employee Acknowledgement</p>
                          </TableCell>
                          <TableCell align="left">
                            <label>
                              <input
                                style={{
                                  width: "250px",
                                  color: "#7b7b7b",
                                  height: "25px",
                                  border: "1px solid #c6c6c6",
                                  borderRadius: "5px",
                                  background: "none",
                                }}
                                type="date"
                                name="start_date_employee_acknowledgement"
                                min={singleDate.end_date_F2FMeeting}
                                max={singleDate.end_date}
                                value={
                                  singleDate.start_date_employee_acknowledgement
                                }
                                onKeyDown={(e) => {
                                  e.preventDefault();
                                }}
                                onChange={(e) => {
                                  handleDateChange(index, e);
                                  // handleMultipleDate(
                                  //   singleDate.start_date_employee_acknowledgement,
                                  //   singleDate.end_date_employee_acknowledgement,
                                  //   e
                                  // );
                                  setIndex1(index);
                                }}
                              />
                            </label>
                          </TableCell>
                          <TableCell align="left">
                            <label>
                              <input
                                style={{
                                  width: "250px",
                                  color: "#7b7b7b",
                                  height: "25px",
                                  border: "1px solid #c6c6c6",
                                  borderRadius: "5px",
                                  background: "none",
                                }}
                                type="date"
                                name="end_date_employee_acknowledgement"
                                min={singleDate.end_date_F2FMeeting}
                                max={singleDate.end_date}
                                value={
                                  singleDate.end_date_employee_acknowledgement
                                }
                                onKeyDown={(e) => {
                                  e.preventDefault();
                                }}
                                onChange={(e) => {
                                  handleDateChange(index, e);
                                  // handleMultipleDate(
                                  //   singleDate.start_date_employee_acknowledgement,
                                  //   singleDate.end_date_employee_acknowledgement,
                                  //   e
                                  // );
                                  setIndex1(index);
                                }}
                              />
                            </label>
                          </TableCell>
                          <TableCell></TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell></TableCell>
                          <TableCell align="left">
                            <Typography>
                              <p
                                style={{
                                  fontSize: "16px",
                                }}
                              >
                                VI
                              </p>
                            </Typography>
                          </TableCell>
                          <TableCell align="left">
                            <p>Mediation</p>
                          </TableCell>
                          <TableCell align="left">
                            <label>
                              <input
                                style={{
                                  width: "250px",
                                  color: "#7b7b7b",
                                  height: "25px",
                                  border: "1px solid #c6c6c6",
                                  borderRadius: "5px",
                                  background: "none",
                                }}
                                type="date"
                                name="start_date_mediation"
                                min={
                                  singleDate.end_date_employee_acknowledgement
                                }
                                max={singleDate.end_date}
                                value={singleDate.start_date_mediation}
                                onKeyDown={(e) => {
                                  e.preventDefault();
                                }}
                                onChange={(e) => {
                                  handleDateChange(index, e);
                                  // handleMultipleDate(
                                  //   singleDate.start_date_mediation,
                                  //   singleDate.end_date_mediation,
                                  //   e
                                  // );
                                  setIndex1(index);
                                }}
                              />
                            </label>
                          </TableCell>
                          <TableCell align="left">
                            <label>
                              <input
                                style={{
                                  width: "250px",
                                  color: "#7b7b7b",
                                  height: "25px",
                                  border: "1px solid #c6c6c6",
                                  borderRadius: "5px",
                                  background: "none",
                                }}
                                type="date"
                                name="end_date_mediation"
                                min={
                                  singleDate.end_date_employee_acknowledgement
                                }
                                max={singleDate.end_date}
                                value={singleDate.end_date_mediation}
                                onKeyDown={(e) => {
                                  e.preventDefault();
                                }}
                                onChange={(e) => {
                                  handleDateChange(index, e);
                                  // handleMultipleDate(
                                  //   singleDate.start_date_mediation,
                                  //   singleDate.end_date_mediation,
                                  //   e
                                  // );
                                  setIndex1(index);
                                }}
                              />
                            </label>
                          </TableCell>
                          <TableCell></TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell></TableCell>
                          <TableCell align="left">
                            <Typography>
                              <p
                                style={{
                                  fontSize: "16px",
                                }}
                              >
                                VII
                              </p>
                            </Typography>
                          </TableCell>
                          <TableCell align="left">
                            <p>Re-normalization</p>
                          </TableCell>
                          <TableCell align="left">
                            <label>
                              <input
                                style={{
                                  width: "250px",
                                  color: "#7b7b7b",
                                  height: "25px",
                                  border: "1px solid #c6c6c6",
                                  borderRadius: "5px",
                                  background: "none",
                                }}
                                type="date"
                                name="start_date_re_normalization"
                                min={singleDate.end_date_mediation}
                                max={singleDate.end_date}
                                value={singleDate.start_date_re_normalization}
                                onKeyDown={(e) => {
                                  e.preventDefault();
                                }}
                                onChange={(e) => {
                                  handleDateChange(index, e);
                                  // handleMultipleDate(
                                  //   singleDate.start_date_re_normalization,
                                  //   singleDate.end_date_re_normalization,
                                  //   e
                                  // );
                                  setIndex1(index);
                                }}
                              />
                            </label>
                          </TableCell>
                          <TableCell align="left">
                            <label>
                              <input
                                style={{
                                  width: "250px",
                                  color: "#7b7b7b",
                                  height: "25px",
                                  border: "1px solid #c6c6c6",
                                  borderRadius: "5px",
                                  background: "none",
                                }}
                                type="date"
                                name="end_date_re_normalization"
                                min={singleDate.end_date_mediation}
                                max={singleDate.end_date}
                                value={singleDate.end_date_re_normalization}
                                onKeyDown={(e) => {
                                  e.preventDefault();
                                }}
                                onChange={(e) => {
                                  handleDateChange(index, e);
                                  // handleMultipleDate(
                                  //   singleDate.start_date_re_normalization,
                                  //   singleDate.end_date_re_normalization,
                                  //   e
                                  // );
                                  setIndex1(index);
                                }}
                              />
                            </label>
                          </TableCell>
                          <TableCell></TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell></TableCell>
                          <TableCell align="left">
                            <Typography>
                              <p
                                style={{
                                  fontSize: "16px",
                                }}
                              >
                                VIII
                              </p>
                            </Typography>
                          </TableCell>
                          <TableCell align="left">
                            <p>Closing</p>
                          </TableCell>
                          <TableCell align="left">
                            <label>
                              <input
                                style={{
                                  width: "250px",
                                  color: "#7b7b7b",
                                  height: "25px",
                                  border: "1px solid #c6c6c6",
                                  borderRadius: "5px",
                                  background: "none",
                                }}
                                type="date"
                                name="start_date_closing"
                                min={singleDate.end_date_re_normalization}
                                max={singleDate.end_date}
                                value={singleDate.start_date_closing}
                                onKeyDown={(e) => {
                                  e.preventDefault();
                                }}
                                onChange={(e) => {
                                  handleDateChange(index, e);
                                  // handleMultipleDate(
                                  //   singleDate.start_date_closing,
                                  //   singleDate.end_date_closing,
                                  //   e
                                  // );
                                  setIndex1(index);
                                }}
                              />
                            </label>
                          </TableCell>
                          <TableCell align="left">
                            <label>
                              <input
                                style={{
                                  width: "250px",
                                  height: "25px",
                                  color: "#7b7b7b",
                                  border: "1px solid #c6c6c6",
                                  borderRadius: "5px",
                                  background: "none",
                                }}
                                type="date"
                                name="end_date_closing"
                                // min={singleDate.start_date_closing}
                                min={singleDate.end_date}
                                max={singleDate.end_date}
                                value={singleDate.end_date_closing}
                                onKeyDown={(e) => {
                                  e.preventDefault();
                                }}
                                onChange={(e) => {
                                  handleDateChange(index, e);
                                  // handleMultipleDate(
                                  //   singleDate.start_date_closing,
                                  //   singleDate.end_date_closing,
                                  //   e
                                  // );
                                  setIndex1(index);
                                }}
                              />
                            </label>
                          </TableCell>
                          <TableCell></TableCell>
                        </TableRow>
                      </TableBody>
                    )}
                  </>
                );
              })}
          </Table>
        </TableContainer>
        <Stack
          alignItems="center"
          direction="row"
          justifyContent="center"
          spacing={2}
          sx={{ paddingTop: "15px" }}
        >
          {/* <Link to={`${CALENDER_VIEWPAGE}`}> */}
          <Button
            disabled={error || dateError}
            style={{
              textTransform: "none",
              backgroundColor: "#014D76",
              fontSize: "16px",
              fontFamily: "sans-serif",
              padding: "4px 19px",
            }}
            variant="contained"
            onClick={() => {
              // errorHandler();
              errorTextField();
              calenderEmpty();
            }}
          >
            Save
          </Button>
          {/* </Link> */}
          <Link to={MASTER_NAV}>
            <Button
              style={{
                textTransform: "none",
                fontSize: "14px",
                borderRadius: 8,
                borderColor: "#014D76",
                color: "#014D76",
                fontFamily: "sans-serif",
                padding: "5px 13px",
              }}
              variant="outlined"
            >
              Cancel
            </Button>
          </Link>
        </Stack>
      </Container>
    </>
  );
};

export default MyAccordion;
