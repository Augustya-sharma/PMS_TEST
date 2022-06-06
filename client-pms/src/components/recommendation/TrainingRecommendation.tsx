/* eslint-disable */
import * as React from "react";
import Stack from "@mui/material/Stack";
import { Container, TextField } from "@mui/material";
import { Button } from "@mui/material";
import { Grid } from "@mui/material";
import { Box } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { MASTER_NAV, TRAINING_VIEW } from "../../constants/routes/Routing";
import { styled } from "@mui/system";
import PAMaster from "../../components/UI/PAMaster";

import { useEffect, useState } from "react";


import Alert from '@mui/material/Alert';



const Text = styled("div")({
  "& .MuiOutlinedInput-root": {
    height: "50px",
  },
});

export default function TrainingRecommendation(this: any, props: any) {
  const { onSubmit, defaultValue, dataError, dataError1 } = props;
  const [duplicateError, setDuplicateError] = useState<any>(dataError)
  const [duplicateErrorEdit, setDuplicateErrorEdit] = useState<any>(dataError1)
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [charErrorTitle, setCharErrorTitle] = useState<any>("")
  const [charErrorDesc, setCharErrorDesc] = useState<any>("")
  const [textfeildErrorTitle, settextfeildErrorTitle] = useState<any>("");
  const [textfeildErrorDesc, settextfeildErrorDesc] = useState<any>("");

  useEffect(() => {
    if (defaultValue) {
      setTitle(defaultValue.data.title);
      setDescription(defaultValue.data.definition);
    }
  }, [defaultValue]);


  //console.log(setName);
  const errorHandler = () => {
    if (title === "") {
      return settextfeildErrorTitle("Enter Training Tile field")
    }else if (description === "") {
      settextfeildErrorDesc("Enter Training Description field")
    }
    else {
      const removeSpace = title.trim()
      return settextfeildErrorTitle(""), settextfeildErrorDesc(""),onSubmit(removeSpace, description);

    }
  };
  useEffect(()=> {
    if (title != "") {
      return settextfeildErrorTitle("")
    }   
  },[title])

  useEffect(()=> {
    if (description != "") {
      return settextfeildErrorDesc("")
    }   
  },[description])


  useEffect(()=> {
    if (dataError === true) {
      setDuplicateError(true)
    }
  },[dataError])

  useEffect(()=> {
    if (dataError1 === true) {
      setDuplicateErrorEdit(true)
    }
  },[dataError1])

  useEffect(()=>{ 
    if (title === "") {
      setDuplicateError(false);
      setDuplicateErrorEdit(false)
    }
      },[title])
    

  // useEffect(() => {

  //   if (title === "" || title.match(/^[-_,\|\\.!@"'?#$%^&*=+`\[~}{:;/><()a-zA-Z\s\]]+$/)) {
  //     setCharErrorTitle("");
  //     settextfeildError("");
  //     setCharErrorDesc("")
   
  //   }
  //   else {
  //     setCharErrorTitle("Only characters are allowed");
    
  //   }
  // }, [title])
  // useEffect(() => {

  //   if ((description === "" || title == "") || (title != "" && description.match(/^[-_,\|\\.!@"'?#$%^&*=+`\[~}{:;/><()a-zA-Z\s\]]+$/))) {   
     
  //     setCharErrorDesc("")
  //   }
  //   else {
  //     setCharErrorDesc("Only characters are allowed");
    
  //   }
  // }, [description])

  const navigate = useNavigate();
  console.log(dataError, dataError1, "dataerror");
  console.log(props, "onSubmit");
  return (
    <>
      <PAMaster name={"Training Recommendation"} />
      <Container
        sx={{
          maxWidth: "96% !important",
          width: "100%",
          height: "calc(100vh - 165px)",
          background: "#fff",
          position: "relative"

          // boxShadow: "2px 4px 6px 4px rgba(0, 0, 0, 0.2)",
          // marginTop: "15px",
        }}
      >
        <div style={{ paddingTop: "10px", position: "absolute", width: "96.5%" }}>
          {duplicateError && (
            <Alert severity="error"> Entered Training Recommendation already exists!</Alert>
          )}
          {duplicateErrorEdit && (
            <Alert severity="error"> Entered Training Recommendation already exists!</Alert>
          )}

        </div>
        <Grid item xs={12}>
          <Stack spacing={1}>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              spacing={2}
              paddingTop="60px"
            >
              <p> </p>

              <h2
                style={{
                  color: "#004C75",
                  fontSize: "18px",
                  fontWeight: "500",
                  paddingLeft: "150px",

                  //marginRight: "-180px",
                }}
              >
                Add Training Recommendation
              </h2>

              <Link to={`${TRAINING_VIEW}`}>
                <Button
                  style={{
                    textTransform: "none",
                    color: "#004C75",
                    borderColor: "#004C75",
                    borderRadius: "7px",
                    padding: "8px 16px",
                    fontFamily: "sans-serif",
                  }}
                  variant="outlined"
                >
                  View List
                </Button>
              </Link>
            </Stack>
            <Stack
              direction="column"
              justifyContent="center"
              alignItems="center"
              spacing={2}
            >
              <Text>
                <p style={{ display: "flex", justifyContent: "center" }}>
                  <TextField
                    size="medium"
                    id="outlined-basic"
                    label="Training Title"
                    autoComplete="off"
                    onKeyPress={(event) => {
                      var key = event.keyCode || event.which;
                      if (key === 13) {
                        errorHandler(),
                          console.log("Enter Button has been clicked")
                      }
                    }}
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    variant="outlined"
                    style={{ width: "40rem", height: 60 }}
                    helperText={textfeildErrorTitle}
                    error={textfeildErrorTitle}
                  />
                </p>
              </Text>
              <TextField
                aria-label="empty textarea"
                autoComplete="off"
                label="Description"
                value={description}
                multiline
                rows={4}
                onKeyPress={(event) => {
                  var key = event.keyCode || event.which;
                  if (key === 13) {
                    errorHandler(),
                      console.log("Enter Button has been clicked")
                  }
                }}
                onChange={(e) => setDescription(e.target.value)}
                style={{ width: "40rem", height: 120 }}
                helperText={textfeildErrorDesc}
                error={textfeildErrorDesc}
                
              />

              <Stack
                alignItems="center"
                direction="row"
                justifyContent="space-around"
                spacing={2}
              >
                <Button
              
                  style={{
                    textTransform: "none",
                    backgroundColor: "#014D76",
                    fontSize: "16px",
                    fontFamily: "sans-serif",
                    padding: "4px 19px",
                  }}
                  variant="contained"
                  onClick={() => {
                    //  onSubmit(title, description); 
                    errorHandler();
                  }}
                >
                  Save
                </Button>
                <Link to={defaultValue ? `${TRAINING_VIEW}` : MASTER_NAV}>
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
            </Stack>
          </Stack>
        </Grid>
      </Container>
    </>
  );
}
