import * as React from "react";
import { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import EditTwoTone from "@mui/icons-material/EditTwoTone";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import {
  Avatar,
  Box,
  BoxProps,
  Container,
  Dialog,
  DialogActions,
  DialogContentText,
  DialogTitle,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Menu,
  OutlinedInput,
  Popover,
  Stack,
  Tabs,
  TextField,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Edit from "../../assets/Images/Edit.svg";
import Leftarrow from "../../assets/Images/Leftarrow.svg";
import {
  CREATE_CALENDER,
  CREATE_MAPPING,
  LEVELS_VIEW_ALL,
  MASTER_NAV,
  OBJECTIVE,
  VIEW_TEMPLATE,
} from "../../constants/routes/Routing";
import InputAdornment from "@mui/material/InputAdornment";
import Close from "../../assets/Images/Close.svg";
import white_edit from "../../assets/Images/white_edit.svg";
import Closeicon from "../../assets/Images/Closeicon.svg";
import Plus from "../../assets/Images/Plus.svg";
import Closeiconred from "../../assets/Images/Closeiconred.svg";
import {useGetObjectiveDescriptionQuery, useGetObjectiveGroupQuery, useGetObjectiveTypeQuery} from "../../service";


const Levelsviewalledit = (props: any) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [anchorEl1, setAnchorEl1] = React.useState<null | HTMLElement>(null);
  const [auth, setAuth] = React.useState(true);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl1(event.currentTarget);
  };

  const handleClose1 = () => {
    setAnchorEl1(null);
  };

  const [anchorEl3, setAnchorEl3] = React.useState<null | HTMLElement>(null);
  const [auth3, setAuth3] = React.useState(true);

  const handleMenu3 = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl3(event.currentTarget);
  };

  const handleClose3 = () => {
    setAnchorEl3(null);
  };

  const [open1, setOpen1] = React.useState(false);

  const handleClickOpen = () => {
    setOpen1(true);
  };

  const handleClose4 = () => {
    setOpen1(false);
  };

  function createData(
    number: number,
    ObjectiveGroup: any,
    ObjectiveType: any,
    ObjectiveTitle: any,
    Levels: any,
    Action: any
  ) {
    return {
      number,
      ObjectiveGroup,
      ObjectiveType,
      ObjectiveTitle,
      Levels,
      Action,
    };
  }

  function Item1(props: BoxProps) {
    const { sx, ...other } = props;

    return (
      <Box
        sx={{
          width: "250px",
          height: "20px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          paddingRight: "-20px",
          ...sx,
        }}
        {...other}
      />
    );
  }

  const [anchorEl2, setAnchorEl2] = React.useState<null | HTMLElement>(null);
  const [auth2, setAuth2] = React.useState(true);

  const handleMenu2 = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl2(event.currentTarget);
  };

  const handleClose2 = () => {
    setAnchorEl2(null);
  };



  const [activeLevel, setActiveLevel] = React.useState(0);

  const tabValue = ["Level1", "Level2", "Level3", "Level4"];
  const handleChangeTabs = (event: React.SyntheticEvent, newValue: number) => {
    setActiveLevel(newValue);
  };
    const {
        data: ObjectiveGroupData,
        isLoading: ObjectiveGroupLoading,
        error: ObjectiveGroupError,
        refetch,
    } = useGetObjectiveGroupQuery("");


    const {
        data: objectiveDescriptionData,
        refetch: ObjectiveDescriptionRefetch,
        isLoading: objectiveDescriptionLoading,
    } = useGetObjectiveDescriptionQuery("");

    const {
        data: objectiveType,
        isLoading: ObjectiveTypeLoading,
        refetch: ObjectiveTypeRefetch,
    } = useGetObjectiveTypeQuery("");


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
    const mapObjectiveGroupData = () => {
        let Objectivegrouparray: any = [];
        ObjectiveGroupData.data.forEach((objectiveGroup: any) => {
            //Items which have Objective Title created
            let data = objectiveDescriptionData.data.filter((item: any) => item.objective_type.objective_group == objectiveGroup._id)
            data.forEach((objItem: any) => {
                Objectivegrouparray.push({
                    ObjectiveGroup: objectiveGroup.name,
                    ObjectiveType: objItem.objective_type.name,
                    ObjectiveTitle: objItem.objectiveTitle,
                    Level1: objItem.level_1,
                    Level2: objItem.level_2,
                    Level3: objItem.level_3,
                    Level4: objItem.level_4,
                })
            })
            //Items for which Objective Title has not been mapped
            if (data.length == 0) {
                let objTypData = objectiveType.data.filter((item: any) => item.objective_group._id == objectiveGroup._id)
                objTypData.forEach((item: any) => {
                    let alreadyMapped: any = objectiveDescriptionData.data.filter((item: any) => item.objective_type._id == item._id)
                    if (alreadyMapped.length == 0) {
                        Objectivegrouparray.push({
                            ObjectiveGroup: objectiveGroup.name,
                            ObjectiveType: item.name,
                            ObjectiveTitle: ""
                        })
                    }
                })
                //Items for which Objective Type has not been mapped
                if (objTypData.length == 0) {
                    Objectivegrouparray.push({
                        ObjectiveGroup: objectiveGroup.name,
                        ObjectiveType: "",
                        ObjectiveTitle: ""
                    })
                }
            }
        })
        Objectivegrouparray.reverse();
        return Objectivegrouparray;
    }
  const rows = [
    createData(
      1,
      <FormControl sx={{ m: 1 }} variant="outlined">
        <OutlinedInput
          sx={{ width: "calc(100vh - 500px)", height: "40px" }}
          endAdornment={
            <InputAdornment position="end">
              <IconButton edge="end" onClick={handleMenu2}>
                <img
                  src={Edit}
                  alt="icon"
                  style={{
                    color: "#ffffff",
                    width: "16px",
                    height: "16px",
                    verticalAlign: "middle",
                    paddingRight: "10px",
                  }}
                />
              </IconButton>
              <Popover
                id="menu-appbar"
                anchorEl={anchorEl2}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorEl2)}
                onClose={handleClose2}
                sx={{
                  padding: "5px",
                  "& .MuiPopover-paper": { padding: "10px  " },
                }}
              >
                <Stack direction="column">
                  <p
                    style={{
                      display: "flex",
                      paddingLeft: "15px",
                      fontSize: "13px",
                      color: "#757272",
                    }}
                  >
                    Select Objective Group
                  </p>
                  <div style={{ paddingLeft: "15px" }}>
                    <Select
                      size="small"
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      sx={{ width: "calc(100vh - 480px)", paddingLeft: "15px" }}
                    ></Select>
                  </div>
                </Stack>

                <br />
                <Stack direction="row" sx={{ paddingLeft: "15px" }}>
                  <Button
                    style={{
                      textTransform: "none",
                      backgroundColor: "#014D76",
                      fontSize: "12px",
                      fontFamily: "sans-serif",
                      padding: "4px 5px",
                    }}
                    variant="contained"
                  >
                    Update
                  </Button>

                  <Button
                    style={{
                      textTransform: "none",
                      fontSize: "13px",
                      color: "#757272",
                      fontFamily: "sans-serif",
                    }}
                    variant="text"
                    onClick={handleClose2}
                  >
                    Cancel
                  </Button>
                </Stack>
              </Popover>
            </InputAdornment>
          }
          placeholder="Job Objectives"
        />
      </FormControl>,
      <FormControl sx={{ m: 1 }} variant="outlined">
        <OutlinedInput
          sx={{ width: "calc(100vh - 500px)", height: "40px" }}
          endAdornment={
            <InputAdornment position="end">
              <IconButton edge="end" onClick={handleMenu}>
                <img
                  src={Edit}
                  alt="icon"
                  style={{
                    color: "#ffffff",
                    width: "16px",
                    height: "16px",
                    verticalAlign: "middle",
                    paddingRight: "10px",
                  }}
                />
              </IconButton>
              <Popover
                id="menu-appbar"
                anchorEl={anchorEl1}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorEl1)}
                onClose={handleClose}
                sx={{
                  padding: "5px",
                  "& .MuiPopover-paper": { padding: "10px  " },
                }}
              >
                <Stack direction="column">
                  <p
                    style={{
                      display: "flex",
                      paddingLeft: "15px",
                      fontSize: "13px",
                      color: "#757272",
                    }}
                  >
                    Enter Objective Type Name
                  </p>

                  <TextField
                    placeholder="Enter text"
                    autoComplete="off"
                    id="outlined-size-small"
                    variant="outlined"
                    size="small"
                    style={{
                      width: "calc(100vh - 480px)",
                      paddingLeft: "15px",
                    }}
                  />
                </Stack>
                <br />
                <Stack>
                  <p
                    style={{
                      display: "flex",
                      paddingLeft: "15px",
                      fontSize: "13px",
                      color: "#757272",
                    }}
                  >
                    Select Objective Group
                  </p>
                  <FormControl
                    sx={{
                      width: "90%",
                      marginBottom: "10px",
                      maxHeight: "110px",
                      paddingLeft: "15px",
                    }}
                  >
                    <Select
                      size="small"
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      sx={{ width: "calc(100vh - 480px)" }}
                    ></Select>
                  </FormControl>
                </Stack>
                <br />
                <Stack direction="row" sx={{ paddingLeft: "15px" }}>
                  <Button
                    style={{
                      textTransform: "none",
                      backgroundColor: "#014D76",
                      fontSize: "12px",
                      fontFamily: "sans-serif",
                      padding: "4px 5px",
                    }}
                    variant="contained"
                  >
                    Update
                  </Button>

                  <Button
                    style={{
                      textTransform: "none",
                      fontSize: "13px",
                      color: "#757272",
                      fontFamily: "sans-serif",
                    }}
                    variant="text"
                    onClick={handleClose1}
                  >
                    Cancel
                  </Button>
                </Stack>
              </Popover>
            </InputAdornment>
          }
          placeholder="Individual"
        />
      </FormControl>,
      <FormControl sx={{ m: 1 }} variant="outlined">
        <OutlinedInput
          sx={{ width: "calc(100vh - 500px)", height: "40px" }}
          endAdornment={
            <InputAdornment position="end">
              <IconButton edge="end" onClick={handleMenu3}>
                <img
                  src={Edit}
                  alt="icon"
                  style={{
                    color: "#ffffff",
                    width: "16px",
                    height: "16px",
                    verticalAlign: "middle",
                    paddingRight: "10px",
                  }}
                />
              </IconButton>
              <Popover
                id="menu-appbar"
                anchorEl={anchorEl3}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorEl3)}
                onClose={handleClose3}
                sx={{
                  padding: "5px",
                  "& .MuiPopover-paper": { padding: "10px  " },
                }}
              >
                <Stack direction="column">
                  <p
                    style={{
                      display: "flex",
                      paddingLeft: "15px",
                      fontSize: "13px",
                      color: "#757272",
                    }}
                  >
                    Add Objective Title
                  </p>

                  <TextField
                    placeholder="Enter text"
                    autoComplete="off"
                    id="outlined-size-small"
                    variant="outlined"
                    size="small"
                    style={{
                      width: "calc(100vh - 480px)",
                      paddingLeft: "15px",
                    }}
                  />
                </Stack>
                <br />
                <Stack direction="column">
                  <p
                    style={{
                      display: "flex",
                      paddingLeft: "15px",
                      fontSize: "13px",
                      color: "#757272",
                    }}
                  >
                    Add Objective Description
                  </p>

                  <TextField
                    placeholder="Enter text"
                    autoComplete="off"
                    id="outlined-size-small"
                    variant="outlined"
                    size="small"
                    style={{
                      width: "calc(100vh - 480px)",
                      paddingLeft: "15px",
                    }}
                  />
                </Stack>
                <br />
                <Stack>
                  <p
                    style={{
                      display: "flex",
                      paddingLeft: "15px",
                      fontSize: "13px",
                      color: "#757272",
                    }}
                  >
                    Select Objective Type
                  </p>
                  <FormControl
                    sx={{
                      width: "90%",
                      marginBottom: "10px",
                      maxHeight: "110px",
                      paddingLeft: "15px",
                    }}
                  >
                    <Select
                      size="small"
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      sx={{ width: "calc(100vh - 480px)" }}
                    ></Select>
                  </FormControl>
                </Stack>
                <br />
                <Stack direction="row" sx={{ paddingLeft: "15px" }}>
                  <Button
                    style={{
                      textTransform: "none",
                      backgroundColor: "#014D76",
                      fontSize: "12px",
                      fontFamily: "sans-serif",
                      padding: "4px 5px",
                    }}
                    variant="contained"
                  >
                    Update
                  </Button>

                  <Button
                    style={{
                      textTransform: "none",
                      fontSize: "13px",
                      color: "#757272",
                      fontFamily: "sans-serif",
                    }}
                    variant="text"
                    onClick={handleClose3}
                  >
                    Cancel
                  </Button>
                </Stack>
              </Popover>
            </InputAdornment>
          }
          placeholder="Knowledge of the job"
        />
      </FormControl>,

      <>
        <p>Level : Level Definition</p>
        <Item1>
          <List>
            <ListItem
              sx={{
                paddingTop: "0px",
                paddingBottom: "0px",
                "& .MuiTypography-root": { fontSize: "0.875rem" },
                "& .MuiList-padding": {
                  paddingTop: "0px",
                  paddingBottom: "0px",
                },
                "& .MuiList-root": { paddingTop: "0px", paddingBottom: "0px" },
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

              <ListItemText primary="Levels" />
            </ListItem>
          </List>
          <Tooltip title="Edit">
            <IconButton edge="end" onClick={handleClickOpen}>
              <img
                src={Edit}
                style={{
                  color: "#ffffff",
                  width: "16px",
                  height: "16px",
                  verticalAlign: "middle",
                }}
              />
            </IconButton>
          </Tooltip>
          <Dialog
                      style={{
                        marginTop: "70px",
                        height: "calc(100vh - 50px)",
                      }}
                      maxWidth="xl"
                      open={open1}
                      onClose={handleClose4}
                      aria-labelledby="alert-dialog-title"
                      aria-describedby="alert-dialog-description"
                    >
                      <DialogTitle
                        style={{
                          fontFamily: "regular",
                          backgroundColor: "#EBF1F5",
                          color: "#004C75",
                          fontSize: "18px",
                          padding: "0px 20px",
                          justifyContent: "space-between",
                          alignItems: "center",
                          display: "flex",
                        }}
                      >
                        Add Levels
                        <p
                          style={{
                            display: "flex",
                            float: "right",
                            alignItems: "center",
                          }}
                        >
                          <Button onClick={handleClose4}><img width={18} height={18} src={Closeicon} /></Button>
                        </p>
                      </DialogTitle>

                      <DialogContentText
                        style={{
                          fontSize: "14px",
                          color: "#004C75",
                          fontFamily: "regular",
                          width: "920px",
                        }}
                      >
                        <p style={{ paddingLeft: "20px" }}>Objective Title</p>
                        <TextField
                          select
                          value="Knowledge of the job"
                          sx={{ width: "50%" }}
                          id="demo-simple-select-label"
                          variant="outlined"
                          size="small"
                          style={{ paddingLeft: "20px" }}
                        />
                      </DialogContentText>
                      <DialogContentText>
                        <div>
                          <Grid>
                            <Grid
                              container
                              style={{
                                paddingTop: "20px",
                                paddingLeft: "20px",
                              }}
                            >
                              <Grid
                                style={{
                                  // borderRight: "1px solid lightgrey",
                                  border: "1px solid lightgrey",
                                  // height: "300px",
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
                                  <Button >Level 1</Button><br/>
                                  <Button >Level 2</Button><br/>
                                  <Button >Level 3</Button><br/>
                                  <Button >Level 4</Button>
                                </Tabs>
                              </Grid>

                              <Grid
                                style={{
                                  border: "1px solid lightgrey",
                                  borderLeft: "none",
                                }}
                                item
                                xs={9.8}
                              >
                                <TabPanel value={activeLevel} index={0}>
                                  <div
                                    style={{
                                      paddingLeft: "30px",
                                    }}
                                  >
                                    <p style={{ color: "#004C75" }}>
                                      Level Definition
                                    </p>
                                    <TextField
                                      style={{ width: "90%" }}
                                      size="small"
                                    />
                                  </div>

                                  <div
                                    style={{
                                      paddingLeft: "30px",
                                      paddingBottom: "6px",
                                    }}
                                  >
                                    <p style={{ color: "#004C75" }}>
                                      Behavioral Objective
                                    </p>

                                    <TextField
                                      placeholder="Enter Behavioral Objective"
                                      style={{
                                        width: "90%",
                                        paddingBottom: "6px",
                                      }}
                                      size="small"
                                      multiline
                                    />

                                    <Tooltip title="Delete">
                                      <IconButton>
                                        <img src={Closeiconred} alt="icon" />
                                      </IconButton>
                                    </Tooltip>
                                  </div>
                                  <div
                                    style={{
                                      paddingLeft: "30px",
                                      paddingBottom: "6px",
                                    }}
                                  >

                                    <TextField
                                      placeholder="Enter Behavioral Objective"
                                      style={{
                                        width: "90%",
                                        paddingBottom: "6px",
                                      }}
                                      size="small"
                                      multiline
                                    />

                                    <Tooltip title="Add">
                                      <IconButton>
                                        <img src={Plus} alt="icon" />
                                      </IconButton>
                                    </Tooltip>

                                    
                                  </div>
                                </TabPanel>
                              </Grid>
                            </Grid>
                          </Grid>
                        </div>
                      </DialogContentText>
                      <DialogActions
                        style={{ display: "flex", justifyContent: "center" }}
                      >
                        <Button
                          style={{
                            borderRadius: "4px",
                            textTransform: "none",
                            backgroundColor: "#004D77",
                            fontSize: "16px",
                            fontFamily: "sans-serif",
                            padding: "4px 28px",
                          }}
                          variant="contained"
                          onClick={handleClose4}
                          autoFocus
                        >
                          Save
                        </Button>
                      </DialogActions>
                    </Dialog>
        </Item1>
      </>,
      <Tooltip title="Delete">
        <IconButton>
          <img
            src={Close}
            alt="icon"
            style={{ width: "20px", height: "20px" }}
          />
        </IconButton>
      </Tooltip>
    ),
    createData(
      2,
      <FormControl sx={{ m: 1 }} variant="outlined">
        <OutlinedInput
          sx={{ width: "calc(100vh - 500px)", height: "40px" }}
          endAdornment={
            <InputAdornment position="end">
              <IconButton edge="end">
                <img
                  src={Edit}
                  alt="icon"
                  style={{
                    color: "#ffffff",
                    width: "16px",
                    height: "16px",
                    verticalAlign: "middle",
                    paddingRight: "10px",
                  }}
                />
              </IconButton>
            </InputAdornment>
          }
          placeholder="Job Competency"
        />
      </FormControl>,
      <FormControl sx={{ m: 1 }} variant="outlined">
        <OutlinedInput
          sx={{ width: "calc(100vh - 500px)", height: "40px" }}
          endAdornment={
            <InputAdornment position="end">
              <IconButton edge="end">
                <img
                  src={Edit}
                  alt="icon"
                  style={{
                    color: "#ffffff",
                    width: "16px",
                    height: "16px",
                    verticalAlign: "middle",
                    paddingRight: "10px",
                  }}
                />
              </IconButton>
            </InputAdornment>
          }
          placeholder="Individual"
        />
      </FormControl>,
      <FormControl sx={{ m: 1 }} variant="outlined">
        <OutlinedInput
          sx={{ width: "calc(100vh - 500px)", height: "40px" }}
          endAdornment={
            <InputAdornment position="end">
              <IconButton edge="end">
                <img
                  src={Edit}
                  alt="icon"
                  style={{
                    color: "#ffffff",
                    width: "16px",
                    height: "16px",
                    verticalAlign: "middle",
                    paddingRight: "10px",
                  }}
                />
              </IconButton>
            </InputAdornment>
          }
          placeholder="Knowledge of the job"
        />
      </FormControl>,

      <>
        <p>Level : Level Definition</p>
        <Item1>
          <List sx={{
                paddingTop: "0px",
                paddingBottom: "0px",
                "& .MuiTypography-root": { fontSize: "0.875rem" },
                "& .MuiList-padding": {
                  paddingTop: "0px",
                  paddingBottom: "0px",
                },
                "& .MuiList-root": { paddingTop: "0px", paddingBottom: "0px" },
              }} >
            <ListItem
              sx={{
                paddingTop: "0px",
                paddingBottom: "0px",
                "& .MuiTypography-root": { fontSize: "0.875rem" },
                "& .MuiList-padding": {
                  paddingTop: "0px",
                  paddingBottom: "0px",
                },
                "& .MuiList-root": { paddingTop: "0px", paddingBottom: "0px" },
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

              <ListItemText primary="Levels" />
            </ListItem>
          </List>
          <Tooltip title="Edit">
            <IconButton edge="end">
              <img
                src={Edit}
                style={{
                  color: "#ffffff",
                  width: "16px",
                  height: "16px",
                  verticalAlign: "middle",
                }}
              />
            </IconButton>
          </Tooltip>
        </Item1>
      </>,
      <Tooltip title="Delete">
        <IconButton>
          <img
            src={Close}
            alt="icon"
            style={{ width: "20px", height: "20px" }}
          />
        </IconButton>
      </Tooltip>
    ),

    createData(
      3,
      <FormControl sx={{ m: 1 }} variant="outlined">
        <OutlinedInput
          sx={{ width: "calc(100vh - 500px)", height: "40px" }}
          endAdornment={
            <InputAdornment position="end">
              <IconButton edge="end">
                <img
                  src={Edit}
                  alt="icon"
                  style={{
                    color: "#ffffff",
                    width: "16px",
                    height: "16px",
                    verticalAlign: "middle",
                    paddingRight: "10px",
                  }}
                />
              </IconButton>
            </InputAdornment>
          }
          placeholder="Job Competency"
        />
      </FormControl>,
      <FormControl sx={{ m: 1 }} variant="outlined">
        <OutlinedInput
          sx={{ width: "calc(100vh - 500px)", height: "40px" }}
          endAdornment={
            <InputAdornment position="end">
              <IconButton edge="end">
                <img
                  src={Edit}
                  alt="icon"
                  style={{
                    color: "#ffffff",
                    width: "16px",
                    height: "16px",
                    verticalAlign: "middle",
                    paddingRight: "10px",
                  }}
                />
              </IconButton>
            </InputAdornment>
          }
          placeholder="Individual"
        />
      </FormControl>,
      <FormControl sx={{ m: 1 }} variant="outlined">
        <OutlinedInput
          sx={{ width: "calc(100vh - 500px)", height: "40px" }}
          endAdornment={
            <InputAdornment position="end">
              <IconButton edge="end">
                <img
                  src={Edit}
                  alt="icon"
                  style={{
                    color: "#ffffff",
                    width: "16px",
                    height: "16px",
                    verticalAlign: "middle",
                    paddingRight: "10px",
                  }}
                />
              </IconButton>
            </InputAdornment>
          }
          placeholder="Skills"
        />
      </FormControl>,

      <>
        <p>Level : Level Definition</p>
        <Item1>
          <List>
            <ListItem
              sx={{
                paddingTop: "0px",
                paddingBottom: "0px",
                "& .MuiTypography-root": { fontSize: "0.875rem" },
                "& .MuiList-padding": {
                  paddingTop: "0px",
                  paddingBottom: "0px",
                },
                "& .MuiList-root": { paddingTop: "0px", paddingBottom: "0px" },
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

              <ListItemText primary="Levels" />
            </ListItem>
          </List>
          <Tooltip title="Edit">
            <IconButton edge="end">
              <img
                src={Edit}
                style={{
                  color: "#ffffff",
                  width: "16px",
                  height: "16px",
                  verticalAlign: "middle",
                }}
              />
            </IconButton>
          </Tooltip>
        </Item1>
      </>,
      <Tooltip title="Delete">
        <IconButton>
          <img
            src={Close}
            alt="icon"
            style={{ width: "20px", height: "20px" }}
          />
        </IconButton>
      </Tooltip>
    ),
  ];

  return (
    <>
      {" "}
      <div id="Performance Appraisal View all">
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
                  <Link to={MASTER_NAV}>
                    <img src={Leftarrow} alt="button" />
                  </Link>
                </IconButton>
              </span>

              <label> Performance Appraisal View all</label>
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
          width: "100%",
          height: "calc(100vh - 150px)",
          backgroundColor: "#fff",
          marginTop: "6px",
        }}
      >
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <h3
            style={{
              color: "#004C75",
              fontWeight: "400",
              opacity: "0.9",
            }}
          >
            Objective Setting Lists
          </h3>

          <Link to={`${LEVELS_VIEW_ALL}`}>
            <Button
              style={{
                textTransform: "none",
                backgroundColor: "#014D76",
                fontSize: "14px",
                fontFamily: "sans-serif",
                padding: "6px 12px",
                color: "#ffffff",
              }}
              variant="contained"
            >
              <img
                src={white_edit}
                alt="icon"
                style={{
                  color: "#ffffff",
                  width: "16px",
                  height: "16px",
                  verticalAlign: "middle",
                  paddingRight: "10px",
                }}
              />
              Cancel Edit
            </Button>
          </Link>
        </Stack>

        <TableContainer sx={{ marginTop: 2, height: "calc(100vh - 300px)" }}>
          <Table size="small">
            <TableHead>
              <TableRow sx={{ bgcolor: "#ebf2f4", padding: "2px" }}>
                <TableCell
                  sx={{
                    border: 1,
                    borderColor: "lightgrey",
                    color: "#005477",
                    fontSize: "13px",
                  }}
                >
                  #
                </TableCell>
                <TableCell
                  align="left"
                  sx={{
                    border: 1,
                    borderColor: "lightgrey",
                    color: "#005477",
                    fontSize: "13px",
                  }}
                >
                  Objective Group
                </TableCell>
                <TableCell
                  align="left"
                  sx={{
                    border: 1,
                    borderColor: "lightgrey",
                    color: "#005477",
                    fontSize: "13px",
                  }}
                >
                  Objective Type
                </TableCell>
                <TableCell
                  align="left"
                  sx={{
                    border: 1,
                    borderColor: "lightgrey",
                    color: "#005477",
                    fontSize: "13px",
                  }}
                >
                  Objective Title
                </TableCell>
                <TableCell
                  align="left"
                  sx={{
                    border: 1,
                    borderColor: "lightgrey",
                    color: "#005477",
                    fontSize: "13px",
                  }}
                >
                  Levels
                </TableCell>
                <TableCell
                  align="left"
                  sx={{
                    border: 1,
                    borderColor: "lightgrey",
                    color: "#005477",
                    fontSize: "13px",
                  }}
                >
                  Action
                </TableCell>
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
                    sx={{ border: 1, borderColor: "lightgrey" }}
                  >
                    {row.number}{" "}
                  </TableCell>
                  <TableCell
                    align="left"
                    sx={{ border: 1, padding: 1, borderColor: "lightgrey" }}
                  >
                    {row.ObjectiveGroup}
                  </TableCell>
                  <TableCell
                    align="left"
                    sx={{ border: 1, padding: 1, borderColor: "lightgrey" }}
                  >
                    {row.ObjectiveType}
                  </TableCell>
                  <TableCell
                    align="left"
                    sx={{ border: 1, padding: 1, borderColor: "lightgrey" }}
                  >
                    {row.ObjectiveTitle}
                  </TableCell>
                  <TableCell
                    align="left"
                    sx={{ border: 1, padding: 1, borderColor: "lightgrey" }}
                  >
                    {row.Levels}
                  </TableCell>
                  <TableCell
                    align="left"
                    sx={{ border: 1, padding: 1, borderColor: "lightgrey" }}
                  >
                    {row.Action}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </>
  );
};

export default Levelsviewalledit;
