import * as React from "react";
import { useState, useRef } from "react";
import { useEffect } from "react";
import Container from "@mui/material/Container";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Button from "@mui/material/Button";
import { Paper, TablePagination } from "@mui/material";
import { useGetEmployeeQuery } from "../../service/";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Checkbox from "@mui/material/Checkbox";
import _ from "lodash";
import InputAdornment from "@mui/material/InputAdornment";
import Searchicon from "../../assets/Images/Searchicon.svg";
import { TextField } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Alert } from "@mui/material";

const Searchfeild = styled("div")({
  // marginLeft: "auto",
  // marginRight: "8px",
  marginTop: "8px",
  "& .MuiOutlinedInput-root": {
    height: "38px",
    width: "174px",
    borderRadius: "25px",
    background: "#F2F6F8",
    // border:'2px solid white'
  },
  "& .MuiInputLabel-root": {
    fontSize: "12px",
    color: "#D5D5D5",
    marginTop: "-10px",
  },
  "& .MuiOutlinedInput-input": {
    fontSize: "12px",
    color: "#333333",
    opacity: "70%"
  },
});

const Position = (props: any) => {
  const { onSubmitP, tab, setTabs, singleTemplateData, isSuccessPosition } = props;
  const { data, isLoading, error } = useGetEmployeeQuery("all");
  console.log(data);

  const [grade, setGrade] = React.useState("");
  const [division, setDivision] = React.useState("");
  const [section, setSection] = React.useState("");
  const [position, setPosition] = React.useState("");

  const [employee, setEmployee] = React.useState("");
  // React.useEffect(() => {
  //   setEmployee(data)
  // })

  const [users, setUsers] = useState<any>([]);
  const [templateData, setTemplateData] = useState<any>([]);
  const [save1, setSave1] = useState(isSuccessPosition)
  const [errors, setErrors] = useState(false)
  const [hideAlert, setHideAlert] = useState(false)
  const [enteredName, setenteredName] = useState("")


  console.log(users, "checked user");

  useEffect(() => {
    if (singleTemplateData) {
      setTemplateData(() => {
        return singleTemplateData.template.position.map((item: any) => {
          return {
            ...item.name,
            isChecked: item.isChecked,
          };
        });
      });
    }
  }, [data, singleTemplateData]);

  useEffect(() => {
    console.log("useeffect run");

    if (data) {
      setUsers((prev: any) => {
        const newArr = [...templateData, ...data.data];
        const newA = _.uniqBy(newArr, "_id");
        console.log(singleTemplateData.template.position, "new");
        return newA;
      });
    }
  }, [data, templateData]);

  useEffect(() => {
    console.log("useeffect run");
    if (data) {
      setUsers(data.data);
    }
  }, [data]);

  const handleOnCheck = (e: any) => {
    const { name, checked } = e.target;
    

    if (name === "allSelect") {
      const tempUser = users.map((employee: any) => {
        return { ...employee, isChecked: checked };
      });
      setUsers(tempUser);
    } else {
      const tempUser = users.map((employee: any) => {
        return employee._id === name
          ? { ...employee, isChecked: checked }
          : employee;
      });
      setUsers(tempUser);
      console.log(tempUser, "temp");
      
    }
  };
  console.log(employee, "temp");


  const checkboxHandler = (checkbox: any) => {
    if (checkbox) {
      const res = checkbox.filter((i: any) => {
        return i.isChecked === true;
      });
      return res;
    }
  };

  const checkboxIdHandler = (res: any[]) => {
    if (res) {
      const check = res.map((i: any) => {
        return {
          name: i._id,
          isChecked: i.isChecked,
        };
      });
      return check;
    }
  };

  useEffect(() => {
    //@ts-ignore
    // console.log(checkboxIdHandler(checkboxHandler(users)));
  }, [users]);

  const handleChange = (event: SelectChangeEvent) => {
    setGrade(event.target.value as string);
    setDivision(event.target.value as string);
    setSection(event.target.value as string);
    setPosition(event.target.value as string);
  };
  const [page, setPage] = React.useState(1);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const hideAlertHandler = () => {
    setTimeout(() => {
      setHideAlert(false)
    }, 3000)
  }

  const selectOneError = (i: any) => {

    if (i && i.length === 0) {
      setErrors(true)
      setSave1(false)

    } else if (i && i.length > 0) {
      setErrors(false);
      setSave1(true)
      setHideAlert(true)
      hideAlertHandler()
      // setTabs(tab + 1);
      console.log(error, 'save')
    }
    else {
      setSave1(false)

    }
    console.log(i, 'setSelectedUser')
  }

  // useEffect(() => {
  //   if (isSuccessPosition) {
  //     setHideAlert(true)
  //     hideAlertHandler()
  //   }
  // }, [isSuccessPosition])

  // console.log()

  


  return (
    <>
      <div style={{}}>
        {(errors) && (<Alert severity="error">Select atleast 1 Other Recommendation!</Alert>)}
        {(hideAlert && save1) && (<Alert severity="info">Saved as a draft</Alert>)}


        <FormControl variant="standard" sx={{ m: 1, minWidth: 50 }}>
          <Button style={{ padding: "7px 5px" }} variant="outlined">
            All
          </Button>
        </FormControl>

        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
          <InputLabel
            style={{ top: "-10px", paddingLeft: "18px" }}
            id="demo-simple-select-standard-label"
          >
            Grade
          </InputLabel>
          <Select
            label="Grade"
            value={grade}
            onChange={handleChange}
            variant="outlined"
            size="small"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>

        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
          <InputLabel
            style={{ top: "-10px", paddingLeft: "18px" }}
            id="demo-simple-select-standard-label"
          >
            Division
          </InputLabel>
          <Select
            value={division}
            onChange={handleChange}
            label="Division"
            variant="outlined"
            size="small"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>

        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
          <InputLabel
            style={{ top: "-10px", paddingLeft: "18px" }}
            id="demo-simple-select-standard-label"
          >
            Section
          </InputLabel>
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            value={section}
            onChange={handleChange}
            label="Section"
            variant="outlined"
            size="small"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>

        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
          <InputLabel
            style={{ top: "-10px", paddingLeft: "18px" }}
            id="demo-simple-select-standard-label"
          >
            Position
          </InputLabel>
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            value={position}
            onChange={handleChange}
            label="Position"
            variant="outlined"
            size="small"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
        <div style={{ float: "right" }}>
          <Searchfeild>
            <TextField
              id="outlined-basic"
              // value={"Search Here"}
              placeholder="Search Here..."

              // value={setsearchTerm}
              onChange={(e) => setenteredName(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <img src={Searchicon} alt="icon" />
                  </InputAdornment>
                ),
              }}
            />
          </Searchfeild>
        </div>
        {/*<FormControl variant="standard" sx={{m: 1, minWidth: 100}}>*/}
        {/*    <InputLabel htmlFor="input-with-icon-adornment">*/}
        {/*        Search Here*/}
        {/*    </InputLabel>*/}
        {/*    <Input*/}
        {/*        id="input-with-icon-adornment"*/}
        {/*        endAdornment={*/}
        {/*            <InputAdornment position="end">*/}
        {/*                <SearchIcon/>*/}
        {/*            </InputAdornment>*/}
        {/*        }*/}
        {/*    />*/}
        {/*</FormControl>*/}
      </div>

      <div>
        {isLoading ? (
          <p> Loading</p>
        ) : (
          <>
            <>
              <TableContainer
              // sx={{
              //  height:"300px",
              //  overflow: "hidden",
              // }}
              >
                <Table
                  sx={{
                    minWidth: 650,
                  }}
                  size="small"
                  aria-label="simple table"
                >
                  <TableHead>
                    <TableRow sx={{ bgcolor: "#F7F9FB" }}>
                      <TableCell
                        align="center"
                        style={{ color: "#368DC5" }}
                        sx={{ padding: 1 }}
                      >
                        <input
                          name="allSelect"
                          checked={
                            users &&
                            users.filter(
                              (employee: any) => employee.isChecked !== true
                            ).length < 1
                          }
                          onChange={handleOnCheck}
                          type="checkbox"
                          style={{ height: "18px", width: "18px" }}
                        />
                      </TableCell>
                      <TableCell
                        align="left"
                        sx={{ padding: 1, color: "#014D76", fontSize: "13px" }}
                      >
                        Employee Name
                      </TableCell>
                      <TableCell
                        align="left"
                        style={{ color: "#014D76", fontSize: "13px" }}
                      >
                        Employee Code
                      </TableCell>
                      <TableCell
                        align="left"
                        style={{ color: "#014D76", fontSize: "13px" }}
                      >
                        Section
                      </TableCell>
                      <TableCell
                        align="left"
                        style={{ color: "#014D76", fontSize: "13px" }}
                      >
                        Position
                      </TableCell>
                      <TableCell
                        align="left"
                        style={{ color: "#014D76", fontSize: "13px" }}
                      >
                        Grade
                      </TableCell>
                      <TableCell
                        align="left"
                        style={{ color: "#014D76", fontSize: "13px" }}
                      >
                        Line Manager
                      </TableCell>
                      <TableCell
                        align="left"
                        style={{ color: "#014D76", fontSize: "13px" }}
                      >
                        Line Manager 1
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {users
                      // .slice(
                      //     page * rowsPerPage,
                      //     page * rowsPerPage + rowsPerPage
                      // )
                      .filter((employee: any) => {

                        if (enteredName === "") {
                          return employee
                        } else if ( employee.name.toLocaleLowerCase().includes(
                          enteredName.toLocaleLowerCase()
                        ) ||
                        employee.employeeCode.toLocaleLowerCase().includes(
                          enteredName.toLocaleLowerCase()
                        ) ||
                        employee.section.toLocaleLowerCase().includes(
                          enteredName.toLocaleLowerCase()
                        )||
                        employee.position.toLocaleLowerCase().includes(
                          enteredName.toLocaleLowerCase()
                        )||
                        employee.grade.toLocaleLowerCase().includes(
                          enteredName.toLocaleLowerCase()
                        )||
                        employee.line_manager_1.toLocaleLowerCase().includes(
                          enteredName.toLocaleLowerCase()
                        )||
                        employee.line_manager_2.toLocaleLowerCase().includes(
                          enteredName.toLocaleLowerCase()
                        )
                        
                        ) {
                          return employee
                        } 
                      }

                      )
                      .map((employee: any) => {
                        return (
                          //   {data.data.map((employee: any) => (
                          <TableRow
                            hover
                            role="checkbox"
                            tabIndex={-1}
                            key={employee.name}
                            sx={{
                              "&:last-child td, &:last-child th": {
                                border: 0,
                              },
                            }}
                          >
                            <TableCell
                              align="left"
                              style={{ color: "#368DC5" }}
                              padding="checkbox"
                            >
                              <input
                                name={employee._id}
                                checked={employee?.isChecked || false}
                                onChange={handleOnCheck}
                                type="checkbox"
                                style={{
                                  height: "18px",
                                  width: "18px",
                                  borderColor: "#D5D5D5",
                                }}
                              />
                            </TableCell>
                            <TableCell
                              style={{
                                color: "#7A7A7A",
                                fontSize: "13px",
                                padding: "14px",
                              }}
                              align="left"
                            >
                              {employee.name}
                            </TableCell>
                            <TableCell
                              style={{ color: "#7A7A7A", fontSize: "13px" }}
                              align="left"
                            >
                              {employee.employeeCode}
                            </TableCell>
                            <TableCell
                              style={{ color: "#7A7A7A", fontSize: "13px" }}
                              align="left"
                            >
                              {employee.section}
                            </TableCell>
                            <TableCell
                              style={{ color: "#7A7A7A", fontSize: "13px" }}
                              align="left"
                            >
                              {employee.position}
                            </TableCell>
                            <TableCell
                              style={{ color: "#7A7A7A", fontSize: "13px" }}
                              align="left"
                            >
                              {employee.grade}
                            </TableCell>
                            <TableCell
                              style={{ color: "#7A7A7A", fontSize: "13px" }}
                              align="left"
                            >
                              {employee.line_manager_1}
                            </TableCell>
                            <TableCell
                              style={{ color: "#7A7A7A", fontSize: "13px" }}
                              align="left"
                            >
                              {employee.line_manager_2}
                            </TableCell>
                          </TableRow>
                        );
                      })}
                  </TableBody>
                </Table>

                {/*<TablePagination*/}
                {/*    rowsPerPageOptions={[5, 10, 25, 50]}*/}
                {/*    component="div"*/}
                {/*    count={50}*/}
                {/*    page={page}*/}
                {/*    onPageChange={handleChangePage}*/}
                {/*    rowsPerPage={rowsPerPage}*/}
                {/*    onRowsPerPageChange={handleChangeRowsPerPage}*/}
                {/*/>*/}
              </TableContainer>
            </>
          </>
        )}
      </div>
      <div
        style={{ display: "flex", justifyContent: "left", marginTop: "80px" }}
      >
        <Button
          style={{
            textTransform: "none",
            backgroundColor: "#014D76",
            fontSize: "16px",
            fontFamily: "sans-serif",
            padding: "4px 19px",
          }}
          variant="contained"
          onClick={() => {
            selectOneError(checkboxIdHandler(checkboxHandler(users)));
            onSubmitP({
              position: checkboxIdHandler(checkboxHandler(users)),
            });

          }}
        >
          Save as Draft
        </Button>
      </div>
    </>
  );
};

export default Position;
