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
import { Button } from "@mui/material";
import { Box } from "@mui/material";
import { Margin } from "@mui/icons-material";
import EditTwoTone from "@mui/icons-material/EditTwoTone";
import { IconButton } from "@mui/material";
import { RATING_SCALE_DESCRIPTION } from "../../constants/routes/Routing";
import { Link } from "react-router-dom";
import PAMaster from "../../components/UI/PAMaster";
import { Scrollbar } from "react-scrollbars-custom";

import Close from "../../assets/Images/Close.svg";
import Edit from "../../assets/Images/Edit.svg";

import { AlertDialog } from "..";
import Tooltip from "@mui/material/Tooltip";

interface IRatingScaleDescriptionViewListProps {
  ratingScaleData: any;
  onDelete: any;
  onUpdate: any;
  error:any
}

const RatingScaleDescriptionViewList: React.FC<
  IRatingScaleDescriptionViewListProps
> = (props: IRatingScaleDescriptionViewListProps) => {
  const { ratingScaleData, onDelete, onUpdate , error} = props;
  const [open, setOpen] = useState(false);
  const [newId, setNewId] = useState("");
  const [newRatingScale, setNewRatingScale] = useState("");
  const [hideAlert, setHideAlert] = useState(false)

  console.log(newId, "id from modal");
  console.log(newRatingScale, "name from modal");
  console.log(ratingScaleData, "ratingScaleData");

  const hideAlertHandler = () => {
    setTimeout(() => {
      setHideAlert(false);
    }, 5000);
  };

  const handleClickOpen = (id: string, nameAlert: string) => {
    setOpen(true);
    setNewId(id);
    setNewRatingScale(nameAlert);
  };

  const handleClickClose = () => {
    setOpen(false);
  };

  const handleClickIdClose = () => {
    if (newId) {
      onDelete(newId);
      setOpen(false);
      console.log(newId);
    }
  };

  return (
    <>
      <PAMaster name={"Rating Scale Description"} />
      {hideAlert && error && (<Alert severity="error">{newRatingScale} is used in Appraisal!!</Alert>)}
      <Container
        sx={{
          maxWidth: "96% !important",
          width: "100%",
          height: "calc(100vh - 165px)",
          background: "#fff",
          //boxShadow: "2px 4px 6px 4px rgba(0, 0, 0, 0.2)",
          //marginTop: "15px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "20px",
            alignItems: "center",
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
            {" "}
            {/* Add Rating Scale Description */}
          </h2>
          <Link to={RATING_SCALE_DESCRIPTION}>
            <Button
              style={{
                textTransform: "none",
                color: "#004C75",
                borderColor: "#004C75",
                borderRadius: 8,
                padding: "6px 25px",
                fontFamily: "regular",
              }}
              variant="outlined"
            >
              {" "}

              Add {" "}

            </Button>
          </Link>
        </Box>

        <TableContainer>
          <Scrollbar style={{ width: "100%", height: "calc(100vh - 292px)" }}>
            <Table
              sx={{ minWidth: 650 }}
              size="small"
              aria-label="simple table"
            >
              <TableHead
                style={{ position: "sticky", zIndex: "1000", top: "0px" }}
              >
                <TableRow sx={{ bgcolor: "#F7F9FB" }}>
                  <TableCell
                    align="left"
                    sx={{
                      borderColor: "#F7F9FB",
                      color: "#004C75",
                      fontSize: "12px",
                      width: "40px",
                    }}
                  >
                    {" "}
                    #
                  </TableCell>
                  <TableCell
                    align="left"
                    sx={{
                      borderColor: "#F7F9FB",
                      color: "#004C75",
                      fontSize: "12px",
                      width: "70px",
                    }}
                  >
                    <form>
                      <select
                        style={{
                          color: "#004C75",
                          fontSize: "12px",
                          border: "none",
                          background: "none",
                          margin: "-5px",
                        }}
                      >
                        <option value="Training Title">Rating</option>
                      </select>
                    </form>
                  </TableCell>
                  <TableCell
                    align="left"
                    sx={{
                      borderColor: "#F7F9FB",
                      color: "#004C75",
                      fontSize: "12px",
                      width: "200px",
                    }}
                  >
                   <form>
                      <select
                        style={{
                          color: "#004C75",
                          fontSize: "12px",
                          border: "none",
                          background: "none",
                          margin: "-5px",
                        }}
                      >
                        <option >Rating Scale</option>
                      </select>
                    </form>
                  </TableCell>
                  <TableCell
                    align="left"
                    sx={{
                      borderColor: "#F7F9FB",
                      color: "#004C75",
                      fontSize: "12px",
                    }}
                  >
                    Definition
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{
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
                {ratingScaleData &&
                  ratingScaleData.data.slice().sort(function(a:any,b:any) {
                    return a.rating - b.rating;
                  })
                  .map((row: any, index: any) => {
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
                          align="left"
                          sx={{
                            fontSize: "12px",
                            color: "#014D76",
                            lineHeight: "50px",
                          }}
                        >
                          <div style={{ width:'100px', wordWrap:'break-word'}} >{index + 1}</div>
                        </TableCell>
                        <TableCell
                          align="left"
                          sx={{
                            borderColor: "lightgrey",
                            fontSize: "12px",
                            color: "#7A7A7A",
                          }}
                        >
                          {/* <div style={{ width:'100px', wordWrap:'break-word'}} >{row.rating.toFixed(1)}</div> */}
                          <div style={{ width:'100px', wordWrap:'break-word'}} >{row.rating}</div>
                        </TableCell>
                        <TableCell
                          align="left"
                          sx={{
                            borderColor: "lightgrey",
                            fontSize: "12px",
                            color: "#7A7A7A",
                          }}
                        >
                          <div style={{ width:'200px', wordWrap:'break-word'}} >{row.rating_scale}</div>
                        </TableCell>
                        <TableCell
                          align="left"
                          sx={{
                            borderColor: "lightgrey",
                            fontSize: "12px",
                            color: "#7A7A7A",
                          }}
                        >
                          <div style={{ width:'600px', wordWrap:'break-word'}} >{row.definition}</div>
                        </TableCell>
                        <TableCell
                          align="center"
                          width={115}
                          sx={{
                            borderColor: "lightgrey",
                            fontSize: "12px",
                            color: "#7A7A7A",
                          }}
                        >
                          <Tooltip title="Edit">
                            <IconButton onClick={() => onUpdate(row._id)}>
                              <img src={Edit} alt="icon" />
                            </IconButton>
                          </Tooltip>
                          <Tooltip title="Delete">
                            <IconButton
                              aria-label="CancelOutlinedIcon "
                              onClick={() =>
                                handleClickOpen(row._id, row.rating_scale)
                              }
                              // onClick={() => onDelete(row._id)}
                            >
                              <img src={Close} alt="icon" />
                            </IconButton>
                          </Tooltip>
                          <AlertDialog
                            isAlertOpen={open}
                            handleAlertOpen={() =>
                              handleClickOpen(row._id, row.rating_scale)
                            }
                            handleAlertClose={handleClickClose}
                            handleAlertIdClose={handleClickIdClose}
                            rowAlert={row}
                          >
                           Are you sure you wish to delete this item?
                          </AlertDialog>
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

export default RatingScaleDescriptionViewList;
