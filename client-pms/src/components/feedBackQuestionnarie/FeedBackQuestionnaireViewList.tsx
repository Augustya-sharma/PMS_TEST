import Stack from "@mui/material/Stack";
import { Container, TextField } from "@mui/material";
import { Grid } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import { Button } from "@mui/material";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FEEDBACK_QUESTIONNAIRE } from "../../constants/routes/Routing";
import PAMaster from "../../components/UI/PAMaster";
import Close from "../../assets/Images/Close.svg";
import Edit from "../../assets/Images/Edit.svg";
import { AlertDialog } from "..";
import Tooltip from "@mui/material/Tooltip";
import { Scrollbar } from "react-scrollbars-custom";

// function createData(symbol: number, title: string, action: any) {
//   return { symbol, title, action };
// }

// const rows = [
//   createData(
//     1,
//     "PIP",
//     <>
//       {" "}
//       <EditIcon /> <CancelOutlinedIcon />{" "}
//     </>
//   ),
//   createData(
//     2,
//     "Promotion",
//     <>
//       {" "}
//       <EditIcon /> <CancelOutlinedIcon />{" "}
//     </>
//   ),
//   createData(
//     3,
//     "Demotion",
//     <>
//       {" "}
//       <EditIcon /> <CancelOutlinedIcon />{" "}
//     </>
//   ),
//   createData(
//     4,
//     "Salary Review",
//     <>
//       {" "}
//       <EditIcon /> <CancelOutlinedIcon />{" "}
//     </>
//   ),
//   createData(
//     5,
//     "Job Rotation",
//     <>
//       {" "}
//       <EditIcon /> <CancelOutlinedIcon />{" "}
//     </>
//   ),
//   createData(
//     6,
//     "Disciplinary Action",
//     <>
//       {" "}
//       <EditIcon /> <CancelOutlinedIcon />{" "}
//     </>
//   ),
// ];

interface IFeedBackQuestionnaireViewListProps {
  FeedbackData: any;
  onDelete: any;
  onUpdate: any;
}

const FeedBackQuestionnaireViewList: React.FC<
  IFeedBackQuestionnaireViewListProps
> = (props: IFeedBackQuestionnaireViewListProps) => {
  const { FeedbackData, onDelete, onUpdate } = props;
  const [open, setOpen] = useState(false);
  const [newId, setNewId] = useState("");
  const [newName, setNewName] = useState("");
  console.log(newId, "id from modal");
  console.log(newName, "name from modal");

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
    }
  };

  // const [editOtherRecommendation, setEditOtherRecommendation] = useState("");

  return (
    <>
      <PAMaster name={"Feedback Questionnaire"} />
      <Container
        sx={{
          maxWidth: "96% !important",
          width: "100%",
          height: "calc(100vh - 165px)",
          background: "#fff",
          paddingTop: "30px",
        }}
      >
        {" "}
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
              color: "#014D76",
             fontSize: "18px",
              fontWeight: "500",
            }}
          >
            {" "}
            {/* View Feedback Questionnaire */}
          </h2>
          <Link to={`${FEEDBACK_QUESTIONNAIRE}`}>
            <Button
              style={{
                textTransform: "none",
                color: "#014D76",
                borderColor: "#014D76",
                borderRadius: 8,
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
              <TableHead style={{position:"sticky" ,zIndex:"1000", top:"0px"}}>
                <TableRow sx={{ bgcolor: "#F7F9FB" }}>
                  <TableCell
                    align="left"
                    sx={{
                      fontFamily:"regular",
                      borderColor: "#F7F9FB",
                      color: "#014D76",
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
                      color: "#014D76",
                      fontSize: "12px",
                    }}
                  >
                    Questions
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{
                      fontFamily:"regular",
                      borderColor: "#F7F9FB",
                      color: "#014D76",
                      fontSize: "12px",
                    }}
                  >
                    Action
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {FeedbackData &&
                  FeedbackData.data.map((row: any, index: number) => {
                    return (
                      <TableRow
                        key={row.symbol}
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
                          width="5%"
                          sx={{ fontSize: "12px", color: "#014D76", fontFamily:"regular", }}
                        >
                          {index + 1}
                        </TableCell>
                        <TableCell
                          align="left"
                          width="80%"
                          sx={{
                            fontFamily:"regular",
                            borderColor: "lightgrey",
                            fontSize: "12px",
                            color: "#7A7A7A",
                          }}
                        >
                          {row.name}
                        </TableCell>
                        <TableCell
                          align="center"
                          sx={{
                            fontFamily:"regular",
                            borderColor: "lightgrey",
                            fontSize: "12px",
                            color: "#7A7A7A",
                          }}
                        >
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
                                  handleClickOpen(row._id, row.name)
                                }
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
                          </>
                        </TableCell>
                        {/* <TableCell align="center"></TableCell>*/}
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

export default FeedBackQuestionnaireViewList;
