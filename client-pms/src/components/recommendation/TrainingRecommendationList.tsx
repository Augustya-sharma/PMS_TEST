import React from "react";
import { useState } from "react";
import { Alert, Container, TextField } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import EditIcon from "@mui/icons-material/Edit";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import { IconButton } from "@mui/material";
import { Button } from "@mui/material";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import { TRAINING_RECOMMENDATION_PAGE } from "../../constants/routes/Routing";
import PAMaster from "../../components/UI/PAMaster";
import Close from "../../assets/Images/Close.svg";
import Edit from "../../assets/Images/Edit.svg";
import Tooltip from "@mui/material/Tooltip";
import { AlertDialog } from "..";
import { Scrollbar } from "react-scrollbars-custom";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

interface TrainingRecommendationViewListProps {
  trainingData: any;
  onDelete: (id: string) => void;
  error:any
}

const TrainingRecommendationViewList = (props: any) => {
  const { trainingData, onDelete, onUpdate, error } = props;

  console.log(props);
  const [open, setOpen] = useState(false);
  const [newId, setNewId] = useState("");
  const [newTitle, setNewTitle] = useState("");
  const [hideAlert, setHideAlert] = useState(false)
  console.log(newId, "id from modal");
  console.log(newTitle, "name from modal");

  const hideAlertHandler = () => {
    setTimeout(() => {
      setHideAlert(false);
    }, 5000);
  };

  const handleClickOpen = (id: string, nameAlert: string) => {
    setOpen(true);
    setNewId(id);
    setNewTitle(nameAlert);
  };

  const handleClickClose = () => {
    setOpen(false);
  };

  const handleClickIdClose = () => {
    if (newId) {
      onDelete(newId);
      setOpen(false);
      console.log(newId);
      setHideAlert(true);
      hideAlertHandler();
    }
  };

  return (
    <>
      <PAMaster name={"Training Recommendation"} />
      {hideAlert && error && (<Alert severity="error">{newTitle} is used in Appraisal!!</Alert>)}
      <Container
        sx={{
          maxWidth: "96% !important",
          height: "calc(100vh - 165px)",
          background: "#fff",
          //boxShadow: "2px 4px 6px 4px rgba(0, 0, 0, 0.2)",
          // marginTop: "15px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingBottom: "10px",
            paddingTop: "20px",
          }}
        >
          <h2
            style={{
              color: "#004C75",
              fontSize: "18px",
              fontWeight: "500",
            }}
          >
            {/* Add Training Recommendation */}
          </h2>
          <Link to={`${TRAINING_RECOMMENDATION_PAGE}`}>
            <Button
              style={{
                textTransform: "none",
                color: "#004C75",
                borderColor: "#004C75",
                borderRadius: "7px",
                padding: "6px 25px",
                fontFamily: "regular",
              }}
              variant="outlined"
            >

              Add 

            </Button>
          </Link>
        </Box>

        <TableContainer>
          <Scrollbar style={{ width: "100%", height: "calc(100vh - 292px)" }}>
            <Table size="small" aria-label="simple table">
              <TableHead
                style={{ position: "sticky", zIndex: "1000", top: "0px" }}
              >
                <TableRow sx={{ bgcolor: "#F7F9FB" }}>
                  <TableCell
                    align="center"
                    sx={{
                      fontFamily: "regular",
                      padding: 1,
                      borderColor: "#F7F9FB",
                      color: "#004C75",
                      fontSize: "12px",
                      width: "5%",
                    }}
                  >
                    #
                  </TableCell>
                  <TableCell
                    align="left"
                    sx={{
                      fontFamily: "regular",
                      borderColor: "#F7F9FB",
                      color: "#004C75",
                      fontSize: "12px",
                      width: "20%",
                    }}
                  >
                    <form>
                      <div
                        style={{
                          color: "#004C75",
                          fontSize: "12px",
                          border: "none",
                          background: "none",
                          margin:"-5px"
                        }}
                      >
                        <option value="Training Title">Training Title</option>
                      </div>
                    </form>
                    {/* <FormControl
                      variant="standard"
                      sx={{minWidth: 120 }}
                    >
                      <InputLabel id="demo-simple-select-standard-label">
                        Training Title
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-standard-label"
                        id="demo-simple-select-standard"
                      ></Select>
                    </FormControl> */}
                  </TableCell>
                  <TableCell
                    align="left"
                    sx={{
                      fontFamily: "regular",
                      borderColor: "#F7F9FB",
                      color: "#004C75",
                      fontSize: "12px",
                      width: "65%",
                    }}
                  >
                    Description
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{
                      fontFamily: "regular",
                      borderColor: "#F7F9FB",
                      color: "#004C75",
                      fontSize: "12px",
                    }}
                  >
                    Action
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {trainingData &&
                  trainingData.data.map((row: any, index: number) => {
                    return (
                      <TableRow
                        key={row._id}
                        sx={{
                          "&:last-child td, &:last-child th": {
                            borderColor: "lightgrey",
                          },
                        }}
                      >
                        <TableCell
                          component="th"
                          scope="row"
                          align="center"
                          sx={{
                            fontSize: "12px",
                            color: "#004C75",
                            fontFamily: "regular",
                          }}
                        >
                          {index + 1}
                        </TableCell>
                        <TableCell
                          align="left"
                          sx={{
                            fontFamily: "regular",
                            borderColor: "lightgrey",
                            fontSize: "12px",
                            color: "#333333",
                            opacity: "80%",
                          }}
                        >
                          <div style={{ width:'200px', wordWrap:'break-word'}} >{row.title}</div>
                        </TableCell>
                        <TableCell
                          align="left"
                          sx={{
                            fontFamily: "regular",
                            borderColor: "lightgrey",
                            fontSize: "12px",
                            color: "#333333",
                            opacity: "80%",
                          }}
                        >
                          <div style={{ width:'750px', wordWrap:'break-word'}} >{row.definition}</div>
                        </TableCell>
                        <TableCell align="center">
                          <>
                            <Tooltip title="Edit">
                              <IconButton
                                aria-label="EditIcon"
                                onClick={() => onUpdate(row._id)}
                              >
                                <img src={Edit} alt="icon" />
                              </IconButton>
                            </Tooltip>
                            <Tooltip title="Delete">
                              <IconButton
                                aria-label="CancelOutlinedIcon "
                                onClick={() =>
                                  handleClickOpen(row._id, row.title)
                                }
                                // onClick={() => onDelete(row._id)}
                              >
                                <img src={Close} alt="icon" />
                              </IconButton>
                            </Tooltip>
                            <AlertDialog
                              isAlertOpen={open}
                              handleAlertOpen={() =>
                                handleClickOpen(row._id, row.title)
                              }
                              handleAlertClose={handleClickClose}
                              handleAlertIdClose={handleClickIdClose}
                              rowAlert={row}
                            >
                              Are you sure you wish to delete this item?
                            </AlertDialog>
                          </>
                        </TableCell>
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </Scrollbar>
        </TableContainer>
      </Container>
    </>
  );
};

export default TrainingRecommendationViewList;
