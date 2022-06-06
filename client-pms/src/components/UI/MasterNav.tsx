/* eslint-disable */
import React,{useState} from "react";
import Box, { BoxProps } from "@mui/material/Box";
import { Container, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import Addemployee from "../../assets/Images/Addemployee.svg";
import Gridbox from "../../assets/Images/Gridbox.svg";
import Otherrecommendation from "../../assets/Images/Otherrecommendation.svg";
import Training from "../../assets/Images/Training.svg";
import Rating from "../../assets/Images/Rating.svg";
import Ratingscale from "../../assets/Images/Ratingscale.svg";
import Bellcurve from "../../assets/Images/Bellcurve.svg";
import Paadmin from "../../assets/Images/Paadmin.svg";
import Panotification from "../../assets/Images/Panotification.svg";
import Exception from "../../assets/Images/Exception.svg";
import Feedback from "../../assets/Images/Feedback.svg";
import Calendar from "../../assets/Images/Calendar.svg";
import {
  ADD_EMPLOYEE,
  CALENDER,
  LOGIN,
  OBJECTIVE,
  OTHER_RECOMMENDATION_PAGE,
  RATINGS_PAGE,
  RATING_SCALE_DESCRIPTION,
  RATING_SCALE_DESCRIPTION_VIEW_PAGE,
  TRAINING_RECOMMENDATION_PAGE,
  FEEDBACK_QUESTIONNAIRE,
  FEEDBACK_QUESTIONNAIRE_VIEW_lIST,
  OTHER_RECOMMENDATION_VIEW_PAGE,
  TRAINING_VIEW,
  LEVELS_VIEW_ALL,
} from "../../constants/routes/Routing";
import PAMasterhome from "../../components/UI/PAMasterhome";

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
        borderRadius: 0.5,
        boxShadow: "0px 0px 2px 1px rgba(0, 0, 0, 0.1)",
        //'&:hover': {
       //   backgroundColor: '#F3EFEF',
       //   opacity: [0.9, 0.8, 0.7],
       // },
        fontSize: "18px",
        padding:"0px 15px",
        height: "80px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        ...sx,
      }}
      {...other}
     
    />
  );
}

export default function MasterNav() {

  const [hoverOR, setHoverOR] = useState(false); 

  const [hoverTR, setHoverTR] = useState(false);  

  const [hoverR, setHoverR] = useState(false);  

  const [hoverRD, setHoverRD] = useState(false);

  const [hoverPA, setHoverPA] = useState(false);

  const [hoverFQ, setHoverFQ] = useState(false);

  const [hoverC, setHoverC]  = useState(false);
  

  return (
    <>
      <PAMasterhome/>
      <Container
        sx={{
          maxWidth: "100% !important",
          width: "100%",
         // height: "calc(100vh - 225px)",
          //backgroundColor: "red",
          //   boxShadow: "0px 1px 1px 1px rgba(0, 0, 0, 0.2)",
          // marginTop:"20px"
        }}
      >
        <div style={{ width: "100%" }}>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gridTemplateRows: "repeat(4, 1fr)",
              columnGap: 3,
              rowGap: 3,
              paddingTop: "30px",
              backgroundColor: "#fff",
              padding: "20px",
              paddingBottom: "50px",
              height: "calc(100vh - 210px)"
            }}
          >
     
               <Item>
                  <p> 9 Box Grid</p>
                  <img src={Gridbox} alt="icon" />
               </Item>
           
            <Link  to={`${OTHER_RECOMMENDATION_VIEW_PAGE}`}>
              <Item   
                  onPointerOver={()=> setHoverOR(true)}   
                  onPointerOut={() => setHoverOR(false)}
                  style={{  backgroundColor: hoverOR ?'#EBE6E6':'white'}}
                >
                <p> Other Recommendation</p>
                <img src={Otherrecommendation} alt="icon" />
              </Item>
            </Link>
         
            <Link to={`${TRAINING_VIEW}`}>
              <Item
                  onPointerOver={()=> setHoverTR(true)}   
                  onPointerOut={() => setHoverTR(false)}
                  style={{  backgroundColor: hoverTR ?'#EBE6E6':'white'}}  
               >
                <p>Training Recommendation</p>
                <img src={Training} alt="icon" />
              </Item>
            </Link>

            {/* <Link to={`${RATINGS_PAGE}`}>
              <Item
                 onPointerOver={()=> setHoverR(true)}   
                 onPointerOut={() => setHoverR(false)}
                 style={{  backgroundColor: hoverR ?'#EBE6E6':'white'}} 
              >
                <p>Ratings</p>
                <img src={Rating} alt="icon" />
              </Item>
            </Link> */}

            <Link to={`${RATING_SCALE_DESCRIPTION_VIEW_PAGE}`}>
              <Item
                   onPointerOver={()=> setHoverRD(true)}   
                   onPointerOut={() => setHoverRD(false)}
                   style={{  backgroundColor: hoverRD ?'#EBE6E6':'white'}} 
              
              >
                <p>Rating Scale</p>
                <img src={Ratingscale} alt="icon" />
              </Item>
            </Link>

            <Link to={`${LOGIN}`}>
              <Item>
                <p>Bell Curve</p>
                <img src={Bellcurve} alt="icon" />
              </Item>
            </Link>
            <Link to={`${LEVELS_VIEW_ALL}`}>
              <Item
                  onPointerOver={()=> setHoverPA(true)}   
                  onPointerOut={() => setHoverPA(false)}
                  style={{  backgroundColor: hoverPA ?'#EBE6E6':'white'}} 
              >
                <p>Objective Setting</p>

                <img src={Paadmin} alt="icon" />
              </Item>
            </Link>

            <Item>
              <p>PA Notification</p>
              <img src={Panotification} alt="icon" />
            </Item>

            <Link to={`${ADD_EMPLOYEE}`}>
              <Item>
                <p>Add Employee</p>
                <img src={Addemployee} alt="icon" />
              </Item>
            </Link>

            <Item>
              <p>Exception Handling</p>
              <img src={Exception} alt="icon" />
            </Item>

            <Link to={`${FEEDBACK_QUESTIONNAIRE_VIEW_lIST}`}>
              <Item
                 onPointerOver={()=> setHoverFQ(true)}   
                 onPointerOut={() => setHoverFQ(false)}
                 style={{  backgroundColor: hoverFQ ?'#EBE6E6':'white'}} 
              >
                <p>Feedback Questionnaire</p>
                <img src={Feedback} alt="icon" />
              </Item>
            </Link>
            <Link to={`${CALENDER}`}>
              <Item
                onPointerOver={()=> setHoverC(true)}   
                onPointerOut={() => setHoverC(false)}
                style={{  backgroundColor: hoverC ?'#EBE6E6':'white'}} 
              
              >
                <p>Calendar</p>
                <img src={Calendar} alt="icon" />
              </Item>
            </Link>
          </Box>
        </div>
      </Container>
    </>
  );
}
