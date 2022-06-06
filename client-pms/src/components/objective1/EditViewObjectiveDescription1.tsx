/* eslint-disable */
import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import EditTwoTone from "@mui/icons-material/EditTwoTone";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import { Container, TextField, IconButton } from "@mui/material";
import { Link, useParams } from "react-router-dom";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import {
  useCreateObjectiveDescriptionMutation, useGetObjectiveDescriptionQuery,
  useGetObjectiveTitleQuery,
  useGetObjectiveTypeQuery, useGetSingleObjectiveDescriptionQuery, useUpdateObjectiveDescriptionMutation,
} from "../../service";
import InputLabel from "@mui/material/InputLabel";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { useNavigate } from "react-router-dom";
import {
  EDITVIEW_OBJECTIVE_DESCRIPTION_1,
  OBJECTIVE,
  VIEW_OBJECTIVE_DESCRIPTION, VIEW_OBJECTIVE_DESCRIPTION_1,
} from "../../constants/routes/Routing";
import PAMaster from "../UI/PAMaster";
import Leftarrow from "../../assets/Images/Leftarrow.svg";
import Typography from "@mui/material/Typography";
import { Alert } from "@mui/material";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Menu from "@mui/material/Menu";
import {
  CREATE_CALENDER,
  CREATE_MAPPING,
  MASTER_NAV,
  VIEW_TEMPLATE,
} from "../../constants/routes/Routing";
import { AlertDialog } from "..";
import Switch from "@mui/material/Switch";
import Tooltip from "@mui/material/Tooltip";
import Close from "../../assets/Images/Close.svg";
import Plus from "../../assets/Images/Plus.svg";

import Edit from "../../assets/Images/Edit.svg";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import { Scrollbar } from "react-scrollbars-custom";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";

function createData(
  number: number,
  objectivedescription: any,
  detaileddescription: any,
  criteria: any,
  linktobojectivetype: any,
  action: any
) {
  return {
    number,
    objectivedescription,
    detaileddescription,
    criteria,
    linktobojectivetype,
    action,
  };
}

