import * as React from "react";
import { useState, useRef } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Grid } from "@mui/material";
import { Stack, Tab, Tabs, Box, Typography } from "@mui/material";
import ImportExportIcon from "@mui/icons-material/ImportExport";
import { TextField } from "@mui/material";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import { Divider } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import { Button } from "@mui/material";
import Collapse from "@mui/material/Collapse";
import {
  useAcceptReviewerMutation,
  useGetEmployeeByStatusQuery,
  useGetEmployeeQuery,
  useRejectReviewerAppraisalEmployeeMutation,
} from "./../../../service";
import { useEffect } from "react";
import {
  CREATE_APPRAISAL,
  REVIEWER_PAGE,
} from "./../../../constants/routes/Routing";
import UpDown from "../../assets/Images/UpDown.svg";
import Opennew from "../../assets/Imaages/Opennew.svg";
import Application from "../../assets/Images/Application.svg";
import Closeicon from "../../../assets/Images/Closeicon.svg";
import Eye from "../Reviewericons/Eyeicon.svg";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import Checkbox from "@mui/material/Checkbox";
import Expand from "../../reviewerMain/Reviewericons/Expand.svg";
import Newexcel from "../../reviewerMain/Reviewericons/Newexcel.svg";
import Searchlensreview from "../../reviewerMain/Reviewericons/Searchlensreview.svg";
import TableSortLabel from "@mui/material/TableSortLabel";
import { visuallyHidden } from "@mui/utils";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useNavigate, useParams } from "react-router-dom";
import Alert from "@mui/material/Alert";

const Mytable = styled("div")({
  background: "#FFFFFF",
  marginLeft: "25px",
  marginRight: "25px",
});
const Tabstyles = styled("div")({
  marginLeft: "20px",
  marginTop: "45px",
  marginRight: "20px",
  "& .MuiButtonBase-root": {
    color: "#999999",
    textTransform: "none",
    fontWeight: 400,
  },
  "& .Mui-selected": {
    color: "#004C75",
  },
  "&.MuiTabs-indicator": {
    backgroundColor: "#004C75",
  },
  display: "flex",
  // justifyContent: 'space-between'
});
const Heading = styled("div")({
  fontSize: "18px",
  color: "#004C75",
  fontWeight: 400,
  paddingTop: "25px",
  marginLeft: "20px",
});
const Searchfeild = styled("div")({
  position: "absolute",
  marginLeft: "76%",
  //marginRight: '8px',
  marginTop: "10px",
  "& .MuiOutlinedInput-root": {
    height: "28px",
    width: "144px",
    borderRadius: "15px",
    background: "#F2F6F8",
    // border:'2px solid white'
  },
  "& .MuiInputLabel-root": {
    fontSize: "13px",
    color: "#306D8F",
    marginTop: "-10px",
  },
  "& .MuiOutlinedInput-input": {
    fontSize: "13px",
    color: "#306D8F",
  },
});
const TableHeadings = styled("div")({
  "& .MuiTableRow-head ": {
    background: "#f2f6f8",
  },
  "& .MuiTableCell-head": {
    color: "#004C75",
    padding: "0px",
    height: "30px",
    borderBottom: "2px solid white",
  },
  "& .MuiTableCell-root": {
    padding: "0px",
  },
});
const Names = styled("div")({
  marginLeft: "20px",
  marginTop: "10px",
  color: "#333333",
});

const userData = [
  { id: 0, reason: "rating", isChecked: false, value: "rating" },
  {
    id: 1,
    reason: "Feedback questionnaire",
    isChecked: false,
    value: "Feedback_questionnaire",
  },
  {
    id: 2,
    reason: "area of improvement",
    isChecked: false,
    value: "area_of_improvement",
  },
  {
    id: 3,
    reason: "Training recommendation(s)",
    isChecked: false,
    value: "training_recommendation(s)",
  },
  {
    id: 4,
    reason: "Other recommendation(s)",
    isChecked: false,
    value: "other_recommendation(s)",
  },
];

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: any;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

