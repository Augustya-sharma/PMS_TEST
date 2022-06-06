/* eslint-disable */
import React, { useState } from "react";
import Stack from "@mui/material/Stack";
import { Container, TextField } from "@mui/material";
import { Button } from "@mui/material";
import { Grid } from "@mui/material";
import { Box } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import {
  MASTER_NAV,
  OTHER_RECOMMENDATION_VIEW_PAGE,
} from "../../constants/routes/Routing";
import PAMaster from "../../components/UI/PAMaster";
import { styled } from "@mui/system";
import Alert from "@mui/material/Alert";

const Text = styled("div")({
  "& .MuiOutlinedInput-root": {
    height: "46px",
  },
});

interface IOtherRecommendationProps {
  onSubmit: (name: string) => void;
}

const OtherRecommendation = (props: any) => {
  const { onSubmit, defaultValue, error, error1 } = props;

  const [name, setName] = React.useState("");
  const [hide, setHide] = useState(false);
  const [charError, setCharError] = useState<any>("")
  const [duplicateError, setDuplicateError] = useState<any>(error)
  const [duplicateErrorEdit, setDuplicateErrorEdit] = useState<any>(error1)

  useEffect(() => {
    if (defaultValue) {
      setName(defaultValue.data.name);
      console.log(defaultValue.data.name, "val");
    }
  }, [defaultValue]);

  console.log(name, 'name')
  const [textfeildError, settextfeildError] = useState<any>("");

  //console.log(setName); 
  const errorHandler = () => {
    if (name === "") {
      return settextfeildError("Enter text field");
    }
    else {
      const removeSpace = name.trim()
      return settextfeildError(""), onSubmit(removeSpace);

    }
  };

  useEffect(()=> {
    if (name != "") {
      return settextfeildError("");
    }
  },[name])

  useEffect(()=> {
    if (error === true) {
      setDuplicateError(true)
    }
  },[error])

  useEffect(()=> {
    if (error1 === true) {
      setDuplicateErrorEdit(true)
    }
  },[error1])

  useEffect(()=>{ 
if (name === "") {
  setDuplicateError(false);
  setDuplicateErrorEdit(false)
}
  },[name])


  // useEffect(() => {

  //   if (name === "" || name.match(/^[-_,\|\\.!@"'?#$%^&*=+`\[~}{:;/><()a-zA-Z\s\]]+$/)) {
  //     setCharError("");
  //     settextfeildError("")
  //   }
  //   else {
  //     setCharError("Only characters are allowed");

  //   }
  // }, [name])
  // const handleValidate = () => {
  //   if (name.match(/^[,.:;/!()a-zA-Z\s]+$/)) {
  //     setCharError("")
  //   }
  //   else {
  //     setCharError("Only characters are allowed")
  //   }
  // }

  const navigate = useNavigate();

  return (
    <>
      <PAMaster name={"Other Recommendation"} />
      <Container
        sx={{
          maxWidth: "96% !important",
          width: "100%",
          height: "calc(100vh - 165px)",
          background: "#fff",
          position: "relative"
        }}
      >
        {/* <Grid item xs={12}> */}
        {/* <Stack spacing={2}> */}
        <div style={{ paddingTop: "30px", position: "absolute", width: "96.5%" }}>
          {duplicateError && (
            <Alert severity="error">
              Entered Other Recommendation already exists!
            </Alert>
          )}

          {duplicateErrorEdit && (
            <Alert severity="error">

              Entered Other Recommendation already exists!

            </Alert>
          )}

        </div>

        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          spacing={2}
          paddingTop="110px"

        >
          <p> </p>

          <h2
            style={{
              color: "#004C75",
              paddingLeft: "150px",
              fontSize: "18px",
              fontWeight: "500",
              //marginRight: "-160px",
              // marginLeft: "100px",
            }}
          >
            Add Other Recommendation
          </h2>

          <div>
            <Link to={`${OTHER_RECOMMENDATION_VIEW_PAGE}`}>
              <Button
                style={{
                  textTransform: "none",
                  color: "#004C75",
                  borderColor: "#004C75",
                  borderRadius: "7px",
                  padding: "8px 16px",
                  fontSize: "14px",
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
              label="Other Recommendation "
              autoComplete="off"
              // value={name.replace(/[^a-zA-Z]/ig,'')}
              onKeyPress={(event) => {
                var key = event.keyCode || event.which;
                if (key === 13) {
                  errorHandler(),
                    console.log("Enter Button has been clicked")
                }
              }}
              value={name}
              onChange={(e: { target: { value: any } }) => {
                setName(e.target.value);
                // handleValidate()
              }}
              variant="outlined"
              style={{ width: "45%", borderRadius: "5px" }}
              // error={!name && textfeildError}
              // helperText={
              //   !name && textfeildError
              //     ? "*Other Recommendation required."
              //     : " "
              // }

              helperText={textfeildError}
              error={textfeildError}

            />
          </p>
        </Text>
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={2}
        // paddingTop="15px"
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
              errorHandler();
            }}
          >
            Save
          </Button>
          <Link to={defaultValue ? `${OTHER_RECOMMENDATION_VIEW_PAGE}` : MASTER_NAV}>
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
        {/* </Stack> */}
        {/* </Grid> */}
      </Container>
    </>
  );
};

export default OtherRecommendation;
