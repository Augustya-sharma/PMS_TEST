import React from "react";
import { useState } from "react";
import Stack from "@mui/material/Stack";
import { Alert, Container, TextField } from "@mui/material";
import { Grid } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import EditIcon from "@mui/icons-material/Edit";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import { Button } from "@mui/material";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import { OTHER_RECOMMENDATION_PAGE } from "../../constants/routes/Routing";
import PAMaster from "../../components/UI/PAMaster";
import Close from "../../assets/Images/Close.svg";
import Edit from "../../assets/Images/Edit.svg";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import { AlertDialog } from "..";
import { Scrollbar } from "react-scrollbars-custom";

interface IOtherRecommendationViewListProps {
  otherData: any;
  onDelete: (id: string) => void;
  onEdit: (id: string) => void;
  error: any;
  deleteOtherAlert : any;
}

const OtherRecommendationViewList: React.FC<
  IOtherRecommendationViewListProps
> = (props: IOtherRecommendationViewListProps) => {
  const { otherData, onDelete, onEdit, deleteOtherAlert, error } = props;

  const [editOtherRecommendation, setEditOtherRecommendation] = useState("");
  const [open, setOpen] = useState(false);
  const [newId, setNewId] = useState("");
  const [newName, setNewName] = useState("");
  const [showError, setShowError] = useState(error)
  const [hideAlert, setHideAlert] = useState(false)
  console.log(newId, "id from modal");
  console.log(newName, "name from modal");

  console.log(error,'error')

  const hideAlertHandler = () => {
    setTimeout(() => {
      setHideAlert(false);
    }, 5000);
  };

  const handleClickOpen = (id: string, nameAlert: string) => {
    setOpen(true);
    setNewId(id);
    setNewName(nameAlert);
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
      {" "}
      <PAMaster name={"Other Recommendation"} />
      {hideAlert && error && (<Alert severity="error">{newName} is used in Appraisal!!</Alert>)}
      <Container
        sx={{
          maxWidth: "96% !important",

          height: "calc(100vh - 165px)",
          background: "#fff",
          paddingTop: "30px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "10px",
          }}
        >
          <h2
            style={{
              color: "#004C75",
              fontSize: "18px",
              fontWeight: "500",
            }}
          >
            {/* Add Other Recommendation */}
          </h2>
          <Link to={`${OTHER_RECOMMENDATION_PAGE}`}>
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
          <Table  size="small" aria-label="simple table">
            <TableHead style={{position:"sticky" ,zIndex:"1000", top:"0px"}}>
              <TableRow sx={{ bgcolor: "#F7F9FB" }}>
                <TableCell
                  align="left"
                  sx={{
                    fontFamily:"regular",
                    borderColor: "#F7F9FB",
                    color: "#004C75",
                    fontSize: "12px",
                  }}
                >
                  #
                </TableCell>
                <TableCell
                  align="left"
                  sx={{
                    fontFamily:"regular",
                    borderColor: "#F7F9FB",
                    color: "#004C75",
                    fontSize: "12px",
                  }}
                >
                  <form>
                      <select
                        style={{
                          color: "#004C75",
                          fontSize: "12px",
                          border: "none",
                          background: "none",
                          margin:"-5px"
                        }}
                      >
                        <option value="Training Title">Training Title</option>
                      </select>
                    </form>
                </TableCell>
                <TableCell
                  align="center"
                  sx={{
                    fontFamily:"regular",
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
              {otherData &&
                otherData.data.map((row: any, index: number) => {
                  return (
                    <TableRow                   
                      key={row.symbol}
                      sx={{
                        "&:last-child td, &:last-child th": {
                          borderColor: "#E3E3E3",
                        },
                      }}
                    >
                      <TableCell
                        component="th"
                        scope="row"
                        width="8%"
                        align="left"
                        sx={{ fontSize: "12px", color: "#004C75" }}
                      >
                        {index + 1}
                      </TableCell>
                      <TableCell
                        align="left"
                        width="80%"
                        sx={{
                          fontFamily:"regular",
                          fontSize: "12px",
                          color: "#333333",
                          opacity: "80%",
                        }}
                      >
                        <div style={{ width:'800px', wordWrap:'break-word'}} >{row.name}</div>
                      </TableCell>
                      <TableCell
                        align="center"
                        sx={{
                          fontFamily:"regular",
                          fontSize: "12px",
                          color: "#7A7A7A",
                        }}
                      >
                        <>
                          <Tooltip title="Edit">
                            <IconButton
                              aria-label="EditIcon"
                              onClick={() => onEdit(row._id)}
                            >
                              <img src={Edit} alt="icon" />
                            </IconButton>
                          </Tooltip>
                          <Tooltip title="Delete">
                            <IconButton
                              aria-label="CancelOutlinedIcon "
                              onClick={() => handleClickOpen(row._id, row.name)}
                              // onClick={() => onDelete(row._id)}
                            >
                              <img src={Close} alt="icon" />
                            </IconButton>
                          </Tooltip>
                          <AlertDialog
                            isAlertOpen={open}
                            handleAlertOpen={() =>
                              handleClickOpen(row._id, row.name)
                            }
                            handleAlertClose={handleClickClose}
                            handleAlertIdClose={handleClickIdClose}
                            rowAlert={row}
                          >
                            Are you sure you wish to delete this item?
                          </AlertDialog>

                          {/* <IconButton
                            aria-label="CancelOutlinedIcon "
                             onClick={() => onDelete(row._id)}
                          >
                            <CancelOutlinedIcon />
                          </IconButton> */}
                        </>
                      </TableCell>
                      {/*<TableCell align="center"></TableCell>*/}
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

export default OtherRecommendationViewList;
