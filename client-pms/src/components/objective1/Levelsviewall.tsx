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
  Container,
  Dialog,
  DialogActions,
  DialogContentText,
  DialogTitle,
  Grid,
  InputAdornment,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Popover,
  Menu,
  OutlinedInput,
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
import white_edit from "../../assets/Images/white_edit.svg";
import AddIcon from "@mui/icons-material/Add";
import {
  CREATE_CALENDER,
  CREATE_MAPPING, EDITVIEW_OBJECTIVE_DESCRIPTION_1,
  LEVELS_VIEW_ALL_EDIT,
  MASTER_NAV,
  OBJECTIVE,
  OBJECTIVE_VIEW_BUTTON,
  VIEW_TEMPLATE,
} from "../../constants/routes/Routing";
import { useNavigate } from "react-router-dom";
import Closeicon from "../../assets/Images/Closeicon.svg";
import Plus from "../../assets/Images/Plus.svg";
import Closeiconred from "../../assets/Images/Closeiconred.svg";
import Close from "../../assets/Images/Close.svg";
import {
  useCreateObjectiveDescriptionMutation,
  useCreateObjectiveGroupMutation, useCreateObjectiveTypeMutation,
  useGetObjectiveDescriptionQuery,
  useGetObjectiveGroupQuery, useGetObjectiveTypeQuery, useUpdateObjectiveDescriptionMutation
} from "../../service";
import Tab from "@mui/material/Tab";


