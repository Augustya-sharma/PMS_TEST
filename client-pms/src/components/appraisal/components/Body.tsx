import * as React from "react";
import { useEffect, useState } from "react";
// import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import {
  Container,
  Grid,
  Paper,
  Typography,
  Box,
  Fab,
  LinearProgress,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { height } from "@mui/system";
import Bulb from "./Icons/Bulb.svg";
import Graph from "./Icons/Graph.svg";
import Profilesettings from "./Icons/Profilesettings.svg";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import Attachicon from "./Icons/Attachicon.svg";
import Left from "./Icons/Blueleft.svg";
import Right from "./Icons/Right.svg";
import { Link } from "react-router-dom";
import { APPRAISER } from "../../../constants/routes/Routing";
import { useNavigate } from "react-router-dom";
import _ from "lodash";
import { Alert } from "@mui/material";
import { useGetObjectiveTitleQuery } from "../../../service";
import Infoicon from "../components/Icons/Infoicon.svg";
import IconButton from "@material-ui/core/IconButton";
import Popover from "@mui/material/Popover";

import { Scrollbar } from "react-scrollbars-custom";

// const Tabcontainer = styled("div")({
//     marginTop: '-40px',
//     marginLeft: "230px",
//     marginRight: '280px',
//     '& .MuiTabs-flexContainer': {
//         height: '200px'
//     },

//     '& .MuiButtonBase-root': {
//         textTransform: 'none',
//         color: '#3C8BB5',
//         marginLeft: '80px',
//         fontWeight: 400,
//         // '&:active': {
//         //     boxShadow: 'none',
//         //     backgroundColor: 'none',
//         //     borderColor: 'none',
//         //   },
//           '&:focus': {
//             backgroundColor: 'none',
//           },

//     },
//     '& .Mui-selected': {
//         color: '#3C8BB5',
//          '&:active': {
//         boxShadow: 'none',
//         backgroundColor: 'none',
//         borderColor: 'none',
//       },
//     },

// });

const Tabcontainer = styled("div")({
  // marginTop: '-40px',
  //marginLeft: "230px",
  // marginRight: '280px',
  "& .MuiTabs-flexContainer": {
    height: "120px",
    display: "flex",
    justifyContent: "space-between !important",
  },
  "& .MuiTabs-indicator": {
    backgroundColor: "transparent",
    height: "115px",
    border: "1px solid rgb(60 139 181/50%)",
    width: "180px !important",
    borderRadius: "5px",
  },

  "& .MuiButtonBase-root": {
    textTransform: "none",
    color: "#3C8BB5",
    width: "183px !important",
    //marginLeft: "50px",

    fontSize: "14px",
    fontWeight: 400,
    // '&:active': {
    //     boxShadow: 'none',
    //     backgroundColor: 'none',
    //     borderColor: 'none',
    //   },
    "&:focus": {
      // backgroundColor: 'none',
    },
  },
  "& .Mui-selected": {
    color: "#3C8BB5 !important",

    "&:active": {
      boxShadow: "none",
      backgroundColor: "none",
      borderColor: "none",
    },
  },
});