const rows = [
  createData(
    1,
    "Knowledge of the job",
    "The extent to which the employee applies the knowledge and skills involved in the current job (please use the JD as a reference)",
    "Rating",
    "Job competencies",
    <Button variant="contained">Add</Button>
  ),
];
const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    // expandIcon={<ArrowForwardIosSharpIcon sx={{fontSize: "0.9rem"}}/>}
    {...props}
  />
))(({ theme }) => ({
  // backgroundColor:
  //   theme.palette.mode === "dark"
  //     ? "rgba(255, 255, 255, .05)"
  //     : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

function TabPanel(props: any) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

export default function EditViewObjectiveDescription1(props: any) {

  const { id } = useParams()
  const [expanded, setExpanded] = React.useState<string | false>("panel1");

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };
  const {
    onSubmit,

    errorObjectiveDescription1,
    errorObjectiveDescription2,
    data1,
  } = props;

  const [objectiveType, setObjectiveType] = React.useState("");
  const [criteria, setCriteria] = React.useState("Rating");
  const [description, setDescription] = React.useState("");
  const [detailedDescription, setDetailedDescription] = React.useState("");
  const [objectiveTitle, setObjectiveTitle] = React.useState("");
  const [activeLevel, setActiveLevel] = React.useState(0);

  const [textfeildError, settextfeildError] = useState(false);
  const [hideLevel, setHideLevel] = useState(false);
  const [checked, setChecked] = useState(false);

  const [level_1, setLevel_1] = useState<any>([{ behavioral_objective: "" }]);
  const [level_3, setLevel_3] = useState<any>([{ behavioral_objective: "" }]);
  const [level_2, setLevel_2] = useState<any>([{ behavioral_objective: "" }]);
  const [level_4, setLevel_4] = useState<any>([{ behavioral_objective: "" }]);

  const [level_1_definition, setLevel_1_definition] = useState<any>("");
  const [level_2_definition, setLevel_2_definition] = useState<any>("");
  const [level_3_definition, setLevel_3_definition] = useState<any>("");
  const [level_4_definition, setLevel_4_definition] = useState<any>("");

  console.log(level_1, "level_1");

  const { data: objectiveTypeData } = useGetObjectiveTypeQuery("");
  const { data: objectiveTitleData } = useGetObjectiveTitleQuery("");
  const [createObjectiveDescription] = useCreateObjectiveDescriptionMutation();
  const { data: defaultValue } = useGetSingleObjectiveDescriptionQuery(id)
  const [updateObjectiveDescription] = useUpdateObjectiveDescriptionMutation()

  const {data: objectiveDescriptionData} = useGetObjectiveDescriptionQuery('')
  console.log(defaultValue)

  const errorHandler = () => {
    if (description !== "" && objectiveType !== "") {
      return settextfeildError(false), submitHandler();
    } else {
      return settextfeildError(true);
    }
  };
  const { name } = props;
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  //   useEffect(() => {

  //   //  errorHandler ( () => {
  //   //   if (description !== "" && detailedDescription !== "") {
  //   //     return settextfeildError(false), submitHandler();
  //   //   } else {
  //   //     return settextfeildError(true);

  //   //   }

  //   // });

  //   errorHandler()
  // }, [description,detailedDescription, objectiveType]);
  const getBehavioralObjectiveFromLevel = (level: any) => {
    return level.map((item: any) => item.behavioral_objective);
  };

  const tabValue = ["Level1", "Level2", "Level3", "Level4"];
  const handleChangeTabs = (event: React.SyntheticEvent, newValue: number) => {
    setActiveLevel(newValue);
  };

  const handleLevelAdd1 = () => {
    setLevel_1([...level_1, { behavioral_objective: "" }]);
  };

  const handleLevelRemove1 = (index: any) => {
    const newleLevel1 = [...level_1];
    console.log(index, "index");
    newleLevel1.splice(index, 1);
    setLevel_1(newleLevel1);
  };

  const handleChangeLevel1 = (e: any, index: number) => {
    const { name, value } = e.target;
    const newleLevel1 = [...level_1];
    // @ts-ignore
    newleLevel1[index].behavioral_objective = value;
    setLevel_1(newleLevel1);
  };

  const handleLevelAdd2 = () => {
    setLevel_2([...level_2, { behavioral_objective: "" }]);
  };

  const handleLevelRemove2 = (index: any) => {
    const newleLevel2 = [...level_2];
    console.log(index, "index");
    newleLevel2.splice(index, 1);
    setLevel_2(newleLevel2);
  };

  const handleChangeLevel2 = (e: any, index: number) => {
    const { name, value } = e.target;
    const newleLevel2 = [...level_2];
    // @ts-ignore
    newleLevel2[index].behavioral_objective = value;
    setLevel_2(newleLevel2);
  };

  const handleLevelAdd3 = () => {
    setLevel_3([...level_3, { behavioral_objective: "" }]);
  };

  const handleLevelRemove3 = (index: any) => {
    const newleLevel3 = [...level_3];
    console.log(index, "index");
    newleLevel3.splice(index, 1);
    setLevel_3(newleLevel3);
  };

  const handleChangeLevel3 = (e: any, index: number) => {
    const { name, value } = e.target;
    const newleLevel3 = [...level_3];
    // @ts-ignore
    newleLevel3[index].behavioral_objective = value;
    setLevel_3(newleLevel3);
  };

  const handleLevelAdd4 = () => {
    setLevel_4([...level_4, { behavioral_objective: "" }]);
  };

  const handleLevelRemove4 = (index: any) => {
    const newleLevel4 = [...level_4];
    console.log(index, "index");
    newleLevel4.splice(index, 1);
    setLevel_4(newleLevel4);
  };

  const handleChangeLevel4 = (e: any, index: number) => {
    const { name, value } = e.target;
    const newleLevel4 = [...level_4];
    // @ts-ignore
    newleLevel4[index].behavioral_objective = value;
    setLevel_4(newleLevel4);
  };

  useEffect(() => {
    if (defaultValue) {
      setDescription(defaultValue.data.description);
      setCriteria(defaultValue.data.criteria);
      setDetailedDescription(defaultValue.data.detailed_description);
      setObjectiveType(defaultValue.data.objective_type._id);
      setObjectiveTitle(defaultValue.data.objective_title._id)
      setLevel_1_definition(defaultValue.data.level_1.level_definition)
      setLevel_2_definition(defaultValue.data.level_2.level_definition)
      setLevel_3_definition(defaultValue.data.level_3.level_definition)
      setLevel_4_definition(defaultValue.data.level_4.level_definition)
      setLevel_1(() => defaultValue.data.level_1.behavioral_objective.map((k: any) => {
        return {
          behavioral_objective: k
        }
      }))
      setLevel_2(() => defaultValue.data.level_2.behavioral_objective.map((k: any) => {
        return {
          behavioral_objective: k
        }
      }))

      setLevel_3(() => defaultValue.data.level_3.behavioral_objective.map((k: any) => {
        return {
          behavioral_objective: k
        }
      }))

      setLevel_4(() => defaultValue.data.level_4.behavioral_objective.map((k: any) => {
        return {
          behavioral_objective: k
        }
      }))
    }
  }, [defaultValue]);
  console.log(description);

  let navigate = useNavigate();

  // const [createObjectiveDescription, {isSuccess, isError}] =
  //     useCreateObjectiveDescriptionMutation();

  const submitHandler = () => {
    // if (isError === false) {

    //   navigate(`${VIEW_OBJECTIVE_DESCRIPTION}`);
    // }

    onSubmit(objectiveType, criteria, description, detailedDescription);
    setDescription("");
    setDetailedDescription("");
    setObjectiveType("");
  };

  const ObjectiveTypeDropDown = () => {
    const handleSelectChange = (event: SelectChangeEvent) => {
      setObjectiveType(event.target.value as string);
    };

    return (
      <>
        {/* <FormControl sx={{ m: 1, width: 200 }}>
          <InputLabel
            style={{ marginTop: "-7px", fontSize: "14px" }}
            variant="outlined"
          >
            Select
          </InputLabel>

          <Select
            label="Select"
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={objectiveType}
            onChange={handleSelectChange}
            style={{ height: "40px" }}
          >
            {data &&
              data.data.map((objectiveType: any) => {
                return [
                  <MenuItem
                    style={{ fontSize: "14px" }}
                    value={objectiveType._id}
                  >
                    {objectiveType.name}
                  </MenuItem>,
                ];
              })}
          </Select>
        </FormControl> */}
        <FormControl sx={{ m: 1, width: 200 }}>
          <Select
            // select
            label={objectiveType === "" ? "Select" : ""}
            id="outlined-select-select"
            variant="outlined"
            size="small"
            style={{ marginTop: "25px" }}
            value={objectiveType}
            error={!objectiveType && textfeildError}
            // helperText={
            //     !objectiveType && textfeildError
            //         ? "*Objective type required."
            //         : " "
            // }
            // onChange={handleSelectChange}
            onChange={(e: { target: { value: any } }) => {
              setObjectiveType(e.target.value);
            }}
          >
            {objectiveTypeData &&
              objectiveTypeData.data.map((objectiveType: any) => {
                console.log(objectiveType, "select");
                return [
                  <MenuItem
                    style={{ fontSize: "14px" }}
                    value={objectiveType._id}
                  >
                    {objectiveType.name}
                  </MenuItem>,
                ];
              })}
          </Select>
        </FormControl>
      </>
    );
  };

  const handleLevel = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
    setHideLevel(!hideLevel);
  };

  const Criteria = () => {
    const handleSelectChange = (event: SelectChangeEvent) => {
      setCriteria(event.target.value as string);
    };

    return (
      <>
        <Switch checked={checked} onChange={handleLevel} />
      </>
    );
  };

  console.log(data1);
  return (
    <>
      {/* <PAMaster name={"Performance Appraisal"} /> */}

      {/* <Typography
        style={{

          color: "#004C75",
          fontSize: "24px",
          // position:"absolute",
          // bottom:"507px",
          // left:"320px"
          paddingLeft: "24px",
          fontFamily: "regular",
        }}
        component="div"
        sx={{ flexGrow: 1 }}
      >
        <span style={{ marginRight: "8px" }}>
          <IconButton>
            <Link to={OBJECTIVE}>
              <img src={Leftarrow} alt="button" />
            </Link>
          </IconButton>
        </span>

        <label>Objective Description</label>
      </Typography> */}

      <div id="master">
        <Box sx={{ flexGrow: 1 }}>
          <Toolbar>
            <Typography
              style={{
                color: "#004C75",
                fontSize: "24px",
                fontFamily: "regular",
              }}
              component="div"
              sx={{ flexGrow: 1 }}
            >
              <span style={{ marginRight: "4px" }}>
                <IconButton>
                  <Link to={OBJECTIVE}>
                    <img src={Leftarrow} alt="button" />
                  </Link>
                </IconButton>
              </span>

              <label> Objective Description</label>
            </Typography>
            <Button
              style={{
                textTransform: "none",
                color: "#004C75",
                fontSize: "16px",
                marginRight: "30px",
                fontWeight: "400",
              }}
            >
              <Link to="/"> Master</Link>
            </Button>
            <Button
              style={{
                textTransform: "none",
                color: "#004C75",
                fontSize: "16px",
                marginRight: "30px",
                fontWeight: "400",
              }}
              id="basic-button"
              color="inherit"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              Template
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem onClick={handleClose}>
                <Link
                  style={{ color: "GrayText", fontSize: "14px" }}
                  to="/template/create-template"
                >
                  Create Template
                </Link>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <Link
                  style={{ color: "GrayText", fontSize: "14px" }}
                  to={VIEW_TEMPLATE}
                >
                  View Template
                </Link>
              </MenuItem>
              {/* <MenuItem onClick={handleClose}>
                <Link
                  style={{ color: "GrayText", fontSize: "14px" }}
                  to="template/edit-template"
                >
                  Edit Template
                </Link>
              </MenuItem> */}
              <MenuItem onClick={handleClose}>
                <Link
                  style={{ color: "GrayText", fontSize: "14px" }}
                  to={CREATE_MAPPING}
                >
                  Create Mapping
                </Link>
              </MenuItem>
            </Menu>
            <Link to={CREATE_CALENDER}>
              <Button
                style={{
                  textTransform: "none",
                  color: "#004C75",
                  fontSize: "16px",
                  fontWeight: "400",
                }}
              >
                Appraisal Calendar
              </Button>
            </Link>
          </Toolbar>
        </Box>
      </div>
      <Container
        sx={{
          maxWidth: "96% !important",
          height: "calc(100vh - 165px)",
          backgroundColor: "#fff",
          paddingTop: "10px",
        }}
      >
        {errorObjectiveDescription1 && (
          <Alert severity="error">
            Either text field must be empty or entered Objective Description
            already exists!
          </Alert>
        )}
        {errorObjectiveDescription2 && (
          <Alert severity="error">
            Either text field must be empty or entered Objective Description
            already exists!
          </Alert>
        )}
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            paddingBottom: "20px",
          }}
        >
          <Link to= "/objective1/Viewobjectivedescription1">
            <Button
              style={{
                borderRadius: "4px",
                textTransform: "none",
                backgroundColor: "#004D77",
                fontSize: "18px",
                fontFamily: "sans-serif",
                padding: "2px 25px",
              }}
              variant="contained"
            >
              view
            </Button>
          </Link>

        </div>
        <Scrollbar style={{ width: "100%", height: "calc(100vh - 292px)" }}>
          <div>
            {/* <Accordion
                            // expanded={expanded === "panel1"}
                            // onChange={handleChange("panel1")}
                            // sx={{ marginTop: 3 }}
                        > */}
            <AccordionSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
            >
              <Typography style={{ width: "100%" }}>
                <TableContainer>
                  <Table size="small" aria-label="simple table">
                    <TableHead>
                      <TableRow sx={{ bgcolor: "#F7F9FB" }}>
                        <TableCell
                          sx={{
                            fontFamily: "regular",
                            border: 1,
                            borderColor: "lightgrey",
                            color: "#004C75",
                            fontSize: "12px",
                            textAlign: "center",
                          }}
                        >
                          #
                        </TableCell>
                        {/*<TableCell*/}
                        {/*  align="left"*/}
                        {/*  sx={{*/}
                        {/*    fontFamily: "regular",*/}
                        {/*    border: 1,*/}
                        {/*    borderColor: "lightgrey",*/}
                        {/*    color: "#004C75",*/}
                        {/*    fontSize: "12px",*/}
                        {/*  }}*/}
                        {/*>*/}
                        {/*  Objective Type*/}
                        {/*</TableCell>*/}
                        <TableCell
                          align="left"
                          sx={{
                            fontFamily: "regular",
                            border: 1,
                            borderColor: "lightgrey",
                            color: "#004C75",
                            fontSize: "12px",
                          }}
                        >
                          Objective Title
                        </TableCell>
                        {/*<TableCell*/}
                        {/*  align="left"*/}
                        {/*  sx={{*/}
                        {/*    fontFamily: "regular",*/}
                        {/*    border: 1,*/}
                        {/*    borderColor: "lightgrey",*/}
                        {/*    color: "#004C75",*/}
                        {/*    fontSize: "12px",*/}
                        {/*  }}*/}
                        {/*>*/}
                        {/*  Add Levels*/}
                        {/*</TableCell>*/}
                        {/* <TableCell
                    align="left"
                    sx={{
                      fontFamily: "regular",
                      border: 1,
                      borderColor: "lightgrey",
                      color: "#004C75",
                      fontSize: "12px",
                    }}
                  >
                    Link to objective type
                  </TableCell>*/}
                        {/* <TableCell
                          align="center"
                          sx={{
                            fontFamily: "regular",
                            border: 1,
                            borderColor: "lightgrey",
                            color: "#004C75",
                            fontSize: "12px",
                          }}
                        >
                          Action
                        </TableCell> */}
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {rows.map((row) => (
                        <TableRow
                          key={row.number}
                          sx={{
                            "&:last-child td, &:last-child th": {
                              border: 1,
                              borderColor: "lightgrey",
                            },
                          }}
                        >
                          <TableCell
                            component="th"
                            scope="row"
                            width="3%"
                            sx={{
                              border: 1,
                              borderColor: "lightgrey",
                              fontFamily: "regular",
                              color: "#33333",
                              opacity: "80%",
                              textAlign: "center",
                            }}
                          >
                            {row.number}{" "}
                          </TableCell>
                          {/*<TableCell*/}
                          {/*  align="left"*/}
                          {/*  width="38%"*/}
                          {/*  sx={{*/}
                          {/*    border: 1,*/}
                          {/*    padding: 2,*/}
                          {/*    borderColor: "lightgrey",*/}
                          {/*    fontFamily: "regular",*/}
                          {/*    color: "#33333",*/}
                          {/*    opacity: "80%",*/}
                          {/*    fontSize: "14px",*/}
                          {/*  }}*/}
                          {/*>*/}
                            {/*<TextField*/}
                            {/*  select*/}
                            {/*  placeholder="Enter text"*/}
                            {/*  id="outlined-basic"*/}
                            {/*  variant="outlined"*/}
                            {/*  fullWidth*/}
                            {/*  // sx={{ marginTop: "25px" }}*/}
                            {/*  value={objectiveType}*/}
                            {/*  size="small"*/}
                            {/*  onChange={(e) => setObjectiveType(e.target.value)}*/}
                            {/*// error={!description && textfeildError}*/}
                            {/*// helperText={*/}
                            {/*//   !description && textfeildError*/}
                            {/*//     ? "*Description required."*/}
                            {/*//     : " "*/}
                            {/*// }*/}
                            {/*>*/}
                            {/*  {objectiveTypeData &&*/}
                            {/*    objectiveTypeData.data.map(*/}
                            {/*      (objectiveType: any) => {*/}
                            {/*        return [*/}
                            {/*          <MenuItem*/}
                            {/*            style={{ fontSize: "14px" }}*/}
                            {/*            value={objectiveType._id}*/}
                            {/*          >*/}
                            {/*            {objectiveType.name}*/}
                            {/*          </MenuItem>,*/}
                            {/*        ];*/}
                            {/*      }*/}
                            {/*    )}*/}
                            {/*</TextField>*/}
                          {/*</TableCell>*/}
                          <TableCell
                            align="left"
                            width="38%"
                            sx={{
                              border: 1,
                              padding: 1,
                              borderColor: "lightgrey",
                              fontFamily: "regular",
                              color: "#33333",
                              opacity: "80%",
                              fontSize: "14px",
                            }}
                          >
                            <TextField
                              select
                              placeholder="Enter text"
                              id="outlined-basic"
                              variant="outlined"
                              fullWidth
                              // sx={{ marginTop: "25px" }}
                              value={objectiveTitle}
                              size="small"
                              onChange={(e) =>
                                setObjectiveTitle(e.target.value)
                              }
                            // error={!description && textfeildError}
                            // helperText={
                            //   !description && textfeildError
                            //     ? "*Description required."
                            //     : " "
                            // }
                            >
                              {objectiveDescriptionData &&
                                  objectiveDescriptionData.data.map(
                                  (objective_title: any) => {
                                    return [
                                      <MenuItem
                                        style={{ fontSize: "14px" }}
                                        value={objective_title._id}
                                      >
                                        {objective_title.objectiveTitle}
                                      </MenuItem>,
                                    ];
                                  }
                                )}
                            </TextField>
                          </TableCell>



                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>

                <Grid>
                  <Grid container>
                    <Grid
                      style={{
                        borderRight: "1px solid lightgrey",
                        height: "300px",
                        paddingTop: "20px",
                      }}
                      item
                      xs={2}
                    >
                      <Tabs
                        orientation="vertical"
                        variant="scrollable"
                        value={activeLevel}
                        onChange={handleChangeTabs}
                        TabIndicatorProps={{
                          style: {
                            left: 0,
                            borderColor: "divider",
                          },
                        }}
                      >
                        {tabValue.map((k: any) => {
                          return (
                            <Tab
                              // key={k}
                              label={k}
                            // value={k}
                            // onClick={() => handleTabChange(k)}
                            />
                          );
                        })}
                      </Tabs>
                    </Grid>

                    <Grid item xs={10}>
                      <TabPanel value={activeLevel} index={0}>
                        <div
                          style={{ paddingLeft: "30px", paddingBottom: "10px" }}
                        >
                          <p style={{ color: "#004C75" }}>Level definition</p>
                          {/* <p style={{ fontSize:"14px" }}>Level definition</p> */}
                          <TextField
                            // placeholder="Enter Level Definition"
                            style={{ width: "95%" }}
                            size="small"
                            // multiline
                            onChange={(e) =>
                              setLevel_1_definition(e.target.value)
                            }
                            value={level_1_definition}
                          />
                        </div>

                        <div style={{ paddingLeft: "30px" }}>
                          <p style={{ color: "#004C75" }}>
                            Behavioral Objective
                          </p>
                          {/* <p style={{ fontSize:"14px",paddingBottom:"10px"}}>1 Knowledge - Recall of basic Facts</p>
                        <p style={{ fontSize:"14px" }}>2 Enter Behavioral Objective</p> */}

                          {level_1 &&
                            level_1.map((level: any, index: number) => {
                              return (
                                <>
                                  <TextField
                                    placeholder="Enter Behavioral Objective"
                                    style={{ width: "94%" }}
                                    size="small"
                                    multiline
                                    key={index}
                                    value={level_1[index].behavioral_objective}
                                    name="level_1"
                                    onChange={(e: any) =>
                                      handleChangeLevel1(e, index)
                                    }
                                  />

                                  {level_1.length - 1 === index && (
                                    <Tooltip title="Add">
                                      <IconButton onClick={handleLevelAdd1}>
                                        <img src={Plus} alt="icon" />
                                      </IconButton>
                                    </Tooltip>
                                  )}

                                  {level_1.length !== index + 1 && (
                                    <Tooltip title="Delete">
                                      <IconButton
                                        onClick={() =>
                                          handleLevelRemove1(index)
                                        }
                                      >
                                        <img src={Close} alt="icon" />
                                      </IconButton>
                                    </Tooltip>
                                  )}
                                </>
                              );
                            })}
                        </div>
                      </TabPanel>

                      <TabPanel value={activeLevel} index={1}>
                        <div
                          style={{ paddingLeft: "30px", paddingBottom: "10px" }}
                        >
                          <p style={{ color: "#004C75" }}>Level definition</p>
                          {/* <p style={{ fontSize:"14px" }}>Level definition</p> */}
                          <TextField
                            // placeholder="Enter Level Definition"
                            style={{ width: "95%" }}
                            size="small"
                            // multiline
                            onChange={(e: any) =>
                              setLevel_2_definition(e.target.value)
                            }
                            value={level_2_definition}
                          />
                        </div>

                        <div style={{ paddingLeft: "30px" }}>
                          <p style={{ color: "#004C75" }}>
                            Behavioral Objective
                          </p>
                          {/* <p style={{ fontSize:"14px",paddingBottom:"10px"}}>1 Knowledge - Recall of basic Facts</p>
                        <p style={{ fontSize:"14px" }}>2 Enter Behavioral Objective</p> */}

                          {level_2 &&
                            level_2.map((level: any, index: number) => {
                              return (
                                <>
                                  <TextField
                                    placeholder="Enter Behavioral Objective"
                                    style={{ width: "94%" }}
                                    size="small"
                                    multiline
                                    key={index}
                                    value={level_2[index].behavioral_objective}
                                    name="level_2"
                                    onChange={(e: any) =>
                                      handleChangeLevel2(e, index)
                                    }
                                  />

                                  {level_2.length - 1 === index && (
                                    <Tooltip title="Add">
                                      <IconButton onClick={handleLevelAdd2}>
                                        <img src={Plus} alt="icon" />
                                      </IconButton>
                                    </Tooltip>
                                  )}

                                  {level_2.length !== index + 1 && (
                                    <Tooltip title="Delete">
                                      <IconButton
                                        onClick={() =>
                                          handleLevelRemove2(index)
                                        }
                                      >
                                        <img src={Close} alt="icon" />
                                      </IconButton>
                                    </Tooltip>
                                  )}
                                </>
                              );
                            })}
                        </div>
                      </TabPanel>

                      <TabPanel value={activeLevel} index={2}>
                        <div
                          style={{ paddingLeft: "30px", paddingBottom: "10px" }}
                        >
                          <p style={{ color: "#004C75" }}>Level definition</p>
                          {/* <p style={{ fontSize:"14px" }}>Level definition</p> */}
                          <TextField
                            // placeholder="Enter Level Definition"
                            style={{ width: "95%" }}
                            size="small"
                            // multiline
                            onChange={(e: any) =>
                              setLevel_3_definition(e.target.value)
                            }
                            value={level_3_definition}
                          />
                        </div>

                        <div style={{ paddingLeft: "30px" }}>
                          <p style={{ color: "#004C75" }}>
                            Behavioral Objective
                          </p>
                          {/* <p style={{ fontSize:"14px",paddingBottom:"10px"}}>1 Knowledge - Recall of basic Facts</p>
                        <p style={{ fontSize:"14px" }}>2 Enter Behavioral Objective</p> */}

                          {level_3 &&
                            level_3.map((level: any, index: number) => {
                              return (
                                <>
                                  <TextField
                                    placeholder="Enter Behavioral Objective"
                                    style={{ width: "94%" }}
                                    size="small"
                                    multiline
                                    key={index}
                                    value={level_3[index].behavioral_objective}
                                    name="level_3"
                                    onChange={(e: any) =>
                                      handleChangeLevel3(e, index)
                                    }
                                  />

                                  {level_3.length - 1 === index && (
                                    <Tooltip title="Add">
                                      <IconButton onClick={handleLevelAdd3}>
                                        <img src={Plus} alt="icon" />
                                      </IconButton>
                                    </Tooltip>
                                  )}

                                  {level_1.length !== index + 1 && (
                                    <Tooltip title="Delete">
                                      <IconButton
                                        onClick={() =>
                                          handleLevelRemove3(index)
                                        }
                                      >
                                        <img src={Close} alt="icon" />
                                      </IconButton>
                                    </Tooltip>
                                  )}
                                </>
                              );
                            })}
                        </div>
                      </TabPanel>

                      <TabPanel value={activeLevel} index={3}>

                        <div
                          style={{ paddingLeft: "30px", paddingBottom: "10px" }}
                        >
                          <p style={{ color: "#004C75" }}>Level definition</p>
                          {/* <p style={{ fontSize:"14px" }}>Level definition</p> */}
                          <TextField
                            // placeholder="Enter Level Definition"
                            style={{ width: "95%" }}
                            size="small"
                            // multiline
                            onChange={(e: any) =>
                              setLevel_4_definition(e.target.value)
                            }
                            value={level_4_definition}
                          />
                        </div>
                        <div style={{ paddingLeft: "30px" }}>
                          <p style={{ color: "#004C75" }}>
                            Behavioral Objective
                          </p>
                          {/* <p style={{ fontSize:"14px",paddingBottom:"10px"}}>1 Knowledge - Recall of basic Facts</p>
                        <p style={{ fontSize:"14px" }}>2 Enter Behavioral Objective</p> */}

                          {level_4 &&
                            level_4.map((level: any, index: number) => {
                              return (
                                <>
                                  <TextField
                                    placeholder="Enter Behavioral Objective"
                                    style={{ width: "94%" }}
                                    size="small"
                                    multiline
                                    key={index}
                                    value={level_4[index].behavioral_objective}
                                    name="level_4"
                                    onChange={(e: any) =>
                                      handleChangeLevel4(e, index)
                                    }
                                  />

                                  {level_4.length - 1 === index && (
                                    <Tooltip title="Add">
                                      <IconButton onClick={handleLevelAdd4}>
                                        <img src={Plus} alt="icon" />
                                      </IconButton>
                                    </Tooltip>
                                  )}

                                  {level_1.length !== index + 1 && (
                                    <Tooltip title="Delete">
                                      <IconButton
                                        onClick={() =>
                                          handleLevelRemove4(index)
                                        }
                                      >
                                        <img src={Close} alt="icon" />
                                      </IconButton>
                                    </Tooltip>
                                  )}
                                </>
                              );
                            })}
                        </div>
                      </TabPanel>
                    </Grid>
                  </Grid>
                </Grid>

            </AccordionDetails>
            {/* </Accordion> */}
          </div>
        </Scrollbar>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            paddingTop: "20px",
          }}
        >
          <Button
            style={{
              borderRadius: "4px",
              textTransform: "none",
              backgroundColor: "#004D77",
              fontSize: "18px",
              fontFamily: "sans-serif",
              padding: "2px 25px",
            }}
            onClick={() => {
              navigate(`/objective1/Levels-view-all`)

                updateObjectiveDescription({
                  objective_title: objectiveTitle,
                  level_1: {
                    level_definition: level_1_definition,
                    behavioral_objective:
                      getBehavioralObjectiveFromLevel(level_1),
                  },
                  level_2: {
                    level_definition: level_2_definition,
                    behavioral_objective:
                      getBehavioralObjectiveFromLevel(level_2),
                  },
                  level_3: {
                    level_definition: level_3_definition,
                    behavioral_objective:
                      getBehavioralObjectiveFromLevel(level_3),
                  },
                  level_4: {
                    level_definition: level_4_definition,
                    behavioral_objective:
                      getBehavioralObjectiveFromLevel(level_4),
                  },
                  id: objectiveTitle
                })

            }}
            variant="contained"
          >
            Save
          </Button>
          <Button onClick={() => navigate(`/objective1/Levels-view-all`)}>
            Cancel
          </Button>
        </div>
      </Container>
    </>
  );
}