const Levelsviewall = (props: any) => {
  const { loading } = props;

  const [open1, setOpen1] = React.useState(false);

  const handleClickOpen = () => {
    setOpen1(true);
  };


  const handleClose4 = () => {
    setOpen1(false);
  };

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const [state, setState] = useState(false);
  const [hide, setHide] = useState(true);

  const navigate = useNavigate();

  const [anchorEl1, setAnchorEl1] = React.useState<null | HTMLElement>(null);
  const [auth, setAuth] = React.useState(true);


  const [level_1, setLevel_1] = useState<any>([{ behavioral_objective: "" }]);
  const [level_3, setLevel_3] = useState<any>([{ behavioral_objective: "" }]);
  const [level_2, setLevel_2] = useState<any>([{ behavioral_objective: "" }]);
  const [level_4, setLevel_4] = useState<any>([{ behavioral_objective: "" }]);

  const [level_1_definition, setLevel_1_definition] = useState<any>("");
  const [level_2_definition, setLevel_2_definition] = useState<any>("");
  const [level_3_definition, setLevel_3_definition] = useState<any>("");
  const [level_4_definition, setLevel_4_definition] = useState<any>("");

  console.log(level_1_definition, 'level_1_definition')
  console.log(level_2_definition, 'level_2_definition')
  console.log(level_3_definition, 'level_3_definition')
  console.log(level_4_definition, 'level_4_definition')

  const [
    objectiveGroupMutation,
    { data, isLoading, isError: objectiveGroupError1 },
  ] = useCreateObjectiveGroupMutation();


  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl1(event.currentTarget);
  };

  const handleClose1 = () => {
    setAnchorEl1(null);
  };

  const [anchorEl2, setAnchorEl2] = React.useState<null | HTMLElement>(null);
  const [auth2, setAuth2] = React.useState(true);

  const [name, setName] = useState("");


  const [description, setDescription] = React.useState("");


  const [objectiveGroup, setObjectiveGroup] = useState("");
  const [objectiveTypeName, setObjectiveTypeName] = useState("");
  const [objectiveTypeSelect, setObjectiveTypeSelect] = React.useState("");

  const [objectiveTitle, setObjectiveTitle] = useState("");
  const [objectiveTitleSelect, setObjectiveTitleSelect] = useState("");


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

  const [
    createObjectiveType,
    {
      data: objectiveGroupData,
      isLoading: objectiveGroupLoading,
      isError: errorObjectiveType1,
    },
  ] = useCreateObjectiveTypeMutation();


  const [createObjectiveDescription, { isSuccess, isError }] =
    useCreateObjectiveDescriptionMutation();

  const [addLevelsToObjectiveDescription] = useUpdateObjectiveDescriptionMutation()



  const findObjectiveGroupById = (id: any) => {
    if (ObjectiveGroupData) {
      return ObjectiveGroupData.find((objectiveGroup: { _id: any; }) => objectiveGroup._id === id);
    }

  }

  const handleSelectChange = (event: SelectChangeEvent) => {
    setObjectiveGroup(event.target.value as string);
  };

  // const [anchorEl2, setAnchorEl2] = React.useState<null | HTMLElement>(null);
  // const [auth2, setAuth2] = React.useState(true);

  const handleMenu2 = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl2(event.currentTarget);
  };

  const handleClose2 = () => {
    setAnchorEl2(null);
  };

  const [anchorEl3, setAnchorEl3] = React.useState<null | HTMLElement>(null);
  const [auth3, setAuth3] = React.useState(true);

  const handleMenu3 = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl3(event.currentTarget);
  };

  const handleClose3 = () => {
    setAnchorEl3(null);
  };

  function createData(
    number: number,
    ObjectiveGroup: any,
    ObjectiveType: any,

    ObjectiveTitle: any,

    Levels: any
  ) {
    return {
      number,
      ObjectiveGroup,
      ObjectiveType,
      ObjectiveTitle,
      Levels,
    };
  }

  const [activeLevel, setActiveLevel] = React.useState(0);

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




  const checkHighestArrayLength = (arrays: any) => {
    let highest = 0;
    let longestArray: any = [];
    arrays.forEach((item: any) => {
      if (item.length > highest) {
        highest = item.length;
        longestArray = item;
      }
    });
    return longestArray;
  }

  const mapObjectiveGroupData = () => {
    let Objectivegrouparray: any = [];
    ObjectiveGroupData.data.forEach((objectiveGroup: any) => {
      //Items which have Objective Title created
      let data = objectiveDescriptionData.data.filter((item: any) => item.objective_type.objective_group == objectiveGroup._id)
      data.forEach((objItem: any) => {
        Objectivegrouparray.push({
          ObjectiveGroup: objectiveGroup.name,
          ObjectiveGroupID: objectiveGroup._id,
          ObjectiveTitleId : objItem._id,
          ObjectiveType: objItem.objective_type.name,
          ObjectiveTitle: objItem.objectiveTitle,
          Levels: [{
            0: objItem.level_1},{
            1: objItem.level_2},{
            2: objItem.level_3},{
            3: objItem.level_4
          }]

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
              ObjectiveGroupID: objectiveGroup._id,
              ObjectiveType: item.name,
              ObjectiveTitle: ""
            })
          }
        })
        //Items for which Objective Type has not been mapped
        if (objTypData.length == 0) {
          Objectivegrouparray.push({
            ObjectiveGroup: objectiveGroup.name,
            ObjectiveGroupID: objectiveGroup._id,
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
      "Job Objectives",
      "Job Competencies",
      "Knowledge of the job",

      <>
        <p style={{ margin: "0px" }}>Level : Level Definition</p>
        <List>
          <ListItem
            sx={{
              paddingTop: "0px",
              paddingBottom: "0px",
              "& .MuiTypography-root": { fontSize: "0.875rem" },
              "& .MuiList-padding": { paddingTop: "0px", paddingBottom: "0px" },
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
      </>
    ),
    createData(
      2,
      "Job competency",
      "Individual",
      "Skills",

      <>
        <p style={{ margin: "0px" }}>Level : Level Definition</p>
        <List>
          <ListItem
            sx={{
              paddingTop: "0px",
              paddingBottom: "0px",
              "& .MuiTypography-root": { fontSize: "0.875rem" },
              "& .MuiList-padding": { paddingTop: "0px", paddingBottom: "0px" },
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
      </>
    ),

    createData(
      3,
      "Job competency",
      "Individual",
      "Skills",

      <>
        <p style={{ margin: "0px" }}>Level : Level Definition</p>
        <List>
          <ListItem
            sx={{
              paddingTop: "0px",
              paddingBottom: "0px",
              "& .MuiTypography-root": { fontSize: "0.875rem" },
              "& .MuiList-padding": { paddingTop: "0px", paddingBottom: "0px" },
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
      </>
    ),
  ];

  // const temp = () => {
  //     ObjectiveGroupData
  //
  //
  // }


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

          <Link to={`${LEVELS_VIEW_ALL_EDIT}`}>
            <Button
              style={{
                textTransform: "none",
                backgroundColor: "#014D76",
                fontSize: "14px",
                fontFamily: "sans-serif",
                height: "40px",
                width: "200px",
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
              Edit Objective Master
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
                  {" "}
                  <Stack direction="row" justifyContent="space-between">
                    <p>Objective Group </p>
                    {auth2 && (
                      <div>
                        <IconButton
                          size="large"
                          aria-label="account of current user"
                          aria-controls="menu-appbar"
                          aria-haspopup="true"
                          onClick={handleMenu2}
                          color="inherit"
                        >
                          <AddIcon />
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
                              Enter Objective Group Name
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
                              value={name}
                              onChange={(e) => setName(e.target.value)}
                            />
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
                              onClick={() => {
                                objectiveGroupMutation({ name })
                                setName("")
                                handleClose2()
                              }}
                            >
                              Save
                            </Button>

                            <Button
                              style={{
                                textTransform: "none",
                                fontSize: "13px",
                                color: "#757272",
                                fontFamily: "sans-serif",
                                padding: "4px 5px",
                              }}
                              variant="text"
                              onClick={handleClose2}
                            >
                              Cancel
                            </Button>
                          </Stack>
                        </Popover>
                      </div>
                    )}
                  </Stack>
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
                  {" "}
                  <Stack direction="row" justifyContent="space-between">
                    <p>Objective Type </p>
                    {auth && (
                      <div>
                        <IconButton
                          size="large"
                          aria-label="account of current user"
                          aria-controls="menu-appbar"
                          aria-haspopup="true"
                          onClick={handleMenu}
                          color="inherit"
                        >
                          <AddIcon />
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
                              {" "}
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
                                paddingLeft: "15px"
                              }}
                              value={objectiveTypeName}
                              onChange={(e) => setObjectiveTypeName(e.target.value)}
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
                              Select Objective Group
                            </p>
                            <FormControl
                              sx={{
                                width: "calc(100vh - 480px)",
                                marginBottom: "10px",
                                maxHeight: "110px",
                                paddingLeft: "15px"
                              }}
                            >
                              

                              <Select
                                
                                size="small"
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                // style={{maxHeight:"110px"}}
                                value={objectiveGroup}
                                // error={!objectiveGroup && textfeildError}
                                onChange={handleSelectChange}
                                // onScroll={loadMoreItems}
                                // style={{
                                //   maxHeight:"50px",
                                //   overflowY:'scroll'
                                // }}
                                // MenuProps={{autoFocus: false}}
                                MenuProps={{
                                  PaperProps: {
                                    onScroll: (event: any) => {
                                      console.log("we scroll");
                                      // console.log(event);
                                      // if (event.target.scrollTop === event.target.scrollHeight) {
                                      //   setCategoryNamePagination(categoryNamePagination + 1);
                                      // }
                                    },
                                  },
                                  style: { maxHeight: 100 },
                                  id: "id-menu",
                                  anchorOrigin: {
                                    vertical: "center",
                                    horizontal: "center",
                                  },
                                  // getContentAnchorEl: null
                                }}
                              >
                                {ObjectiveGroupData?.data.map(
                                  (objectiveGroup: any) => {
                                    return [
                                      <MenuItem
                                        style={{
                                          fontSize: "13px",
                                          paddingLeft: "15px",
                                        }}
                                        value={objectiveGroup?._id}
                                      >
                                        {objectiveGroup?.name}
                                      </MenuItem>,
                                    ];
                                  }
                                )}
                              </Select>
                              {/* <p style={helper} >*Required</p> */}
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
                              onClick={() => {
                                createObjectiveType({
                                  name: objectiveTypeName,
                                  objective_group: objectiveGroup
                                })
                                handleClose1()
                                setObjectiveTypeName("")
                                setObjectiveGroup("")
                              }}
                            >
                              Save
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
                      </div>
                    )}
                  </Stack>
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
                  {" "}
                  <Stack direction="row" justifyContent="space-between">
                    <p>Objective Title </p>
                    {auth && (
                      <div>
                        <IconButton
                          size="large"
                          aria-label="account of current user"
                          aria-controls="menu-appbar"
                          aria-haspopup="true"
                          onClick={handleMenu3}
                          color="inherit"
                        >
                          <AddIcon />
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
                                display: "flex", paddingLeft: "15px", fontSize: "13px",
                                color: "#757272"
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
                              style={{ width: "calc(100vh - 480px)", paddingLeft: "15px" }}
                              value={objectiveTitleSelect}
                              onChange={(e) => setObjectiveTitleSelect(e.target.value)}
                            />
                          </Stack>
                          <br />
                          <Stack direction="column">
                            <p
                              style={{
                                display: "flex", paddingLeft: "15px", fontSize: "13px",
                                color: "#757272"
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
                              style={{ width: "calc(100vh - 480px)", paddingLeft: "15px" }}
                            />
                          </Stack>
                          <br />

                          <Stack>
                            <p
                              style={{
                                display: "flex", paddingLeft: "15px", fontSize: "13px",
                                color: "#757272"
                              }}
                            >
                              Select Objective Type
                            </p>
                            <FormControl style={{ width: "calc(100vh - 480px)", paddingLeft: "15px" }}>
                              <TextField
                                select
                                label={objectiveType === "" ? "Select" : ""}
                                id="outlined-select-select"
                                variant="outlined"
                                size="small"
                                
                                value={objectiveTypeSelect}
                                // error={!objectiveType && textfeildError}
                                // helperText={
                                //     !objectiveType && textfeildError
                                //         ? "*Objective type required."
                                //         : " "
                                // }
                                // onChange={handleSelectChange}
                                onChange={(e: { target: { value: any } }) => {
                                  setObjectiveTypeSelect(e.target.value);
                                }}
                              >
                                {objectiveType &&
                                  objectiveType.data.map((objectiveTypes: any) => {
                                    return [
                                      <MenuItem
                                        style={{ fontSize: "14px" }}
                                        value={objectiveTypes._id}
                                      >
                                        {objectiveTypes.name}
                                      </MenuItem>,
                                    ];
                                  })}
                              </TextField>
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
                              onClick={() => {
                                createObjectiveDescription({
                                  description: description,
                                  objective_type: objectiveTypeSelect,
                                  objectiveTitle: objectiveTitleSelect

                                })
                                handleClose3()
                              }}
                            >
                              Save
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
                      </div>
                    )}
                  </Stack>
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
                  <Stack direction="row" justifyContent="space-between">
                    <p>Levels </p>


                    <IconButton onClick={() => navigate(`${EDITVIEW_OBJECTIVE_DESCRIPTION_1}`)}>
                      <AddIcon  />
                    </IconButton>
                    {/*<Dialog*/}
                    {/*  style={{*/}
                    {/*    marginTop: "70px",*/}
                    {/*    height: "calc(100vh - 50px)",*/}
                    {/*  }}*/}
                    {/*  maxWidth="xl"*/}
                    {/*  open={open1}*/}
                    {/*  onClose={handleClose4}*/}
                    {/*  aria-labelledby="alert-dialog-title"*/}
                    {/*  aria-describedby="alert-dialog-description"*/}
                    {/*>*/}
                    {/*  <DialogTitle*/}
                    {/*    style={{*/}
                    {/*      fontFamily: "regular",*/}
                    {/*      backgroundColor: "#EBF1F5",*/}
                    {/*      color: "#004C75",*/}
                    {/*      fontSize: "18px",*/}
                    {/*      padding: "0px 20px",*/}
                    {/*      justifyContent: "space-between",*/}
                    {/*      alignItems: "center",*/}
                    {/*      display: "flex",*/}
                    {/*    }}*/}
                    {/*  >*/}
                    {/*    Add Levels*/}
                    {/*    <p*/}
                    {/*      style={{*/}
                    {/*        display: "flex",*/}
                    {/*        float: "right",*/}
                    {/*        alignItems: "center",*/}
                    {/*      }}*/}
                    {/*    >*/}
                    {/*      <Button onClick={handleClose4}><img width={18} height={18} src={Closeicon} /></Button>*/}
                    {/*    </p>*/}
                    {/*  </DialogTitle>*/}
                    
                    {/*  <DialogContentText*/}
                    {/*    style={{*/}
                    {/*      fontSize: "14px",*/}
                    {/*      color: "#004C75",*/}
                    {/*      fontFamily: "regular",*/}
                    {/*      width: "920px",*/}
                    {/*    }}*/}
                    {/*  >*/}
                    {/*    <p style={{ paddingLeft: "20px" }}>Objective Title</p>*/}
                    {/*    <TextField*/}
                    {/*      select*/}
                    {/*      placeholder="Enter text"*/}
                    {/*      id="outlined-basic"*/}
                    {/*      variant="outlined"*/}
                    {/*      fullWidth*/}
                    {/*      // sx={{ marginTop: "25px" }}*/}
                    {/*      value={objectiveTitleSelect}*/}
                    {/*      size="small"*/}
                    {/*      onChange={(e) =>*/}
                    {/*        setObjectiveTitleSelect(e.target.value)*/}
                    {/*      }*/}
                    {/*    // error={!description && textfeildError}*/}
                    {/*    // helperText={*/}
                    {/*    //   !description && textfeildError*/}
                    {/*    //     ? "*Description required."*/}
                    {/*    //     : " "*/}
                    {/*    // }*/}
                    {/*    >*/}
                    {/*      {objectiveDescriptionData &&*/}
                    {/*        objectiveDescriptionData.data.map(*/}
                    {/*          (objective_title: any) => {*/}
                    {/*            return [*/}
                    {/*              <MenuItem*/}
                    {/*                style={{ fontSize: "14px" }}*/}
                    {/*                value={objective_title._id}*/}
                    {/*              >*/}
                    {/*                {objective_title.objectiveTitle}*/}
                    {/*              </MenuItem>,*/}
                    {/*            ];*/}
                    {/*          }*/}
                    {/*        )}*/}
                    {/*    </TextField>*/}
                    {/*  </DialogContentText>*/}
                    {/*  <DialogContentText>*/}
                    {/*    <div>*/}
                    {/*      <Grid>*/}
                    {/*        <Grid container>*/}
                    {/*          <Grid*/}
                    {/*            style={{*/}
                    {/*              borderRight: "1px solid lightgrey",*/}
                    {/*              height: "300px",*/}
                    {/*              paddingTop: "20px",*/}
                    {/*            }}*/}
                    {/*            item*/}
                    {/*            xs={2}*/}
                    {/*          >*/}
                    {/*            <Tabs*/}
                    {/*              orientation="vertical"*/}
                    {/*              variant="scrollable"*/}
                    {/*              value={activeLevel}*/}
                    {/*              onChange={handleChangeTabs}*/}
                    {/*              TabIndicatorProps={{*/}
                    {/*                style: {*/}
                    {/*                  left: 0,*/}
                    {/*                  borderColor: "divider",*/}
                    {/*                },*/}
                    {/*              }}*/}
                    {/*            >*/}
                    {/*              {tabValue.map((k: any) => {*/}
                    {/*                return (*/}
                    {/*                  <Tab*/}
                    {/*                    // key={k}*/}
                    {/*                    label={k}*/}
                    {/*                  // value={k}*/}
                    {/*                  // onClick={() => handleTabChange(k)}*/}
                    {/*                  />*/}
                    {/*                );*/}
                    {/*              })}*/}
                    {/*            </Tabs>*/}
                    {/*          </Grid>*/}
                    
                    {/*          <Grid item xs={10}>*/}
                    {/*            <TabPanel value={activeLevel} index={0}>*/}
                    {/*              <div*/}
                    {/*                style={{ paddingLeft: "30px", paddingBottom: "10px" }}*/}
                    {/*              >*/}
                    {/*                <p style={{ color: "#004C75" }}>Level definition</p>*/}
                    {/*                /!* <p style={{ fontSize:"14px" }}>Level definition</p> *!/*/}
                    {/*                <TextField*/}
                    {/*                  // placeholder="Enter Level Definition"*/}
                    {/*                  style={{ width: "95%" }}*/}
                    {/*                  size="small"*/}
                    {/*                  // multiline*/}
                    {/*                  onChange={(e) =>*/}
                    {/*                    setLevel_1_definition(e.target.value)*/}
                    {/*                  }*/}
                    {/*                  value={level_1_definition}*/}
                    {/*                />*/}
                    {/*              </div>*/}
                    
                    {/*              <div style={{ paddingLeft: "30px" }}>*/}
                    {/*                <p style={{ color: "#004C75" }}>*/}
                    {/*                  Behavioral Objective*/}
                    {/*                </p>*/}
                    {/*                /!* <p style={{ fontSize:"14px",paddingBottom:"10px"}}>1 Knowledge - Recall of basic Facts</p>*/}
                    {/*    <p style={{ fontSize:"14px" }}>2 Enter Behavioral Objective</p> *!/*/}
                    
                    {/*                {level_1 &&*/}
                    {/*                  level_1.map((level: any, index: number) => {*/}
                    {/*                    return (*/}
                    {/*                      <>*/}
                    {/*                        <TextField*/}
                    {/*                          placeholder="Enter Behavioral Objective"*/}
                    {/*                          style={{ width: "94%" }}*/}
                    {/*                          size="small"*/}
                    {/*                          multiline*/}
                    {/*                          key={index}*/}
                    {/*                          value={level_1[index].behavioral_objective}*/}
                    {/*                          name="level_1"*/}
                    {/*                          onChange={(e: any) =>*/}
                    {/*                            handleChangeLevel1(e, index)*/}
                    {/*                          }*/}
                    {/*                        />*/}
                    
                    {/*                        {level_1.length - 1 === index && (*/}
                    {/*                          <Tooltip title="Add">*/}
                    {/*                            <IconButton onClick={handleLevelAdd1}>*/}
                    {/*                              <img src={Plus} alt="icon" />*/}
                    {/*                            </IconButton>*/}
                    {/*                          </Tooltip>*/}
                    {/*                        )}*/}
                    
                    {/*                        {level_1.length !== index + 1 && (*/}
                    {/*                          <Tooltip title="Delete">*/}
                    {/*                            <IconButton*/}
                    {/*                              onClick={() =>*/}
                    {/*                                handleLevelRemove1(index)*/}
                    {/*                              }*/}
                    {/*                            >*/}
                    {/*                              <img src={Close} alt="icon" />*/}
                    {/*                            </IconButton>*/}
                    {/*                          </Tooltip>*/}
                    {/*                        )}*/}
                    {/*                      </>*/}
                    {/*                    );*/}
                    {/*                  })}*/}
                    {/*              </div>*/}
                    {/*            </TabPanel>*/}
                    
                    {/*            <TabPanel value={activeLevel} index={1}>*/}
                    {/*              <div*/}
                    {/*                style={{ paddingLeft: "30px", paddingBottom: "10px" }}*/}
                    {/*              >*/}
                    {/*                <p style={{ color: "#004C75" }}>Level definition</p>*/}
                    {/*                /!* <p style={{ fontSize:"14px" }}>Level definition</p> *!/*/}
                    {/*                <TextField*/}
                    {/*                  // placeholder="Enter Level Definition"*/}
                    {/*                  style={{ width: "95%" }}*/}
                    {/*                  size="small"*/}
                    {/*                  // multiline*/}
                    {/*                  onChange={(e: any) =>*/}
                    {/*                    setLevel_2_definition(e.target.value)*/}
                    {/*                  }*/}
                    {/*                  value={level_2_definition}*/}
                    {/*                />*/}
                    {/*              </div>*/}
                    
                    {/*              <div style={{ paddingLeft: "30px" }}>*/}
                    {/*                <p style={{ color: "#004C75" }}>*/}
                    {/*                  Behavioral Objective*/}
                    {/*                </p>*/}
                    {/*                /!* <p style={{ fontSize:"14px",paddingBottom:"10px"}}>1 Knowledge - Recall of basic Facts</p>*/}
                    {/*    <p style={{ fontSize:"14px" }}>2 Enter Behavioral Objective</p> *!/*/}
                    
                    {/*                {level_2 &&*/}
                    {/*                  level_2.map((level: any, index: number) => {*/}
                    {/*                    return (*/}
                    {/*                      <>*/}
                    {/*                        <TextField*/}
                    {/*                          placeholder="Enter Behavioral Objective"*/}
                    {/*                          style={{ width: "94%" }}*/}
                    {/*                          size="small"*/}
                    {/*                          multiline*/}
                    {/*                          key={index}*/}
                    {/*                          value={level_2[index].behavioral_objective}*/}
                    {/*                          name="level_2"*/}
                    {/*                          onChange={(e: any) =>*/}
                    {/*                            handleChangeLevel2(e, index)*/}
                    {/*                          }*/}
                    {/*                        />*/}
                    
                    {/*                        {level_2.length - 1 === index && (*/}
                    {/*                          <Tooltip title="Add">*/}
                    {/*                            <IconButton onClick={handleLevelAdd2}>*/}
                    {/*                              <img src={Plus} alt="icon" />*/}
                    {/*                            </IconButton>*/}
                    {/*                          </Tooltip>*/}
                    {/*                        )}*/}
                    
                    {/*                        {level_2.length !== index + 1 && (*/}
                    {/*                          <Tooltip title="Delete">*/}
                    {/*                            <IconButton*/}
                    {/*                              onClick={() =>*/}
                    {/*                                handleLevelRemove2(index)*/}
                    {/*                              }*/}
                    {/*                            >*/}
                    {/*                              <img src={Close} alt="icon" />*/}
                    {/*                            </IconButton>*/}
                    {/*                          </Tooltip>*/}
                    {/*                        )}*/}
                    {/*                      </>*/}
                    {/*                    );*/}
                    {/*                  })}*/}
                    {/*              </div>*/}
                    {/*            </TabPanel>*/}
                    
                    {/*            <TabPanel value={activeLevel} index={2}>*/}
                    {/*              <div*/}
                    {/*                style={{ paddingLeft: "30px", paddingBottom: "10px" }}*/}
                    {/*              >*/}
                    {/*                <p style={{ color: "#004C75" }}>Level definition</p>*/}
                    {/*                /!* <p style={{ fontSize:"14px" }}>Level definition</p> *!/*/}
                    {/*                <TextField*/}
                    {/*                  // placeholder="Enter Level Definition"*/}
                    {/*                  style={{ width: "95%" }}*/}
                    {/*                  size="small"*/}
                    {/*                  // multiline*/}
                    {/*                  onChange={(e: any) =>*/}
                    {/*                    setLevel_3_definition(e.target.value)*/}
                    {/*                  }*/}
                    {/*                  value={level_3_definition}*/}
                    {/*                />*/}
                    {/*              </div>*/}
                    
                    {/*              <div style={{ paddingLeft: "30px" }}>*/}
                    {/*                <p style={{ color: "#004C75" }}>*/}
                    {/*                  Behavioral Objective*/}
                    {/*                </p>*/}
                    {/*                /!* <p style={{ fontSize:"14px",paddingBottom:"10px"}}>1 Knowledge - Recall of basic Facts</p>*/}
                    {/*    <p style={{ fontSize:"14px" }}>2 Enter Behavioral Objective</p> *!/*/}
                    
                    {/*                {level_3 &&*/}
                    {/*                  level_3.map((level: any, index: number) => {*/}
                    {/*                    return (*/}
                    {/*                      <>*/}
                    {/*                        <TextField*/}
                    {/*                          placeholder="Enter Behavioral Objective"*/}
                    {/*                          style={{ width: "94%" }}*/}
                    {/*                          size="small"*/}
                    {/*                          multiline*/}
                    {/*                          key={index}*/}
                    {/*                          value={level_3[index].behavioral_objective}*/}
                    {/*                          name="level_3"*/}
                    {/*                          onChange={(e: any) =>*/}
                    {/*                            handleChangeLevel3(e, index)*/}
                    {/*                          }*/}
                    {/*                        />*/}
                    
                    {/*                        {level_3.length - 1 === index && (*/}
                    {/*                          <Tooltip title="Add">*/}
                    {/*                            <IconButton onClick={handleLevelAdd3}>*/}
                    {/*                              <img src={Plus} alt="icon" />*/}
                    {/*                            </IconButton>*/}
                    {/*                          </Tooltip>*/}
                    {/*                        )}*/}
                    
                    {/*                        {level_1.length !== index + 1 && (*/}
                    {/*                          <Tooltip title="Delete">*/}
                    {/*                            <IconButton*/}
                    {/*                              onClick={() =>*/}
                    {/*                                handleLevelRemove3(index)*/}
                    {/*                              }*/}
                    {/*                            >*/}
                    {/*                              <img src={Closeiconred} alt="icon" />*/}
                    {/*                            </IconButton>*/}
                    {/*                          </Tooltip>*/}
                    {/*                        )}*/}
                    {/*                      </>*/}
                    {/*                    );*/}
                    {/*                  })}*/}
                    {/*              </div>*/}
                    {/*            </TabPanel>*/}
                    
                    {/*            <TabPanel value={activeLevel} index={3}>*/}
                    {/*              Item Four*/}
                    {/*              <div*/}
                    {/*                style={{ paddingLeft: "30px", paddingBottom: "10px" }}*/}
                    {/*              >*/}
                    {/*                <p style={{ color: "#004C75" }}>Level definition</p>*/}
                    {/*                /!* <p style={{ fontSize:"14px" }}>Level definition</p> *!/*/}
                    {/*                <TextField*/}
                    {/*                  // placeholder="Enter Level Definition"*/}
                    {/*                  style={{ width: "95%" }}*/}
                    {/*                  size="small"*/}
                    {/*                  // multiline*/}
                    {/*                  onChange={(e: any) =>*/}
                    {/*                    setLevel_4_definition(e.target.value)*/}
                    {/*                  }*/}
                    {/*                  value={level_4_definition}*/}
                    {/*                />*/}
                    {/*              </div>*/}
                    {/*              <div style={{ paddingLeft: "30px" }}>*/}
                    {/*                <p style={{ color: "#004C75" }}>*/}
                    {/*                  Behavioral Objective*/}
                    {/*                </p>*/}
                    {/*                /!* <p style={{ fontSize:"14px",paddingBottom:"10px"}}>1 Knowledge - Recall of basic Facts</p>*/}
                    {/*    <p style={{ fontSize:"14px" }}>2 Enter Behavioral Objective</p> *!/*/}
                    
                    {/*                {level_4 &&*/}
                    {/*                  level_4.map((level: any, index: number) => {*/}
                    {/*                    return (*/}
                    {/*                      <>*/}
                    {/*                        <TextField*/}
                    {/*                          placeholder="Enter Behavioral Objective"*/}
                    {/*                          style={{ width: "94%" }}*/}
                    {/*                          size="small"*/}
                    {/*                          multiline*/}
                    {/*                          key={index}*/}
                    {/*                          value={level_4[index].behavioral_objective}*/}
                    {/*                          name="level_4"*/}
                    {/*                          onChange={(e: any) =>*/}
                    {/*                            handleChangeLevel4(e, index)*/}
                    {/*                          }*/}
                    {/*                        />*/}
                    
                    {/*                        {level_4.length - 1 === index && (*/}
                    {/*                          <Tooltip title="Add">*/}
                    {/*                            <IconButton onClick={handleLevelAdd4}>*/}
                    {/*                              <img src={Plus} alt="icon" />*/}
                    {/*                            </IconButton>*/}
                    {/*                          </Tooltip>*/}
                    {/*                        )}*/}
                    
                    {/*                        {level_1.length !== index + 1 && (*/}
                    {/*                          <Tooltip title="Delete">*/}
                    {/*                            <IconButton*/}
                    {/*                              onClick={() =>*/}
                    {/*                                handleLevelRemove4(index)*/}
                    {/*                              }*/}
                    {/*                            >*/}
                    {/*                              <img src={Close} alt="icon" />*/}
                    {/*                            </IconButton>*/}
                    {/*                          </Tooltip>*/}
                    {/*                        )}*/}
                    {/*                      </>*/}
                    {/*                    );*/}
                    {/*                  })}*/}
                    {/*              </div>*/}
                    {/*            </TabPanel>*/}
                    {/*          </Grid>*/}
                    {/*        </Grid>*/}
                    {/*      </Grid>*/}
                    {/*    </div>*/}
                    {/*  </DialogContentText>*/}
                    {/*  <DialogActions*/}
                    {/*    style={{ display: "flex", justifyContent: "center" }}*/}
                    {/*  >*/}
                    {/*    <Button*/}
                    {/*      style={{*/}
                    {/*        borderRadius: "4px",*/}
                    {/*        textTransform: "none",*/}
                    {/*        backgroundColor: "#004D77",*/}
                    {/*        fontSize: "16px",*/}
                    {/*        fontFamily: "sans-serif",*/}
                    {/*        padding: "4px 28px",*/}
                    {/*      }}*/}
                    {/*      variant="contained"*/}
                    {/*      // onClick={handleClose4}*/}
                    {/*      onClick={() => {*/}
                    {/*        addLevelsToObjectiveDescription({*/}
                    
                    {/*          level_1: {*/}
                    {/*            level_definition: level_1_definition,*/}
                    {/*            behavioral_objective:*/}
                    {/*              getBehavioralObjectiveFromLevel(level_1),*/}
                    {/*          },*/}
                    {/*          level_2: {*/}
                    {/*            level_definition: level_2_definition,*/}
                    {/*            behavioral_objective:*/}
                    {/*              getBehavioralObjectiveFromLevel(level_2),*/}
                    {/*          },*/}
                    {/*          level_3: {*/}
                    {/*            level_definition: level_3_definition,*/}
                    {/*            behavioral_objective:*/}
                    {/*              getBehavioralObjectiveFromLevel(level_3),*/}
                    {/*          },*/}
                    {/*          level_4: {*/}
                    {/*            level_definition: level_4_definition,*/}
                    {/*            behavioral_objective:*/}
                    {/*              getBehavioralObjectiveFromLevel(level_4),*/}
                    {/*          },*/}
                    {/*          id: objectiveTitleSelect,*/}
                    {/*        })*/}
                    {/*      }}*/}
                    {/*      autoFocus*/}
                    {/*    >*/}
                    {/*      Save*/}
                    {/*    </Button>*/}
                    {/*  </DialogActions>*/}
                    {/*</Dialog>*/}
                  </Stack>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {ObjectiveGroupData && objectiveType && objectiveDescriptionData && mapObjectiveGroupData().map((row: any, index: number) => (
                <TableRow key={row.number}>
                  <TableCell
                    scope="row"
                    sx={{ border: 1, borderColor: "lightgrey" }}
                  >
                    {row.number}{" "}
                  </TableCell>
                  <TableCell
                    align="left"
                    sx={{ border: 1, borderColor: "lightgrey" }}
                  >
                    {/* {ObjectiveGroupData && objectiveType &&   ObjectiveGroupData.data.filter((j:any) => j._id ===  objectiveType.data[index]?.objective_group?._id)[0]?.name } */}
                    {row.ObjectiveGroup}
                  </TableCell>
                  <TableCell
                    align="left"
                    sx={{ border: 1, borderColor: "lightgrey" }}
                  >
                    {/*{objectiveType &&  objectiveType.data[index]?.name }*/}
                    {/*{ObjectiveGroupData && objectiveType &&   objectiveType.data.filter((j:any) => j._id ===  objectiveDescriptionData.data[index]?.objective_type?._id)[0]?.name }*/}
                    {row.ObjectiveType}
                  </TableCell>
                  <TableCell
                    align="left"
                    sx={{ border: 1, borderColor: "lightgrey" }}
                  >
                    {/* {objectiveDescriptionData &&  objectiveDescriptionData.data[index]?.objectiveTitle} */}
                    {row.ObjectiveTitle}
                  </TableCell>
                  <TableCell
                    align="left"
                    sx={{ border: 1, borderColor: "lightgrey" }}
                  >
                    {row.Levels&& row.Levels.map((level: any,index:any) => {
                      return <>
                      {
                        level[index] && level[index].level_definition &&
                        <p style={{ margin: "0px" , fontSize:"0.8rem"}}>Level{index+1} : Level Definition</p>
                      }
                      {
                        (level[index] != undefined && level[index].level_definition) &&
                        <List sx={{"& .MuiList-root":{ paddingTop: "0px", paddingBottom: "0px" }}}>
                          <ListItem sx={{ paddingTop: "0px", paddingBottom: "0px", '& .MuiTypography-root': { fontSize: "0.775rem" }, '& .MuiList-padding': { paddingTop: "0px", paddingBottom: "0px" }, '& .MuiList-root': { paddingTop: "0px", paddingBottom: "0px" } }}>
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
                            <ListItemText primary={level[index].level_definition} />
                          </ListItem>
                        </List>
                      }
                      {
                        level[index] && level[index].behavioral_objective!="" && level[index].behavioral_objective.length>0 &&
                        <p style={{ margin: "0px",fontSize:"0.8rem" }}>Level{index+1} : Behavioural Definition</p>
                      }
                      {
                        (level[index] != undefined && level[index].behavioral_objective!="" && level[index].behavioral_objective.length>0) &&
                        level[index].behavioral_objective.map((item:any)=>{
                          return <List sx={{"& .MuiList-root":{ paddingTop: "0px", paddingBottom: "0px" }, '& .ul.MuiList-root': { paddingTop: "0px", paddingBottom: "0px" }}}>
                          <ListItem sx={{ paddingTop: "0px", paddingBottom: "0px", '& .MuiTypography-root': { fontSize: "0.775rem" }, '& .MuiList-padding': { paddingTop: "0px", paddingBottom: "0px" }, '& .MuiList-root': { paddingTop: "0px", paddingBottom: "0px" } }}>
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
                            <ListItemText primary={item} />
                          </ListItem>
                        </List>
                        })
                        
                      }
                      </>
                    })}
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

export default Levelsviewall;
