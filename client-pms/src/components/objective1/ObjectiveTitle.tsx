import React, { useEffect, useState } from "react";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import EditTwoTone from "@mui/icons-material/EditTwoTone";
import { Alert, Box, Grid, Stack, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import { Link } from "react-router-dom";
import {
  ADD_OBJECTIVE_DESCRIPTION,
  EDIT_OBJECTIVE_DESCRIPTION,
  VIEW_ALL,
  VIEW_OBJECTIVE_DESCRIPTION,
} from "../../constants/routes/Routing";
import { Scrollbar } from "react-scrollbars-custom";
import Close from "../../assets/Images/Close.svg";
import Edit from "../../assets/Images/Edit.svg";
import Tooltip from "@mui/material/Tooltip";
import Addicon from "../../assets/Images/Addicon.svg";
import Viewicon from "../../assets/Images/Viewicon.svg";
import { useNavigate } from "react-router-dom";
import { AlertDialog } from "..";
import MenuItem from "@mui/material/MenuItem";
import {
  Button,
  FormControl,
  InputLabel,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import Viewall from "../objective1/Viewall";
//var h = window.innerHeight;
//console.log(h)

//const window {
// width: window.innerWidth,
// height: window.innerHeight,
//}

let box = document.querySelector(".our-find-part");
console.log(`height of ${box}`);
//let height = box.offsetTop;

//setTimeout(() => {
// let height = document.getElementById('objectiveDescription')!.offsetHeight;
//console.log(`new height is ${height}`)
//}, 5000);

const ObjectiveTitle = (props: any) => {
  const {
    objectiveTitleData,
    onEdit,
    onDelete,
    objectiveTitleCreate,
    titleError1,
    titleError2,
  } = props;

  const navigate = useNavigate();
  const [newId, setNewId] = useState("");
  const [duplicateError1, setDuplicateError1] = useState<any>(titleError1);
  const [duplicateError2, setDuplicateError2] = useState(titleError2);
  const [open, setOpen] = useState(false);
  const [description, setDescription] = useState("");
  const [textfeildError, settextfeildError] = useState(false);

  useEffect(() => {
    if (textfeildError && textfeildError === true) {
      setDuplicateError1(false);
      setDuplicateError2(false);
    }
  }, [textfeildError]);

  const errorHandler = () => {
    if (objectiveTitle !== "" && objectiveDefinition !== "") {
      return (
        settextfeildError(false),
        setState(false),
        setHide(true),
        addButtonHandler(),
        navigate(`/objective`),
        setObjectiveTitle(""),
        setObjectiveDefinition("")
      );
    } else {
      return settextfeildError(true), setState(true);
    }
  };

  useEffect(() => {
    if (titleError1 === false) {
      setDuplicateError1(false);
    } else if (titleError1 === true) {
      setDuplicateError1(true);
    }
  }, [titleError1]);

  useEffect(() => {
    if (titleError2 === false) {
      setDuplicateError2(false);
    } else if (titleError2 === true) {
      setDuplicateError2(true);
    }
  }, [titleError2]);

  const CancelError = () => {
    setDuplicateError1(false);
    setDuplicateError2(false);
    settextfeildError(false);
  };

  const addObjectiveHandler = () => {
    console.log("run");
    setState(true);
    setHide(false);
  };

  const boxHandler = () => {
    setState(false);
    setHide(true);
  };

  const addButtonHandler = () => {
    setState(false);
    if (edit) {
      return onEdit(objectiveTitle, objectiveDefinition);
    } else {
      return objectiveTitleCreate({
        objective_title: objectiveTitle,
        objective_definition: objectiveDefinition,
      });
    }
  };

  const editHandler = (title: any, definition: any, objectiveId: any) => {
    setObjectiveTitle(title);
    setObjectiveDefinition(definition);
    setState(true);
    setEdit(true);
    navigate(`/objective/${objectiveId}`);
  };

  const handleClickOpen = (id: string, nameAlert: string) => {
    setOpen(true);
    setNewId(id);
    setDescription(nameAlert);
    console.log(description);
  };

  const handleClickClose = () => {
    setOpen(false);
  };

  const handleClickIdClose = () => {
    if (newId) {
      onDelete(newId);
      setOpen(false);
      console.log(newId);
    }
  };
  const [state, setState] = useState(false);
  const [hide, setHide] = useState(true);
  const [edit, setEdit] = useState(false);

  const [objectiveTitle, setObjectiveTitle] = useState("");
  const [objectiveDefinition, setObjectiveDefinition] = useState("");

  console.log(props, "sumb");

  return (
    <>
      {duplicateError1 && (
        <Alert severity="error"> Entered Objective Title already exists </Alert>
      )}

      {duplicateError2 && (
        <Alert severity="error"> Entered Objective Title already exists </Alert>
      )}
      <Box
        display="flex"
        alignItems="flex-start"
        flexDirection="column"
        p={1}
        margin="15px 0px"
        minHeight="40rem"
        height="auto"
        border={1.5}
        borderColor="#e0e0e0"
      >
        <Stack style={{ width: "100%" }} direction="column" spacing={1}>
          <div
            style={{
              alignItems: "baseline",
              borderBottom: "1px solid #e0e0e0",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Grid xs={10}>
              <p
                style={{
                  color: "#004C75",
                  fontSize: "20px",
                  marginTop: "10px",
                  marginLeft: "12px",
                }}
              >
                Objective Title
              </p>
            </Grid>
            <Grid xs={2}>
              <Button
                style={{
                  color: "skyblue",
                  textDecoration: "underline",
                  fontSize: "14px",
                }}
                onClick={() => {
                  setState(true);
                  addObjectiveHandler();
                }}
              >
                Icon
              </Button>
            </Grid>
          </div>
          <Typography align="center">

          {state && (
            <div>
              <Box
                sx={{
                  width: "100%",
                  // width: "16rem",
                  //height: "calc(100vh - 470px)",
                  backgroundColor: "white",
                  marginTop: "18px",
                  marginLeft: "6px",
                  paddingBottom: "10px",
                }}
                boxShadow={"1px 1px 1px 2px rgba(0, 0, 0, 0.1)"}
              >
                <Stack spacing={2}>
                  <form>
                    <Typography
                      align="center"
                      sx={{ fontSize: "13px", color: "#757272" }}
                      marginTop="8px"
                    >
                      <p
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          paddingLeft: "20px",
                        }}
                      >
                        Add Objective Title
                      </p>

                      <TextField
                        id="outlined-size-small"
                        autoComplete="off"
                        variant="outlined"
                        size="small"
                        placeholder="Enter Text"
                        value={objectiveTitle}
                        style={{ width: "90%", paddingBottom: "15px" }}
                        onChange={(e) => setObjectiveTitle(e.target.value)}
                        error={!objectiveTitle && textfeildError}
                        helperText={
                          !objectiveTitle && textfeildError
                            ? "*Title required."
                            : " "
                        }
                      />
                      <div>
                        <label
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            paddingLeft: "20px",
                            paddingBottom: "15px",
                          }}
                          className="label"
                        >
                          Add Objective definition
                        </label>
                      </div>
                      <TextField
                        id="outlined-size-small"
                        autoComplete="off"
                        variant="outlined"
                        value={objectiveDefinition}
                        size="small"
                        placeholder="Enter Text"
                        style={{ width: "90%", paddingBottom: "15px" }}
                        onChange={(e) => setObjectiveDefinition(e.target.value)}
                        error={!objectiveDefinition && textfeildError}
                        helperText={
                          !objectiveDefinition && textfeildError
                            ? "*Objective definition required."
                            : " "
                        }
                      />

                      {/* <FormControl sx={{ m: 1, width: 200, mt: 2 }}>
                      <InputLabel id="label" variant="outlined"></InputLabel>

                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={objectiveTitle}
                        label="Age"
                      >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                      </Select>
                    </FormControl> */}
                    </Typography>
                    <Typography
                      style={{ display: "flex", paddingLeft: "15px" }}
                      align="center"
                    >
                      {state && (
                        <Button
                          style={{
                            textTransform: "none",
                            backgroundColor: "#014D76",
                            fontSize: "14px",
                            fontFamily: "sans-serif",
                            padding: "1px 15px",
                          }}
                          variant="contained"
                          onClick={() => {
                            // objectiveTitleCreate({
                            //   objective_title: objectiveTitle,
                            //   objective_definition: objectiveDefinition,
                            // }).then(() => {
                            //   setObjectiveTitle("");
                            //   setObjectiveDefinition("");
                            //   setState(false);
                            //   setHide(true);
                            //   addButtonHandler();
                            //   navigate(`/objective`)
                            // });
                            errorHandler();
                          }}
                        >
                          Save
                        </Button>
                      )}

                      <Button
                        style={{
                          textTransform: "none",
                          fontSize: "13px",
                          color: "#757272",
                          fontFamily: "sans-serif",
                        }}
                        variant="text"
                        onClick={() => {
                          setState(false);
                          boxHandler();
                          setObjectiveTitle("");
                          setObjectiveDefinition("");
                          navigate(`/objective`);
                          CancelError();
                        }}
                      >
                        Cancel
                      </Button>
                    </Typography>
                  </form>
                </Stack>
              </Box>
            </div>
          )}
          </Typography>
          <Scrollbar
            id="our-find-part"
            style={{ width: "auto", height: "350px" }}
          >
            <div>
              {objectiveTitleData &&
                objectiveTitleData.data.map((i: any) => {
                  console.log(i, "iiiiiiiii");
                  return (
                    <Stack
                      direction="row"
                      justifyContent="space-between"
                      alignItems="center"
                      // spacing={0}
                      borderBottom="1px solid #e0e0e0"
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          marginLeft: "15px",
                        }}
                      >
                        <span
                          style={{
                            borderRadius: "50%",
                            marginRight: "10px",
                            verticalAlign: "middle",
                            width: "6px",
                            height: "6px",
                            display: "inline-block",
                            background: "#939393",
                          }}
                        />
                        <p
                          style={{
                            color: "#333333",
                            fontSize: "14px",
                            // padding:"10px",
                            wordWrap: "break-word",
                            width: "100%",
                            // background:"red"
                          }}
                        >
                          {i.objective_title}
                        </p>
                      </div>

                      <div>
                        <Stack
                          direction="row"
                          justifyContent="space-between"
                          alignItems="center"
                        >
                          <Tooltip title="Edit">
                            <IconButton
                              onClick={() =>
                                editHandler(
                                  i.objective_title,
                                  i.objective_definition,
                                  i._id
                                )
                              }
                            >
                              <img
                                src={Edit}
                                alt="icon"
                                style={{ width: "16px", height: "16px" }}
                              />
                            </IconButton>
                          </Tooltip>
                          <Tooltip title="Delete">
                            <IconButton
                              onClick={() =>
                                handleClickOpen(i._id, i.objective_title)
                              }
                            >
                              <img
                                src={Close}
                                alt="icon"
                                style={{ width: "16px", height: "16px" }}
                              />
                            </IconButton>
                          </Tooltip>
                        </Stack>
                        <AlertDialog
                          isAlertOpen={open}
                          handleAlertOpen={() =>
                            handleClickOpen(i._id, i.objective_title)
                          }
                          handleAlertClose={handleClickClose}
                          handleAlertIdClose={handleClickIdClose}
                          rowAlert={i}
                        >
                          {" "}
                          All the details mapped with this type will be deleted.
                          Are you sure to delete {description}?
                        </AlertDialog>
                      </div>
                    </Stack>
                  );
                })}
            </div>
          </Scrollbar>
        </Stack>

        {/*{objectiveDescriptionData && objectiveDescriptionData.data.map((i: any) => {*/}
        {/*    return (*/}
        {/*        <Box p={1} color="black" fontSize="18px">*/}
        {/*            <span>  <FiberManualRecordIcon sx={{fontSize: "small", color: "gray"}}/> </span>*/}
        {/*            {i.description}*/}

        {/*            <IconButton>*/}
        {/*                < EditTwoTone fontSize="small"/>*/}
        {/*            </IconButton>*/}

        {/*            <IconButton>*/}
        {/*                <CancelOutlinedIcon fontSize="small"/>*/}
        {/*            </IconButton>*/}
        {/*        </Box>*/}

        {/*    )*/}
        {/*})}*/}

        {/*<Box p={1} bgcolor="background.paper" color="black" fontSize="18px">*/}
        {/*    <span>  <FiberManualRecordIcon sx={{fontSize: "small", color: "gray"}}/> </span>*/}
        {/*   */}
        {/*    <IconButton>*/}
        {/*        < EditTwoTone fontSize="small"/>*/}
        {/*    </IconButton>*/}

        {/*    <IconButton>*/}
        {/*        <CancelOutlinedIcon fontSize="small"/>*/}
        {/*    </IconButton>*/}
        {/*</Box>*/}

        {/*<Stack spacing={3}>*/}
        {/*    <Typography align="center">*/}
        {/*        <Button variant="outlined"*/}
        {/*                style={{*/}
        {/*                    borderColor: "#185f9e",*/}
        {/*                    textTransform: "none",*/}
        {/*                    color: "#185f9e",*/}
        {/*                    padding: "6px 8px",*/}
        {/*                    fontSize: "14px",*/}
        {/*                    width: "230px",*/}
        {/*                    borderRadius: 9,*/}
        {/*                    fontFamily: " Arial"*/}
        {/*                }}*/}
        {/*        >*/}
        {/*            <Link to={`${ADD_OBJECTIVE_DESCRIPTION}`}>*/}
        {/*                &#10011; Add objective description*/}
        {/*            </Link>*/}

        {/*        </Button>*/}
        {/*    </Typography>*/}
        {/*    <Typography align="center">*/}
        {/*        <Button variant="outlined"*/}
        {/*                style={{*/}
        {/*                    borderColor: "#185f9e",*/}
        {/*                    textTransform: "none",*/}
        {/*                    color: "#185f9e",*/}
        {/*                    padding: "6px 8px",*/}
        {/*                    fontSize: "14px",*/}
        {/*                    width: "230px",*/}
        {/*                    borderRadius: 9,*/}
        {/*                    fontFamily: " Arial"*/}
        {/*                }}*/}
        {/*        >*/}
        {/*            <Link to={`${VIEW_OBJECTIVE_DESCRIPTION}`}> &#128065; View Objective Description</Link>*/}

        {/*        </Button>*/}
        {/*    </Typography>*/}
        {/*</Stack>*/}
        {/* <Typography align="center">
        <div>
          <Button
            variant="outlined"
            style={{
              borderColor: "#004C75",
              textTransform: "none",
              color: "#004C75",
              padding: "6px 8px",
              fontSize: "14px",
              width: "230px",
              borderRadius: 9,
              fontFamily: " Arial",
              margin: "20px",
              marginTop: "25px",
            }}
          >
            <Link to={`${ADD_OBJECTIVE_DESCRIPTION}`}>
              <Stack
                direction="row"
                spacing={1}
                alignItems="center"
                style={{ fontFamily: "regular" }}
              >
                <div>
                  <img src={Addicon} alt="icon" />
                </div>
                <div>
                  Add Objective Description
                </div>
              </Stack>
            </Link>
          </Button>

          <Button
            variant="outlined"
            style={{
              borderColor: "#004C75",
              textTransform: "none",
              color: "#004C75",
              padding: "6px 8px",
              fontSize: "14px",
              width: "230px",
              borderRadius: 9,
              fontFamily: " Arial",
            }}
          >
            <Link to={`${VIEW_OBJECTIVE_DESCRIPTION}`}>
              <Stack
                direction="row"
                spacing={1}
                alignItems="center"
                style={{ fontFamily: "regular" }}
              >
                <div>
                  <img src={Viewicon} alt="icon" />
                </div>
                <div>View Objective Description</div>
              </Stack>
            </Link>
          </Button>
        </div>
      </Typography> */}
        {/* <Typography align="center">
          {hide && (
            <Button
              variant="outlined"
              style={{
                borderColor: "#004C75",
                textTransform: "none",
                color: "#004C75",
                padding: "3px 15px",
                fontSize: "12px",
                borderRadius: 9,
                fontFamily: " Arial",
                marginTop: "26px",
                marginLeft: "60px",
              }}
              onClick={() => {
                setState(true);
                addObjectiveHandler();
              }}
            >
              <Stack
                style={{ fontFamily: "regular" }}
                direction="row"
                spacing={1}
                alignItems="center"
              >
                <div>
                  <img src={Addicon} alt="icon" />
                </div>
                <div>Add Objective Title</div>
              </Stack>
            </Button>
          )} */}
         
       
      </Box>
    </>
  );
};

export default ObjectiveTitle;
