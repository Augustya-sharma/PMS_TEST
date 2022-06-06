import * as React from "react";
import {useState} from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import PauseIcon from "@mui/icons-material/Pause";
import EditIcon from "@mui/icons-material/Edit";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, {SelectChangeEvent} from "@mui/material/Select";
import Stack from "@mui/material/Stack";
import {Container, Icon, IconButton, TextField} from "@mui/material";
import {PAMaster} from "../index";
import {AlertDialog} from "..";
import dayjs from "dayjs";
import Close from "../../assets/Images/Close.svg";
import Edit from "../../assets/Images/Edit.svg";
import Tooltip from "@mui/material/Tooltip";
import Pause from "../../assets/Images/Pause.svg";
import Copy from "../../assets/Images/Copy.svg";
import Play from "../../assets/Images/Play.svg";
import {Scrollbar} from "react-scrollbars-custom";
import Rectangle834 from "../../assets/Images/Rectangle834.svg";
import {Button} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {CREATE_MAPPING} from "../../constants/routes/Routing";

function createData(
    number: number,
    appraisal: string,
    date: string,
    action: any
) {
    return {number, appraisal, date, action};
}

const rows = [
    createData(
        1,
        "G12 2021 mid year performance appraisal",
        "20 /9 /21",
        <>
            {" "}
            <ContentCopyIcon/> <PlayArrowIcon/> <PauseIcon/> <EditIcon/>{" "}
            <CancelOutlinedIcon/>{" "}
        </>
    ),
    createData(
        2,
        "G12 2021 mid year performance appraisal",
        "20 /8 /21",
        <>
            {" "}
            <ContentCopyIcon/> <PlayArrowIcon/> <PauseIcon/> <EditIcon/>{" "}
            <CancelOutlinedIcon/>{" "}
        </>
    ),
];

