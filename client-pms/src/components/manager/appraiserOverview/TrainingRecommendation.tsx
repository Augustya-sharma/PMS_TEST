import * as React from "react";
import { useEffect, useState } from "react";
import { styled } from "@mui/system";
import { TextField } from "@mui/material";
import Blueadd from "../../../assets/appraiser/Reviewericons/Blueadd.svg";
import Blueminus from "../../../assets/appraiser/Reviewericons/Blueminus.svg";
import Stack from "@mui/material/Stack";
import { Box } from "@mui/system";
import Grid from "@mui/material/Grid";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { IconButton } from "@mui/material";
import InputBase from "@mui/material/InputBase";
import { useAppraisalContext } from "../../../context/appraiserOverviewContext";
import { Alert } from "@mui/material";

const Contain = styled("div")({
  marginRight: "20px",
  marginLeft: "25px",
  marginTop: "10px",
});
const TrainingRecommendation = styled("div")({
  marginLeft: "25px",
  marginTop: "10px",
  color: "#008E97",
  fontSize: "13px",
  //opacity: 0.85
});

// const Tfbox = styled('div')({
//   width: '420px',
//   backgroundColor: '#FFFFFF',
//   '& .MuiInputLabel-root': {
//     color: '#333333',
//     opacity: '0.5',
//     fontSize: '13px',
//     fontWeight: '400',
//     textTransform: 'none',
//   },
// });
// const Addicon1= styled('div')({
//   marginLeft:'0px',
//   '&.MuiButtonBase-root': {
//     marginLeft:'0px',
//   }
// });
// const Tf = styled('div')({
//   fontSize: '13x',

//   backgroundColor: '#FFFFFF',
//   '& .MuiInputLabel-root': {
//     color: '#333333',
//     opacity: '0.5',
//     fontSize: '13px',
//     fontWeight: '400',
//     textTransform: 'none',
//   },
// });
const TextField1 = styled(TextField)({
  backgroundColor: "#FFFFFF",
  borderRadius: "5px",
  opacity:"70%",
  "& .MuiInputBase-input": {
    color: "#333333",
    fontSize: "13px",
    fontWeight: "400",
    textTransform: "none",
    //opacity: 0.5
  },
  "& .MuiInputLabel-root": {
    color: "#333333",
    fontSize: "13px",
    fontWeight: "400",
    textTransform: "none",
    opacity: 0.5,
  },
  "& .MuiFormLabel-root": {
    lineHeight: "1.75em",
  },
  "& label.Mui-focused": {
    color: "#008E97",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "green",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#EBEBEB",
      //backgroundColor: '#FFFFFF',
      color: "#333333",
      fontSize: "13px",
      fontWeight: "400",
      textTransform: "none",
      // opacity: 0.5
    },
    "&:hover fieldset": {
      borderColor: "#E7EEEE",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#EBEBEB",
    },
  },
});

const TextField2 = styled(TextField)({
  backgroundColor: "#FFFFFF",
  borderRadius: "5px",
  opacity:"70%",
  "& .MuiInputBase-input": {
    color: "#333333",
    fontSize: "13px",
    fontWeight: "400",
    textTransform: "none",
    //opacity: 0.5
  },
  "& .MuiInputLabel-root": {
    color: "#333333",
    fontSize: "13px",
    fontWeight: "400",
    textTransform: "none",
    opacity: 0.5,
  },
  "& .MuiFormLabel-root": {
    lineHeight: "1.75em",
  },
  "& label.Mui-focused": {
    color: "#008E97",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "green",
  },
  "& .MuiOutlinedInput-root": {
    paddingBottom: "4px",
    "& fieldset": {
      borderColor: "#EBEBEB",
      //backgroundColor: '#FFFFFF',
      color: "#333333",
      fontSize: "13px",
      fontWeight: "400",
      textTransform: "none",
      // opacity: 0.5
    },
    "&:hover fieldset": {
      borderColor: "#E7EEEE",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#EBEBEB",
    },
  },
});

const Containers = styled("div")({
  marginTop: 18,
  marginLeft: 12,
  marginRight: 16,
});
const Griditems1 = styled("div")({
  width: "33%",
  border: "1px solid #ddd",
  height: 75,
});
const Griditems2 = styled("div")({
  width: "33%",
  border: "1px solid #ddd",
  height: 75,
  borderLeft: "0px",
});
const Griditems3 = styled("div")({
  width: "33%",
  border: "1px solid #ddd",
  height: 75,
  borderLeft: "0px",
});

const Typo1 = styled("div")({
  marginTop: "-18px",
  fontSize: "13px",
  opacity: "0.5",
  fontWeight: "400",
  color: "#3C8BB5",
});

