/* eslint-disable */
import * as React from "react";
import { useEffect, useState, useRef } from "react";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import { Container, TextField } from "@mui/material";
import { Button } from "@mui/material";
import { blueGrey } from "@mui/material/colors";
import { Grid } from "@mui/material";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import {
  MASTER_NAV,
  RATING_SCALE_DESCRIPTION_VIEW_PAGE,
} from "../../constants/routes/Routing";
import PAMaster from "../../components/UI/PAMaster";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Addmore from "../../assets/Images/Addmore.svg";
import Minus from "../../assets/appraiser/Reviewericons/Minus.svg";
import Edit from "../../assets/Images/Edit.svg";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Alert from "@mui/material/Alert";
import { Scrollbar } from "react-scrollbars-custom";

export default function RatingScaleDescription(props: any) {
  const {
    onSubmit,
    ratingsData,
    defaultValue,
    element,
    value,
    error1,
    error2,
  } = props;
  const [rating, setRating] = React.useState<any>("");
  const [ratingScale, setRatingScale] = React.useState("");
  const [definition, setDefinition] = React.useState("");
  const [maxValue, setMaxValue] = useState<any>(100);
  const [minValue, setMinValue] = useState<any>(1);
  const [error, setError] = React.useState(false);
  const [showAdd, setShowAdd] = useState(false);
  const [charRatingScale, setCharRatingScale] = React.useState<any>("");
  const [charDesc, setCharDesc] = React.useState<any>("");
  const [charRating, setCharRating] = React.useState<any>("");
  const [duplicateError1, setDuplicateError1] = useState<any>(error1);
  const [duplicateError2, setDuplicateError2] = useState<any>(error2);

  const [formValues, setFormValues] = React.useState<any>([
    {
      rating: "",
      rating_scale: "",
      definition: "",
    },
  ]);

  console.log(formValues, "formValuesformValues");

  console.log(formValues, "formValuesformValues");

  const [textfeildErrorRating, settextfeildErrorRating] = useState<any>("");
  const [textfeildErrorScale, settextfeildErrorScale] = useState<any>("");
  const [textfeildErrorDesc, settextfeildErrorDesc] = useState("");
  const [ratingIndex, setRatingIndex] = useState<any>("");

  //console.log(setName);
  // const errorHandler = () => {

  //   if (element === "") {
  //     return settextfeildError(true);
  //   } else {
  //     return settextfeildError(false);
  //   }
  // };

  useEffect(() => {
    if (defaultValue) {
      setShowAdd(true);
    } else {
      setShowAdd(false);
    }
  }, [defaultValue]);

  
  useEffect(() => {
    if (error1 === true) {
      setDuplicateError1(true);
    } else if (error1 === true) {
      setDuplicateError1(true);
    }
  }, [error1]);
  useEffect(() => {
    if (error2 === true) {
      setDuplicateError2(true);
    } else if (error2 === true) {
      setDuplicateError2(true);
    }
  }, [error2]); 

  
  const scrollEnd = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    scrollEnd.current?.scrollIntoView();
  }, [formValues]);

  const handleRatingChange = (i: any, e: any) => {
    const newFormValues = [...formValues];
    //@ts-ignore
    newFormValues[i][e.target.name] = e.target.value;
    setFormValues(newFormValues);

    //   const validatingRatingScale = newFormValues.map((j:any, ix:any)=> {
    //   if (!j.rating_scale.match(/^[a-zA-Z\s]+$/)) {
    //   return {
    //     ...j,
    //     rating_Scale_Error:true
    //   }
    // }
    //   return j

    // })
  };

  const addFormFields = () => {
    if (rating === "" || ratingScale === "" || rating > 100) {
      settextfeildErrorRating("Rating text field is empty");
      settextfeildErrorScale("Rating Scale text field is empty");
     } else {
        settextfeildErrorScale("");
      setFormValues([
        ...formValues,
        { rating: "", rating_scale: "", definition: "" },
      ]);
    }
  };

  const removeFormFields = (i: any) => {
    const newFormValues = [...formValues];
    newFormValues.splice(i, 1);
    setFormValues(newFormValues);
  };

  // console.log(defaultValue, "defaultValue");
  useEffect(() => {
    if (defaultValue) {
      setFormValues([
        {
          rating: defaultValue.data.rating,
          rating_scale: defaultValue.data.rating_scale,
          definition: defaultValue.data.definition,
        },
      ]);
    }
  }, [defaultValue]);
  console.log(formValues, "defaultValue");

  // useEffect(() => {
  //   if (defaultValue) {
  //     setFormValues(defaultValue);

  //   }
  // }, [defaultValue]);
  // console.log(rating, "ratings getttt");

  // const handlevalidaterating = (v:any) =>{
  //  // console.log(v,'ioo9o9o')
  //   if (v.match(/[0-9]/)) {
  //     setError("");
  //   } else {
  //     setError("Only numbers are allowed");
  //   }

  // }

  // useEffect(()=> {

  //   if ((rating === "")||(rating > 0 && rating.match(/^(\d+(\.\d+)?)$/))) {

  //     setCharRating("");
  //     settextfeildErrorRating("")
  //   }
  //   else {
  //     setCharRating("Numbers must be greater than 0 !")
  //   }
  // },[rating])

  useEffect(() => {
    if (rating === "" || (rating && rating > 0)) {
      setCharRating("");
      settextfeildErrorRating("");
      if (rating > 100) {
        setCharRating("Rating must be less than 100 !");
      }
    } else {
      setCharRating("Rating must be greater than 0 !");
    }
  }, [rating]);

  // useEffect(()=> {

  //   if ((ratingScale === "")||(ratingScale.match(/^[-_,\|\\.!@"'?#$%^&*=+`\[~}{:;/><()a-zA-Z\s\]]+$/))) {

  //     setCharRatingScale("");
  //     settextfeildErrorScale("")
  //   }
  //   else {
  //     setCharRatingScale("Only characters are allowed")
  //   }
  // },[ratingScale])

  // useEffect(()=> {

  //   if ((definition === "")||(definition.match(/^[-_,\|\\.!@"'?#$%^&*=+`\[~}{:;/><()a-zA-Z\s\]]+$/))) {

  //     setCharDesc("");
  //     settextfeildErrorDesc("")
  //   }
  //   else {
  //     setCharDesc("Only characters are allowed")
  //   }
  // },[definition])

  // const handleRatingEmpty = () => {
  //   if (rating && rating === "") {
  //     settextfeildErrorRating("Enter the text field")
  //   }
  //   else if (rating != "") {
  //     settextfeildErrorRating("")
  //   }
  // }

  // const handlevalidateratingscale = (r: any, i: any) => {
  //   //console.log(r,'yyuii')
  //   setRatingScale(r);
  //   if (r.match(/^[-,;':&/.!()/a-zA-Z\s]+$/)) {
  //     setError1("");
  //   } else {
  //     setError1("Only characters are allowed");
  //   }
  // };

  // const handlev = (w: any) => {
  //   //  console.log(w,'klllll')
  //   if (w.match(/^[-,";:&'/.!()/a-zA-Z\s]+$/)) {
  //     setError2("");
  //   } else {
  //     setError2("Only characters are allowed");
  //   }
  // };
  console.log(formValues, "fffffffffffffffffff");

  const errorHandler = () => {
    const res = formValues.map((i: any) => {
      console.log(
        formValues.filter((j: any) => {
          return j.rating_scale.length > 0 && j.rating.length > 0;
        }),
        "filtered"
      );
      console.log(i, "rating length");
      if (i.rating === "" || i.rating_scale === "") {
        if (i.rating === "") {
          settextfeildErrorRating("Enter the Rating text field");
         
        } else if (i.rating_scale === "") {
          settextfeildErrorScale("Enter Rating Scale text field");
         
        }
      } else if (
        formValues.filter((j: any) => {
          return j.rating_scale.length > 0 && j.rating.length > 0;
        }).length === formValues.length
      ) {
        console.log(i.rating.length, "rating length");

        console.log(i, "rating length");
        settextfeildErrorRating("");
        settextfeildErrorScale("");
      }
    });

    if (
      formValues.filter((j: any) => {
        return j.rating_scale.length > 0 && j.rating.length > 0;
      }).length === formValues.length
    ) {
      const intFormValues = formValues.map((j: any) => {
        return {
          rating: j.rating,
          rating_scale: j.rating_scale,
          definition: j.definition,
        };
      });
      onSubmit(intFormValues);
    }
  };

  // const errorHandler1 = () => {

  //   if (rating || ratingScale) {
  //     if (rating === "") {
  //       settextfeildErrorRating("Enter the text field");

  //     }
  //     else if (ratingScale === "") {
  //       settextfeildErrorScale('Enter text field');

  //     }
  //     else {
  //       settextfeildErrorRating("");
  //       settextfeildErrorScale("");
  //       const intFormValues = formValues.map((j: any) => {

  //         return {
  //           rating: j.rating,
  //           rating_scale: j.rating_scale,
  //           definition: j.definition
  //         }
  //       }
  //       )
  //       onSubmit(intFormValues)
  //     }
  //   }
  // }

  useEffect(() => {
    if (ratingIndex) {
    }
  }, [ratingIndex]);

  // useEffect(()=> {
  //   if (textfeildErrorRating === true || textfeildErrorScale === true) {
  //     setDuplicateError1(false);
  //     setDuplicateError2(false)
  //   }
  // },[textfeildErrorRating,textfeildErrorScale,duplicateError1,duplicateError2]

  const errHandler = (obj: any) => {
    console.log("running");

    if (defaultValue) {
      if (defaultValue.data.rating === "" || defaultValue.data.rating_scale === "") {

        if (defaultValue.data.rating === "") {
          settextfeildErrorRating("Enter Rating text field")
        } else if (defaultValue.data.rating_scale === "") {
          settextfeildErrorScale("Enter RatingScale text field")
        }
      } else {
        settextfeildErrorRating("");
        settextfeildErrorScale("");
        const intFormValues = formValues.map((j: any) => {
          return {
            rating: j.rating,
            rating_scale: j.rating_scale,
            definition: j.definition,
          };
        });
        onSubmit(intFormValues);
      }
      // }
    }
  };

  // const intFormValues = formValues.map((j: any) => {

  //   return {
  //     rating: j.rating,
  //     rating_scale: j.rating_scale,
  //     definition: j.definition
  //   }
  // })
  // onSubmit(intFormValues);

  // useEffect(() => {
  //   if (rating !== "") {
  //     settextfeildErrorRating("")
  //   }
  //   if (ratingScale !== "") {
  //     settextfeildErrorScale('')
  //   }
  // }, [rating, ratingScale])


  // useEffect(()=> {
  //     if (textfeildErrorRating !=  "" ) {
  //       setDuplicateError1(false),
  //       setDuplicateError2(false)
  //     }
  //   },[textfeildErrorRating,textfeildErrorScale,textfeildErrorDesc])
  
  
  return (
    <>
      <PAMaster name={"Rating Scale Description"} />
      <Container
        sx={{
          maxWidth: "96% !important",
          width: "100%",
          height: "calc(100vh - 165px)",
          background: "#fff",
          position: "relative",
          //boxShadow: "2px 4px 6px 4px rgba(0, 0, 0, 0.2)",
          //marginTop: "15px",
        }}
      >
        <Grid item xs={12}>
          <Stack spacing={1}>
            <div
              style={{
                paddingTop: "30px",
                position: "absolute",
                width: "96.5%",
              }}
            >
              {/* {error ? (
                <Alert severity="error">
                  You must type all Text Field values — check it out!
                </Alert>
              ) : (
                ""
              )} */}
              {duplicateError1 ? (
                <Alert severity="error">The Rating Value already exists!</Alert>
              ) : (
                ""
              )}
              {duplicateError2 ? (
                <Alert severity="error">The Rating Value already exists!</Alert>
              ) : (
                ""
              )}
            </div>
            <Stack
              direction="row"
              justifyContent="left"
              alignItems="center"
              spacing={0}
              paddingTop="80px"
            >
              <p></p>

              <h2
                style={{
                  color: "#004C75",
                  fontSize: "18px",
                  fontWeight: "500",
                  marginRight: "71%",
                }}
              >
                Add Rating Scale Description
              </h2>

              <div style={{ position: "absolute", left: "91.5%" }}>
                <Link to={`${RATING_SCALE_DESCRIPTION_VIEW_PAGE}`}>
                  <Button
                    style={{
                      textTransform: "none",
                      color: "#004C75",
                      borderColor: "#004C75",
                      borderRadius: 8,
                      padding: "7px 12px",
                      fontFamily: "sans-serif",
                    }}
                    variant="outlined"
                  >
                    View List
                  </Button>
                </Link>
              </div>
            </Stack>

            <Stack
              direction="column"
              justifyContent="center"
              alignItems="center"
              spacing={1}
            >
              {/* <p style={{ marginTop: "-20px" }}>
                <RatingScaleDropDown />
              </p>
              <p>
                <TextField
                  id="outlined-basic"
                  label="Rating Scale"
                  placeholder="e.g. delivering"
                  value={ratingScale}
                  variant="outlined"
                  style={{ width: 540, height: 70 }}
                  onChange={(e) => setRatingScale(e.target.value)}
                />
              </p>
              <p>
                <TextField
                  id="outlined-basic"
                  label="Definition"
                  variant="outlined"
                  multiline
                  rows={3}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  style={{ width: 540 }}
                />
              </p> */}

              {/* <p> </p>
              <h2
                style={{
                  color: "#014D76",
                  fontSize: "18px",
                  fontWeight: "500",
                  marginRight: "80%",
                  paddingBottom: "10px",
                }}
              >
                Add Rating Scale Description
              </h2> */}

              <TableContainer>
                <Scrollbar
                  style={{ width: "100%", height: "calc(100vh - 445px)" }}
                >
                  <Table size="small" stickyHeader aria-label="simple table">
                    <TableHead>
                      <TableRow sx={{ bgcolor: "#F7F9FB" }}>
                        <TableCell
                          sx={{
                            fontFamily: "regular",
                            border: 1,
                            borderColor: "lightgrey",
                            color: "#004C75",
                            fontSize: "12px",
                          }}
                        >
                          #
                        </TableCell>
                        <TableCell
                          align="left"
                          sx={{
                            fontFamily: "regular",
                            border: 1,
                            borderColor: "lightgrey",
                            color: "#004C75",
                            fontSize: "12px",
                          }}
                        >
                          Enter Rating
                        </TableCell>
                        <TableCell
                          align="left"
                          sx={{
                            fontFamily: "regular",
                            border: 1,
                            borderColor: "lightgrey",
                            color: "#004C75",
                            fontSize: "12px",
                          }}
                        >
                          Rating Scale Title
                        </TableCell>
                        <TableCell
                          align="left"
                          sx={{
                            fontFamily: "regular",
                            border: 1,
                            borderColor: "lightgrey",
                            color: "#004C75",
                            fontSize: "12px",
                          }}
                        >
                          Definition
                        </TableCell>

                        {showAdd || (
                          <TableCell
                            align="center"
                            sx={{
                              fontFamily: "regular",
                              border: 1,
                              borderColor: "lightgrey",
                              color: "#004C75",
                              fontSize: "12px",
                            }}
                          >
                            Action
                          </TableCell>
                        )}
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {formValues.map((element: any, index: any) => {
                        return (
                          <TableRow
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
                              width="2%"
                              sx={{
                                border: 1,
                                borderColor: "lightgrey",
                                fontFamily: "regular",
                                color: "#33333",
                                opacity: "80%",
                              }}
                            >
                              {index + 1}
                            </TableCell>
                            <TableCell
                              align="left"
                              width="25%"
                              sx={{
                                border: 1,
                                padding: 2,
                                borderColor: "lightgrey",
                                fontFamily: "regular",
                                color: "#33333",
                                opacity: "80%",
                                fontSize: "14px",
                              }}
                            >
                              <Box style={{ minHeight: "100px" }}>
                                <TextField
                                  placeholder="Enter rating"
                                  id="outlined-basic"
                                  size="small"
                                  name="rating"
                                  value={element.rating}
                                  //  value={rating}
                                  // type="number"
                                  inputProps={{ maxLength: 6 }}
                                  variant="outlined"
                                  style={{ width: "100%", marginTop: "28px" }}
                                  onKeyPress={(event) => {
                                    var key = event.keyCode || event.which;
                                    if (key === 13) {
                                      errHandler(formValues);
                                      errorHandler();
                                      console.log(
                                        "Enter Button has been clicked"
                                      );
                                    }
                                  }}
                                  onChange={(e) => {
                                    handleRatingChange(index, e);
                                    // handleRatingEmpty(element.rating)
                                    // handlevalidateRating(element.rating);
                                    setRating(element.rating);
                                    setRatingIndex(index);
                                    setDuplicateError1(false);
                                    setDuplicateError2(false);
                                    // if (element.rating === "") {
                                    //   setRating(e.target.value);
                                    //   return;
                                    // }
                                    // const rating = e.target.value;
                                    // if (rating > maxValue) {
                                    //   setRating(maxValue);
                                    // } else if (rating < minValue) {
                                    //   setRating(minValue);
                                    // } else {
                                    //   setRating(rating);
                                    // }
                                  }}
                                  onPaste={(e) => {
                                    e.preventDefault();
                                    return false;
                                  }}
                                  onCopy={(e) => {
                                    e.preventDefault();
                                    return false;
                                  }}
                                  onKeyDown={(e) =>
                                    (e.keyCode === 69 ||
                                      e.keyCode === 187 ||
                                      e.keyCode === 189) &&
                                    e.preventDefault()
                                  }
                                  helperText={
                                    (element.rating === "" &&
                                      textfeildErrorRating) ||
                                    (element.rating === rating && charRating)
                                  }
                                  error={
                                    (element.rating === "" &&
                                      textfeildErrorRating) ||
                                    (element.rating === rating && charRating)
                                  }
                                />
                              </Box>
                            </TableCell>
                            <TableCell
                              align="left"
                              width="25%"
                              sx={{
                                border: 1,
                                padding: 1,
                                borderColor: "lightgrey",
                                fontFamily: "regular",
                                color: "#33333",
                                opacity: "80%",
                                fontSize: "14px",
                              }}
                            >
                              <Box style={{ minHeight: "100px" }}>
                                <TextField
                                  placeholder="Enter text"
                                  autoComplete="off"
                                  size="small"
                                  id="outlined-basic"
                                  name="rating_scale"
                                  value={element.rating_scale}
                                  variant="outlined"
                                  style={{ width: "100%", marginTop: "28px" }}
                                  onKeyPress={(event) => {
                                    var key = event.keyCode || event.which;
                                    if (key === 13) {
                                      errHandler(formValues);
                                      errorHandler();
                                      console.log(
                                        "Enter Button has been clicked"
                                      );
                                    }
                                  }}
                                  onChange={(e) => {
                                    handleRatingChange(index, e);
                                    // handlevalidateratingscale(
                                    //   element.rating_scale, index
                                    // );
                                    setRatingScale(element.rating_scale);
                                    setRatingIndex(index);
                                    setDuplicateError1(false);
                                    setDuplicateError2(false);
                                  }}
                                  helperText={
                                    element.rating_scale === "" &&
                                    textfeildErrorScale
                                  }
                                  error={
                                    element.rating_scale === "" &&
                                    textfeildErrorScale
                                  }
                                />
                              </Box>
                            </TableCell>
                            <TableCell
                              align="left"
                              width="35%"
                              sx={{
                                border: 1,
                                padding: 1,
                                borderColor: "lightgrey",
                                fontFamily: "regular",
                                color: "#33333",
                                opacity: "80%",
                                fontSize: "14px",
                              }}

                            >
                              <Box style={{ minHeight: "100px" }}>
                                <TextField
                                  placeholder="Enter text"
                                  autoComplete="off"
                                  size="small"
                                  id="outlined-basic"
                                  name="definition"
                                  variant="outlined"
                                  rows={3}
                                  value={element.definition}
                                  helperText={
                                    definition === element.definition &&
                                    charDesc
                                  }
                                  error={
                                    definition === element.definition &&
                                    charDesc
                                  }
                                  onKeyPress={(event) => {
                                    var key = event.keyCode || event.which;
                                    if (key === 13) {
                                      errHandler(formValues);
                                      errorHandler();
                                      console.log(
                                        "Enter Button has been clicked"
                                      );
                                    }
                                  }}
                                  onChange={(e) => {
                                    handleRatingChange(index, e);
                                    // handlev(element.definition);
                                    setDefinition(element.definition);
                                  }}
                                  style={{ width: "100%", marginTop: "28px" }}
                                />
                              </Box>
                            </TableCell>
                            {showAdd || (
                              <TableCell
                                align="center"
                                width="10%"
                                sx={{
                                  border: 1,
                                  padding: 1,
                                  borderColor: "lightgrey",
                                }}
                              >
                                <>
                                  {formValues.length - 1 === index &&
                                    formValues.length < 6 && (
                                      <Tooltip title="Add more">
                                        <IconButton 
                                         disabled = {rating > 100}
                                          onClick={() => addFormFields()}
                                        >
                                          <img src={Addmore} alt="icon" />
                                        </IconButton>
                                      </Tooltip>
                                    )}
                                  {formValues.length !== 1 && (
                                    <Tooltip title="Remove">
                                      <IconButton
                                        onClick={() => removeFormFields(index)}
                                      >
                                        <img src={Minus} alt="icon" />
                                      </IconButton>
                                    </Tooltip>
                                  )}
                                </>
                              </TableCell>
                            )}
                          </TableRow>
                        );
                      })}
                      <div ref={scrollEnd}></div>
                    </TableBody>
                  </Table>
                </Scrollbar>
              </TableContainer>

              <Stack
                position="fixed"
                alignItems="center"
                direction="row"
                justifyContent="space-around"
                spacing={2}
                paddingTop="25%"
              >
                <Button
                  // disabled={textfeildErrorRating || textfeildErrorScale}
                  disabled={charRating}
                  style={{
                    textTransform: "none",
                    backgroundColor: "#014D76",
                    fontSize: "16px",
                    padding: "4px 19px",
                  }}
                  variant="contained"
                  onClick={() => {
                    errHandler(formValues);
                    errorHandler();
                  }}
                >
                  Save
                </Button>
                <Link
                  to={
                    defaultValue
                      ? `${RATING_SCALE_DESCRIPTION_VIEW_PAGE}`
                      : MASTER_NAV
                  }
                >
                  <Button
                    style={{
                      textTransform: "none",
                      fontSize: "14px",
                      borderRadius: 8,
                      borderColor: "#014D76",
                      color: "#014D76",
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