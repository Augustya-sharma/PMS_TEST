import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import EditTwoTone from "@mui/icons-material/EditTwoTone";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import { Container } from "@mui/material";
import Link from "@mui/material/Link";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Stack from "@mui/material/Stack";

function createData(
  number: number,
  EmployeeName: any,
  EmployeeEmail: any,
  Department: any,
  Division: any,
  Grade: any,
  Dateofjoining: any,
  action: any
) {
  return {
    number,
    EmployeeName,
    EmployeeEmail,
    Department,
    Division,
    Grade,
    Dateofjoining,
    action,
  };
}

const rows = [
  createData(
    1,
    "Zubair Rahman",
    "abcd@taqeef.com",
    "Sales",
    "Business Development",
    "Grade 12",
    "15-Jan-2017",
    <>
      <IconButton>
        <EditTwoTone fontSize="small" />
      </IconButton>

      <IconButton>
        <CancelOutlinedIcon fontSize="small" />
      </IconButton>
    </>
  ),
  createData(
    2,
    "Ayesha",
    "abcd@taqeef.com",
    "Sales",
    "Retail",
    "Grade 13",
    "18-Jan-2018",
    <>
      <IconButton>
        <EditTwoTone fontSize="small" />
      </IconButton>

      <IconButton>
        <CancelOutlinedIcon fontSize="small" />
      </IconButton>
    </>
  ),

  createData(
    3,
    "Nujoom AlGhanem",
    "abcd@taqeef.com",
    "Sales",
    "Sales Planning",
    "Grade 14",
    "20-Jan-2018",
    <>
      <IconButton>
        <EditTwoTone fontSize="small" />
      </IconButton>

      <IconButton>
        <CancelOutlinedIcon fontSize="small" />
      </IconButton>
    </>
  ),
  createData(
    4,
    "Ali Rahid Lootah",
    "abcd@taqeef.com",
    "Sales",
    "Retail",
    "Grade 15",
    "18-Apr-2014",
    <>
      <IconButton>
        <EditTwoTone fontSize="small" />
      </IconButton>

      <IconButton>
        <CancelOutlinedIcon fontSize="small" />
      </IconButton>
    </>
  ),
  createData(
    5,
    " Suhail Galadari",
    "abcd@taqeef.com",
    "Sales",
    "Sales Planning ",
    "Grade 16",
    "18-Mar-2018",
    <>
      <IconButton>
        <EditTwoTone fontSize="small" />
      </IconButton>

      <IconButton>
        <CancelOutlinedIcon fontSize="small" />
      </IconButton>
    </>
  ),
];

export default function Employeelisttable() {
  return (
    <>
      {" "}
      <TableContainer component={Paper} sx={{ marginTop: 6 }}>
        <h3 style={{ color: "#368DC5" }}>Employee List</h3>

        <FormControl sx={{ m: 2, width: 65, mt: 2 }}>
          <InputLabel id="label" variant="outlined">
            All
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="All"
          >
            <MenuItem value={10}>1</MenuItem>
            <MenuItem value={20}>2</MenuItem>
            <MenuItem value={30}>3</MenuItem>
            <MenuItem value={30}>4</MenuItem>
            <MenuItem value={30}>5</MenuItem>
          </Select>
        </FormControl>

        <FormControl sx={{ m: 2, width: 100, mt: 2 }}>
          <InputLabel id="label" variant="outlined">
            Grade
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Grade"
          >
            <MenuItem value={10}>Grade 12</MenuItem>
            <MenuItem value={20}>Grade 13</MenuItem>
            <MenuItem value={30}>Grade 14</MenuItem>
            <MenuItem value={30}>Grade 15</MenuItem>
            <MenuItem value={30}>Grade 16</MenuItem>
          </Select>
        </FormControl>

        <FormControl sx={{ m: 2, width: 150, mt: 2 }}>
          <InputLabel id="label" variant="outlined">
            Department
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Department"
            placeholder="Select"
          >
            <MenuItem value={10}> Business Development</MenuItem>
            <MenuItem value={20}> Retail</MenuItem>
            <MenuItem value={30}> Sales Planning</MenuItem>
          </Select>
        </FormControl>

        <Table sx={{ minWidth: 650 }} size="small" aria-label="simple table">
          <TableHead>
            <TableRow sx={{ bgcolor: "#ebf2f4" }}>
              <TableCell
                sx={{
                  border: 1,
                  borderColor: "lightgrey",
                  color: "#005477",
                  fontSize: "13px",
                }}
              >
                #
              </TableCell>
              <TableCell
                align="left"
                sx={{
                  border: 1,
                  borderColor: "lightgrey",
                  color: "#005477",
                  fontSize: "13px",
                }}
              >
                Employee Name
              </TableCell>
              <TableCell
                align="left"
                sx={{
                  border: 1,
                  borderColor: "lightgrey",
                  color: "#005477",
                  fontSize: "13px",
                }}
              >
                Employee Email
              </TableCell>
              <TableCell
                align="left"
                sx={{
                  border: 1,
                  borderColor: "lightgrey",
                  color: "#005477",
                  fontSize: "13px",
                }}
              >
                Department
              </TableCell>
              <TableCell
                align="left"
                sx={{
                  border: 1,
                  borderColor: "lightgrey",
                  color: "#005477",
                  fontSize: "13px",
                }}
              >
                Division
              </TableCell>
              <TableCell
                align="left"
                sx={{
                  border: 1,
                  borderColor: "lightgrey",
                  color: "#005477",
                  fontSize: "13px",
                }}
              >
                Grade
              </TableCell>
              <TableCell
                align="left"
                sx={{
                  border: 1,
                  borderColor: "lightgrey",
                  color: "#005477",
                  fontSize: "13px",
                }}
              >
                Date of joining
              </TableCell>
              <TableCell
                align="left"
                sx={{
                  border: 1,
                  borderColor: "lightgrey",
                  color: "#005477",
                  fontSize: "13px",
                }}
              >
                Action
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.number}
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
                  sx={{ border: 1, borderColor: "lightgrey" }}
                >
                  {row.number}{" "}
                </TableCell>
                <TableCell
                  align="left"
                  width={250}
                  sx={{ border: 1, padding: 1, borderColor: "lightgrey" }}
                >
                  {row.EmployeeName}
                </TableCell>
                <TableCell
                  align="left"
                  width={250}
                  sx={{ border: 1, padding: 1, borderColor: "lightgrey" }}
                >
                  {row.EmployeeEmail}
                </TableCell>
                <TableCell
                  align="left"
                  width={150}
                  sx={{ border: 1, padding: 1, borderColor: "lightgrey" }}
                >
                  {row.Department}
                </TableCell>
                <TableCell
                  align="left"
                  width={200}
                  sx={{ border: 1, padding: 1, borderColor: "lightgrey" }}
                >
                  {row.Division}
                </TableCell>
                <TableCell
                  align="left"
                  width={200}
                  sx={{ border: 1, padding: 1, borderColor: "lightgrey" }}
                >
                  {row.Grade}
                </TableCell>
                <TableCell
                  align="left"
                  width={200}
                  sx={{ border: 1, padding: 1, borderColor: "lightgrey" }}
                >
                  {row.Dateofjoining}
                </TableCell>
                <TableCell
                  align="left"
                  width={130}
                  sx={{ border: 1, padding: 1, borderColor: "lightgrey" }}
                >
                  {row.action}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