const TrainingRecommendations = (props: any) => {
  const { training2Data } = props;
  const [formValues, setFormValues] = useState([
    { name: "", training_name: "", justification: "" },
  ]);

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  //@ts-ignore
  const {trainingRecommendation,setTrainingRecommendation,trainingSelectValue,trainingRecommendationFormValues,setTrainingRecommendationFormValues,errorHandler,fieldError,setFieldError,
  } = useAppraisalContext();

  console.log(trainingSelectValue, "trainingRecommendation````");

  const handleTrainingChange = (i: any, e: any) => {
    const newFormValues = [...formValues];
    //@ts-ignore
    newFormValues[i][e.target.name] = e.target.value;
    setFormValues(newFormValues);
  };

  const addFormFields = () => {
    setFormValues([
      ...formValues,
      { name: "", training_name: "", justification: "" },
    ]);
  };

  const removeFormFields = (i: any) => {
    const newFormValues = [...formValues];
    newFormValues.splice(i, 1);
    setFormValues(newFormValues);
  };

  // Avoid a layout jump when reaching the last page with empty rows.
  //

  useEffect(() => {
    if (trainingRecommendation.length > 0) {
      setFormValues(() => {
        return trainingRecommendation.map((j: any) => {
          return {
            name: j.name._id,
            training_name: j.training_name,
            justification: j.justification,
          };
        });
      });
    }
  }, [trainingRecommendation]);

  useEffect(() => {
    setTrainingRecommendationFormValues(formValues);
  }, [formValues]);
  //
  // const area: {
  //         name: "works",
  //         specific: [
  //             value: "",
  //             value: "",
  //             value: "",
  //         ]
  // }
  //
  // console.log(area)

  // useEffect(() => {

  //     (trainingRecommendationFormValues && trainingRecommendationFormValues.map((i: any) => {

  //         if (i.name != "" && i.training_name === "" && i.justification === "") {
  //             setFieldError(true)
  //         }
  //         else {
  //             setFieldError(false)
  //         }

  //     }))
  //     // if (trainingRecommendationFormValues && trainingRecommendationFormValues.)
  // }, [trainingRecommendationFormValues])
  // console.log(fieldError, 'ffffffffffff')

  return (
    <div>
      <TrainingRecommendation>
        Training Recommendation(s)
      </TrainingRecommendation>
      <Contain>
        {fieldError && (
          <Alert severity="error">Please enter the required text fields!</Alert>
        )}

        {formValues.map((element, index) => (
          <Grid container spacing={0}>
            <Griditems1>
              <Grid item>
                <Containers>
                  <Box>
                    {/* <FormControl size='small' sx={{ minWidth: 373, }}>
                      <InputLabel ><Typo1><p>Select</p></Typo1></InputLabel>
                      <Select
                        input={<SelectTextField />}
                        label="select"
                        name="dropSelect"
                        value={element.dropSelect || ""}
                        onChange={e => handleTrainingChange(index, e)}>
                        {training2Data && training2Data.data.map((TrainingData: any) => {
                          return (
                            <MenuItem value={TrainingData._id}>
                              {TrainingData.title}
                            </MenuItem>
                          )

                        })}
                      </Select>
                    </FormControl> */}
                    <TextField1
                      select
                      fullWidth
                      label="select"
                      id="outlined-select-select"
                      size="small"
                      name="name"
                      value={element.name || ""}
                      onChange={(e) => handleTrainingChange(index, e)}
                    >
                      {trainingSelectValue &&
                        trainingSelectValue.map((TrainingData: any) => {
                          return (
                            <MenuItem value={TrainingData.name._id}>
                              {TrainingData.name.title}
                            </MenuItem>
                          );
                        })}
                    </TextField1>
                  </Box>
                </Containers>
              </Grid>
            </Griditems1>
            <Griditems2>
              <Grid item>
                <Containers>
                  <Box>
                    <TextField2
                      fullWidth
                      label="Enter Training Name"
                      size="small"
                      id="outlined-select-select"
                      name="training_name"
                      value={element.training_name || ""}
                      // error={fieldError}
                      // helperText={
                      //     fieldError && "*Enter training name."}
                      onChange={(e) => handleTrainingChange(index, e)}
                    />
                  </Box>
                </Containers>
              </Grid>
            </Griditems2>
            <Griditems3>
              <Grid item>
                <Containers>
                  <Box>
                    <Stack direction="row" alignItems="center" spacing={1}>
                      <TextField2
                        fullWidth
                        label="Enter your Justification"
                        size="small"
                        id="outlined-select-select"
                        name="justification"
                        // error={fieldError}
                        // helperText={
                        //     fieldError && "*Enter justification."}
                        value={element.justification || ""}
                        onChange={(e) => handleTrainingChange(index, e)}
                      />

                      {formValues.length - 1 === index &&
                        formValues.length < 6 && (
                          <IconButton onClick={() => addFormFields()}>
                            <img src={Blueadd} alt="icon" />
                          </IconButton>
                        )}

                      {formValues.length  !== 1 && (
                       
                        <IconButton onClick={() => removeFormFields(index)}>
                          <img src={Blueminus} alt="icon" />
                        </IconButton>
                      )}
                    </Stack>
                  </Box>
                </Containers>
              </Grid>
            </Griditems3>
          </Grid>
        ))}
      </Contain>
    </div>
  );
  
};

export default TrainingRecommendations;
