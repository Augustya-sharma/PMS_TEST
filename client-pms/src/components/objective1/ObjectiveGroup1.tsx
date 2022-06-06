import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import IconButton from "@mui/material/IconButton";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import EditTwoTone from "@mui/icons-material/EditTwoTone";
import AddIcon from "@mui/icons-material/Add";
import { Scrollbar } from "react-scrollbars-custom";
import Close from "../../assets/Images/Close.svg";
import Edit from "../../assets/Images/Edit.svg";
import { styled } from "@mui/system";
import ScrollbarThumb from "react-scrollbars-custom/dist/types/ScrollbarThumb";
import { useNavigate } from "react-router-dom";
import { Alert, fabClasses } from "@mui/material";

import { AlertDialog } from "..";

import Tooltip from "@mui/material/Tooltip";
import Addicon from "../../assets/Images/Addicon.svg";
import { OBJECTIVE } from "../../constants/routes/Routing";

let box = document.querySelector(".our-find-part");
console.log(box);

//let height = box.offsetTop;

const Scroll = styled("div")({
  //"& .ScrollbarsCustom-Thumb": {
  //  background:"red",
  //},
});

const ObjectiveGroup1 = (props: any) => {
  const [showAddObjectiveGroup, setShowAddObjectiveGroup] = useState(false);
  const [name, setName] = useState("");
  const [state, setState] = useState(false);
  const [hide, setHide] = useState(true);
  const [edit, setEdit] = useState(false);

  const [newId, setNewId] = useState("");
  const [open, setOpen] = useState(false);
  const [nname, setNname] = useState("");

  const {
    onSubmit,
    ObjectiveGroupData,
    loading,
    onDelete,
    onEdit,
    errorGroup1,
    errorGroup2,
  } = props;
  console.log(onSubmit, "grp");
  const [duplicateError1, setDuplicateError1] = useState<any>(errorGroup1);
  const [duplicateError2, setDuplicateError2] = useState(errorGroup2);
  const [textfeildError, settextfeildError] = useState(false);
  //console.log(setName);

  // const errorHandler = () => {
  //   if (name === "") {
  //     return settextfeildError(true);
  //   } else {
  //     return settextfeildError(false), setState(false), setHide(true);
  //   }
  // };

  useEffect(() => {
    if (textfeildError && textfeildError === true) {
      setDuplicateError1(false);
      setDuplicateError2(false);
    }
  }, [textfeildError]);

  // useEffect(()=>{
  //   if (textfeildError && textfeildError === true) {
  //    settextfeildError(false)
  //   }
  // },[onSubmit])

  useEffect(() => {
    if (errorGroup1 === false) {
      setDuplicateError1(false);
    } else if (errorGroup1 === true) {
      setDuplicateError1(true);
    }
  }, [errorGroup1]);

  useEffect(() => {
    if (errorGroup2 === false) {
      setDuplicateError2(false);
    } else if (errorGroup2 === true) {
      setDuplicateError2(true);
    }
  }, [errorGroup2]);

  const CancelError = () => {
    setDuplicateError1(false);
    setDuplicateError2(false);
    settextfeildError(false);
  };

  const navigate = useNavigate();

  if (!loading) {
    const { data } = ObjectiveGroupData;
    console.log(data);
  }

  if (loading) {
    return <div>Loading</div>;
  }

  const addButtonHandler = (name: string) => {
    setShowAddObjectiveGroup(true);
    if (edit) {
      return onEdit(name);
    } else if (name === "") {
      return settextfeildError(true);
    } else {
      return (
        settextfeildError(false), setState(false), setHide(true), onSubmit(name)
      );
    }
  };

  const editHandler = (name: string, id: string) => {
    setState(true);
    setHide(false);
    setName(name);
    setShowAddObjectiveGroup(true);
    setEdit(true);
    navigate(`${OBJECTIVE}/${id}`);
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

  const handleClickOpen = (id: string, nameAlert: string) => {
    setOpen(true);
    setNewId(id);
    setNname(nameAlert);
    console.log(nname);
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

  return (
    <div>
      {duplicateError1 && (
        <Alert severity="error">Entered Objective Group already exists!</Alert>
      )}
      {duplicateError2 && (
        <Alert severity="error">Entered Objective Group already exists!</Alert>
      )}
      <Box
        display="flex"
        alignItems="flex-start"
        flexDirection="column"
        p={1}
        margin="15px 0px"
        minHeight="40rem"
        border={1.5}
        borderColor="#e0e0e0"
      >
        {/*<Box p={1} color="#368DC5" fontSize="25px">*/}
        {/*    Objective Group*/}
        {/*</Box>*/}

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
                Objective Group
              </p>
            </Grid>
            <Grid xs={2}>
              {/* {hide && ( */}
              <Typography align="center">
                <Button
                  style={{
                    color: "skyblue",
                    textDecoration: "underline",
                    fontSize: "14px",
                  }}
                  onClick={() => {
                    setShowAddObjectiveGroup(true);
                    addObjectiveHandler();
                  }}
                >
                  Icon
                </Button>
                </Typography>

              {/* )} */}
            </Grid>
          </div>
          <Typography align="center">
            {showAddObjectiveGroup && (
              <div
                style={{
                  width: "95%",
                  height: "calc(100vh - 570px)",
                }}
              >
                {state && (
                  <Box
                    sx={{
                      width: "95%",
                      // height: "calc(100vh - 570px)",
                      backgroundColor: "white",
                      marginTop: "8px",
                      marginLeft: "6px",
                      paddingBottom: "10px",
                    }}
                    boxShadow={"1px 1px 1px 2px rgba(0, 0, 0, 0.1)"}
                  >
                    <Stack
                      spacing={6}
                      style={{
                        width: "95%",
                        //height: "calc(100vh - 570px)"
                      }}
                    >
                      <form
                        style={{
                          width: "95%",
                          //height: "calc(100vh - 570px)"
                        }}
                      >
                        <Typography
                          align="left"
                          sx={{
                            marginLeft: "15px",
                            marginBottom: "1px",
                            fontSize: "13px",
                            color: "#757272",
                          }}
                          marginTop="10px"
                        >
                          <p>Enter Objective Group Name</p>
                          <TextField
                            placeholder="Enter text"
                            autoComplete="off"
                            size="small"
                            type="text"
                            variant="outlined"
                            value={name}
                            style={{ width: "94%" }}
                            error={!name && textfeildError}
                            helperText={
                              !name && textfeildError ? "*Name required." : " "
                            }
                            onChange={(e) => setName(e.target.value)}
                          />
                        </Typography>
                        <Typography
                          style={{ display: "flex", paddingLeft: "15px" }}
                          align="center"
                        >
                          {/* <Grid item xs={6}> */}
                          {showAddObjectiveGroup && (
                            <Button
                              style={{
                                textTransform: "none",
                                backgroundColor: "#014D76",
                                fontSize: "12px",
                                fontFamily: "sans-serif",
                                padding: "1px 15px",
                              }}
                              variant="contained"
                              onClick={() => {
                                // onSubmit(name);

                                // errorHandler();
                                setShowAddObjectiveGroup(
                                  textfeildError ? false : true
                                );
                                //boxHandler();
                                addButtonHandler(name);
                                setName("");
                                navigate(`/objective`);
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
                              setShowAddObjectiveGroup(false);
                              boxHandler();
                              setName("");
                              navigate(`/objective`);
                              CancelError();
                              // setCancelError1(false);
                              // setCancelError2(false)
                            }}
                          >
                            Cancel
                          </Button>
                          {/* </Grid> */}
                        </Typography>
                      </form>
                    </Stack>
                  </Box>
                )}
              </div>
            )}
          </Typography>

          <Scroll>
            <Scrollbar style={{ width: "auto", height: "350px" }}>
            {/* {hide && (  */}
              <div id="our-find-part">
                {ObjectiveGroupData.data &&
                  ObjectiveGroupData.data.map((i: any) => {
                    return (
                      <Stack
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center"
                        // spacing={2}
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
                              width: "5px",
                              height: "5px",
                              display: "inline-block",
                              background: "#939393",
                            }}
                          />

                          <p
                            style={{
                              color: "#333333",
                              fontSize: "14px",
                              wordWrap: "break-word",
                              width: "100%",
                            }}
                          >
                            {i.name}
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
                                onClick={() => editHandler(i.name, i._id)}
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
                                //onClick={() => onDelete(i._id)}
                                onClick={() => handleClickOpen(i._id, i.name)}
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
                              handleClickOpen(i._id, i.description)
                            }
                            handleAlertClose={handleClickClose}
                            handleAlertIdClose={handleClickIdClose}
                            rowAlert={i}
                          >
                            All the details mapped with this group will be
                            deleted. Are you sure to delete {nname}?
                          </AlertDialog>
                        </div>
                      </Stack>
                    );
                  })}
              </div>
             {/* )}  */}
            </Scrollbar>
          </Scroll>
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
                  marginTop: "20px",
                }}
                onClick={() => {
                  setShowAddObjectiveGroup(true);
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
                  <div>Add Objective Group</div>
                </Stack>
              </Button>
            )}
          </Typography> */}
        </Stack>
      </Box>
    </div>
  );
};

export default ObjectiveGroup1;
