/* eslint-disable */
import * as React from "react";
import { useEffect, useState } from "react";
import Stack from "@mui/material/Stack";
import { Container, TextField } from "@mui/material";
import { Button } from "@mui/material";
import { Grid } from "@mui/material";
import { Box } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { MASTER_NAV, FEEDBACK_QUESTIONNAIRE_VIEW_lIST } from "../../constants/routes/Routing";
import PAMaster from "../../components/UI/PAMaster";
import { styled } from "@mui/system";
import Alert from '@mui/material/Alert';

const Text = styled("div")({
  "& .MuiOutlinedInput-root": {
    height: "46px",
  },
});



interface IFeedBackQuestionnaire {
  onSubmit: (name: string) => void;
  defaultValue: any;
}

const FeedBackQuestionnaire = (props: any) => {
  const { onSubmit, defaultValue, feedbackError1, feedbackError2 } = props;
  const [duplicateError, setDuplicateError] = useState<any>(feedbackError1)
  const [duplicateErrorEdit, setDuplicateErrorEdit] = useState<any>(feedbackError2)
  const [name, setName] = React.useState("");
  const [charError,setCharError] = useState<any>("")

  
  useEffect(() => {
    if (defaultValue) {
      setName(defaultValue.data.name);
      console.log(defaultValue.data.name, "val");
    }
  }, [defaultValue]);

  const [textfeildError, settextfeildError] = useState<any>("");
  //console.log(setName);
  const errorHandler = () => {
    if (name === "") {
      return settextfeildError("Enter text field");
    } else {
      const removeSpace = name.trim()
      return settextfeildError(""),onSubmit(removeSpace)
    }
  };

  useEffect(() => {
    if (name != "") {
      return settextfeildError("");
    }
  },[name])

  useEffect(()=> {
    if (feedbackError1 === true) {
      setDuplicateError(true)
    }
  },[feedbackError1])

  useEffect(()=> {
    if (feedbackError2 === true) {
      setDuplicateErrorEdit(true)
    }
  },[feedbackError2])

useEffect(()=>{ 
if (name === "") {
  setDuplicateError(false);
  setDuplicateErrorEdit(false)
}
  },[name])


  // useEffect(()=> {
    
  //   if (name === "" || name.match(/^[-_,\|\\.!@"'?#$%^&*=+`\[~}{:;/><()a-zA-Z\s\]]+$/)) {
  //     setCharError("");
  //     settextfeildError("")
  //   }
  //   else {
  //     setCharError("Only characters are allowed");
     
      
  //   }
  // },[name])

  const navigate = useNavigate();

  // const handleKeyPress = (e:any) =>  {
  //   var key = event.keyCode || event.which;
  //   if (key === 13) {
  //       // perform your Logic on "enter" button 
  //       console.log("Enter Button has been clicked")
  //   }
  // };

  return (
    <>
      <PAMaster name={"Feedback Questionnaire"} />
      <Container
        sx={{
          maxWidth: "96% !important",
          width: "100%",
          height: "calc(100vh - 165px)",
          background: "#fff",
          position: "relative"
          //boxShadow: "2px 4px 6px 4px rgba(0, 0, 0, 0.2)",
          //marginTop: "15px",
        }}
      >
        <Grid item xs={12}>
          <Stack >
          <div style={{paddingTop:"30px",position:"absolute",width:"96.5%"}}>
          
          {duplicateError && (
              <Alert severity="error">Entered feedback questionnaire already exists!</Alert>
            )}
            {duplicateErrorEdit && (
              <Alert severity="error">Entered feedback questionnaire already exists!</Alert>
            )}


            </div>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              spacing={2}
              paddingTop="90px"
            >
              <p> </p>

              <h2
                style={{
                  color: "#004C75",
                  paddingLeft: "110px",
                  fontSize: "18px",
                  fontWeight: "500",
                  //marginRight: "-160px",
                }}
              >
                Add Feedback Questionnaire
              </h2>

              <div>
                <Link to={`${FEEDBACK_QUESTIONNAIRE_VIEW_lIST}`}>
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
              </div>
            </Stack>
            <Text>

              <p style={{ display: "flex", justifyContent: "center" }}>
                <TextField
                  size="small"
                  id="outlined-basic"
                  label="Feedback Questionnaire"
                  autoComplete="off"
                  onKeyPress={(event) => {
                    var key = event.keyCode || event.which;
                    if (key === 13) {
                      errorHandler(),
                      console.log("Enter Button has been clicked")
                    }
                  }}
                  value={name}
                  onChange={(e: { target: { value: any } }) =>
                    setName(e.target.value)
                  }
                  variant="outlined"
                  style={{ width: "45%", }}
                  error={textfeildError}
                helperText={textfeildError}
                  
                />
              </p>

            </Text>
            <Stack
              alignItems="center"
              direction="row"
              justifyContent="center"
              spacing={2}
              paddingTop="15px"

            >

              <Button
            
                style={{
                  borderRadius: "4px",
                  textTransform: "none",
                  backgroundColor: "#004D77",
                  fontSize: "18px",
                  fontFamily: "sans-serif",
                  padding: "4px 19px",
                }}
                variant="contained"


                onClick={() => { 
                  // onSubmit(name);
                   errorHandler(); }}

              >
                Save
              </Button>

              <Link to={defaultValue ? `${FEEDBACK_QUESTIONNAIRE_VIEW_lIST}` : MASTER_NAV}>
                <Button
                  style={{
                    textTransform: "none",
                    fontSize: "14px",
                    borderRadius: "7px",
                    borderColor: "#004C75",
                    color: "#004C75",
                    fontFamily: "sans-serif",
                    padding: "7px 14px",
                  }}
                  variant="outlined"
                >
                  Cancel
                </Button>
              </Link>
            </Stack>
          </Stack>
        </Grid>
      </Container>
    </>
  );
};

export default FeedBackQuestionnaire;
