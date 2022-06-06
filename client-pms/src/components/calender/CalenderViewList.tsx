import Stack from "@mui/material/Stack";
import { Alert, Container, TextField } from "@mui/material";
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
import { CALENDER } from "../../constants/routes/Routing";
import { format } from "date-fns";
import dayjs from 'dayjs';
import PAMaster from '../../components/UI/PAMaster'
import Close from "../../assets/Images/Close.svg";
import Edit from "../../assets/Images/Edit.svg";
import { AlertDialog } from "..";
import { Scrollbar } from "react-scrollbars-custom";
import Tooltip from "@mui/material/Tooltip";



interface ICalenderViewListProps {
  calendarData: any,
  onDelete: any,
  onUpdate: any,
  deleteCalendarAlert: any,
  error:any
}

const CalenderViewList: React.FC<ICalenderViewListProps> = (
  props: ICalenderViewListProps
) => {
  const { calendarData, onDelete, onUpdate ,deleteCalendarAlert,error} = props;
  const [editOtherRecommendation, setEditOtherRecommendation] = useState("");
  const [open, setOpen] = useState(false); const [newId, setNewId] = useState('')
  const [newName, setNewName] = useState('')
  const [showError, setShowError] = useState(error)
  const [hideAlert, setHideAlert] = useState(false)
  console.log(newId, 'id from modal')
  console.log(newName, 'name from modal')


  const hideAlertHandler = () => {
    setTimeout(() => {
      setHideAlert(false);
    }, 5000);
  };

  const handleClickOpen = (id: string, nameAlert: string) => {

    setOpen(true);
    setNewId(id)
    setNewName(nameAlert)

  };

  const handleClickClose = () => {
    setOpen(false)
  }

  const handleClickIdClose = () => {
    if (newId) {
      onDelete(newId)
      setOpen(false);
      console.log(newId)
      setHideAlert(true);
      hideAlertHandler();
    }
  };



  return (
    <>

      <PAMaster name={'Calendar'} />
      {hideAlert && error && (<Alert severity="error">{newName} is used in Appraisal!!</Alert>)}
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
        {" "}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingTop: "20px",
            paddingBottom: "10px",
          }}
        >
          <h2
            style={{
              color: "#014D76",
              fontFamily: "sans-serif",
              fontSize: "16px",
              fontWeight: "540",
            }}
          >
            {" "}
            {/* Add Calendar */}
          </h2>
          <Link to={`${CALENDER}`}>
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
          <Scrollbar style={{ width: "100%", height: "calc(100vh - 259px)" }}>

            <Table size="small" aria-label="simple table">
              <TableHead style={{ position: "sticky", zIndex: "1000", top: "0px" }}>
                <TableRow sx={{ bgcolor: "#ebf2f4" }}>
                  <TableCell
                    align="left"
                    sx={{
                      //borderColor: "lightgrey",
                      color: "#014D76",
                      fontSize: "13px",
                    }}
                  >
                    #
                  </TableCell>
                  <TableCell
                    align="left"
                    sx={{
                      //  borderColor: "lightgrey",
                      color: "#014D76",
                      fontSize: "13px",
                    }}
                  >
                    Appraisal Calendar
                  </TableCell>
                  <TableCell
                    align="left"
                    sx={{
                      //  borderColor: "lightgrey",
                      color: "#014D76",
                      fontSize: "13px",
                    }}
                  >
                    Start Date
                  </TableCell>
                  <TableCell
                    align="left"
                    sx={{
                      //  borderColor: "lightgrey",
                      color: "#014D76",
                      fontSize: "13px",
                    }}
                  >
                    End Date
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{
                      //  borderColor: "lightgrey",
                      color: "#014D76",
                      fontSize: "13px",
                    }}
                  >
                    Action
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {calendarData &&
                  calendarData.data.map((row: any, index: number) => {
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
                          sx={{ fontSize: "12px", color: "#014D76" }}
                        >
                          {index + 1}
                        </TableCell>
                        <TableCell
                          align="left"

                          sx={{
                            borderColor: "lightgrey",
                            fontSize: "12px",
                            color: "#7A7A7A",
                          }}
                        >
                          {row.name}
                        </TableCell>
                        <TableCell
                          align="left"

                          sx={{
                            borderColor: "lightgrey",
                            fontSize: "12px",
                            color: "#7A7A7A",
                          }}
                        >
                          {dayjs(row.start_date).format('DD/MM/YYYY')}

                          {/* {row.start_date} */}
                        </TableCell>
                        <TableCell
                          align="left"

                          sx={{
                            borderColor: "lightgrey",
                            fontSize: "12px",
                            color: "#7A7A7A",
                          }}
                        >
                          {dayjs(row.end_date).format('DD/MM/YYYY')}
                          {/* {row.end_date} */}
                        </TableCell>
                        <TableCell
                          align="center"
                          sx={{
                            borderColor: "lightgrey",
                            fontSize: "12px",
                            color: "#7A7A7A",
                          }}
                        >
                          <>
                            <Tooltip title="Edit">
                              <IconButton aria-label="EditIcon"
                                onClick={() => onUpdate(row._id)}>
                                <img src={Edit} alt="icon" />
                              </IconButton>
                            </Tooltip>
                            <Tooltip title="Delete" >
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
                              handleAlertOpen={() => handleClickOpen(row._id, row.name)}
                              handleAlertClose={handleClickClose}
                              handleAlertIdClose={handleClickIdClose}
                              rowAlert={row}>
                              Are you sure you wish to delete this item?

                            </AlertDialog>
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

export default CalenderViewList;