const Contentcontainer = styled("div")({
  //width: "530px",
  //height: "200px",
  //marginLeft: "390px",
  // marginRight: "100px",
  //marginTop: '-36px',
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const Item1 = styled(Box)(({ theme }) => ({
  // backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  // ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
const Contain = styled("div")({
  "& .MuiButtonBase-root": {
    color: "#333333",
    backgroundColor: "#FFFFFF",
    height: "34px",
    width: "34px",
    boxShadow: "0px 0px 1px 1px #D4D4D4",
  },

  "& .MuiButton-root": {
    border: ` 1px solid `,
    borderColor: "#D4D4D4",
    minWidth: "0px",
    borderRadius: "50px",
    "&:focus": {
      // borderColor: '#3C8BB5',
    },
  },
});
const Heading1 = styled("div")({
  fontSize: "18px",
  fontWeight: 400,
  color: "#333333",
});
const Description = styled("div")({
  fontSize: "13px",
  fontWeight: 400,
  color: "#333333",
  opacity: 0.6,
});
const Heading2 = styled("div")({
  fontSize: "12px",
  fontWeight: 400,
  color: "#333333",
  opacity: 0.6,
  marginRight: "135px",
  marginTop: "20px",
});

const Attach = styled("div")({
  // marginTop: "30px",
  marginLeft: "89%",
  paddingBottom: "20px",
  "& .MuiButton-root": {
    color: "#858585",
    // opacity: 0.6,
    fontSize: "13px",
    fontWeight: "400",
    textTransform: "none",
  },
  "& .MuiButton-outlined": {
    border: "1px solid #DDDDDD",
    // opacity: 0.6,
    width: "130px",
    height: "35px",
  },
});
const Attachicon1 = styled("div")({
  marginRight: "5px",
  marginTop: "5px",
  color: "#000000",
});
const Attachtext = styled("div")({
  marginRight: "10px",
});
const Divide = styled("div")({
  marginTop: "0px",
  marginLeft: "50px",
  marginRight: "20px",
  // marginLeft: '-185px',
  // marginRight: '-210px',
  opacity: 0.36,
  backgroundColor: "red",
});

const Footercontainer = styled("div")({
  //  width: "1253px",
  height: "70px",
  marginLeft: "42px",
  paddingTop: "20px",
  justifyContent: "center",
});
// const Item = styled(Box)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   // textAlign: "center",
//   color: theme.palette.text.secondary,
// }));

const Pad = styled("div")({
  paddingTop: "0px",
});
const Headingvalue = styled("div")({
  fontSize: "11px",
  fontWeight: 400,
  color: "#333333",
  opacity: 0.5,
});
const Rating = styled("div")({
  fontSize: "33px",
  fontWeight: 400,
  color: "#333333",
  marginTop: "-20px",
});
const Ratingvalue = styled("div")({
  fontSize: "11px",
  fontWeight: 400,
  color: "#333333",
  marginTop: "-10px",
});
const Progressvalue = styled("div")({
  fontSize: "12px",
  fontWeight: 400,
  color: "#333333",
  opacity: "0.75",
});
const Descriptionpadding = styled("div")({
  "&.MuiBox-root": {
    paddingBottom: "10px",
  },
});

function TabPanel(props: any) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
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

const Body = (props: any) => {
  const { appraiser1Data, ratingsData, mutation } = props;
  console.log(appraiser1Data, ratingsData, mutation, "alllll");

  const navigate = useNavigate();
  console.log(ratingsData, "ratingsData");
  const [tabValue, setTabValue] = React.useState<any>(0);
  const [activeIndex, setActiveIndex] = useState<any>(0);
  const [activeObjectiveType, setActiveObjectiveType] = useState<any>(null);
  const [objectiveDescription, setObjectiveDescription] = React.useState<any>(
    []
  );
  const [activeObjectiveDescription, setActiveObjectiveDescription] =
    useState("");

  const [activeObjectiveDescriptionName, setActiveObjectiveDescriptionName] =
    useState("");
  const [completedRatings, setCompletedRatings] = useState<any>(0);

  const [rating, setRating] = useState<any>("");
  const [activeEmployee, setActiveEmployee] = useState("");

  const [overview, setOverview] = useState(true);
  const [comments, setComments] = useState("");

  const [objdata, setObjData] = useState("");
  const [percentage, setPercentage] = useState(0);

  const [color, setColor] = useState(false);
  const [flatOjectiveDescription, setFlatOjectiveDescription] = useState<any>(
    []
  );

  const [forward, setForward] = useState(false);
  const [ratingSort, setRatingSort] = useState([]);
  const [button, setButton] = useState(true);
  const { data: objectiveTitleData, isLoading } = useGetObjectiveTitleQuery("");
  const [noratingError, setnoratingError] = useState(false);

  console.log(objectiveDescription, "objectiveDescription");

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    console.log("handle change run");
    console.log(newValue, "index check");
    setTabValue(newValue);
    setActiveIndex(0);
  };

  const filterObjectiveDescription = (data: any) => {
    console.log(data, "appraiser1Data");
    if (data && activeObjectiveType) {
      const res = data.filter((i: any) => {
        // console.log(i.objective_type._id , 'id', valueData);
        return i.name.objective_type === activeObjectiveType;
      });
      // console.log(res, 'descriptions')
      console.log(res, "appraiser1Data");
      return res;
    }
  };

  const findObjectiveTitleById = (id: any) => {
    if (objectiveTitleData) {
      console.log(
        objectiveTitleData.data.find((item: any) => item._id === id),
        "objectiveTitleData"
      );
      return objectiveTitleData.data.find((item: any) => item._id === id);
    }
  };

  useEffect(() => {
    if (objectiveDescription) {
      const percen = flatOjectiveDescription.findIndex(
        (j: any) => j.name._id === activeObjectiveDescriptionName
      );
      setCompletedRatings(percen);
      setPercentage((percen / objectiveDescription.length) * 100);
    }
  }, [completedRatings, objectiveDescription, activeObjectiveDescriptionName]);

  // useEffect(() => {
  //     if (appraiser1Data) {
  //         setObjectiveDescription(
  //             appraiser1Data.data.appraisal_template.objective_description
  //                 .slice()
  //                 .sort(
  //                     (a: any, b: any) =>
  //                         parseInt(a.name.objective_type) - parseInt(b.name.objective_type)
  //                 )
  //         );
  //         setActiveEmployee(appraiser1Data.data._id);
  //     }
  // }, [appraiser1Data]);

  useEffect(() => {
    if (appraiser1Data && objectiveTitleData) {
      setObjectiveDescription(() => {
        return appraiser1Data.data.appraisal_template.objective_description.map(
          (i: any) => {
            return {
              ...i,
              objective_title: findObjectiveTitleById(i.name.objective_title),
            };
          }
        );
      });
      setActiveEmployee(appraiser1Data.data._id);
    }
  }, [appraiser1Data, objectiveTitleData]);

  useEffect(() => {
    if (appraiser1Data) {
      setActiveObjectiveType(
        appraiser1Data.data.appraisal_template.objective_type[tabValue].name._id
      );
    }
  }, [tabValue, appraiser1Data, activeIndex]);

  useEffect(() => {
    if (appraiser1Data && activeObjectiveType) {
      setActiveObjectiveDescription(
        filterObjectiveDescription(
          appraiser1Data.data.appraisal_template.objective_description
        )[activeIndex]._id
      );
      // console.log(appraiser1Data.data.appraisal.objective_description[activeIndex]._id, 'active index')
    }
  }, [
    appraiser1Data,
    tabValue,
    activeIndex,
    objectiveDescription,
    activeObjectiveType,
  ]);

  useEffect(() => {
    if (appraiser1Data && activeObjectiveType) {
      setActiveObjectiveDescriptionName(
        filterObjectiveDescription(
          appraiser1Data.data.appraisal_template.objective_description
        )[activeIndex].name._id
      );
      // console.log(appraiser1Data.data.appraisal.objective_description[activeIndex].name._id, 'active index')
    }
  }, [
    appraiser1Data,
    tabValue,
    activeIndex,
    objectiveDescription,
    activeObjectiveType,
  ]);

  useEffect(() => {
    if (activeObjectiveDescription && appraiser1Data) {
      console.log("runningggggg");
      // navigate(`/appraisal/create-appraisal/employee/${activeEmployee}/objective-description/${activeObjectiveDescription}/objective-description-name/${activeObjectiveDescriptionName}`)
    }
  }, [appraiser1Data, tabValue, activeObjectiveType]);

  //   useEffect(() => {
  //     if (activeObjectiveType.length > 0) {

  //     }
  // }, [objectiveDescription, activeIndex, tabValue])

  useEffect(() => {
    if (objectiveDescription && appraiser1Data) {
      const group = _.groupBy(objectiveDescription, "name.objective_type");
      console.log(
        Object.values(group)
          .flat()
          .sort(
            (a: any, b: any) =>
              parseInt(b.name.objective_type) - parseInt(a.name.objective_type)
          ),
        "group"
      );
      console.log(
        objectiveDescription.map((a: any) => {}),
        "objective description"
      );

      // const  steamrollArray = (arr:any) =>  {
      //     return arr.reduce(function flat(r:any, a:any) {
      //         return Array.isArray(a) && a.reduce(flat, r) || r.concat(a);
      //     }, []);
      // }
      //
      // const  steamrollArray = (arr:any) =>  {
      //     // collect the values of the checked array
      //     var temp = [];
      //     if (Array.isArray(el)) {
      //         if (el.length === 1) {
      //             return checkElement(el[0]);
      //         } else {
      //             for (var i = 0; i < el.length; i++) {
      //                 // collect the values
      //                 temp = temp.concat(checkElement(el[i]));
      //             }
      //             // return flat values
      //             return temp;
      //         }
      //     } else {
      //         return el;
      //     }
      // }

      const flatFun = () => {
        const app = appraiser1Data.data.appraisal.objective_type
          .slice()
          .map((j: any) => {
            const filterData = objectiveDescription.filter((i: any) => {
              return i.name.objective_type === j.name._id;
            });
            return filterData;
          });

        return [...app];
      };
      setFlatOjectiveDescription(flatFun().flat());
      console.log(flatFun().flat(), "flat object");
    }

    //     setActiveIndex((prevState:any) => {
    //
    //
    // })

    // if (appraiser1Data.data.appraisal.objective_type[tabValue].name._id === activeObjectiveType) {
    //     // setActiveIndex(filterObjectiveDescription(objectiveDescription).length - 1)
    //     setActiveIndex( (prevState:any) => {
    //         if((prevState - activeIndex) === 0 ) {
    //
    //         }
    //
    //     })
    // }
  }, [
    activeObjectiveType,
    tabValue,
    activeIndex,
    objectiveDescription,
    appraiser1Data,
  ]);

  // useEffect(() => {
  //     setForward(false);
  //     if (rating === undefined || rating === "") {
  //         setForward(true)
  //         setButton(false)
  //     }
  //     else {
  //         setForward(false)
  //         setButton(true)

  //     }
  // }, [rating])

  const nextSlide = () => {
    forwardHandler();

    setCompletedRatings(completedRatings + 1);

    console.log(
      filterObjectiveDescription(objectiveDescription),
      "objectiveDescription"
    );
    if (
      appraiser1Data &&
      filterObjectiveDescription(objectiveDescription).length > 0 &&
      rating &&
      forward === false
    ) {
      // if (tabValue === activeObjectiveType!.length - 1 && activeIndex === objectiveDescription.length - 1) {
      if (
        tabValue === appraiser1Data.data.appraisal.objective_type.length - 1 &&
        activeIndex ===
          filterObjectiveDescription(objectiveDescription).length - 2
      ) {
        console.log("```````````````````````````````````````````````````");
        setActiveIndex(activeIndex + 1);
        setOverview(false);
      } else if (
        activeIndex ===
        filterObjectiveDescription(objectiveDescription).length - 1
      ) {
        console.log("increase tab running and index");
        setTabValue(tabValue + 1);
        setActiveIndex(0);
      } else if (
        activeIndex !== filterObjectiveDescription(objectiveDescription).length
      ) {
        console.log("increase index");
        setActiveIndex(activeIndex + 1);
      }
    }
    // mutation({
    //   objective_description: activeObjectiveDescription,
    //   objective_description_name: activeObjectiveDescriptionName,
    //   ratings: rating,
    //   id: activeEmployee,
    //   comments,
    // });

    setComments("");
  };

  const forwardHandler = () => {
    if (rating === undefined || rating === "") {
      setForward(true);
    }
    //  else if (rating != "") {
    //   setForward(false);
    // }
  };

  const alertHandler = () => {
    setForward(false);
  };

  const previousSlide = () => {
    setCompletedRatings(completedRatings - 1);
    // if (activeIndex === 0 && filterObjectiveDescription(objectiveDescription) && appraiser1Data.data.appraisal.objective_type[tabValue].name._id === activeObjectiveType) {
    if (activeIndex === 0 && filterObjectiveDescription(objectiveDescription)) {
      console.log(activeIndex, "activeindex");

      setTabValue(tabValue - 1);
    } else if (
      activeIndex !== filterObjectiveDescription(objectiveDescription).length
    ) {
      console.log("````` 1 st ````````");
      // setTabValue(tabValue - 1)

      activeIndex >= 0 && setActiveIndex(activeIndex - 1);
    } else if (activeIndex === 0) {
      console.log("````` 2 st ````````");
      setTabValue(tabValue - 1);
      // setActiveIndex(1)
    }
  };

  //   const prevSlide = () => {

  //     if (activeObjectiveType && activeIndex === activeObjectiveType[tabValue].objective_description.length - 1) {
  //         setTabValue(tabValue - 1)
  //         setActiveIndex(0)
  //     } else if (activeIndex === 1) {
  //         setActiveIndex(activeIndex - 1)
  //     }
  // }

  // setProgress(objectiveDescription.length)

  useEffect(() => {
    if (
      appraiser1Data &&
      activeObjectiveType &&
      filterObjectiveDescription(
        appraiser1Data.data.appraisal.objective_description
      ).length > 0
    ) {
      // @ts-ignore
      setRating(() => {
        console.log("rating run");
        if (
          filterObjectiveDescription(
            appraiser1Data.data.appraisal.objective_description
          )[activeIndex].ratings
        ) {
          return filterObjectiveDescription(
            appraiser1Data.data.appraisal.objective_description
          )[activeIndex].ratings._id;
        }
      });

      setComments(() => {
        if (
          filterObjectiveDescription(
            appraiser1Data.data.appraisal.objective_description
          )[activeIndex].comments
        ) {
          return filterObjectiveDescription(
            appraiser1Data.data.appraisal.objective_description
          )[activeIndex].comments;
        }
      });
      // @ts-ignore
      // (appraiser1Data.data.appraisal.objective_description)[activeIndex].ratings) && setRating((appraiser1Data.data.appraisal.objective_description)[activeIndex].ratings))
    }
  }, [appraiser1Data, activeObjectiveType, activeIndex]);
  // console.log(filterObjectiveDescription(appraiser1Data.data.appraisal.objective_description)[activeIndex].ratings, 'appraiser1Data 2')

  const ratingColorHandler = (id: any) => {
    if (rating && rating === id) {
      setColor(true);
    } else if (rating && rating != id) {
      setColor(false);
    }
  };

  useEffect(() => {
    if (rating !== "") {
      setForward(false);
    }
  }, [rating]);

  const overviewClickHandler = () => {
    if (rating === undefined || rating === "") {
      // alert('Select rating');
      setnoratingError(true);
    } else {
      //alert('Select else');
      setnoratingError(false);
      mutation({
        objective_description: activeObjectiveDescription,
        objective_description_name: activeObjectiveDescriptionName,
        ratings: rating,
        id: activeEmployee,
        comments,
      });
      navigate(`${APPRAISER}/employee/${activeEmployee}`);
    }
    // navigate(`${APPRAISER}/employee/${activeEmployee}`)
    // mutation({
    //   objective_description: activeObjectiveDescription,
    //   objective_description_name: activeObjectiveDescriptionName,
    //   ratings: rating,
    //   id: activeEmployee,
    //   comments,
    // });
  };

  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );
  const [show, toggleShow] = React.useState(true);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <>
      {forward && <Alert severity="error">Select the rating!</Alert>}
      <Box
        sx={{
          // maxWidth: "100%",
          // marginTop: "0px",
          // marginLeft: "50px",
          // marginRight: "50px",
          // // width:"200px",
          // paddingLeft:"42%"
          width: "100%",
          display: "flex",
          justifyContent: "center",
         
        }}
      >
        {noratingError && <Alert severity="error">Select a Rating</Alert>}
        <Tabcontainer>
          {/*@ts-ignore*/}

          <Tabs
            variant="scrollable"
            scrollButtons={false}
            value={tabValue}
            // onChange={handleChange}
          >
            {/*{appraiser1Data && appraiser1Data.data.appraisal.objective_type.slice().sort((a:any,b:any) => parseInt(b.name._id) - parseInt(a.name._id)).map((objType: any, index: number) => {*/}
            {appraiser1Data &&
              appraiser1Data.data.appraisal.objective_type.map(
                (objType: any, index: number) => {
                  return (
                    // <div style={{display:"flex",justifyContent:"center",paddingLeft:"20px",alignItems:"center"}}>
                    <Tab
                 
                      icon={<img src={Bulb} alt="icon" />}
                      label={objType.name.name}
                    />
                    // </div>
                  );
                }
              )}

            {/* <Tab label="Item One" />
            <Tab label="Item One" />
            <Tab label="Item One" /> */}
          </Tabs>
        </Tabcontainer>
      </Box>
      <Contentcontainer>
        <Stack direction="column" spacing={0}>
          {appraiser1Data &&
            activeObjectiveType &&
            objectiveDescription.map((objDesc: any, index: number) => {
              console.log(objDesc, "objDesc");
              return (
                <Descriptionpadding>
                  <TabPanel
                    value={tabValue}
                    index={index}
                    sx={{ paddingBottom: "10px" }}
                  >
                    <Item1 sx={{ padding: "0px" }}>
                      <Heading1>
                        {objectiveDescription &&
                          activeObjectiveType &&
                          objectiveTitleData &&
                          filterObjectiveDescription(objectiveDescription) &&
                          filterObjectiveDescription(objectiveDescription)[
                            activeIndex
                          ]?.name?.objectiveTitle}{" "}
                        <IconButton>
                          <img src={Infoicon} alt="icon" />
                        </IconButton>
                        <div>
                          <label style={{ fontSize: "15px" }}>
                            {" "}
                            Level:1,2,
                          </label>

                          <IconButton
                            aria-describedby={id}
                            onClick={handleClick}
                          >
                            <img src={Infoicon} alt="icon" />
                          </IconButton>
                          <Popover
                            id={id}
                            open={open}
                            anchorEl={anchorEl}
                            onClose={handleClose}
                            anchorOrigin={{
                              vertical: "bottom",
                              horizontal: "left",
                            }}
                          >
                            <div>
                              <Box
                                sx={{
                                  // maxWidth: "56% !important",
                                  width: "100%",
                                  height: "calc(100vh - 435px)",
                                  background: "#fff",
                                }}
                              >
                                <div>
                                  {objDesc.level_1_isChecked && (
                                    <Typography
                                      style={{
                                        borderBottom: "1px solid lightgrey",
                                        marginLeft: "5px",
                                        marginRight: "5px",
                                      }}
                                    >
                                      <div
                                        style={{
                                          display: "flex",
                                          alignItems: "center",
                                          paddingLeft: "5px",
                                          paddingTop: "20px",
                                        }}
                                      >
                                        <span
                                          style={{
                                            paddingLeft: "7px",
                                            fontSize: "14px",
                                          }}
                                        >
                                          Level 1
                                        </span>
                                      </div>

                                      <p
                                        style={{
                                          paddingLeft: "13px",
                                          fontSize: "12px",
                                          opacity: "75%",
                                        }}
                                      >
                                        {objDesc.name.level_1.level_definition}
                                      </p>

                                      {objDesc.name.level_1.behavioral_objective.map(
                                        (i: any) => {
                                          return (
                                            <p
                                              style={{
                                                paddingLeft: "37px",
                                                fontSize: "12px",
                                                opacity: "75%",
                                              }}
                                            >
                                              {i}
                                            </p>
                                          );
                                        }
                                      )}
                                    </Typography>
                                  )}

                                  {objDesc.level_2_isChecked && (
                                    <Typography
                                      style={{
                                        borderBottom: "1px solid lightgrey",
                                        marginLeft: "5px",
                                        marginRight: "5px",
                                      }}
                                    >
                                      <div
                                        style={{
                                          display: "flex",
                                          alignItems: "center",
                                          paddingLeft: "5px",
                                          paddingTop: "20px",
                                        }}
                                      >
                                        <span
                                          style={{
                                            paddingLeft: "7px",
                                            fontSize: "14px",
                                          }}
                                        >
                                          Level 2
                                        </span>
                                      </div>
                                      <p
                                        style={{
                                          paddingLeft: "13px",
                                          fontSize: "12px",
                                          opacity: "75%",
                                        }}
                                      >
                                        {objDesc.name.level_2.level_definition}
                                      </p>

                                      {objDesc.name.level_2.behavioral_objective.map(
                                        (i: any) => {
                                          return (
                                            <p
                                              style={{
                                                paddingLeft: "37px",
                                                fontSize: "12px",
                                                opacity: "75%",
                                              }}
                                            >
                                              {i}
                                            </p>
                                          );
                                        }
                                      )}
                                    </Typography>
                                  )}
                                  {objDesc.level_2_isChecked && (
                                    <Typography
                                      style={{
                                        //   borderBottom: "1px solid lightgrey",
                                        marginLeft: "5px",
                                        marginRight: "5px",
                                      }}
                                    >
                                      <div
                                        style={{
                                          display: "flex",
                                          alignItems: "center",
                                          paddingLeft: "5px",
                                          paddingTop: "20px",
                                        }}
                                      >
                                        <span
                                          style={{
                                            paddingLeft: "7px",
                                            fontSize: "14px",
                                          }}
                                        >
                                          Level 3
                                        </span>
                                      </div>
                                      <p
                                        style={{
                                          paddingLeft: "13px",
                                          fontSize: "12px",
                                          opacity: "75%",
                                        }}
                                      >
                                        {objDesc.name.level_3.level_definition}
                                      </p>

                                      {objDesc.name.level_3.behavioral_objective.map(
                                        (i: any) => {
                                          return (
                                            <p
                                              style={{
                                                paddingLeft: "37px",
                                                fontSize: "12px",
                                                opacity: "75%",
                                              }}
                                            >
                                              {i}
                                            </p>
                                          );
                                        }
                                      )}
                                    </Typography>
                                  )}

                                  {objDesc.level_4_isChecked && (
                                    <Typography
                                      style={{
                                        //   borderBottom: "1px solid lightgrey",
                                        marginLeft: "5px",
                                        marginRight: "5px",
                                      }}
                                    >
                                      <div
                                        style={{
                                          display: "flex",
                                          alignItems: "center",
                                          paddingLeft: "5px",
                                          paddingTop: "20px",
                                        }}
                                      >
                                        <span
                                          style={{
                                            paddingLeft: "7px",
                                            fontSize: "14px",
                                          }}
                                        >
                                          Level 4
                                        </span>
                                      </div>
                                      <p
                                        style={{
                                          paddingLeft: "13px",
                                          fontSize: "12px",
                                          opacity: "75%",
                                        }}
                                      >
                                        {objDesc.name.level_4.level_definition}
                                      </p>

                                      {objDesc.name.level_4.behavioral_objective.map(
                                        (i: any) => {
                                          return (
                                            <p
                                              style={{
                                                paddingLeft: "37px",
                                                fontSize: "12px",
                                                opacity: "75%",
                                              }}
                                            >
                                              {i}
                                            </p>
                                          );
                                        }
                                      )}
                                    </Typography>
                                  )}
                                </div>
                              </Box>
                            </div>
                          </Popover>
                        </div>
                      </Heading1>
                    </Item1>
                    {/*<Item1 sx={{padding: "0px", paddingTop: "10px"}}>*/}
                    {/*    <Description>*/}
                    {/*        {objectiveDescription &&*/}
                    {/*            activeObjectiveType &&*/}
                    {/*            filterObjectiveDescription(objectiveDescription)[*/}
                    {/*                activeIndex*/}
                    {/*                ].name.detailed_description}*/}
                    {/*    </Description>*/}
                    {/*</Item1>*/}
                  </TabPanel>
                </Descriptionpadding>
              );
            })}
          {/* #014D76 */}

          <Item1
            justifyContent="space-between"
            sx={{ width: "fitContent", padding: "0px" }}
          >
            <Stack justifyContent="center" direction="row" spacing={1.7}>
              {ratingsData &&
                ratingsData.data
                  .slice()
                  .sort(function (a: any, b: any) {
                    return a.rating - b.rating;
                  })
                  .map((ratings: any, _id: any) => (
                    <Item1
                      sx={{
                        marginLeft: "2px",
                        padding: "0px",
                        justifyContent: "center",
                        position: "relative",
                      }}
                    >
                      <Contain>
                        <Button
                          onClick={() => {
                            setRating(ratings._id);
                            mutation({
                              objective_description: activeObjectiveDescription,
                              objective_description_name:
                                activeObjectiveDescriptionName,
                              ratings: ratings._id,
                              id: activeEmployee,
                              comments,
                            });
                            alertHandler();
                            // ratingColorHandler(rating._id)
                          }}
                          style={{
                            //@ts-ignore
                            borderColor: rating === ratings._id && "#3C8BB5",
                            textAlign: "center",
                          }}
                          size="small"
                        >
                          {ratings.rating}
                        </Button>
                        {rating === ratings._id && (
                          <p
                            style={{
                              color: "#3C8BB5",
                              fontSize: "10px",
                              position: "absolute",
                            }}
                          >
                            {ratings.rating_scale}
                          </p>
                        )}
                      </Contain>

                      {/* <p style={{ color: "#3C8BB5", fontSize: "10px" }}>{ratings.rating_scale}</p> */}
                    </Item1>
                  ))}
            </Stack>
          </Item1>
        </Stack>
      </Contentcontainer>

      <Item1>
        <Heading2>Individual Objective Remarks/Justification</Heading2>

        <Box
          sx={{
            // width: "367px",
            //  marginLeft: "85px",
            marginTop: "5px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TextField
            style={{ width: "30%" }}
            // fullWidth
            value={comments}
            onChange={(e) => setComments(e.target.value)}
          />
        </Box>
      </Item1>
      <Attach>
        <Button variant="outlined" size="small">
          <Attachicon1>
            <img src={Attachicon} alt="icon" />
          </Attachicon1>
          <Attachtext>Attachments</Attachtext>
        </Button>
      </Attach>
      <Divide>
        <hr />
      </Divide>
      <Footercontainer>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Pad>
            <div>
              <Stack spacing={1} direction="row">
                <div>
                  <Rating>4.0</Rating>
                  {/* {appraisalData &&
                        appraisalData.data.appraisal.appraiser_rating} */}
                </div>

                <div>
                  <Ratingvalue>Exceeding</Ratingvalue>

                  <Headingvalue>Overall ratings</Headingvalue>
                </div>
              </Stack>
            </div>
          </Pad>
          {overview ? (
            <>
              <div style={{ marginRight: "50px" }}>
                <Stack spacing={1} direction="row">
                  <div onClick={previousSlide}>
                    <img src={Left} alt="icon" />{" "}
                  </div>

                  <div
                    onClick={() => {
                      {
                        nextSlide();
                      }
                    }}
                  >
                    <img src={Right} alt="icon" />
                  </div>
                </Stack>
              </div>
            </>
          ) : (
            //<Link to={`${APPRAISER}/employee/${activeEmployee}`}>
            <Button onClick={overviewClickHandler}>Overview </Button>
            // </Link>
          )}

          {objectiveDescription && (
            <>
              {" "}
              <div>
                <LinearProgress
                  variant="determinate"
                  color="success"
                  value={percentage}
                  style={{ width: "100%", height: 10, borderRadius: 5 }}
                />
                <Typography marginLeft="64px">
                  <Progressvalue>
                    {completedRatings + 1}/{objectiveDescription.length}
                  </Progressvalue>
                </Typography>
              </div>
            </>
          )}
        </Stack>
      </Footercontainer>
    </>
  );
};

export default Body;