export default function CreateCalender(props: any) {
    const {data, onDelete, start,onPause} = props;

    const [year, setYear] = React.useState("");
    const [yearNumber, setYearNumber] = React.useState("");
    const [open, setOpen] = useState(false);
    const [newId, setNewId] = useState("");
    const [newName, setNewName] = useState("");
    const [activeStatus, setActiveStatus] = useState(false)

    const navigate = useNavigate();

    const handleChange = (event: SelectChangeEvent) => {
        setYear(event.target.value as string);
    };
    const handleClickOpen = (id: string, nameAlert: string) => {
        setOpen(true);
        setNewId(id);
        setNewName(nameAlert);
        //console.log(newId)
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
            <PAMaster name={"Appraisal Calendar"}/>
            <Container
                sx={{
                    maxWidth: "96% !important",
                    width: "100%",
                    height: "calc(100vh - 165px)",
                    // boxShadow: "2px 4px 6px 4px rgba(0, 0, 0, 0.2)",
                    background: "#fff",
                }}
                maxWidth="lg"
            >
                <Stack direction="row" borderBottom="1px solid #e0e0e0" spacing={3}>
                    <h2
                        style={{
                            color: "#004C75",
                            fontSize: "18px",
                            fontWeight: "500",
                            paddingTop: "10px",
                        }}
                    >
                        {" "}
                        Appraisal Calendar lists
                    </h2>

                    {/*<Box*/}
                    {/*    sx={{*/}
                    {/*        display: "flex",*/}
                    {/*        justifyContent: "space-between",*/}
                    {/*        width: "200px",*/}
                    {/*    }}*/}
                    {/*>*/}
                    {/*    <TextField*/}
                    {/*        id="outlined-basic"*/}
                    {/*        variant="outlined"*/}
                    {/*        sx={{ width: "300px" }}*/}
                    {/*        value={yearNumber}*/}
                    {/*        label="2022"*/}
                    {/*        onChange={(e) => setYearNumber(e.target.value)}*/}
                    {/*    />*/}
                    {/*    <FormControl sx={{ width: "300px" }}>*/}
                    {/*        <InputLabel id="demo-simple-select-label">Mid Year</InputLabel>*/}
                    {/*        <Select*/}
                    {/*            labelId="demo-simple-select-label"*/}
                    {/*            id="demo-simple-select"*/}
                    {/*            value={year}*/}
                    {/*            label="Enter Rating"*/}
                    {/*            onChange={handleChange}*/}
                    {/*        >*/}
                    {/*            <MenuItem value={1}>Mid year</MenuItem>*/}
                    {/*            <MenuItem value={2}>Quarter Year </MenuItem>*/}
                    {/*            <MenuItem value={3}>End Year</MenuItem>*/}
                    {/*        </Select>*/}
                    {/*    </FormControl>*/}
                    {/*</Box>*/}
                </Stack>

                <TableContainer>
                    <Scrollbar style={{width: "100%", height: "calc(100vh - 250px)"}}>
                        <Table
                            sx={{minWidth: 650, marginTop: "15px"}}
                            size="small"
                            aria-label="simple table"
                        >
                            <TableHead>
                                <TableRow sx={{bgcolor: "#F7F9FB"}}>
                                    <TableCell
                                        align="center"
                                        sx={{
                                            fontFamily: "regular",
                                            borderColor: "#F7F9FB",
                                            color: "#004C75",
                                            fontSize: "14px",
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
                                            fontSize: "14px",
                                        }}
                                    >
                                        {" "}
                                        Performance Appraisal Forms
                                    </TableCell>
                                    <TableCell
                                        align="left"
                                        sx={{
                                            fontFamily: "regular",
                                            borderColor: "#F7F9FB",
                                            color: "#004C75",
                                            fontSize: "14px",
                                            width: "490px",
                                        }}
                                    >
                                        Last Modified Date
                                    </TableCell>
                                    <TableCell
                                        align="center"
                                        sx={{
                                            fontFamily: "regular",
                                            borderColor: "#F7F9FB",
                                            color: "#004C75",
                                            fontSize: "14px",
                                        }}
                                    >
                                        Action
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {data &&
                                    data.data.map((row: any, index: number) => (
                                        <TableRow
                                            key={row.name}
                                            sx={{
                                                "&:last-child td, &:last-child th": {
                                                    borderColor: "lightgrey",
                                                },
                                            }}
                                        >
                                            <TableCell
                                                sx={{
                                                    fontSize: "14px",
                                                    color: "#333333",
                                                    opacity: "100%",
                                                }}
                                                component="th"
                                                scope="row"
                                                align="center"
                                            >
                                                {index + 1}
                                            </TableCell>
                                            <TableCell
                                                align="left"
                                                sx={{
                                                    fontFamily: "regular",
                                                    fontSize: "14px",
                                                    color: "#333333",
                                                    opacity: "80%",
                                                }}
                                            >
                                                {row.name}{" "}
                                                {row.status === 'active' && (
                                                    <Button
                                                        size="small"
                                                        variant="outlined"
                                                        style={{
                                                            backgroundColor: "#008E97",
                                                            borderRadius: "12px",
                                                            paddingLeft: "8px",
                                                            padding: "0.1px 0.3px",
                                                            color: "#fff",
                                                            textTransform: "none",

                                                        }}
                                                    >
                                                        Live
                                                    </Button>
                                                )}
                                                {/* <Button
                          style={{
                            borderRadius: "12px",
                            textTransform: "none",
                            backgroundColor: "#004D77",
                            fontSize: "10px",
                            padding: "0.3px 2px",
                          }}
                          variant="contained"
                         
                        >
                          Live
                        </Button> */}
                                            </TableCell>
                                            <TableCell
                                                align="left"
                                                sx={{
                                                    fontFamily: "regular",
                                                    fontSize: "14px",
                                                    color: "#333333",
                                                    opacity: "80%",
                                                }}
                                            >
                                                {/* {row.updatedAt} */}
                                                {dayjs(row.updatedAt).format("DD/MM/YYYY")}
                                            </TableCell>
                                            <TableCell
                                                align="center"
                                                sx={{
                                                    fontFamily: "regular",
                                                    fontSize: "14px",
                                                    color: "#333333",
                                                }}
                                            >
                                                <Tooltip title="Copy">
                                                    <IconButton aria-label="Copy">
                                                        <img src={Copy} alt="icon"/>
                                                    </IconButton>
                                                </Tooltip>

                                                <Tooltip title="Launch">
                                                    <IconButton onClick={() => {
                                                        start(row._id);
                                                        setActiveStatus(true);

                                                    }}>
                                                        <img src={Play} alt="icon"/>
                                                    </IconButton>

                                                </Tooltip>

                                                <Tooltip title="Pause">
                                                    <IconButton aria-label="Pause" onClick={() => onPause(row._id)}>
                                                        <img src={Pause} alt="icon"/>
                                                    </IconButton>
                                                </Tooltip>

                                                <Tooltip title="Edit">

                                                    <IconButton aria-label="EditIcon"
                                                                onClick={() => navigate(`${CREATE_MAPPING}/${row.template._id}`)}>
                                                        <img src={Edit} alt="icon"/>
                                                    </IconButton>
                                                </Tooltip>

                                                <Tooltip title="Delete">
                                                    <IconButton
                                                        disabled={row.status === "active"}
                                                        aria-label="CancelOutlinedIcon "
                                                        onClick={() => handleClickOpen(row._id, row.name)}
                                                    >
                                                        <img src={Close} alt="icon"/>
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
                                            </TableCell>
                                        </TableRow>
                                    ))}
                            </TableBody>
                        </Table>
                    </Scrollbar>
                </TableContainer>
            </Container>
        </>
    );
}
