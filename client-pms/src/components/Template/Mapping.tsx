import React, { useEffect, useState, useRef } from "react";
import { styled } from "@mui/material/styles";
import Box, { BoxProps } from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Weightage from "./Weightage";
import Position from "./Position";
import AppraisalCalender from "./AppraisalCalender";
import TrainingRecommendation from "./TrainingRecommendation";
import OtherRecommendation from "./OtherRecommendation";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import { light } from "@mui/material/styles/createPalette";
import { Container, TextField, Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import { useParams, useNavigate } from "react-router-dom";
import { CREATE_MAPPING } from "../../constants/routes/Routing";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import PAMaster from "../../components/UI/PAMaster";
import { AddBoxOutlined } from "@mui/icons-material";
import { Scrollbar } from "react-scrollbars-custom";
import  './Mapping.css';






interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: any;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function Item(props: BoxProps) {
  const { sx, ...other } = props;

  return (
    <Box
      sx={{
        bgcolor: (theme) =>
          theme.palette.mode === "dark" ? "#101010" : "#fff",
        color: (theme) => (theme.palette.mode === "dark" ? "black" : "black"),
        border: "1px solid",
        borderColor: (theme) =>
          theme.palette.mode === "dark" ? "grey.800" : "grey.300",
        borderRadius: 1,
        fontSize: "1rem",
        fontWeight: "100",
        height: "50px",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        ...sx,
      }}
      {...other}
    />
  );
}

export default function Mapping(props: any) {

  

  const {
    weightageData,
    isLoading,
    calenderData,
    singleTemplateData,
    onSubmit,
    otherRecommendationData,
    trainingRecommendationData,
    saveDraft,
    createAppraisalCalenderHandler,
    createWeightage,
    addOtherRecommendation,
    addCaleander,
    isSuccessMapping,
    weightageError,
    calendarIsError,
    calendarError,
  } = props;

  // const scrollEnd = useRef<null | HTMLDivElement>(null);

  // useEffect(() => {
  //   scrollEnd.current?.scrollIntoView();
  // }, [weightageData]);


  const [tabValue, setTabValue] = React.useState<any>(0);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    console.log("handle change run");
    console.log(newValue, "index check");
    setTabValue(newValue);
  };

  const [active, setActive] = useState("weightage");

  const { id } = useParams();
  console.log(id);

  function a11yProps(index: number) {
    return {
      id: `vertical-tab-${index}`,
      "aria-controls": `vertical-tabpanel-${index}`,
    };
  }

  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    setTabValue(0);
  };

  console.log(weightageData.templates, "weiii");
  const navigate = useNavigate();

  useEffect(() => {
    if (weightageData) {
      if (id) {
        setValue(() => {
          // @ts-ignore
          return weightageData.templates.findIndex((item) => item._id === id);
        });
      } else {
        return navigate(`${CREATE_MAPPING}/${weightageData.templates[0]._id}`);
      }
    }
  }, []);
  return (
    <>
      {" "}
      <PAMaster name={"Create Mapping"} />
      <Container
        sx={{
          maxWidth: "96% !important",
          width: "100%",
          height: "calc(100vh - 165px)",
          backgroundColor: "#fff",
          paddingTop: "20px",
        }}
      >
        <h2
          style={{
            color: "#014D76",
            fontFamily: "regular",
            fontSize: "20px",
            marginTop: "auto",
            fontWeight: "500",
          }}
        >
          Templates
        </h2>

        <React.Fragment>
          <Grid container>
            <Grid container>
              <Grid item xs={1}>
                <Box sx={{ display: "flex" }}>
                  <Scrollbar
                    style={{ width: 380, height: "calc(100vh - 255px)" }}
                  >
                    <Tabs
                      orientation="vertical"
                      variant="scrollable"
                      value={value}
                      onChange={handleChange}
                      TabIndicatorProps={{
                        style: {
                          left: 0,
                          borderColor: "divider",
                        },
                      }}
                    >
                      {weightageData &&
                        weightageData.templates.map((i: any, index: number) => {
                          return (
                            <Tab
                              style={{ textTransform: "none" }}
                              onClick={() => {
                                navigate(`${CREATE_MAPPING}/${i._id}`);
                              }}
                              label={i.name}
                              {...a11yProps(index)}
                            />
                          );
                        })}
                    </Tabs>
                  </Scrollbar>
                </Box>
              </Grid>

              <Box
                sx={{
                  width: "calc(100% - 160px)",
                  height: "calc(100vh - 260px)",
                  boxShadow: "1px 1px 10px 1px rgba(0, 0, 0, 0.1)",
                  marginLeft: "20px",
                  color: "#fffff",
                 
                }}
              >
                {/* <Scrollbar
                  style={{ width: "auto", height: "calc(100vh - 280px)" , overflowY: "scroll"}}
                > */}
                   {/* <div ref={scrollEnd} ></div> */}
                <div 
                  
                  style={{ width: "auto", height: "calc(100vh - 280px)" , overflowY: "scroll",overflowX: 'hidden'}}
                   >
                  <div>
                    <Tabs
                      value={tabValue}
                      onChange={handleTabChange}
                      aria-label="basic tabs example"
                    >
                      <Tab
                        style={{ textTransform: "none", marginLeft: "25px" }}
                        label="Weightage"
                      />
                      <Tab
                        style={{ textTransform: "none", marginLeft: "35px" }}
                        label="Position"
                      />
                      <Tab
                        style={{ textTransform: "none", marginLeft: "35px" }}
                        label="Other Recommendation"
                      />
                      <Tab
                        style={{ textTransform: "none", marginLeft: "35px" }}
                        label="Training Recommendation"
                      />
                      <Tab
                        style={{ textTransform: "none", marginLeft: "35px" }}
                        label="Calendar"
                      />
                    </Tabs>
                  </div>
                  <TabPanel value={tabValue} index={0}>
                    <Weightage
                      data={weightageData}
                      singleTemplateData={singleTemplateData}
                      saveDraft={createWeightage}
                      tab={tabValue}
                      setTabs={setTabValue}
                      weightageError={weightageError}
                      isSuccessWeightage={isSuccessMapping}
                    />
                  </TabPanel>
                  <TabPanel value={tabValue} index={1}>
                  
                    <Position
                      onSubmitP={onSubmit}
                      tab={tabValue}
                      setTabs={setTabValue}
                      singleTemplateData={singleTemplateData}
                      isSuccessPosition={isSuccessMapping}
                    />
                  </TabPanel>

                  <TabPanel value={tabValue} index={2}>
                    <OtherRecommendation
                      otherData={otherRecommendationData}
                      tab={tabValue}
                      setTabs={setTabValue}
                      singleTemplateData={singleTemplateData}
                      saveDraft={addOtherRecommendation}
                      isSuccessOther={isSuccessMapping}
                    />
                  </TabPanel>
                  <TabPanel value={tabValue} index={3}>
                    <TrainingRecommendation
                      trainingData={trainingRecommendationData}
                      singleTemplateData={singleTemplateData}
                      tab={tabValue}
                      setTabs={setTabValue}
                      saveDraft={saveDraft}
                      isSuccessTraining={isSuccessMapping}
                    />
                  </TabPanel>
                  <TabPanel value={tabValue} index={4}>
                    <AppraisalCalender
                      calendarDataa={calenderData}
                      tab={tabValue}
                      addCaleander={addCaleander}
                      setTabs={setTabValue}
                      singleTemplateData={singleTemplateData}
                      createAppraisalCalenderHandler={
                        createAppraisalCalenderHandler
                      }
                      isSuccessCalendar={isSuccessMapping}
                      calendarIsError={calendarIsError}
                      calendarError={calendarError}
                    />
                  </TabPanel>
                </div>
                {/* </Scrollbar> */}
              </Box>
              {/* <Grid marginTop={1} item xs={2}>



                                <Box>
                                    <Stack spacing={2}>
                                        <Item
                                            boxShadow=" 0px 0px 2px 1px rgba(0, 0, 0, 0.1)"
                                            onClick={() => setActive("weightage")}
                                        >
                                            Weightage{" "}
                                            {
                                                <CheckCircleOutlinedIcon
                                                    style={{ color: "#368DC5" }}
                                                    fontSize="small"
                                                />
                                            }
                                        </Item>
                                        <Item
                                            boxShadow=" 0px 0px 2px 1px rgba(0, 0, 0, 0.1)"
                                            onClick={() => setActive("position")}
                                        >
                                            Position{" "}
                                            <CheckCircleOutlinedIcon
                                                style={{ color: "#368DC5" }}
                                                fontSize="small"
                                            />
                                        </Item>
                                        <Item
                                            boxShadow=" 0px 0px 2px 1px rgba(0, 0, 0, 0.1)"
                                            onClick={() => setActive("calender")}
                                        >
                                            Calender{" "}
                                            <CheckCircleOutlinedIcon
                                                style={{ color: "#368DC5" }}
                                                fontSize="small"
                                            />
                                        </Item>
                                    </Stack>
                                </Box>
                            </Grid> */}

              {/* <Grid item xs={8}>
                                <MenuList>
                                    <div className="weightage">
                                        {active === "weightage" && <Weightage data={weightageData} />}
                                    </div>
                                    <div>{active === "position" && <Position />}</div>
                                    <div>{active === "calender" && <Calender calendarDataa={calenderData} />}</div>
                                </MenuList>
                            </Grid> */}
            </Grid>
          </Grid>
        </React.Fragment>
      </Container>
    </>
  );
}