//@ts-ignore
const ExpandableTableRow = ({ children, expandComponent, ...otherProps }) => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  return (
    <>
      <TableRow {...otherProps}>
        <TableCell padding="checkbox">
          <IconButton onClick={() => setIsExpanded(!isExpanded)}>
            {isExpanded ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        {children}
      </TableRow>
      {isExpanded && (
        <TableRow>
          <TableCell padding="checkbox" />
          {expandComponent}
        </TableRow>
      )}
    </>
  );
};

const checkboxHandler = (event: any) => {
  console.log(event.target.value);
};

interface Data {
  empty: any;
  position: any;
  status: any;
  grade: any;
  name: any;
  protein: any;
  Appraiser_Rating: any;
  Reviewer_Rating: any;
  Normalizer_Rating: any;
}

function createData(
  name: string,
  position: string,
  grade: any,
  status: any,
  protein: any,
  empty: any,
  Appraiser_Rating: any,
  Reviewer_Rating: any,
  Normalizer_Rating: any
): Data {
  return {
    empty,
    name,
    position,
    grade,
    status,
    protein,
    Appraiser_Rating,
    Reviewer_Rating,
    Normalizer_Rating,
  };
}

function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

type Order = "asc" | "desc";

function getComparator<Key extends keyof any>(
  order: Order,
  orderBy: Key
): (
    a: { [key in Key]: number | string },
    b: { [key in Key]: number | string }
  ) => number {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

// This method is created for cross-browser compatibility, if you don't
// need to support IE11, you can use Array.prototype.sort() directly
function stableSort<T>(
  array: readonly T[],
  comparator: (a: T, b: T) => number
) {
  const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

interface HeadCell {
  disablePadding: boolean;
  id: keyof Data;
  label: string;
  numeric: boolean;
}

const headCells: readonly HeadCell[] = [
  {
    id: "empty",
    numeric: false,
    disablePadding: true,
    label: "",
  },
  {
    id: "name",
    numeric: false,
    disablePadding: true,
    label: "Employee",
  },
  {
    id: "position",
    numeric: false,
    disablePadding: false,
    label: "Position",
  },
  {
    id: "grade",
    numeric: true,
    disablePadding: false,
    label: "Grade",
  },
  {
    id: "Appraiser_Rating",
    numeric: true,
    disablePadding: false,
    label: "Appraiser Rating",
  },
  {
    id: "Reviewer_Rating",
    numeric: true,
    disablePadding: false,
    label: "Reviewer Rating",
  },
  {
    id: "Normalizer_Rating",
    numeric: true,
    disablePadding: false,
    label: "Normalizer Rating",
  },
  {
    id: "status",
    numeric: false,
    disablePadding: false,
    label: "Status",
  },
  {
    id: "protein",
    numeric: true,
    disablePadding: false,
    label: "ViewPA",
  },
];

function EnhancedTableHead(props: any) {
  const {
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort,
  } = props;
  const createSortHandler =
    (property: keyof Data) => (event: React.MouseEvent<unknown>) => {
      onRequestSort(event, property);
    };

  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? "center" : "left"}
            padding={headCell.disablePadding ? "none" : "normal"}
            sortDirection={orderBy === headCell.id ? order : false}
            sx={{ paddingLeft: "30px" }}
          >
            <TableSortLabel
              // active={orderBy === headCell.id}
              active={false}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

const MyTeam = (props: any) => {
  const [opendialog, setOpendialog] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();

  const handleDialogOpen = () => {
    setOpendialog(true);
  };

  const handleDialogClose = () => {
    setOpendialog(false);
    setIsOpen(false);
  };

  const handleDialogNo = () => {
    setOpendialog(false);
    setIsOpen(true);
  };

  const [order, setOrder] = React.useState<Order>("asc");
  const [orderBy, setOrderBy] = React.useState<keyof Data>("position");
  const [selected, setSelected] = React.useState<readonly string[]>([]);

  const handleRequestSort = (
    event: React.MouseEvent<unknown>,
    property: keyof Data
  ) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const { startAppraisal } = props;
  const [acceptReviewer] = useAcceptReviewerMutation();
  const [rejectReviewer] = useRejectReviewerAppraisalEmployeeMutation();
  const [tabValue, setTabValue] = React.useState<any>(0);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    console.log("handle change run");
    console.log(newValue, "index check");
    setTabValue(newValue);
  };
  const [checkboxUser, setcheckboxUser] = React.useState<any>([]);
  const [error, setError] = React.useState(false);
  const [zeroselect, setzeroselect] = React.useState(false);
  const [reasonSelection, setreasonSelection] = React.useState(false);
  const [value, setValue] = React.useState(0);
  const [users, setUsers] = useState<any>([]);
  const [filter, setFilter] = React.useState("");
  const [employee, setEmployee] = React.useState([]);
  const [enteredName, setenteredName] = useState("");
  const [checkedEmployeeid, setcheckedEmployeeid] = React.useState("");
  const [approved, setApproved] = React.useState(false);
  console.log(users, "users");
  console.log(checkedEmployeeid, "checkedempid");
  // const {data: filterData,refetch } = useGetEmployeeByStatusQuery(filter);
  const { data: employeeData, refetch } = useGetEmployeeQuery("all");
  console.log(employeeData, "hi");
  useEffect(() => {
    console.log("useeffect run");
    if (employeeData) {
      setUsers(employeeData.data);
    }
  }, [employeeData]);

  const rejectHandler = () => {
    const rejectfilter = users.filter((i: any) => {
      return i.reviewerIsChecked === true && i.reviewerIsDisabled === false;
    });

    const reviewerValue = rejectfilter.map(
      (j: any) => j.reviewer.reviewer_status
    )[0];

    console.log(rejectfilter, "filter2222");
    console.log(
      reviewerValue === "pending" || reviewerValue === "draft",
      "11111111111"
    );
    if (rejectfilter.length > 1) {
      setError(true);
    } else if (
      (rejectfilter.length === 1 && reviewerValue === "pending") ||
      reviewerValue === "draft"
    ) {
      return (
        setError(false),
        setzeroselect(false),
        handleDialogOpen(),
        setcheckedEmployeeid(() => {
          return rejectfilter.map((j: any) => j._id);
        })
      );
    } else if (rejectfilter.length === 0) {
      setzeroselect(true);
    }
    // else {
    //   //return{ rejectfilter};
    //   handleDialogOpen();
    // }
  };

  const handleSubmit = (e: any) => {
    const checkedfilter = checkboxUser
      .filter((i: any) => {
        console.log(i.isChecked, "hhhhhhhhhhhhhhhhhhhhhhhh");
        return i.isChecked === true || i.isChecked === false;
      })
      .map((j: any) => {
        return {
          value: j.value,
          isChecked: j.isChecked,
        };
      });

    console.log(checkedfilter, "ids");
    if (checkedfilter.filter((k: any) => k.isChecked === true).length === 0) {
      setreasonSelection(true);
    } else if (checkedfilter.length > 0) {
      return (
        setreasonSelection(false),
        handleDialogClose(),
        rejectReviewer({ value: checkedfilter, id: checkedEmployeeid[0] }),
        navigate(`${REVIEWER_PAGE}/employee/${checkedEmployeeid[0]}`)
      );
    }
  };
  // const handleSubmithelper = (e: any) => {
  //     const { name, checked } = e.target;
  //     console.log(checked, 'checkedddd ssubmit')
  //     // if (checked === false) {
  //     //     setreasonSelection(true)
  //     // }else{
  //     //     setreasonSelection(false)
  //     // }
  // }

  useEffect(() => {
    setcheckboxUser(userData);
  }, []);
  console.log(checkboxUser, "ccccccccccccc");
  const handlecheckbox = (e: any) => {
    const { name, checked } = e.target;
    console.log(name, " values");
    if (name === "allselect") {
      let userReason = checkboxUser.map((reasons: any) => {
        return { ...reasons, isChecked: checked };
      });
      setcheckboxUser(userReason);
    } else {
      let userReason = checkboxUser.map((reasons: any) =>
        reasons.reason === name ? { ...reasons, isChecked: checked } : reasons
      );
      setcheckboxUser(userReason);
    }
  };

  const checkboxHandler = (checkbox: any) => {
    if (checkbox) {
      const res = checkbox.filter((i: any) => {
        return i.reviewerIsChecked === true && !i.reviewerIsDisabled;
      });
      return res;
    }
  };

  /*
      Disable checkbox  if employee apraisal was approved and saved
      Filter all the emoloyee who were appraoved
      Create a state and stote the value of appraoved employees
      Then disable checkbox for the employee in the state

      */

  const checkboxIdHandler = (res: any) => {
    if (res) {
      const check = res.map((i: any) => {
        return i._id;
      });
      console.log(check, "check");
      return check;
    }
  };
  const hideAlertHandler = () => {
    setTimeout(() => {
      setApproved(false);
    }, 1000);
  };

  const approvedSuccessfully = () => {
    return(
    setApproved(true), hideAlertHandler()
    )
    
      
  };

  const handleOnCheck = (e: any) => {
    const { name, checked } = e.target;
    console.log(name, checked, "checked");
    const tempUser = users.map((j: any) => {
      console.log(j.reviewerIsChecked, "jjjjjjjjjjj");
      return j._id === name ? { ...j, reviewerIsChecked: checked } : j;
    });
    setUsers(tempUser);
    console.log(tempUser, "temp");
  };

  // const filterEmployee = (filterBy: any) => {
  //     return employeeData.filter((i: any) => {
  //         i.appraisal.status === filterBy
  //     })
  // }

  return (
    <Mytable>
      {error && (
        <Alert severity="error">
          Multiple employees cannot be rejected - select one employee.
        </Alert>
      )}
      {zeroselect && (
        <Alert severity="error">
          Atleast one employees should be selected - select one employee.
        </Alert>
      )}
     
      <Heading>My Team</Heading>
      {approved && (
      <Alert severity="success"  >
        Approved successfully.
      </Alert>
      )}
      <Stack
        spacing={2}
        direction="row"
        display="flex"
        justifyContent="end"
      //paddingLeft="340px"

      // paddingBottom="14px"
      // sx={{ position: 'absolute', marginLeft: '64%' }}
      >
        <Button
          style={{
            textTransform: "none",
            backgroundColor: "#3C8BB5",
            fontSize: "16px",
            fontFamily: "regular",
            padding: "6px 30px",
            borderRadius: "7px",
            color: "#fff",
          }}
          onClick={() => {return acceptReviewer({ id: checkboxIdHandler(checkboxHandler(users)) }),approvedSuccessfully(); }}
           
         
         // onClick={ approvedSuccessfully}
          variant="contained"
        >
          Approve
        </Button>
        <Button
          style={{
            textTransform: "none",
            backgroundColor: "#3C8BB5",
            fontSize: "16px",
            fontFamily: "regular",
            padding: "6px 30px",
            borderRadius: "7px",
            color: "#fff",
          }}
          variant="contained"
          onClick={rejectHandler}
        >
          Reject
        </Button>
        <Button
          style={{
            textTransform: "none",

            fontSize: "16px",
            fontFamily: "regular",
            padding: "6px 30px",
            borderRadius: "7px",
            color: "#3C8BB5",
          }}
          variant="outlined"
        >
          Cancel
        </Button>
      </Stack>
      <Tabstyles>
        <Tabs
          sx={{ borderBottom: 1, borderColor: "#E3E3E3", width: "100%" }}
          value={tabValue}
          onChange={handleTabChange}
          aria-label="basic tabs example"
        >
          <Tab label="All" />
          <Tab label="Completed" />
          <Tab label="In Progress" />
          <Tab label="Not Started" />
          <Tab label="Self Rating" />
          <Tab label="Rejected" />
        </Tabs>

        <Searchfeild>
          <div>
            <TextField
              id="outlined-basic"
              placeholder="Search Here..."
              onChange={(e) => setenteredName(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <img src={Searchlensreview} alt="icon" />
                  </InputAdornment>
                ),
              }}
            />
            {/* <img src={UpDown} alt='icon' style={{ marginLeft: '15px', marginTop: '5px' }} /> */}
            <img
              src={Expand}
              alt="icon"
              style={{ marginLeft: "15px", marginTop: "5px" }}
            />
            <img
              src={Newexcel}
              alt="icon"
              style={{ marginLeft: "15px", marginTop: "5px" }}
            />
          </div>
        </Searchfeild>
      </Tabstyles>

      {users &&
        users.map((objDesc: any, index: number) => {
          console.log(index, tabValue, "index");

          return (
            <TableHeadings>
              <TabPanel value={tabValue} index={index}>
                <TableContainer>
                  <Table sx={{ minWidth: 750 }} aria-label="simple table">
                    {/* <TableHead>
                                            <TableRow>
                                                <TableCell padding="checkbox" />
                                                <TableCell align="left">Employee</TableCell>
                                                <TableCell align="left" width="300px">
                                                    Position
                                                </TableCell>
                                                <TableCell align="center" width="280px">
                                                    Grade
                                                </TableCell>
                                                <TableCell align="left">Status</TableCell>
                                                <TableCell align="center">View PA</TableCell>
                                            </TableRow>
                                        </TableHead> */}

                    <EnhancedTableHead
                      numSelected={selected.length}
                      order={order}
                      orderBy={orderBy}
                      // onSelectAllClick={handleSelectAllClick}
                      onRequestSort={handleRequestSort}
                    />
                    <TableBody>
                      {employeeData &&
                        stableSort(
                          employeeData.data,
                          getComparator(order, orderBy)
                        )
                          .filter((j: any) => {
                            if (index === 0) {
                              return j;
                            } else if (index === 1) {
                              return j.appraisal.status
                                .toLocaleLowerCase()
                                .includes("completed".toLocaleLowerCase());
                            } else if (index === 2) {
                              return j.appraisal.status
                                .toLocaleLowerCase()
                                .includes("In Progress".toLocaleLowerCase());
                            } else if (index === 3) {
                              return j.appraisal.status
                                .toLocaleLowerCase()
                                .includes("Not Started".toLocaleLowerCase());
                            } else if (index === 4) {
                              return j.appraisal.status
                                .toLocaleLowerCase()
                                .includes("Self Rating".toLocaleLowerCase());
                            }
                          })
                          .filter((j: any) => {
                            if (enteredName === "") {
                              return j;
                            } else if (
                              j.name
                                .toLocaleLowerCase()
                                .includes(enteredName.toLocaleLowerCase()) ||
                              j.position
                                .toLocaleLowerCase()
                                .includes(enteredName.toLocaleLowerCase()) ||
                              j.grade
                                .toLocaleLowerCase()
                                .includes(enteredName.toLocaleLowerCase()) ||
                              j.appraisal.status
                                .toLocaleLowerCase()
                                .includes(enteredName.toLocaleLowerCase())
                            ) {
                              return employee;
                            }
                          })
                          .map((j: any) => {
                            console.log(j.appraisal.status, "index");
                            // if ( tabValue === 1){
                            //      return j
                            // }
                            return (
                              <ExpandableTableRow
                                key={j.name}
                                expandComponent={
                                  <TableCell colSpan={9}>
                                    <TableBody>
                                      {users &&
                                        users.map((j: any) => {
                                          console.log(
                                            j.appraisal.status,
                                            "index"
                                          );

                                          return (
                                            <TableRow
                                              key={j.name}
                                              sx={{ border: 0 }}
                                            >
                                              {/* <Link to={`${CREATE_APPRAISAL}/employee/${j._id}`}>
                                                                                               <TableCell component="th" scope="row">{j.name}</TableCell>
                                                                                                </Link> */}
                                              <TableCell padding="checkbox">
                                                {/* <Checkbox
                                                                                                     color="default"
                                                                                                     // checked={isItemSelected}
                                                                                                     // inputProps={{
                                                                                                     //   'aria-labelledby': labelId,
                                                                                                     // }}
                                                                                                  /> */}

                                                <input
                                                  // onChange={checkboxHandler}
                                                  name={j._id}
                                                  //checked={j?.isChecked || false}
                                                  //checked={j.reviewerIsChecked === true ? true: false}
                                                  checked={j.reviewerIsChecked}
                                                  onChange={handleOnCheck}
                                                  type="checkbox"
                                                  style={{
                                                    height: "18px",
                                                    width: "18px",
                                                    borderColor: "#D5D5D5",
                                                  }}
                                                  disabled={
                                                    j.reviewerIsDisabled
                                                  }
                                                // value={[j._id, j.name]}
                                                />
                                              </TableCell>
                                              {/* <TableCell component="th" scope="row" sx={{ width: '358px' }}> */}
                                              <TableCell
                                                component="th"
                                                scope="row"
                                                sx={{ width: "20%" }}
                                              >
                                                {/* <Link
                                                                                                    to={`${CREATE_APPRAISAL}/employee/${j._id}`}
                                                                                                // onClick={() => startAppraisal(j._id)}
                                                                                                > */}
                                                <Stack
                                                  direction="row"
                                                  alignItems="baseline"
                                                >
                                                  <Avatar>E</Avatar>
                                                  <Names>
                                                    <p
                                                      onClick={() =>
                                                        j.reviewer
                                                          .reviewer_status ==
                                                        "draft" &&
                                                        navigate(
                                                          `${REVIEWER_PAGE}/employee/${j._id} `
                                                        )
                                                      }
                                                    >
                                                      {j.name}
                                                    </p>
                                                  </Names>

                                                  {j.reviewer
                                                    .reviewer_status ===
                                                    "pending" && (
                                                      <p style={{ paddingLeft: "5px" }}> (Pending) </p>
                                                    )}
                                                  {j.reviewer
                                                    .reviewer_status ===
                                                    "draft" && <p style={{ paddingLeft: "5px" }}> (Draft) </p>}
                                                  {j.reviewer
                                                    .reviewer_status ===
                                                    "accepted" && (
                                                      <p style={{ paddingLeft: "5px" }}> (Accepted) </p>
                                                    )}
                                                  {j.reviewer
                                                    .reviewer_status ===
                                                    "rejected" && (
                                                      <p style={{ paddingLeft: "5px" }}> (Rejected) </p>
                                                    )}
                                                  {j.reviewer.reviewer_status ===
                                                      "appraiser-rejected" && (
                                                          <p style={{ paddingLeft: "8px" }}>
                                                            (Appraiser Rejected)
                                                          </p>
                                                      )}
                                                  {j.reviewer.reviewer_status ===
                                                      "appraiser-accepted" && (
                                                          <p style={{ paddingLeft: "8px" }}>
                                                            (Appraiser Accepted)
                                                          </p>
                                                      )}
                                                </Stack>
                                                {/* </Link> */}
                                              </TableCell>
                                              {/* <TableCell sx={{ width: '330px' }} align="left">{j.position}</TableCell>
                                                                                            <TableCell sx={{ width: '250px' }} align="center">{j.grade}</TableCell>
                                                                                            <TableCell sx={{ width: '250px' }} align="center">{j.appraisal.appraiser_rating}</TableCell>
                                                                                            <TableCell sx={{ width: '250px' }} align="center">{j.reviewer.reviewer_rating}</TableCell>
                                                                                            <TableCell sx={{ width: '250px' }} align="center">{j.normalizer.normalizer_rating}</TableCell>
                                                                                            <TableCell sx={{ width: '250px' }} align="left">
                                                                                                {j.appraisal.status ? (
                                                                                                    <p>{j.appraisal.status}</p>
                                                                                                ) : (
                                                                                                    <p>Not Started </p>
                                                                                                )}
                                                                                            </TableCell>
                                                                                            <TableCell sx={{ width: '165px' }} align="center">
                                                                                                <img src={Eye} alt="icon" />
                                                                                            </TableCell> */}
                                              <TableCell
                                                sx={{ width: "170px" }}
                                                align="left"
                                              >
                                                {j.position}
                                              </TableCell>
                                              <TableCell
                                                sx={{ width: "90px" }}
                                                align="center"
                                              >
                                                {j.grade}
                                              </TableCell>
                                              <TableCell
                                                sx={{ width: "160px" }}
                                                align="center"
                                              >
                                                {j.appraisal.appraiser_rating}
                                              </TableCell>
                                              <TableCell
                                                sx={{ width: "160px" }}
                                                align="center"
                                              >
                                                {j.reviewerIsDisabled ? (
                                                  j.reviewer.reviewer_rating
                                                ) : (
                                                  <p> - </p>
                                                )}
                                              </TableCell>
                                              <TableCell
                                                sx={{ width: "182px" }}
                                                align="center"
                                              >
                                                {j.normalizerIsDisabled ? (
                                                  j.normalizer.normalizer_rating
                                                ) : (
                                                  <p> - </p>
                                                )}{" "}
                                              </TableCell>
                                              <TableCell
                                                sx={{ width: "90px" }}
                                                align="left"
                                              >
                                                {j.appraisal.status ? (
                                                  <p>{j.appraisal.status}</p>
                                                ) : (
                                                  <p>Not Started </p>
                                                )}
                                              </TableCell>
                                              <TableCell
                                                sx={{ width: "90px" }}
                                                align="center"
                                              >
                                                <img src={Eye} alt="icon" />
                                              </TableCell>
                                              {/* <TableCell  align="left">{j.position}</TableCell>
                                                                                            <TableCell   align="center">{j.grade}</TableCell>
                                                                                            <TableCell   align="center">{j.appraisal.appraiser_rating}</TableCell>
                                                                                            <TableCell   align="center">{j.reviewer.reviewer_rating}</TableCell>
                                                                                            <TableCell  align="center">{j.normalizer.normalizer_rating}</TableCell>
                                                                                            <TableCell   align="left">
                                                                                                {j.appraisal.status ? (
                                                                                                    <p>{j.appraisal.status}</p>
                                                                                                ) : (
                                                                                                    <p>Not Started </p>
                                                                                                )}
                                                                                            </TableCell>
                                                                                            <TableCell align="center" >
                                                                                                <img src={Eye} alt="icon" />
                                                                                            </TableCell> */}
                                            </TableRow>
                                          );
                                        })}
                                    </TableBody>
                                  </TableCell>
                                }
                              >
                                <TableCell style={{ width: "23%" }} component="th" scope="row">
                                  {/* <Link
                                                                        to={`${CREATE_APPRAISAL}/employee/${j._id}`}
                                                                    // onClick={() => startAppraisal(j._id)}
                                                                    > */}
                                  <Stack direction="row">
                                    <Avatar>H</Avatar>
                                    <Names> {j.name}</Names>
                                  </Stack>
                                  {/* </Link> */}
                                </TableCell>
                                <TableCell align="left">{j.position}</TableCell>

                                <TableCell align="center">{j.grade}</TableCell>
                                <TableCell align="center">
                                  {j.appraisal.appraiser_rating}
                                </TableCell>
                                <TableCell align="center">
                                  {j.reviewerIsDisabled ? (
                                    j.reviewer.reviewer_rating
                                  ) : (
                                    <p> - </p>
                                  )}
                                  {/*{j.reviewer.reviewer_rating}*/}
                                </TableCell>
                                <TableCell align="center">
                                  {j.normalizerIsDisabled ? (
                                    j.reviewer.reviewer_rating
                                  ) : (
                                    <p> - </p>
                                  )}
                                  {/*{j.normalizer.normalizer_rating}*/}
                                </TableCell>
                                <TableCell align="left">
                                  {j.appraisal.status ? (
                                    <p>{j.appraisal.status}</p>
                                  ) : (
                                    <p>Not Started </p>
                                  )}
                                </TableCell>
                                <TableCell align="center">
                                  <img src={Eye} alt="icon" />
                                </TableCell>
                              </ExpandableTableRow>
                            );
                          })}
                    </TableBody>
                  </Table>
                </TableContainer>
              </TabPanel>
            </TableHeadings>
          );
        })}
      <Dialog
        style={{
          marginTop: "110px",
          height: "calc(100vh - 250px)",
        }}
        fullWidth
        maxWidth="md"
        open={opendialog}
        // onClose={handleDialogClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle
          style={{
            fontFamily: "regular",
            backgroundColor: "#EBF1F5",
            color: "#004C75",
            fontSize: "18px",
            padding: "0px 20px",
            justifyContent: "space-between",
            alignItems: "center",
            display: "flex",
          }}
          id="alert-dialog-title"
        >
          {"Rejection"}
          <p
            style={{
              display: "flex",
              float: "right",
              alignItems: "center",
            }}
          >
            <img
              width={18}
              height={18}
              src={Closeicon}
              onClick={handleDialogClose}
            />
          </p>
        </DialogTitle>
        {reasonSelection && (
          <Alert severity="error">
            Atleast one employees should be selected - select one employee.
          </Alert>
        )}
        <DialogContent style={{ marginTop: "30px" }}>
          <DialogContentText
            style={{
              // marginTop: "100px",
              // marginLeft: "270px",
              fontSize: "14px",
              color: "#333333",
              fontFamily: "regular",
              textAlign: "center",
            }}
            id="alert-dialog-description"
          >
            Please select rejection reason(s)
            <div style={{ textAlign: "center", marginLeft: "37%" }}>
              <Stack sx={{ textAlign: "left", marginTop: "15px" }} spacing={1}>
                <div>
                  <input
                    type="checkbox"
                    name="allselect"
                    onChange={handlecheckbox}
                    checked={
                      checkboxUser.filter(
                        (reasons: any) => reasons?.isChecked !== true
                      ).length < 1
                    }
                  />
                  <label style={{ color: "#1976d2" }}>Select all</label>
                </div>
                {checkboxUser.map((reasons: any) => (
                  <div>
                    <input
                      type="checkbox"
                      name={reasons.reason}
                      checked={reasons?.isChecked || false}
                      onChange={handlecheckbox}
                    />
                    <label>{reasons.reason}</label>
                  </div>
                ))}
              </Stack>
            </div>
          </DialogContentText>
        </DialogContent>
        <DialogActions
          style={{
            paddingBottom: "15px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Button
            style={{
              width: "92px",
              height: "35px",
              textTransform: "none",
              backgroundColor: "#004D77",
              fontSize: "15px",
              padding: "4px 22px",
              color: "#FFFFFF",
              fontFamily: "regular",
              borderRadius: "5px",
            }}
            onClick={(e) => {
              handleSubmit(e);
            }}
            autoFocus
          >
            Submit
          </Button>
          {/*<Button*/}
          {/*    style={{*/}
          {/*        width: "92px",*/}
          {/*        height: "35px",*/}
          {/*        textTransform: "none",*/}
          {/*        fontSize: "15px",*/}
          {/*        fontFamily: "regular",*/}
          {/*        color: "#1976d2",*/}
          {/*        opacity: "80%",*/}
          {/*        padding: "4px 22px",*/}
          {/*        border: "1px solid #1976d2",*/}
          {/*        borderRadius: "5px",*/}
          {/*    }}*/}
          {/*    onClick={handleDialogNo}*/}
          {/*>*/}
          {/*    Cancel*/}
          {/*</Button>*/}
        </DialogActions>
      </Dialog>
    </Mytable>
  );
};
export default MyTeam;
